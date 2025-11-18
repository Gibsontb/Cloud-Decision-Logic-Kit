// Cloud AI & ML services reference
// This file is modular: attach to window.CDK.providers.*
// You can extend each serviceCategories object with more categories from the Master Reference.

window.CDK = window.CDK || {};
window.CDK.providers = window.CDK.providers || {};

window.CDK.providers.aws = {
  id: "aws",
  displayName: "Amazon Web Services (AWS)",
  serviceCategories: {
    "ai-ml": {
      label: "AI & Machine Learning",
      services: [
        { id: "ai-containers",    category: "AI CONTAINERS",                  name: "Deep Learning Containers" },
        { id: "ai-assistant",     category: "AI-POWERED ASSISTANT",           name: "Amazon Q" },
        { id: "human-review",     category: "HUMAN REVIEW/MODERATION",        name: "Amazon Augmented AI (A2I)" },
        { id: "chatbots",         category: "CHATBOT BUILDER",                name: "Amazon Lex" },
        { id: "data-labeling",    category: "DATA LABELING",                  name: "SageMaker Ground Truth" },
        { id: "doc-extract",      category: "DOCUMENT EXTRACTION",            name: "Amazon Textract" },
        { id: "genai-platform",   category: "GENERATIVE AI PLATFORMS",        name: "Amazon Bedrock" },
        { id: "image-recognition",category: "IMAGE RECOGNITION",              name: "Amazon Rekognition" },
        { id: "inference-accel",  category: "INFERENCE ACCELERATION",         name: "AWS Inferentia, Elastic Inference" },
        { id: "translation",      category: "LANGUAGE TRANSLATION",           name: "Amazon Translate" },
        { id: "ml-chips",         category: "ML/AI CHIPS",                    name: "Inferentia, Trainium" },
        { id: "managed-ml",       category: "MANAGED ML PLATFORM",            name: "Amazon SageMaker" },
        { id: "notebooks",        category: "NOTEBOOKS",                      name: "EMR Notebooks" },
        { id: "fraud-detect",     category: "ONLINE FRAUD DETECTION",         name: "Amazon Fraud Detector" },
        { id: "preconfig-ml-vms", category: "PRECONFIGURED ML VMS",           name: "Deep Learning AMIs" },
        { id: "reco-engine",      category: "RECOMMENDATION ENGINE",          name: "Amazon Personalize" },
        { id: "speech",           category: "SPEECH RECOGNITION/SYNTHESIS",   name: "Amazon Transcribe, Amazon Polly" },
        { id: "text-analysis",    category: "TEXT ANALYSIS",                  name: "Amazon Comprehend" },
        { id: "ts-forecast",      category: "TIME-SERIES FORECASTING",        name: "Amazon Forecast" },
        { id: "video-analysis",   category: "VIDEO ANALYSIS",                 name: "Rekognition Video" },
        { id: "visual-inspection",category: "VISUAL INSPECTION",              name: "Lookout for Vision" }
      ]
    }
  }
};

window.CDK.providers.azure = {
  id: "azure",
  displayName: "Microsoft Azure",
  serviceCategories: {
    "ai-ml": {
      label: "AI & Machine Learning",
      services: [
        { id: "ai-containers",    category: "AI CONTAINERS",                  name: "GPU-backed containers / AKS for AI" },
        { id: "ai-assistant",     category: "AI-POWERED ASSISTANT",           name: "Azure OpenAI Service" },
        { id: "human-review",     category: "HUMAN REVIEW/MODERATION",        name: "Azure AI Content Safety" },
        { id: "chatbots",         category: "CHATBOT BUILDER",                name: "Azure Bot Service, Health Bot" },
        { id: "data-labeling",    category: "DATA LABELING",                  name: "Azure ML Data Labeling" },
        { id: "doc-extract",      category: "DOCUMENT EXTRACTION",            name: "Azure Document Intelligence" },
        { id: "genai-platform",   category: "GENERATIVE AI PLATFORMS",        name: "Azure OpenAI" },
        { id: "image-recognition",category: "IMAGE RECOGNITION",              name: "Azure AI Vision" },
        { id: "inference-accel",  category: "INFERENCE ACCELERATION",         name: "GPU support on AKS / VM series" },
        { id: "translation",      category: "LANGUAGE TRANSLATION",           name: "Azure Translator" },
        { id: "ml-chips",         category: "ML/AI CHIPS",                    name: "Maia 100" },
        { id: "managed-ml",       category: "MANAGED ML PLATFORM",            name: "Azure Machine Learning" },
        { id: "notebooks",        category: "NOTEBOOKS",                      name: "Azure ML Notebooks" },
        { id: "fraud-detect",     category: "ONLINE FRAUD DETECTION",         name: "Azure Anomaly Detector" },
        { id: "preconfig-ml-vms", category: "PRECONFIGURED ML VMS",           name: "Azure Data Science VMs" },
        { id: "reco-engine",      category: "RECOMMENDATION ENGINE",          name: "Azure AI Personalizer" },
        { id: "speech",           category: "SPEECH RECOGNITION/SYNTHESIS",   name: "Azure Speech" },
        { id: "text-analysis",    category: "TEXT ANALYSIS",                  name: "Azure AI Language" },
        { id: "ts-forecast",      category: "TIME-SERIES FORECASTING",        name: "Azure AutoML Forecasting" },
        { id: "video-analysis",   category: "VIDEO ANALYSIS",                 name: "Azure Video Indexer" },
        { id: "visual-inspection",category: "VISUAL INSPECTION",              name: "Azure Custom Vision" }
      ]
    }
  }
};

