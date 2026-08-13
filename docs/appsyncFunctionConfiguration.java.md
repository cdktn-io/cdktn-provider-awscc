# `appsyncFunctionConfiguration` Submodule <a name="`appsyncFunctionConfiguration` Submodule" id="@cdktn/provider-awscc.appsyncFunctionConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncFunctionConfiguration <a name="AppsyncFunctionConfiguration" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration awscc_appsync_function_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_function_configuration.AppsyncFunctionConfiguration;

AppsyncFunctionConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiId(java.lang.String)
    .dataSourceName(java.lang.String)
    .name(java.lang.String)
//  .code(java.lang.String)
//  .codeS3Location(java.lang.String)
//  .description(java.lang.String)
//  .functionVersion(java.lang.String)
//  .maxBatchSize(java.lang.Number)
//  .requestMappingTemplate(java.lang.String)
//  .requestMappingTemplateS3Location(java.lang.String)
//  .responseMappingTemplate(java.lang.String)
//  .responseMappingTemplateS3Location(java.lang.String)
//  .runtime(AppsyncFunctionConfigurationRuntime)
//  .syncConfig(AppsyncFunctionConfigurationSyncConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.apiId">apiId</a></code> | <code>java.lang.String</code> | The AWS AppSync GraphQL API that you want to attach using this function. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.dataSourceName">dataSourceName</a></code> | <code>java.lang.String</code> | The name of data source this function will attach. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the function. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.code">code</a></code> | <code>java.lang.String</code> | The resolver code that contains the request and response functions. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.codeS3Location">codeS3Location</a></code> | <code>java.lang.String</code> | The Amazon S3 endpoint (where the code is located??). |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The function description. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.functionVersion">functionVersion</a></code> | <code>java.lang.String</code> | The version of the request mapping template. Currently, only the 2018-05-29 version of the template is supported. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.maxBatchSize">maxBatchSize</a></code> | <code>java.lang.Number</code> | The maximum number of resolver request inputs that will be sent to a single AWS Lambda function in a BatchInvoke operation. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.requestMappingTemplate">requestMappingTemplate</a></code> | <code>java.lang.String</code> | The Function request mapping template. Functions support only the 2018-05-29 version of the request mapping template. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.requestMappingTemplateS3Location">requestMappingTemplateS3Location</a></code> | <code>java.lang.String</code> | Describes a Sync configuration for a resolver. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.responseMappingTemplate">responseMappingTemplate</a></code> | <code>java.lang.String</code> | The Function response mapping template. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.responseMappingTemplateS3Location">responseMappingTemplateS3Location</a></code> | <code>java.lang.String</code> | The location of a response mapping template in an Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.runtime">runtime</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime">AppsyncFunctionConfigurationRuntime</a></code> | Describes a runtime used by an AWS AppSync pipeline resolver or AWS AppSync function. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.syncConfig">syncConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig">AppsyncFunctionConfigurationSyncConfig</a></code> | Describes a Sync configuration for a resolver. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.apiId"></a>

- *Type:* java.lang.String

The AWS AppSync GraphQL API that you want to attach using this function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#api_id AppsyncFunctionConfiguration#api_id}

---

##### `dataSourceName`<sup>Required</sup> <a name="dataSourceName" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.dataSourceName"></a>

- *Type:* java.lang.String

The name of data source this function will attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#data_source_name AppsyncFunctionConfiguration#data_source_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#name AppsyncFunctionConfiguration#name}

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.code"></a>

- *Type:* java.lang.String

The resolver code that contains the request and response functions.

When code is used, the runtime is required. The runtime value must be APPSYNC_JS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#code AppsyncFunctionConfiguration#code}

---

##### `codeS3Location`<sup>Optional</sup> <a name="codeS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.codeS3Location"></a>

- *Type:* java.lang.String

The Amazon S3 endpoint (where the code is located??).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#code_s3_location AppsyncFunctionConfiguration#code_s3_location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The function description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#description AppsyncFunctionConfiguration#description}

---

##### `functionVersion`<sup>Optional</sup> <a name="functionVersion" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.functionVersion"></a>

- *Type:* java.lang.String

The version of the request mapping template. Currently, only the 2018-05-29 version of the template is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#function_version AppsyncFunctionConfiguration#function_version}

---

##### `maxBatchSize`<sup>Optional</sup> <a name="maxBatchSize" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.maxBatchSize"></a>

- *Type:* java.lang.Number

The maximum number of resolver request inputs that will be sent to a single AWS Lambda function in a BatchInvoke operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#max_batch_size AppsyncFunctionConfiguration#max_batch_size}

---

##### `requestMappingTemplate`<sup>Optional</sup> <a name="requestMappingTemplate" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.requestMappingTemplate"></a>

- *Type:* java.lang.String

The Function request mapping template. Functions support only the 2018-05-29 version of the request mapping template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#request_mapping_template AppsyncFunctionConfiguration#request_mapping_template}

---

##### `requestMappingTemplateS3Location`<sup>Optional</sup> <a name="requestMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.requestMappingTemplateS3Location"></a>

- *Type:* java.lang.String

Describes a Sync configuration for a resolver.

Contains information on which Conflict Detection, as well as Resolution strategy, should be performed when the resolver is invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#request_mapping_template_s3_location AppsyncFunctionConfiguration#request_mapping_template_s3_location}

---

##### `responseMappingTemplate`<sup>Optional</sup> <a name="responseMappingTemplate" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.responseMappingTemplate"></a>

- *Type:* java.lang.String

The Function response mapping template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#response_mapping_template AppsyncFunctionConfiguration#response_mapping_template}

---

##### `responseMappingTemplateS3Location`<sup>Optional</sup> <a name="responseMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.responseMappingTemplateS3Location"></a>

- *Type:* java.lang.String

The location of a response mapping template in an Amazon S3 bucket.

Use this if you want to provision with a template file in Amazon S3 rather than embedding it in your CloudFormation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#response_mapping_template_s3_location AppsyncFunctionConfiguration#response_mapping_template_s3_location}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.runtime"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime">AppsyncFunctionConfigurationRuntime</a>

Describes a runtime used by an AWS AppSync pipeline resolver or AWS AppSync function.

Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#runtime AppsyncFunctionConfiguration#runtime}

---

##### `syncConfig`<sup>Optional</sup> <a name="syncConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.syncConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig">AppsyncFunctionConfigurationSyncConfig</a>

Describes a Sync configuration for a resolver.

Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#sync_config AppsyncFunctionConfiguration#sync_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.putRuntime">putRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.putSyncConfig">putSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetCode">resetCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetCodeS3Location">resetCodeS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetFunctionVersion">resetFunctionVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetMaxBatchSize">resetMaxBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetRequestMappingTemplate">resetRequestMappingTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetRequestMappingTemplateS3Location">resetRequestMappingTemplateS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetResponseMappingTemplate">resetResponseMappingTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetResponseMappingTemplateS3Location">resetResponseMappingTemplateS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetSyncConfig">resetSyncConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRuntime` <a name="putRuntime" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.putRuntime"></a>