window.CDK.providers.gcp = {
  id: "gcp",
  displayName: "Google Cloud Platform (GCP)",
  serviceCategories: {
    "ai-ml": {
      label: "AI & Machine Learning",
      services: [
        { id: "ai-containers",    category: "AI CONTAINERS",                  name: "Deep Learning Containers" },
        { id: "ai-assistant",     category: "AI-POWERED ASSISTANT",           name: "Gemini for Google Cloud" },
        { id: "human-review",     category: "HUMAN REVIEW/MODERATION",        name: "—" },
        { id: "chatbots",         category: "CHATBOT BUILDER",                name: "Dialogflow" },
        { id: "data-labeling",    category: "DATA LABELING",                  name: "Vertex AI Data Labeling" },
        { id: "doc-extract",      category: "DOCUMENT EXTRACTION",            name: "Document AI" },
        { id: "genai-platform",   category: "GENERATIVE AI PLATFORMS",        name: "Vertex AI" },
        { id: "image-recognition",category: "IMAGE RECOGNITION",              name: "Vision AI" },
        { id: "inference-accel",  category: "INFERENCE ACCELERATION",         name: "Cloud TPU, Edge TPU" },
        { id: "translation",      category: "LANGUAGE TRANSLATION",           name: "Translation AI" },
        { id: "ml-chips",         category: "ML/AI CHIPS",                    name: "Cloud TPU, Trillium TPU" },
        { id: "managed-ml",       category: "MANAGED ML PLATFORM",            name: "Vertex AI" },
        { id: "notebooks",        category: "NOTEBOOKS",                      name: "Vertex AI Workbench, Colab" },
        { id: "fraud-detect",     category: "ONLINE FRAUD DETECTION",         name: "reCAPTCHA Enterprise" },
        { id: "preconfig-ml-vms", category: "PRECONFIGURED ML VMS",           name: "Deep Learning VM Image" },
        { id: "reco-engine",      category: "RECOMMENDATION ENGINE",          name: "Recommendations AI" },
        { id: "speech",           category: "SPEECH RECOGNITION/SYNTHESIS",   name: "Speech-to-Text & Text-to-Speech" },
        { id: "text-analysis",    category: "TEXT ANALYSIS",                  name: "Natural Language API" },
        { id: "ts-forecast",      category: "TIME-SERIES FORECASTING",        name: "TimesFM / Vertex AI Forecasting" },
        { id: "video-analysis",   category: "VIDEO ANALYSIS",                 name: "Video Intelligence API" },
        { id: "visual-inspection",category: "VISUAL INSPECTION",              name: "Visual Inspection AI" }
      ]
    }
  }
};

window.CDK.providers.oci = {
  id: "oci",
  displayName: "Oracle Cloud Infrastructure (OCI)",
  serviceCategories: {
    "ai-ml": {
      label: "AI & Machine Learning",
      services: [
        { id: "ai-containers",    category: "AI CONTAINERS",                  name: "Data Science Container Images" },
        { id: "ai-assistant",     category: "AI-POWERED ASSISTANT",           name: "OCI Generative AI Assistant" },
        { id: "human-review",     category: "HUMAN REVIEW/MODERATION",        name: "OCI AI Services (Vision/Text/Language)" },
        { id: "chatbots",         category: "CHATBOT BUILDER",                name: "Oracle Digital Assistant" },
        { id: "data-labeling",    category: "DATA LABELING",                  name: "OCI Data Labeling" },
        { id: "doc-extract",      category: "DOCUMENT EXTRACTION",            name: "OCI Document Understanding" },
        { id: "genai-platform",   category: "GENERATIVE AI PLATFORMS",        name: "OCI Generative AI" },
        { id: "image-recognition",category: "IMAGE RECOGNITION",              name: "OCI Vision AI" },
        { id: "inference-accel",  category: "INFERENCE ACCELERATION",         name: "OCI GPU / AI instances" },
        { id: "translation",      category: "LANGUAGE TRANSLATION",           name: "OCI Language Service" },
        { id: "ml-chips",         category: "ML/AI CHIPS",                    name: "OCI GPU portfolio (e.g., NVIDIA A100/H100)" },
        { id: "managed-ml",       category: "MANAGED ML PLATFORM",            name: "OCI Data Science" },
        { id: "notebooks",        category: "NOTEBOOKS",                      name: "OCI Data Science Notebooks" },
        { id: "fraud-detect",     category: "ONLINE FRAUD DETECTION",         name: "OCI Anomaly Detection" },
        { id: "preconfig-ml-vms", category: "PRECONFIGURED ML VMS",           name: "Marketplace ML Images" },
        { id: "reco-engine",      category: "RECOMMENDATION ENGINE",          name: "OCI AI Recommendation Solutions" },
        { id: "speech",           category: "SPEECH RECOGNITION/SYNTHESIS",   name: "OCI Speech AI" },
        { id: "text-analysis",    category: "TEXT ANALYSIS",                  name: "OCI Text AI" },
        { id: "ts-forecast",      category: "TIME-SERIES FORECASTING",        name: "OCI Forecasting AI" },
        { id: "video-analysis",   category: "VIDEO ANALYSIS",                 name: "OCI Vision Video" },
        { id: "visual-inspection",category: "VISUAL INSPECTION",              name: "OCI Vision Custom Models" }
      ]
    }
  }
};