```java
public void putRuntime(AppsyncFunctionConfigurationRuntime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.putRuntime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime">AppsyncFunctionConfigurationRuntime</a>

---

##### `putSyncConfig` <a name="putSyncConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.putSyncConfig"></a>

```java
public void putSyncConfig(AppsyncFunctionConfigurationSyncConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.putSyncConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig">AppsyncFunctionConfigurationSyncConfig</a>

---

##### `resetCode` <a name="resetCode" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetCode"></a>

```java
public void resetCode()
```

##### `resetCodeS3Location` <a name="resetCodeS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetCodeS3Location"></a>

```java
public void resetCodeS3Location()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFunctionVersion` <a name="resetFunctionVersion" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetFunctionVersion"></a>

```java
public void resetFunctionVersion()
```

##### `resetMaxBatchSize` <a name="resetMaxBatchSize" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetMaxBatchSize"></a>

```java
public void resetMaxBatchSize()
```

##### `resetRequestMappingTemplate` <a name="resetRequestMappingTemplate" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetRequestMappingTemplate"></a>

```java
public void resetRequestMappingTemplate()
```

##### `resetRequestMappingTemplateS3Location` <a name="resetRequestMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetRequestMappingTemplateS3Location"></a>

```java
public void resetRequestMappingTemplateS3Location()
```

##### `resetResponseMappingTemplate` <a name="resetResponseMappingTemplate" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetResponseMappingTemplate"></a>

```java
public void resetResponseMappingTemplate()
```

##### `resetResponseMappingTemplateS3Location` <a name="resetResponseMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetResponseMappingTemplateS3Location"></a>

```java
public void resetResponseMappingTemplateS3Location()
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetRuntime"></a>

```java
public void resetRuntime()
```

##### `resetSyncConfig` <a name="resetSyncConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetSyncConfig"></a>

```java
public void resetSyncConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppsyncFunctionConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.appsync_function_configuration.AppsyncFunctionConfiguration;

AppsyncFunctionConfiguration.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.appsync_function_configuration.AppsyncFunctionConfiguration;

AppsyncFunctionConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.appsync_function_configuration.AppsyncFunctionConfiguration;

AppsyncFunctionConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.appsync_function_configuration.AppsyncFunctionConfiguration;

AppsyncFunctionConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppsyncFunctionConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AppsyncFunctionConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppsyncFunctionConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppsyncFunctionConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AppsyncFunctionConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionArn">functionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionId">functionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.runtime">runtime</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference">AppsyncFunctionConfigurationRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.syncConfig">syncConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference">AppsyncFunctionConfigurationSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.apiIdInput">apiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.codeInput">codeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.codeS3LocationInput">codeS3LocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.dataSourceNameInput">dataSourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionVersionInput">functionVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.maxBatchSizeInput">maxBatchSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplateInput">requestMappingTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplateS3LocationInput">requestMappingTemplateS3LocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplateInput">responseMappingTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplateS3LocationInput">responseMappingTemplateS3LocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.runtimeInput">runtimeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime">AppsyncFunctionConfigurationRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.syncConfigInput">syncConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig">AppsyncFunctionConfigurationSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.apiId">apiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.codeS3Location">codeS3Location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.dataSourceName">dataSourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionVersion">functionVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.maxBatchSize">maxBatchSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplate">requestMappingTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplateS3Location">requestMappingTemplateS3Location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplate">responseMappingTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplateS3Location">responseMappingTemplateS3Location</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionArn"></a>

```java
public java.lang.String getFunctionArn();
```

- *Type:* java.lang.String

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionId"></a>

```java
public java.lang.String getFunctionId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.runtime"></a>

```java
public AppsyncFunctionConfigurationRuntimeOutputReference getRuntime();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference">AppsyncFunctionConfigurationRuntimeOutputReference</a>

---

##### `syncConfig`<sup>Required</sup> <a name="syncConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.syncConfig"></a>

```java
public AppsyncFunctionConfigurationSyncConfigOutputReference getSyncConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference">AppsyncFunctionConfigurationSyncConfigOutputReference</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.apiIdInput"></a>

```java
public java.lang.String getApiIdInput();
```

- *Type:* java.lang.String

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.codeInput"></a>

```java
public java.lang.String getCodeInput();
```

- *Type:* java.lang.String

---

##### `codeS3LocationInput`<sup>Optional</sup> <a name="codeS3LocationInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.codeS3LocationInput"></a>

```java
public java.lang.String getCodeS3LocationInput();
```

- *Type:* java.lang.String

---

##### `dataSourceNameInput`<sup>Optional</sup> <a name="dataSourceNameInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.dataSourceNameInput"></a>

```java
public java.lang.String getDataSourceNameInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `functionVersionInput`<sup>Optional</sup> <a name="functionVersionInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionVersionInput"></a>

```java
public java.lang.String getFunctionVersionInput();
```

- *Type:* java.lang.String

---

##### `maxBatchSizeInput`<sup>Optional</sup> <a name="maxBatchSizeInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.maxBatchSizeInput"></a>

```java
public java.lang.Number getMaxBatchSizeInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `requestMappingTemplateInput`<sup>Optional</sup> <a name="requestMappingTemplateInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplateInput"></a>

```java
public java.lang.String getRequestMappingTemplateInput();
```

- *Type:* java.lang.String

---

##### `requestMappingTemplateS3LocationInput`<sup>Optional</sup> <a name="requestMappingTemplateS3LocationInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplateS3LocationInput"></a>

```java
public java.lang.String getRequestMappingTemplateS3LocationInput();
```

- *Type:* java.lang.String

---

##### `responseMappingTemplateInput`<sup>Optional</sup> <a name="responseMappingTemplateInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplateInput"></a>

```java
public java.lang.String getResponseMappingTemplateInput();
```

- *Type:* java.lang.String

---

##### `responseMappingTemplateS3LocationInput`<sup>Optional</sup> <a name="responseMappingTemplateS3LocationInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplateS3LocationInput"></a>

```java
public java.lang.String getResponseMappingTemplateS3LocationInput();
```

- *Type:* java.lang.String

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.runtimeInput"></a>

```java
public IResolvable|AppsyncFunctionConfigurationRuntime getRuntimeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime">AppsyncFunctionConfigurationRuntime</a>

---

##### `syncConfigInput`<sup>Optional</sup> <a name="syncConfigInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.syncConfigInput"></a>

```java
public IResolvable|AppsyncFunctionConfigurationSyncConfig getSyncConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig">AppsyncFunctionConfigurationSyncConfig</a>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `codeS3Location`<sup>Required</sup> <a name="codeS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.codeS3Location"></a>

```java
public java.lang.String getCodeS3Location();
```

- *Type:* java.lang.String

---

##### `dataSourceName`<sup>Required</sup> <a name="dataSourceName" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.dataSourceName"></a>

```java
public java.lang.String getDataSourceName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `functionVersion`<sup>Required</sup> <a name="functionVersion" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionVersion"></a>

```java
public java.lang.String getFunctionVersion();
```

- *Type:* java.lang.String

---

##### `maxBatchSize`<sup>Required</sup> <a name="maxBatchSize" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.maxBatchSize"></a>

```java
public java.lang.Number getMaxBatchSize();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `requestMappingTemplate`<sup>Required</sup> <a name="requestMappingTemplate" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplate"></a>

```java
public java.lang.String getRequestMappingTemplate();
```

- *Type:* java.lang.String

---

##### `requestMappingTemplateS3Location`<sup>Required</sup> <a name="requestMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplateS3Location"></a>

```java
public java.lang.String getRequestMappingTemplateS3Location();
```

- *Type:* java.lang.String

---

##### `responseMappingTemplate`<sup>Required</sup> <a name="responseMappingTemplate" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplate"></a>

```java
public java.lang.String getResponseMappingTemplate();
```

- *Type:* java.lang.String

---

##### `responseMappingTemplateS3Location`<sup>Required</sup> <a name="responseMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplateS3Location"></a>

```java
public java.lang.String getResponseMappingTemplateS3Location();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncFunctionConfigurationConfig <a name="AppsyncFunctionConfigurationConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_function_configuration.AppsyncFunctionConfigurationConfig;

AppsyncFunctionConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiId(java.lang.String)
    .dataSourceName(java.lang.String)
    .name(java.lang.String)
//  .code(java.lang.String)
//  .codeS3Location(java.lang.String)
//  .description(java.lang.String)
//  .functionVersion(java.lang.String)
//  .maxBatchSize(java.lang.Number)
//  .requestMappingTemplate(java.lang.String)
//  .requestMappingTemplateS3Location(java.lang.String)
//  .responseMappingTemplate(java.lang.String)
//  .responseMappingTemplateS3Location(java.lang.String)
//  .runtime(AppsyncFunctionConfigurationRuntime)
//  .syncConfig(AppsyncFunctionConfigurationSyncConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.apiId">apiId</a></code> | <code>java.lang.String</code> | The AWS AppSync GraphQL API that you want to attach using this function. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.dataSourceName">dataSourceName</a></code> | <code>java.lang.String</code> | The name of data source this function will attach. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the function. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.code">code</a></code> | <code>java.lang.String</code> | The resolver code that contains the request and response functions. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.codeS3Location">codeS3Location</a></code> | <code>java.lang.String</code> | The Amazon S3 endpoint (where the code is located??). |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.description">description</a></code> | <code>java.lang.String</code> | The function description. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.functionVersion">functionVersion</a></code> | <code>java.lang.String</code> | The version of the request mapping template. Currently, only the 2018-05-29 version of the template is supported. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.maxBatchSize">maxBatchSize</a></code> | <code>java.lang.Number</code> | The maximum number of resolver request inputs that will be sent to a single AWS Lambda function in a BatchInvoke operation. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.requestMappingTemplate">requestMappingTemplate</a></code> | <code>java.lang.String</code> | The Function request mapping template. Functions support only the 2018-05-29 version of the request mapping template. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.requestMappingTemplateS3Location">requestMappingTemplateS3Location</a></code> | <code>java.lang.String</code> | Describes a Sync configuration for a resolver. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.responseMappingTemplate">responseMappingTemplate</a></code> | <code>java.lang.String</code> | The Function response mapping template. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.responseMappingTemplateS3Location">responseMappingTemplateS3Location</a></code> | <code>java.lang.String</code> | The location of a response mapping template in an Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.runtime">runtime</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime">AppsyncFunctionConfigurationRuntime</a></code> | Describes a runtime used by an AWS AppSync pipeline resolver or AWS AppSync function. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.syncConfig">syncConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig">AppsyncFunctionConfigurationSyncConfig</a></code> | Describes a Sync configuration for a resolver. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

The AWS AppSync GraphQL API that you want to attach using this function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#api_id AppsyncFunctionConfiguration#api_id}

---

##### `dataSourceName`<sup>Required</sup> <a name="dataSourceName" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.dataSourceName"></a>

```java
public java.lang.String getDataSourceName();
```

- *Type:* java.lang.String

The name of data source this function will attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#data_source_name AppsyncFunctionConfiguration#data_source_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#name AppsyncFunctionConfiguration#name}

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

The resolver code that contains the request and response functions.

When code is used, the runtime is required. The runtime value must be APPSYNC_JS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#code AppsyncFunctionConfiguration#code}

---

##### `codeS3Location`<sup>Optional</sup> <a name="codeS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.codeS3Location"></a>

```java
public java.lang.String getCodeS3Location();
```

- *Type:* java.lang.String

The Amazon S3 endpoint (where the code is located??).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#code_s3_location AppsyncFunctionConfiguration#code_s3_location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The function description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#description AppsyncFunctionConfiguration#description}

---

##### `functionVersion`<sup>Optional</sup> <a name="functionVersion" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.functionVersion"></a>

```java
public java.lang.String getFunctionVersion();
```

- *Type:* java.lang.String

The version of the request mapping template. Currently, only the 2018-05-29 version of the template is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#function_version AppsyncFunctionConfiguration#function_version}

---

##### `maxBatchSize`<sup>Optional</sup> <a name="maxBatchSize" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.maxBatchSize"></a>

```java
public java.lang.Number getMaxBatchSize();
```

- *Type:* java.lang.Number

The maximum number of resolver request inputs that will be sent to a single AWS Lambda function in a BatchInvoke operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#max_batch_size AppsyncFunctionConfiguration#max_batch_size}

---

##### `requestMappingTemplate`<sup>Optional</sup> <a name="requestMappingTemplate" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.requestMappingTemplate"></a>

```java
public java.lang.String getRequestMappingTemplate();
```

- *Type:* java.lang.String

The Function request mapping template. Functions support only the 2018-05-29 version of the request mapping template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#request_mapping_template AppsyncFunctionConfiguration#request_mapping_template}

---

##### `requestMappingTemplateS3Location`<sup>Optional</sup> <a name="requestMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.requestMappingTemplateS3Location"></a>

```java
public java.lang.String getRequestMappingTemplateS3Location();
```

- *Type:* java.lang.String

Describes a Sync configuration for a resolver.

Contains information on which Conflict Detection, as well as Resolution strategy, should be performed when the resolver is invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#request_mapping_template_s3_location AppsyncFunctionConfiguration#request_mapping_template_s3_location}

---

##### `responseMappingTemplate`<sup>Optional</sup> <a name="responseMappingTemplate" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.responseMappingTemplate"></a>

```java
public java.lang.String getResponseMappingTemplate();
```

- *Type:* java.lang.String

The Function response mapping template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#response_mapping_template AppsyncFunctionConfiguration#response_mapping_template}

---

##### `responseMappingTemplateS3Location`<sup>Optional</sup> <a name="responseMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.responseMappingTemplateS3Location"></a>

```java
public java.lang.String getResponseMappingTemplateS3Location();
```

- *Type:* java.lang.String

The location of a response mapping template in an Amazon S3 bucket.

Use this if you want to provision with a template file in Amazon S3 rather than embedding it in your CloudFormation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#response_mapping_template_s3_location AppsyncFunctionConfiguration#response_mapping_template_s3_location}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.runtime"></a>

```java
public AppsyncFunctionConfigurationRuntime getRuntime();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime">AppsyncFunctionConfigurationRuntime</a>

Describes a runtime used by an AWS AppSync pipeline resolver or AWS AppSync function.

Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#runtime AppsyncFunctionConfiguration#runtime}

---

##### `syncConfig`<sup>Optional</sup> <a name="syncConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.syncConfig"></a>

```java
public AppsyncFunctionConfigurationSyncConfig getSyncConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig">AppsyncFunctionConfigurationSyncConfig</a>

Describes a Sync configuration for a resolver.

Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#sync_config AppsyncFunctionConfiguration#sync_config}

---

### AppsyncFunctionConfigurationRuntime <a name="AppsyncFunctionConfigurationRuntime" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_function_configuration.AppsyncFunctionConfigurationRuntime;

AppsyncFunctionConfigurationRuntime.builder()
//  .name(java.lang.String)
//  .runtimeVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime.property.name">name</a></code> | <code>java.lang.String</code> | The name of the runtime to use. Currently, the only allowed value is APPSYNC_JS. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | The version of the runtime to use. Currently, the only allowed version is 1.0.0. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the runtime to use. Currently, the only allowed value is APPSYNC_JS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#name AppsyncFunctionConfiguration#name}

---

##### `runtimeVersion`<sup>Optional</sup> <a name="runtimeVersion" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

The version of the runtime to use. Currently, the only allowed version is 1.0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#runtime_version AppsyncFunctionConfiguration#runtime_version}

---

### AppsyncFunctionConfigurationSyncConfig <a name="AppsyncFunctionConfigurationSyncConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_function_configuration.AppsyncFunctionConfigurationSyncConfig;

AppsyncFunctionConfigurationSyncConfig.builder()
//  .conflictDetection(java.lang.String)
//  .conflictHandler(java.lang.String)
//  .lambdaConflictHandlerConfig(AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig.property.conflictDetection">conflictDetection</a></code> | <code>java.lang.String</code> | The Conflict Detection strategy to use. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig.property.conflictHandler">conflictHandler</a></code> | <code>java.lang.String</code> | The Conflict Resolution strategy to perform in the event of a conflict. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig.property.lambdaConflictHandlerConfig">lambdaConflictHandlerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig</a></code> | The LambdaConflictHandlerConfig when configuring LAMBDA as the Conflict Handler. |

---

##### `conflictDetection`<sup>Optional</sup> <a name="conflictDetection" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig.property.conflictDetection"></a>

```java
public java.lang.String getConflictDetection();
```

- *Type:* java.lang.String

The Conflict Detection strategy to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#conflict_detection AppsyncFunctionConfiguration#conflict_detection}

---

##### `conflictHandler`<sup>Optional</sup> <a name="conflictHandler" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig.property.conflictHandler"></a>

```java
public java.lang.String getConflictHandler();
```

- *Type:* java.lang.String

The Conflict Resolution strategy to perform in the event of a conflict.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#conflict_handler AppsyncFunctionConfiguration#conflict_handler}

---

##### `lambdaConflictHandlerConfig`<sup>Optional</sup> <a name="lambdaConflictHandlerConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig.property.lambdaConflictHandlerConfig"></a>

```java
public AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig getLambdaConflictHandlerConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig</a>

The LambdaConflictHandlerConfig when configuring LAMBDA as the Conflict Handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#lambda_conflict_handler_config AppsyncFunctionConfiguration#lambda_conflict_handler_config}

---

### AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig <a name="AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_function_configuration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig;

AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig.builder()
//  .lambdaConflictHandlerArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn">lambdaConflictHandlerArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) for the Lambda function to use as the Conflict Handler. |

---

##### `lambdaConflictHandlerArn`<sup>Optional</sup> <a name="lambdaConflictHandlerArn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn"></a>

```java
public java.lang.String getLambdaConflictHandlerArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) for the Lambda function to use as the Conflict Handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#lambda_conflict_handler_arn AppsyncFunctionConfiguration#lambda_conflict_handler_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncFunctionConfigurationRuntimeOutputReference <a name="AppsyncFunctionConfigurationRuntimeOutputReference" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_function_configuration.AppsyncFunctionConfigurationRuntimeOutputReference;

new AppsyncFunctionConfigurationRuntimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.resetRuntimeVersion">resetRuntimeVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetRuntimeVersion` <a name="resetRuntimeVersion" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.resetRuntimeVersion"></a>

```java
public void resetRuntimeVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime">AppsyncFunctionConfigurationRuntime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.runtimeVersionInput"></a>

```java
public java.lang.String getRuntimeVersionInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncFunctionConfigurationRuntime getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime">AppsyncFunctionConfigurationRuntime</a>

---


### AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference <a name="AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_function_configuration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference;

new AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn">resetLambdaConflictHandlerArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLambdaConflictHandlerArn` <a name="resetLambdaConflictHandlerArn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn"></a>

```java
public void resetLambdaConflictHandlerArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput">lambdaConflictHandlerArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn">lambdaConflictHandlerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lambdaConflictHandlerArnInput`<sup>Optional</sup> <a name="lambdaConflictHandlerArnInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput"></a>

```java
public java.lang.String getLambdaConflictHandlerArnInput();
```

- *Type:* java.lang.String

---

##### `lambdaConflictHandlerArn`<sup>Required</sup> <a name="lambdaConflictHandlerArn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn"></a>

```java
public java.lang.String getLambdaConflictHandlerArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig</a>

---


### AppsyncFunctionConfigurationSyncConfigOutputReference <a name="AppsyncFunctionConfigurationSyncConfigOutputReference" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_function_configuration.AppsyncFunctionConfigurationSyncConfigOutputReference;

new AppsyncFunctionConfigurationSyncConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.putLambdaConflictHandlerConfig">putLambdaConflictHandlerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resetConflictDetection">resetConflictDetection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resetConflictHandler">resetConflictHandler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resetLambdaConflictHandlerConfig">resetLambdaConflictHandlerConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLambdaConflictHandlerConfig` <a name="putLambdaConflictHandlerConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.putLambdaConflictHandlerConfig"></a>

```java
public void putLambdaConflictHandlerConfig(AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.putLambdaConflictHandlerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig</a>

---

##### `resetConflictDetection` <a name="resetConflictDetection" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resetConflictDetection"></a>

```java
public void resetConflictDetection()
```

##### `resetConflictHandler` <a name="resetConflictHandler" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resetConflictHandler"></a>

```java
public void resetConflictHandler()
```

##### `resetLambdaConflictHandlerConfig` <a name="resetLambdaConflictHandlerConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resetLambdaConflictHandlerConfig"></a>

```java
public void resetLambdaConflictHandlerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.lambdaConflictHandlerConfig">lambdaConflictHandlerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictDetectionInput">conflictDetectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictHandlerInput">conflictHandlerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput">lambdaConflictHandlerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictDetection">conflictDetection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictHandler">conflictHandler</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig">AppsyncFunctionConfigurationSyncConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lambdaConflictHandlerConfig`<sup>Required</sup> <a name="lambdaConflictHandlerConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.lambdaConflictHandlerConfig"></a>

```java
public AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference getLambdaConflictHandlerConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference</a>

---

##### `conflictDetectionInput`<sup>Optional</sup> <a name="conflictDetectionInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictDetectionInput"></a>

```java
public java.lang.String getConflictDetectionInput();
```

- *Type:* java.lang.String

---

##### `conflictHandlerInput`<sup>Optional</sup> <a name="conflictHandlerInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictHandlerInput"></a>

```java
public java.lang.String getConflictHandlerInput();
```

- *Type:* java.lang.String

---

##### `lambdaConflictHandlerConfigInput`<sup>Optional</sup> <a name="lambdaConflictHandlerConfigInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput"></a>

```java
public IResolvable|AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig getLambdaConflictHandlerConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig</a>

---

##### `conflictDetection`<sup>Required</sup> <a name="conflictDetection" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictDetection"></a>

```java
public java.lang.String getConflictDetection();
```

- *Type:* java.lang.String

---

##### `conflictHandler`<sup>Required</sup> <a name="conflictHandler" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictHandler"></a>

```java
public java.lang.String getConflictHandler();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncFunctionConfigurationSyncConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig">AppsyncFunctionConfigurationSyncConfig</a>

---



