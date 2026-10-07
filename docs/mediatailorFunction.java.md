# `mediatailorFunction` Submodule <a name="`mediatailorFunction` Submodule" id="@cdktn/provider-awscc.mediatailorFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediatailorFunction <a name="MediatailorFunction" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function awscc_mediatailor_function}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_function.MediatailorFunction;

MediatailorFunction.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .functionId(java.lang.String)
    .functionType(java.lang.String)
//  .awsServiceRequestConfiguration(MediatailorFunctionAwsServiceRequestConfiguration)
//  .concurrentExecutorConfiguration(MediatailorFunctionConcurrentExecutorConfiguration)
//  .customOutputConfiguration(MediatailorFunctionCustomOutputConfiguration)
//  .description(java.lang.String)
//  .httpRequestConfiguration(MediatailorFunctionHttpRequestConfiguration)
//  .sequentialExecutorConfiguration(MediatailorFunctionSequentialExecutorConfiguration)
//  .tags(IResolvable|java.util.List<MediatailorFunctionTags>)
//  .vastRequestConfiguration(MediatailorFunctionVastRequestConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.functionId">functionId</a></code> | <code>java.lang.String</code> | The unique identifier for the function. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.functionType">functionType</a></code> | <code>java.lang.String</code> | The type of the function. Determines which configuration object is used. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.awsServiceRequestConfiguration">awsServiceRequestConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration">MediatailorFunctionAwsServiceRequestConfiguration</a></code> | The configuration for an AWS_SERVICE_REQUEST function. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.concurrentExecutorConfiguration">concurrentExecutorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfiguration">MediatailorFunctionConcurrentExecutorConfiguration</a></code> | The configuration for a CONCURRENT_EXECUTOR function. Required when FunctionType is CONCURRENT_EXECUTOR. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.customOutputConfiguration">customOutputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfiguration">MediatailorFunctionCustomOutputConfiguration</a></code> | Configuration for custom output functions. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the function. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.httpRequestConfiguration">httpRequestConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration">MediatailorFunctionHttpRequestConfiguration</a></code> | Configuration for HTTP request functions. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.sequentialExecutorConfiguration">sequentialExecutorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration">MediatailorFunctionSequentialExecutorConfiguration</a></code> | The configuration for a SEQUENTIAL_EXECUTOR function. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags">MediatailorFunctionTags</a>></code> | The tags to assign to the function resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.vastRequestConfiguration">vastRequestConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfiguration">MediatailorFunctionVastRequestConfiguration</a></code> | The configuration for a VAST_REQUEST function. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.functionId"></a>

- *Type:* java.lang.String

The unique identifier for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#function_id MediatailorFunction#function_id}

---

##### `functionType`<sup>Required</sup> <a name="functionType" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.functionType"></a>

- *Type:* java.lang.String

The type of the function. Determines which configuration object is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#function_type MediatailorFunction#function_type}

---

##### `awsServiceRequestConfiguration`<sup>Optional</sup> <a name="awsServiceRequestConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.awsServiceRequestConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration">MediatailorFunctionAwsServiceRequestConfiguration</a>

The configuration for an AWS_SERVICE_REQUEST function.

Contains the target service, target Region, and request parameters that the function uses to call an AWS service API. For more information, see AWS_SERVICE_REQUEST (https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions-types-aws-service-request.html) in the MediaTailor User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#aws_service_request_configuration MediatailorFunction#aws_service_request_configuration}

---

##### `concurrentExecutorConfiguration`<sup>Optional</sup> <a name="concurrentExecutorConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.concurrentExecutorConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfiguration">MediatailorFunctionConcurrentExecutorConfiguration</a>

The configuration for a CONCURRENT_EXECUTOR function. Required when FunctionType is CONCURRENT_EXECUTOR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#concurrent_executor_configuration MediatailorFunction#concurrent_executor_configuration}

---

##### `customOutputConfiguration`<sup>Optional</sup> <a name="customOutputConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.customOutputConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfiguration">MediatailorFunctionCustomOutputConfiguration</a>

Configuration for custom output functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#custom_output_configuration MediatailorFunction#custom_output_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#description MediatailorFunction#description}

---

##### `httpRequestConfiguration`<sup>Optional</sup> <a name="httpRequestConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.httpRequestConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration">MediatailorFunctionHttpRequestConfiguration</a>

Configuration for HTTP request functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#http_request_configuration MediatailorFunction#http_request_configuration}

---

##### `sequentialExecutorConfiguration`<sup>Optional</sup> <a name="sequentialExecutorConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.sequentialExecutorConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration">MediatailorFunctionSequentialExecutorConfiguration</a>

The configuration for a SEQUENTIAL_EXECUTOR function.

A SEQUENTIAL_EXECUTOR runs an ordered list of child functions one at a time, passing data between them. For more information about functions, see Working with functions (https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions.html) in the MediaTailor User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#sequential_executor_configuration MediatailorFunction#sequential_executor_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags">MediatailorFunctionTags</a>>

The tags to assign to the function resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#tags MediatailorFunction#tags}

---

##### `vastRequestConfiguration`<sup>Optional</sup> <a name="vastRequestConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.vastRequestConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfiguration">MediatailorFunctionVastRequestConfiguration</a>

The configuration for a VAST_REQUEST function.

Specifies the HTTP method, URL, headers, body, timeout, and output expressions for a request to a VAST endpoint. MediaTailor parses the response as VAST and resolves wrapper redirects, then makes the parsed ads available to the function's output expressions. For more information, see Function types and composition (https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions-types.html) in the MediaTailor User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#vast_request_configuration MediatailorFunction#vast_request_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putAwsServiceRequestConfiguration">putAwsServiceRequestConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putConcurrentExecutorConfiguration">putConcurrentExecutorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putCustomOutputConfiguration">putCustomOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putHttpRequestConfiguration">putHttpRequestConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putSequentialExecutorConfiguration">putSequentialExecutorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putVastRequestConfiguration">putVastRequestConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetAwsServiceRequestConfiguration">resetAwsServiceRequestConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetConcurrentExecutorConfiguration">resetConcurrentExecutorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetCustomOutputConfiguration">resetCustomOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetHttpRequestConfiguration">resetHttpRequestConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetSequentialExecutorConfiguration">resetSequentialExecutorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetVastRequestConfiguration">resetVastRequestConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAwsServiceRequestConfiguration` <a name="putAwsServiceRequestConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putAwsServiceRequestConfiguration"></a>

```java
public void putAwsServiceRequestConfiguration(MediatailorFunctionAwsServiceRequestConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putAwsServiceRequestConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration">MediatailorFunctionAwsServiceRequestConfiguration</a>

---

##### `putConcurrentExecutorConfiguration` <a name="putConcurrentExecutorConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putConcurrentExecutorConfiguration"></a>

```java
public void putConcurrentExecutorConfiguration(MediatailorFunctionConcurrentExecutorConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putConcurrentExecutorConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfiguration">MediatailorFunctionConcurrentExecutorConfiguration</a>

---

##### `putCustomOutputConfiguration` <a name="putCustomOutputConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putCustomOutputConfiguration"></a>

```java
public void putCustomOutputConfiguration(MediatailorFunctionCustomOutputConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putCustomOutputConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfiguration">MediatailorFunctionCustomOutputConfiguration</a>

---

##### `putHttpRequestConfiguration` <a name="putHttpRequestConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putHttpRequestConfiguration"></a>

```java
public void putHttpRequestConfiguration(MediatailorFunctionHttpRequestConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putHttpRequestConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration">MediatailorFunctionHttpRequestConfiguration</a>

---

##### `putSequentialExecutorConfiguration` <a name="putSequentialExecutorConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putSequentialExecutorConfiguration"></a>

```java
public void putSequentialExecutorConfiguration(MediatailorFunctionSequentialExecutorConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putSequentialExecutorConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration">MediatailorFunctionSequentialExecutorConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<MediatailorFunctionTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags">MediatailorFunctionTags</a>>

---

##### `putVastRequestConfiguration` <a name="putVastRequestConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putVastRequestConfiguration"></a>

```java
public void putVastRequestConfiguration(MediatailorFunctionVastRequestConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putVastRequestConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfiguration">MediatailorFunctionVastRequestConfiguration</a>

---

##### `resetAwsServiceRequestConfiguration` <a name="resetAwsServiceRequestConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetAwsServiceRequestConfiguration"></a>

```java
public void resetAwsServiceRequestConfiguration()
```

##### `resetConcurrentExecutorConfiguration` <a name="resetConcurrentExecutorConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetConcurrentExecutorConfiguration"></a>

```java
public void resetConcurrentExecutorConfiguration()
```

##### `resetCustomOutputConfiguration` <a name="resetCustomOutputConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetCustomOutputConfiguration"></a>

```java
public void resetCustomOutputConfiguration()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHttpRequestConfiguration` <a name="resetHttpRequestConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetHttpRequestConfiguration"></a>

```java
public void resetHttpRequestConfiguration()
```

##### `resetSequentialExecutorConfiguration` <a name="resetSequentialExecutorConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetSequentialExecutorConfiguration"></a>

```java
public void resetSequentialExecutorConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetTags"></a>

```java
public void resetTags()
```

##### `resetVastRequestConfiguration` <a name="resetVastRequestConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetVastRequestConfiguration"></a>

```java
public void resetVastRequestConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MediatailorFunction resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.isConstruct"></a>

```java
import io.cdktn.providers.awscc.mediatailor_function.MediatailorFunction;

MediatailorFunction.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.mediatailor_function.MediatailorFunction;

MediatailorFunction.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.mediatailor_function.MediatailorFunction;

MediatailorFunction.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.mediatailor_function.MediatailorFunction;

MediatailorFunction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MediatailorFunction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MediatailorFunction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MediatailorFunction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MediatailorFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MediatailorFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.awsServiceRequestConfiguration">awsServiceRequestConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference">MediatailorFunctionAwsServiceRequestConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.concurrentExecutorConfiguration">concurrentExecutorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference">MediatailorFunctionConcurrentExecutorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.customOutputConfiguration">customOutputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference">MediatailorFunctionCustomOutputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.httpRequestConfiguration">httpRequestConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference">MediatailorFunctionHttpRequestConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.sequentialExecutorConfiguration">sequentialExecutorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference">MediatailorFunctionSequentialExecutorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList">MediatailorFunctionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.vastRequestConfiguration">vastRequestConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference">MediatailorFunctionVastRequestConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.awsServiceRequestConfigurationInput">awsServiceRequestConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration">MediatailorFunctionAwsServiceRequestConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.concurrentExecutorConfigurationInput">concurrentExecutorConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfiguration">MediatailorFunctionConcurrentExecutorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.customOutputConfigurationInput">customOutputConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfiguration">MediatailorFunctionCustomOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.functionIdInput">functionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.functionTypeInput">functionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.httpRequestConfigurationInput">httpRequestConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration">MediatailorFunctionHttpRequestConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.sequentialExecutorConfigurationInput">sequentialExecutorConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration">MediatailorFunctionSequentialExecutorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags">MediatailorFunctionTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.vastRequestConfigurationInput">vastRequestConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfiguration">MediatailorFunctionVastRequestConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.functionId">functionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.functionType">functionType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `awsServiceRequestConfiguration`<sup>Required</sup> <a name="awsServiceRequestConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.awsServiceRequestConfiguration"></a>

```java
public MediatailorFunctionAwsServiceRequestConfigurationOutputReference getAwsServiceRequestConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference">MediatailorFunctionAwsServiceRequestConfigurationOutputReference</a>

---

##### `concurrentExecutorConfiguration`<sup>Required</sup> <a name="concurrentExecutorConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.concurrentExecutorConfiguration"></a>

```java
public MediatailorFunctionConcurrentExecutorConfigurationOutputReference getConcurrentExecutorConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference">MediatailorFunctionConcurrentExecutorConfigurationOutputReference</a>

---

##### `customOutputConfiguration`<sup>Required</sup> <a name="customOutputConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.customOutputConfiguration"></a>

```java
public MediatailorFunctionCustomOutputConfigurationOutputReference getCustomOutputConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference">MediatailorFunctionCustomOutputConfigurationOutputReference</a>

---

##### `httpRequestConfiguration`<sup>Required</sup> <a name="httpRequestConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.httpRequestConfiguration"></a>

```java
public MediatailorFunctionHttpRequestConfigurationOutputReference getHttpRequestConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference">MediatailorFunctionHttpRequestConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `sequentialExecutorConfiguration`<sup>Required</sup> <a name="sequentialExecutorConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.sequentialExecutorConfiguration"></a>

```java
public MediatailorFunctionSequentialExecutorConfigurationOutputReference getSequentialExecutorConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference">MediatailorFunctionSequentialExecutorConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.tags"></a>

```java
public MediatailorFunctionTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList">MediatailorFunctionTagsList</a>

---

##### `vastRequestConfiguration`<sup>Required</sup> <a name="vastRequestConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.vastRequestConfiguration"></a>

```java
public MediatailorFunctionVastRequestConfigurationOutputReference getVastRequestConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference">MediatailorFunctionVastRequestConfigurationOutputReference</a>

---

##### `awsServiceRequestConfigurationInput`<sup>Optional</sup> <a name="awsServiceRequestConfigurationInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.awsServiceRequestConfigurationInput"></a>

```java
public IResolvable|MediatailorFunctionAwsServiceRequestConfiguration getAwsServiceRequestConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration">MediatailorFunctionAwsServiceRequestConfiguration</a>

---

##### `concurrentExecutorConfigurationInput`<sup>Optional</sup> <a name="concurrentExecutorConfigurationInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.concurrentExecutorConfigurationInput"></a>

```java
public IResolvable|MediatailorFunctionConcurrentExecutorConfiguration getConcurrentExecutorConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfiguration">MediatailorFunctionConcurrentExecutorConfiguration</a>

---

##### `customOutputConfigurationInput`<sup>Optional</sup> <a name="customOutputConfigurationInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.customOutputConfigurationInput"></a>

```java
public IResolvable|MediatailorFunctionCustomOutputConfiguration getCustomOutputConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfiguration">MediatailorFunctionCustomOutputConfiguration</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `functionIdInput`<sup>Optional</sup> <a name="functionIdInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.functionIdInput"></a>

```java
public java.lang.String getFunctionIdInput();
```

- *Type:* java.lang.String

---

##### `functionTypeInput`<sup>Optional</sup> <a name="functionTypeInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.functionTypeInput"></a>

```java
public java.lang.String getFunctionTypeInput();
```

- *Type:* java.lang.String

---

##### `httpRequestConfigurationInput`<sup>Optional</sup> <a name="httpRequestConfigurationInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.httpRequestConfigurationInput"></a>

```java
public IResolvable|MediatailorFunctionHttpRequestConfiguration getHttpRequestConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration">MediatailorFunctionHttpRequestConfiguration</a>

---

##### `sequentialExecutorConfigurationInput`<sup>Optional</sup> <a name="sequentialExecutorConfigurationInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.sequentialExecutorConfigurationInput"></a>

```java
public IResolvable|MediatailorFunctionSequentialExecutorConfiguration getSequentialExecutorConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration">MediatailorFunctionSequentialExecutorConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.tagsInput"></a>

```java
public IResolvable|java.util.List<MediatailorFunctionTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags">MediatailorFunctionTags</a>>

---

##### `vastRequestConfigurationInput`<sup>Optional</sup> <a name="vastRequestConfigurationInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.vastRequestConfigurationInput"></a>

```java
public IResolvable|MediatailorFunctionVastRequestConfiguration getVastRequestConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfiguration">MediatailorFunctionVastRequestConfiguration</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.functionId"></a>

```java
public java.lang.String getFunctionId();
```

- *Type:* java.lang.String

---

##### `functionType`<sup>Required</sup> <a name="functionType" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.functionType"></a>

```java
public java.lang.String getFunctionType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MediatailorFunctionAwsServiceRequestConfiguration <a name="MediatailorFunctionAwsServiceRequestConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_function.MediatailorFunctionAwsServiceRequestConfiguration;

MediatailorFunctionAwsServiceRequestConfiguration.builder()
//  .body(java.lang.String)
//  .headers(java.util.Map<java.lang.String, java.lang.String>)
//  .methodType(java.lang.String)
//  .output(java.util.Map<java.lang.String, java.lang.String>)
//  .requestTimeoutMilliseconds(java.lang.Number)
//  .runtime(java.lang.String)
//  .targetRegion(java.lang.String)
//  .targetService(java.lang.String)
//  .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration.property.body">body</a></code> | <code>java.lang.String</code> | An expression that evaluates to the request body for the AWS service API call. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of HTTP header names to expression values. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration.property.methodType">methodType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#method_type MediatailorFunction#method_type}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration.property.output">output</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of output bindings. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration.property.requestTimeoutMilliseconds">requestTimeoutMilliseconds</a></code> | <code>java.lang.Number</code> | The maximum time, in milliseconds, that MediaTailor waits for a response from the AWS service. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration.property.runtime">runtime</a></code> | <code>java.lang.String</code> | The expression language used to evaluate expressions in the function configuration. Set this to JSONATA. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration.property.targetRegion">targetRegion</a></code> | <code>java.lang.String</code> | The AWS Region for the target service. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration.property.targetService">targetService</a></code> | <code>java.lang.String</code> | The AWS service to call. Valid value: elemental-inference (AWS Elemental Inference). |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration.property.url">url</a></code> | <code>java.lang.String</code> | An expression that evaluates to the endpoint URL for the target AWS service API operation. |

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

An expression that evaluates to the request body for the AWS service API call.

The body must conform to the input format that the target service operation expects. Applies only when the target operation accepts a request body. The maximum size after evaluation is 64 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#body MediatailorFunction#body}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of HTTP header names to expression values.

MediaTailor evaluates each header value expression at runtime and includes the result in the outbound request to the AWS service. Use this to pass any headers required by the target service operation. You can include a maximum of 50 headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#headers MediatailorFunction#headers}

---

##### `methodType`<sup>Optional</sup> <a name="methodType" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration.property.methodType"></a>

```java
public java.lang.String getMethodType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#method_type MediatailorFunction#method_type}.

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration.property.output"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of output bindings.

Each key is a namespaced output path, such as player_params.device_type. Each value is an expression that MediaTailor evaluates at runtime and can reference the response object from the target service. For more information, see JSONata expression reference (https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions-jsonata.html) in the MediaTailor User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#output MediatailorFunction#output}

---

##### `requestTimeoutMilliseconds`<sup>Optional</sup> <a name="requestTimeoutMilliseconds" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration.property.requestTimeoutMilliseconds"></a>

```java
public java.lang.Number getRequestTimeoutMilliseconds();
```

- *Type:* java.lang.Number

The maximum time, in milliseconds, that MediaTailor waits for a response from the AWS service.

If the call exceeds this timeout, MediaTailor sets the response status code to null and proceeds with output expression evaluation. Valid values are 100 to 2000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#request_timeout_milliseconds MediatailorFunction#request_timeout_milliseconds}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

The expression language used to evaluate expressions in the function configuration. Set this to JSONATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#runtime MediatailorFunction#runtime}

---

##### `targetRegion`<sup>Optional</sup> <a name="targetRegion" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration.property.targetRegion"></a>

```java
public java.lang.String getTargetRegion();
```

- *Type:* java.lang.String

The AWS Region for the target service.

Specify a static Region code (for example, us-east-1) or a JSONata expression that resolves to a Region code at runtime (for example, {%inference.region%}).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#target_region MediatailorFunction#target_region}

---

##### `targetService`<sup>Optional</sup> <a name="targetService" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration.property.targetService"></a>

```java
public java.lang.String getTargetService();
```

- *Type:* java.lang.String

The AWS service to call. Valid value: elemental-inference (AWS Elemental Inference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#target_service MediatailorFunction#target_service}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

An expression that evaluates to the endpoint URL for the target AWS service API operation.

Use {%...%} delimiters for dynamic expressions. The URL must correspond to a valid endpoint for the service specified in TargetService. The maximum length after evaluation is 2,048 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#url MediatailorFunction#url}

---

### MediatailorFunctionConcurrentExecutorConfiguration <a name="MediatailorFunctionConcurrentExecutorConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_function.MediatailorFunctionConcurrentExecutorConfiguration;

MediatailorFunctionConcurrentExecutorConfiguration.builder()
//  .functionList(IResolvable|java.util.List<MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct>)
//  .maxConcurrency(java.lang.Number)
//  .output(java.util.Map<java.lang.String, java.lang.String>)
//  .runtime(java.lang.String)
//  .timeoutMilliseconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfiguration.property.functionList">functionList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct">MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct</a>></code> | The list of 1 to 10 child functions that MediaTailor runs in parallel. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfiguration.property.maxConcurrency">maxConcurrency</a></code> | <code>java.lang.Number</code> | The maximum number of child functions that MediaTailor runs simultaneously. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfiguration.property.output">output</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of output bindings that controls which bindings the executor commits to the session state after all child functions complete. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfiguration.property.runtime">runtime</a></code> | <code>java.lang.String</code> | The expression language used to evaluate expressions in the function configuration. Set this to JSONATA. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfiguration.property.timeoutMilliseconds">timeoutMilliseconds</a></code> | <code>java.lang.Number</code> | The maximum time, in milliseconds, for all child functions to complete. |

---

##### `functionList`<sup>Optional</sup> <a name="functionList" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfiguration.property.functionList"></a>

```java
public IResolvable|java.util.List<MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct> getFunctionList();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct">MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct</a>>

The list of 1 to 10 child functions that MediaTailor runs in parallel.

Each entry specifies a child function to execute and an optional run condition expression that controls whether the function runs. Child functions cannot themselves be executors, and each child function's resolved namespace must be unique across the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#function_list MediatailorFunction#function_list}

---

##### `maxConcurrency`<sup>Optional</sup> <a name="maxConcurrency" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfiguration.property.maxConcurrency"></a>

```java
public java.lang.Number getMaxConcurrency();
```

- *Type:* java.lang.Number

The maximum number of child functions that MediaTailor runs simultaneously.

When the list contains more functions than MaxConcurrency, MediaTailor starts additional functions as running ones complete, so that no more than MaxConcurrency functions run at the same time. Valid values are 1 to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#max_concurrency MediatailorFunction#max_concurrency}

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfiguration.property.output"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of output bindings that controls which bindings the executor commits to the session state after all child functions complete.

Each key is a namespaced output path, and each value is an expression that MediaTailor evaluates against the combined results of the child functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#output MediatailorFunction#output}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfiguration.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

The expression language used to evaluate expressions in the function configuration. Set this to JSONATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#runtime MediatailorFunction#runtime}

---

##### `timeoutMilliseconds`<sup>Optional</sup> <a name="timeoutMilliseconds" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfiguration.property.timeoutMilliseconds"></a>

```java
public java.lang.Number getTimeoutMilliseconds();
```

- *Type:* java.lang.Number

The maximum time, in milliseconds, for all child functions to complete.

This timeout covers every function in the list, including any HTTP calls the child functions make. If the executor exceeds this timeout, MediaTailor discards all output from the executor and proceeds with default behavior. Valid values are 100 to 2000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#timeout_milliseconds MediatailorFunction#timeout_milliseconds}

---

### MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct <a name="MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_function.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct;

MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct.builder()
//  .alias(java.lang.String)
//  .functionId(java.lang.String)
//  .runCondition(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct.property.alias">alias</a></code> | <code>java.lang.String</code> | An optional alternate name for the child function within the executor. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct.property.functionId">functionId</a></code> | <code>java.lang.String</code> | The identifier of the child function to execute. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct.property.runCondition">runCondition</a></code> | <code>java.lang.String</code> | An optional expression that evaluates to a boolean. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

An optional alternate name for the child function within the executor.

MediaTailor uses this value as the namespace for the child function's output. If omitted, MediaTailor uses the function identifier. The resolved namespace must be unique across all child functions in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#alias MediatailorFunction#alias}

---

##### `functionId`<sup>Optional</sup> <a name="functionId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct.property.functionId"></a>

```java
public java.lang.String getFunctionId();
```

- *Type:* java.lang.String

The identifier of the child function to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#function_id MediatailorFunction#function_id}

---

##### `runCondition`<sup>Optional</sup> <a name="runCondition" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct.property.runCondition"></a>

```java
public java.lang.String getRunCondition();
```

- *Type:* java.lang.String

An optional expression that evaluates to a boolean.

MediaTailor evaluates this expression immediately before running the child function, using the accumulated state at that point. If the expression evaluates to false, MediaTailor skips the child function. If omitted, the child function always runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#run_condition MediatailorFunction#run_condition}

---

### MediatailorFunctionConfig <a name="MediatailorFunctionConfig" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_function.MediatailorFunctionConfig;

MediatailorFunctionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .functionId(java.lang.String)
    .functionType(java.lang.String)
//  .awsServiceRequestConfiguration(MediatailorFunctionAwsServiceRequestConfiguration)
//  .concurrentExecutorConfiguration(MediatailorFunctionConcurrentExecutorConfiguration)
//  .customOutputConfiguration(MediatailorFunctionCustomOutputConfiguration)
//  .description(java.lang.String)
//  .httpRequestConfiguration(MediatailorFunctionHttpRequestConfiguration)
//  .sequentialExecutorConfiguration(MediatailorFunctionSequentialExecutorConfiguration)
//  .tags(IResolvable|java.util.List<MediatailorFunctionTags>)
//  .vastRequestConfiguration(MediatailorFunctionVastRequestConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.functionId">functionId</a></code> | <code>java.lang.String</code> | The unique identifier for the function. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.functionType">functionType</a></code> | <code>java.lang.String</code> | The type of the function. Determines which configuration object is used. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.awsServiceRequestConfiguration">awsServiceRequestConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration">MediatailorFunctionAwsServiceRequestConfiguration</a></code> | The configuration for an AWS_SERVICE_REQUEST function. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.concurrentExecutorConfiguration">concurrentExecutorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfiguration">MediatailorFunctionConcurrentExecutorConfiguration</a></code> | The configuration for a CONCURRENT_EXECUTOR function. Required when FunctionType is CONCURRENT_EXECUTOR. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.customOutputConfiguration">customOutputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfiguration">MediatailorFunctionCustomOutputConfiguration</a></code> | Configuration for custom output functions. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the function. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.httpRequestConfiguration">httpRequestConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration">MediatailorFunctionHttpRequestConfiguration</a></code> | Configuration for HTTP request functions. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.sequentialExecutorConfiguration">sequentialExecutorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration">MediatailorFunctionSequentialExecutorConfiguration</a></code> | The configuration for a SEQUENTIAL_EXECUTOR function. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags">MediatailorFunctionTags</a>></code> | The tags to assign to the function resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.vastRequestConfiguration">vastRequestConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfiguration">MediatailorFunctionVastRequestConfiguration</a></code> | The configuration for a VAST_REQUEST function. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.functionId"></a>

```java
public java.lang.String getFunctionId();
```

- *Type:* java.lang.String

The unique identifier for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#function_id MediatailorFunction#function_id}

---

##### `functionType`<sup>Required</sup> <a name="functionType" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.functionType"></a>

```java
public java.lang.String getFunctionType();
```

- *Type:* java.lang.String

The type of the function. Determines which configuration object is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#function_type MediatailorFunction#function_type}

---

##### `awsServiceRequestConfiguration`<sup>Optional</sup> <a name="awsServiceRequestConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.awsServiceRequestConfiguration"></a>

```java
public MediatailorFunctionAwsServiceRequestConfiguration getAwsServiceRequestConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration">MediatailorFunctionAwsServiceRequestConfiguration</a>

The configuration for an AWS_SERVICE_REQUEST function.

Contains the target service, target Region, and request parameters that the function uses to call an AWS service API. For more information, see AWS_SERVICE_REQUEST (https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions-types-aws-service-request.html) in the MediaTailor User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#aws_service_request_configuration MediatailorFunction#aws_service_request_configuration}

---

##### `concurrentExecutorConfiguration`<sup>Optional</sup> <a name="concurrentExecutorConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.concurrentExecutorConfiguration"></a>

```java
public MediatailorFunctionConcurrentExecutorConfiguration getConcurrentExecutorConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfiguration">MediatailorFunctionConcurrentExecutorConfiguration</a>

The configuration for a CONCURRENT_EXECUTOR function. Required when FunctionType is CONCURRENT_EXECUTOR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#concurrent_executor_configuration MediatailorFunction#concurrent_executor_configuration}

---

##### `customOutputConfiguration`<sup>Optional</sup> <a name="customOutputConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.customOutputConfiguration"></a>

```java
public MediatailorFunctionCustomOutputConfiguration getCustomOutputConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfiguration">MediatailorFunctionCustomOutputConfiguration</a>

Configuration for custom output functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#custom_output_configuration MediatailorFunction#custom_output_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#description MediatailorFunction#description}

---

##### `httpRequestConfiguration`<sup>Optional</sup> <a name="httpRequestConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.httpRequestConfiguration"></a>

```java
public MediatailorFunctionHttpRequestConfiguration getHttpRequestConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration">MediatailorFunctionHttpRequestConfiguration</a>

Configuration for HTTP request functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#http_request_configuration MediatailorFunction#http_request_configuration}

---

##### `sequentialExecutorConfiguration`<sup>Optional</sup> <a name="sequentialExecutorConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.sequentialExecutorConfiguration"></a>

```java
public MediatailorFunctionSequentialExecutorConfiguration getSequentialExecutorConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration">MediatailorFunctionSequentialExecutorConfiguration</a>

The configuration for a SEQUENTIAL_EXECUTOR function.

A SEQUENTIAL_EXECUTOR runs an ordered list of child functions one at a time, passing data between them. For more information about functions, see Working with functions (https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions.html) in the MediaTailor User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#sequential_executor_configuration MediatailorFunction#sequential_executor_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.tags"></a>

```java
public IResolvable|java.util.List<MediatailorFunctionTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags">MediatailorFunctionTags</a>>

The tags to assign to the function resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#tags MediatailorFunction#tags}

---

##### `vastRequestConfiguration`<sup>Optional</sup> <a name="vastRequestConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.vastRequestConfiguration"></a>

```java
public MediatailorFunctionVastRequestConfiguration getVastRequestConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfiguration">MediatailorFunctionVastRequestConfiguration</a>

The configuration for a VAST_REQUEST function.

Specifies the HTTP method, URL, headers, body, timeout, and output expressions for a request to a VAST endpoint. MediaTailor parses the response as VAST and resolves wrapper redirects, then makes the parsed ads available to the function's output expressions. For more information, see Function types and composition (https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions-types.html) in the MediaTailor User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#vast_request_configuration MediatailorFunction#vast_request_configuration}

---

### MediatailorFunctionCustomOutputConfiguration <a name="MediatailorFunctionCustomOutputConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_function.MediatailorFunctionCustomOutputConfiguration;

MediatailorFunctionCustomOutputConfiguration.builder()
//  .output(java.util.Map<java.lang.String, java.lang.String>)
//  .runtime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfiguration.property.output">output</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of output key-value pairs that define the custom output. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfiguration.property.runtime">runtime</a></code> | <code>java.lang.String</code> | The runtime environment for the function expression language. |

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfiguration.property.output"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of output key-value pairs that define the custom output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#output MediatailorFunction#output}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfiguration.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

The runtime environment for the function expression language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#runtime MediatailorFunction#runtime}

---

### MediatailorFunctionHttpRequestConfiguration <a name="MediatailorFunctionHttpRequestConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_function.MediatailorFunctionHttpRequestConfiguration;

MediatailorFunctionHttpRequestConfiguration.builder()
//  .body(java.lang.String)
//  .headers(java.util.Map<java.lang.String, java.lang.String>)
//  .methodType(java.lang.String)
//  .output(java.util.Map<java.lang.String, java.lang.String>)
//  .requestTimeoutMilliseconds(java.lang.Number)
//  .runtime(java.lang.String)
//  .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.property.body">body</a></code> | <code>java.lang.String</code> | The body of the HTTP request. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of HTTP headers to include in the request. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.property.methodType">methodType</a></code> | <code>java.lang.String</code> | The HTTP method type for the request. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.property.output">output</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of output key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.property.requestTimeoutMilliseconds">requestTimeoutMilliseconds</a></code> | <code>java.lang.Number</code> | The timeout in milliseconds for the HTTP request. Maximum value is 2000. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.property.runtime">runtime</a></code> | <code>java.lang.String</code> | The runtime environment for the function expression language. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.property.url">url</a></code> | <code>java.lang.String</code> | The URL endpoint for the HTTP request. |

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

The body of the HTTP request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#body MediatailorFunction#body}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of HTTP headers to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#headers MediatailorFunction#headers}

---

##### `methodType`<sup>Optional</sup> <a name="methodType" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.property.methodType"></a>

```java
public java.lang.String getMethodType();
```

- *Type:* java.lang.String

The HTTP method type for the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#method_type MediatailorFunction#method_type}

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.property.output"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of output key-value pairs.

Keys must start with session., temp., avail., scte., or be a valid adsRequest directive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#output MediatailorFunction#output}

---

##### `requestTimeoutMilliseconds`<sup>Optional</sup> <a name="requestTimeoutMilliseconds" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.property.requestTimeoutMilliseconds"></a>

```java
public java.lang.Number getRequestTimeoutMilliseconds();
```

- *Type:* java.lang.Number

The timeout in milliseconds for the HTTP request. Maximum value is 2000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#request_timeout_milliseconds MediatailorFunction#request_timeout_milliseconds}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

The runtime environment for the function expression language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#runtime MediatailorFunction#runtime}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

The URL endpoint for the HTTP request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#url MediatailorFunction#url}

---

### MediatailorFunctionSequentialExecutorConfiguration <a name="MediatailorFunctionSequentialExecutorConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_function.MediatailorFunctionSequentialExecutorConfiguration;

MediatailorFunctionSequentialExecutorConfiguration.builder()
//  .functionList(IResolvable|java.util.List<MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct>)
//  .output(java.util.Map<java.lang.String, java.lang.String>)
//  .runtime(java.lang.String)
//  .timeoutMilliseconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration.property.functionList">functionList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct">MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct</a>></code> | An ordered list of 1 to 10 steps. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration.property.output">output</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of output bindings that controls which bindings the sequence commits to the session state after all steps complete. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration.property.runtime">runtime</a></code> | <code>java.lang.String</code> | The expression language used to evaluate expressions in the function configuration. Set this to JSONATA. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration.property.timeoutMilliseconds">timeoutMilliseconds</a></code> | <code>java.lang.Number</code> | The maximum time, in milliseconds, for the entire sequence to complete. |

---

##### `functionList`<sup>Optional</sup> <a name="functionList" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration.property.functionList"></a>

```java
public IResolvable|java.util.List<MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct> getFunctionList();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct">MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct</a>>

An ordered list of 1 to 10 steps.

Each step specifies a child function to execute and an optional run condition expression that controls whether the step runs. MediaTailor executes the steps in order, passing data between steps through temporary data. Each step's resolved namespace must be unique across the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#function_list MediatailorFunction#function_list}

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration.property.output"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of output bindings that controls which bindings the sequence commits to the session state after all steps complete.

Each key is a namespaced output path, and each value is an expression that MediaTailor evaluates against the accumulated results of the steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#output MediatailorFunction#output}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

The expression language used to evaluate expressions in the function configuration. Set this to JSONATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#runtime MediatailorFunction#runtime}

---

##### `timeoutMilliseconds`<sup>Optional</sup> <a name="timeoutMilliseconds" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration.property.timeoutMilliseconds"></a>

```java
public java.lang.Number getTimeoutMilliseconds();
```

- *Type:* java.lang.Number

The maximum time, in milliseconds, for the entire sequence to complete.

This timeout covers all steps, including any HTTP calls made by child functions. If the sequence exceeds this timeout, MediaTailor discards all output from the sequence and proceeds with default behavior. Valid values are 100 to 2000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#timeout_milliseconds MediatailorFunction#timeout_milliseconds}

---

### MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct <a name="MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_function.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct;

MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct.builder()
//  .alias(java.lang.String)
//  .functionId(java.lang.String)
//  .runCondition(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct.property.alias">alias</a></code> | <code>java.lang.String</code> | An optional alternate name for the child function within the executor. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct.property.functionId">functionId</a></code> | <code>java.lang.String</code> | The identifier of the child function to execute. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct.property.runCondition">runCondition</a></code> | <code>java.lang.String</code> | An optional expression that evaluates to a boolean. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

An optional alternate name for the child function within the executor.

MediaTailor uses this value as the namespace for the child function's output. If omitted, MediaTailor uses the function identifier. The resolved namespace must be unique across all child functions in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#alias MediatailorFunction#alias}

---

##### `functionId`<sup>Optional</sup> <a name="functionId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct.property.functionId"></a>

```java
public java.lang.String getFunctionId();
```

- *Type:* java.lang.String

The identifier of the child function to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#function_id MediatailorFunction#function_id}

---

##### `runCondition`<sup>Optional</sup> <a name="runCondition" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct.property.runCondition"></a>

```java
public java.lang.String getRunCondition();
```

- *Type:* java.lang.String

An optional expression that evaluates to a boolean.

MediaTailor evaluates this expression immediately before running the child function, using the accumulated state at that point. If the expression evaluates to false, MediaTailor skips the child function. If omitted, the child function always runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#run_condition MediatailorFunction#run_condition}

---

### MediatailorFunctionTags <a name="MediatailorFunctionTags" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_function.MediatailorFunctionTags;

MediatailorFunctionTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#key MediatailorFunction#key}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#value MediatailorFunction#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#key MediatailorFunction#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#value MediatailorFunction#value}.

---

### MediatailorFunctionVastRequestConfiguration <a name="MediatailorFunctionVastRequestConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_function.MediatailorFunctionVastRequestConfiguration;

MediatailorFunctionVastRequestConfiguration.builder()
//  .body(java.lang.String)
//  .headers(java.util.Map<java.lang.String, java.lang.String>)
//  .methodType(java.lang.String)
//  .output(java.util.Map<java.lang.String, java.lang.String>)
//  .requestTimeoutMilliseconds(java.lang.Number)
//  .runtime(java.lang.String)
//  .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfiguration.property.body">body</a></code> | <code>java.lang.String</code> | An expression that evaluates to the request body, for example to send an OpenRTB bid request. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfiguration.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of HTTP header names to expression values. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfiguration.property.methodType">methodType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#method_type MediatailorFunction#method_type}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfiguration.property.output">output</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of output bindings. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfiguration.property.requestTimeoutMilliseconds">requestTimeoutMilliseconds</a></code> | <code>java.lang.Number</code> | The maximum time, in milliseconds, that MediaTailor waits for a response from the VAST endpoint. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfiguration.property.runtime">runtime</a></code> | <code>java.lang.String</code> | The expression language used to evaluate expressions in the function configuration. Set this to JSONATA. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfiguration.property.url">url</a></code> | <code>java.lang.String</code> | An expression that evaluates to the VAST endpoint URL. |

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfiguration.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

An expression that evaluates to the request body, for example to send an OpenRTB bid request.

The expression can be up to 100,000 characters, and the body after evaluation can be up to 64 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#body MediatailorFunction#body}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfiguration.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of HTTP header names to expression values.

MediaTailor evaluates each header value expression at runtime and includes the result in the outbound request. Headers beginning with X-Amz- are reserved by the service, and method override headers are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#headers MediatailorFunction#headers}

---

##### `methodType`<sup>Optional</sup> <a name="methodType" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfiguration.property.methodType"></a>

```java
public java.lang.String getMethodType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#method_type MediatailorFunction#method_type}.

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfiguration.property.output"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of output bindings.

Each key is a namespaced output path (such as temp.wrappedAds), and each value is an expression that MediaTailor evaluates at runtime. Output expressions in a VAST_REQUEST function can reference the response object, which exposes response.parsedAds, the ads parsed from the VAST response after schema validation and wrapper resolution, and response.statusCode. For more information about expression syntax, see JSONata expression reference (https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions-jsonata.html) in the MediaTailor User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#output MediatailorFunction#output}

---

##### `requestTimeoutMilliseconds`<sup>Optional</sup> <a name="requestTimeoutMilliseconds" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfiguration.property.requestTimeoutMilliseconds"></a>

```java
public java.lang.Number getRequestTimeoutMilliseconds();
```

- *Type:* java.lang.Number

The maximum time, in milliseconds, that MediaTailor waits for a response from the VAST endpoint.

The timeout covers the entire response, including any wrapper redirects that MediaTailor follows. If the call exceeds this timeout, MediaTailor proceeds with an empty ad list and continues output expression evaluation. Valid values are 100 to 2000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#request_timeout_milliseconds MediatailorFunction#request_timeout_milliseconds}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfiguration.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

The expression language used to evaluate expressions in the function configuration. Set this to JSONATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#runtime MediatailorFunction#runtime}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfiguration.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

An expression that evaluates to the VAST endpoint URL.

Use {%...%} delimiters for dynamic expressions. A literal value must be an https:// URL. The expression can be up to 25,000 characters, and the URL after evaluation can be up to 2,048 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#url MediatailorFunction#url}

---

## Classes <a name="Classes" id="Classes"></a>

### MediatailorFunctionAwsServiceRequestConfigurationOutputReference <a name="MediatailorFunctionAwsServiceRequestConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_function.MediatailorFunctionAwsServiceRequestConfigurationOutputReference;

new MediatailorFunctionAwsServiceRequestConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.resetMethodType">resetMethodType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.resetOutput">resetOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.resetRequestTimeoutMilliseconds">resetRequestTimeoutMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.resetTargetRegion">resetTargetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.resetTargetService">resetTargetService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBody` <a name="resetBody" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.resetBody"></a>

```java
public void resetBody()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetMethodType` <a name="resetMethodType" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.resetMethodType"></a>

```java
public void resetMethodType()
```

##### `resetOutput` <a name="resetOutput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.resetOutput"></a>

```java
public void resetOutput()
```

##### `resetRequestTimeoutMilliseconds` <a name="resetRequestTimeoutMilliseconds" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.resetRequestTimeoutMilliseconds"></a>

```java
public void resetRequestTimeoutMilliseconds()
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.resetRuntime"></a>

```java
public void resetRuntime()
```

##### `resetTargetRegion` <a name="resetTargetRegion" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.resetTargetRegion"></a>

```java
public void resetTargetRegion()
```

##### `resetTargetService` <a name="resetTargetService" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.resetTargetService"></a>

```java
public void resetTargetService()
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.resetUrl"></a>

```java
public void resetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.bodyInput">bodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.headersInput">headersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.methodTypeInput">methodTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.outputInput">outputInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.requestTimeoutMillisecondsInput">requestTimeoutMillisecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.runtimeInput">runtimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.targetRegionInput">targetRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.targetServiceInput">targetServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.methodType">methodType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.output">output</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.requestTimeoutMilliseconds">requestTimeoutMilliseconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.runtime">runtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.targetRegion">targetRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.targetService">targetService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration">MediatailorFunctionAwsServiceRequestConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.bodyInput"></a>

```java
public java.lang.String getBodyInput();
```

- *Type:* java.lang.String

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.headersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `methodTypeInput`<sup>Optional</sup> <a name="methodTypeInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.methodTypeInput"></a>

```java
public java.lang.String getMethodTypeInput();
```

- *Type:* java.lang.String

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.outputInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutputInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `requestTimeoutMillisecondsInput`<sup>Optional</sup> <a name="requestTimeoutMillisecondsInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.requestTimeoutMillisecondsInput"></a>

```java
public java.lang.Number getRequestTimeoutMillisecondsInput();
```

- *Type:* java.lang.Number

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.runtimeInput"></a>

```java
public java.lang.String getRuntimeInput();
```

- *Type:* java.lang.String

---

##### `targetRegionInput`<sup>Optional</sup> <a name="targetRegionInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.targetRegionInput"></a>

```java
public java.lang.String getTargetRegionInput();
```

- *Type:* java.lang.String

---

##### `targetServiceInput`<sup>Optional</sup> <a name="targetServiceInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.targetServiceInput"></a>

```java
public java.lang.String getTargetServiceInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `methodType`<sup>Required</sup> <a name="methodType" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.methodType"></a>

```java
public java.lang.String getMethodType();
```

- *Type:* java.lang.String

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.output"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `requestTimeoutMilliseconds`<sup>Required</sup> <a name="requestTimeoutMilliseconds" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.requestTimeoutMilliseconds"></a>

```java
public java.lang.Number getRequestTimeoutMilliseconds();
```

- *Type:* java.lang.Number

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

---

##### `targetRegion`<sup>Required</sup> <a name="targetRegion" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.targetRegion"></a>

```java
public java.lang.String getTargetRegion();
```

- *Type:* java.lang.String

---

##### `targetService`<sup>Required</sup> <a name="targetService" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.targetService"></a>

```java
public java.lang.String getTargetService();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorFunctionAwsServiceRequestConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionAwsServiceRequestConfiguration">MediatailorFunctionAwsServiceRequestConfiguration</a>

---


### MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList <a name="MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_function.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList;

new MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList.get"></a>

```java
public MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct">MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct">MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct</a>>

---


### MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference <a name="MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_function.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference;

new MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.resetFunctionId">resetFunctionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.resetRunCondition">resetRunCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetFunctionId` <a name="resetFunctionId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.resetFunctionId"></a>

```java
public void resetFunctionId()
```

##### `resetRunCondition` <a name="resetRunCondition" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.resetRunCondition"></a>

```java
public void resetRunCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.property.functionIdInput">functionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.property.runConditionInput">runConditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.property.functionId">functionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.property.runCondition">runCondition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct">MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `functionIdInput`<sup>Optional</sup> <a name="functionIdInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.property.functionIdInput"></a>

```java
public java.lang.String getFunctionIdInput();
```

- *Type:* java.lang.String

---

##### `runConditionInput`<sup>Optional</sup> <a name="runConditionInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.property.runConditionInput"></a>

```java
public java.lang.String getRunConditionInput();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.property.functionId"></a>

```java
public java.lang.String getFunctionId();
```

- *Type:* java.lang.String

---

##### `runCondition`<sup>Required</sup> <a name="runCondition" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.property.runCondition"></a>

```java
public java.lang.String getRunCondition();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct">MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct</a>

---


### MediatailorFunctionConcurrentExecutorConfigurationOutputReference <a name="MediatailorFunctionConcurrentExecutorConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_function.MediatailorFunctionConcurrentExecutorConfigurationOutputReference;

new MediatailorFunctionConcurrentExecutorConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.putFunctionList">putFunctionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.resetFunctionList">resetFunctionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.resetMaxConcurrency">resetMaxConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.resetOutput">resetOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.resetTimeoutMilliseconds">resetTimeoutMilliseconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFunctionList` <a name="putFunctionList" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.putFunctionList"></a>

```java
public void putFunctionList(IResolvable|java.util.List<MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.putFunctionList.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct">MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct</a>>

---

##### `resetFunctionList` <a name="resetFunctionList" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.resetFunctionList"></a>

```java
public void resetFunctionList()
```

##### `resetMaxConcurrency` <a name="resetMaxConcurrency" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.resetMaxConcurrency"></a>

```java
public void resetMaxConcurrency()
```

##### `resetOutput` <a name="resetOutput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.resetOutput"></a>

```java
public void resetOutput()
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.resetRuntime"></a>

```java
public void resetRuntime()
```

##### `resetTimeoutMilliseconds` <a name="resetTimeoutMilliseconds" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.resetTimeoutMilliseconds"></a>

```java
public void resetTimeoutMilliseconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.property.functionList">functionList</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList">MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.property.functionListInput">functionListInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct">MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.property.maxConcurrencyInput">maxConcurrencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.property.outputInput">outputInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.property.runtimeInput">runtimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.property.timeoutMillisecondsInput">timeoutMillisecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.property.maxConcurrency">maxConcurrency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.property.output">output</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.property.runtime">runtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.property.timeoutMilliseconds">timeoutMilliseconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfiguration">MediatailorFunctionConcurrentExecutorConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `functionList`<sup>Required</sup> <a name="functionList" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.property.functionList"></a>

```java
public MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList getFunctionList();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList">MediatailorFunctionConcurrentExecutorConfigurationFunctionListStructList</a>

---

##### `functionListInput`<sup>Optional</sup> <a name="functionListInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.property.functionListInput"></a>

```java
public IResolvable|java.util.List<MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct> getFunctionListInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct">MediatailorFunctionConcurrentExecutorConfigurationFunctionListStruct</a>>

---

##### `maxConcurrencyInput`<sup>Optional</sup> <a name="maxConcurrencyInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.property.maxConcurrencyInput"></a>

```java
public java.lang.Number getMaxConcurrencyInput();
```

- *Type:* java.lang.Number

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.property.outputInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutputInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.property.runtimeInput"></a>

```java
public java.lang.String getRuntimeInput();
```

- *Type:* java.lang.String

---

##### `timeoutMillisecondsInput`<sup>Optional</sup> <a name="timeoutMillisecondsInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.property.timeoutMillisecondsInput"></a>

```java
public java.lang.Number getTimeoutMillisecondsInput();
```

- *Type:* java.lang.Number

---

##### `maxConcurrency`<sup>Required</sup> <a name="maxConcurrency" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.property.maxConcurrency"></a>

```java
public java.lang.Number getMaxConcurrency();
```

- *Type:* java.lang.Number

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.property.output"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

---

##### `timeoutMilliseconds`<sup>Required</sup> <a name="timeoutMilliseconds" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.property.timeoutMilliseconds"></a>

```java
public java.lang.Number getTimeoutMilliseconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorFunctionConcurrentExecutorConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConcurrentExecutorConfiguration">MediatailorFunctionConcurrentExecutorConfiguration</a>

---


### MediatailorFunctionCustomOutputConfigurationOutputReference <a name="MediatailorFunctionCustomOutputConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_function.MediatailorFunctionCustomOutputConfigurationOutputReference;

new MediatailorFunctionCustomOutputConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.resetOutput">resetOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.resetRuntime">resetRuntime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOutput` <a name="resetOutput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.resetOutput"></a>

```java
public void resetOutput()
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.resetRuntime"></a>

```java
public void resetRuntime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.property.outputInput">outputInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.property.runtimeInput">runtimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.property.output">output</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.property.runtime">runtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfiguration">MediatailorFunctionCustomOutputConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.property.outputInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutputInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.property.runtimeInput"></a>

```java
public java.lang.String getRuntimeInput();
```

- *Type:* java.lang.String

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.property.output"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorFunctionCustomOutputConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfiguration">MediatailorFunctionCustomOutputConfiguration</a>

---


### MediatailorFunctionHttpRequestConfigurationOutputReference <a name="MediatailorFunctionHttpRequestConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_function.MediatailorFunctionHttpRequestConfigurationOutputReference;

new MediatailorFunctionHttpRequestConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resetMethodType">resetMethodType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resetOutput">resetOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resetRequestTimeoutMilliseconds">resetRequestTimeoutMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBody` <a name="resetBody" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resetBody"></a>

```java
public void resetBody()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetMethodType` <a name="resetMethodType" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resetMethodType"></a>

```java
public void resetMethodType()
```

##### `resetOutput` <a name="resetOutput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resetOutput"></a>

```java
public void resetOutput()
```

##### `resetRequestTimeoutMilliseconds` <a name="resetRequestTimeoutMilliseconds" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resetRequestTimeoutMilliseconds"></a>

```java
public void resetRequestTimeoutMilliseconds()
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resetRuntime"></a>

```java
public void resetRuntime()
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resetUrl"></a>

```java
public void resetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.bodyInput">bodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.headersInput">headersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.methodTypeInput">methodTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.outputInput">outputInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.requestTimeoutMillisecondsInput">requestTimeoutMillisecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.runtimeInput">runtimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.methodType">methodType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.output">output</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.requestTimeoutMilliseconds">requestTimeoutMilliseconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.runtime">runtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration">MediatailorFunctionHttpRequestConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.bodyInput"></a>

```java
public java.lang.String getBodyInput();
```

- *Type:* java.lang.String

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.headersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `methodTypeInput`<sup>Optional</sup> <a name="methodTypeInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.methodTypeInput"></a>

```java
public java.lang.String getMethodTypeInput();
```

- *Type:* java.lang.String

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.outputInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutputInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `requestTimeoutMillisecondsInput`<sup>Optional</sup> <a name="requestTimeoutMillisecondsInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.requestTimeoutMillisecondsInput"></a>

```java
public java.lang.Number getRequestTimeoutMillisecondsInput();
```

- *Type:* java.lang.Number

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.runtimeInput"></a>

```java
public java.lang.String getRuntimeInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `methodType`<sup>Required</sup> <a name="methodType" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.methodType"></a>

```java
public java.lang.String getMethodType();
```

- *Type:* java.lang.String

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.output"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `requestTimeoutMilliseconds`<sup>Required</sup> <a name="requestTimeoutMilliseconds" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.requestTimeoutMilliseconds"></a>

```java
public java.lang.Number getRequestTimeoutMilliseconds();
```

- *Type:* java.lang.Number

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorFunctionHttpRequestConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration">MediatailorFunctionHttpRequestConfiguration</a>

---


### MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList <a name="MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_function.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList;

new MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.get"></a>

```java
public MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct">MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct">MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct</a>>

---


### MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference <a name="MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_function.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference;

new MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.resetFunctionId">resetFunctionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.resetRunCondition">resetRunCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetFunctionId` <a name="resetFunctionId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.resetFunctionId"></a>

```java
public void resetFunctionId()
```

##### `resetRunCondition` <a name="resetRunCondition" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.resetRunCondition"></a>

```java
public void resetRunCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.functionIdInput">functionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.runConditionInput">runConditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.functionId">functionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.runCondition">runCondition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct">MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `functionIdInput`<sup>Optional</sup> <a name="functionIdInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.functionIdInput"></a>

```java
public java.lang.String getFunctionIdInput();
```

- *Type:* java.lang.String

---

##### `runConditionInput`<sup>Optional</sup> <a name="runConditionInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.runConditionInput"></a>

```java
public java.lang.String getRunConditionInput();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.functionId"></a>

```java
public java.lang.String getFunctionId();
```

- *Type:* java.lang.String

---

##### `runCondition`<sup>Required</sup> <a name="runCondition" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.runCondition"></a>

```java
public java.lang.String getRunCondition();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct">MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct</a>

---


### MediatailorFunctionSequentialExecutorConfigurationOutputReference <a name="MediatailorFunctionSequentialExecutorConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_function.MediatailorFunctionSequentialExecutorConfigurationOutputReference;

new MediatailorFunctionSequentialExecutorConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.putFunctionList">putFunctionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.resetFunctionList">resetFunctionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.resetOutput">resetOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.resetTimeoutMilliseconds">resetTimeoutMilliseconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFunctionList` <a name="putFunctionList" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.putFunctionList"></a>

```java
public void putFunctionList(IResolvable|java.util.List<MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.putFunctionList.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct">MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct</a>>

---

##### `resetFunctionList` <a name="resetFunctionList" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.resetFunctionList"></a>

```java
public void resetFunctionList()
```

##### `resetOutput` <a name="resetOutput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.resetOutput"></a>

```java
public void resetOutput()
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.resetRuntime"></a>

```java
public void resetRuntime()
```

##### `resetTimeoutMilliseconds` <a name="resetTimeoutMilliseconds" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.resetTimeoutMilliseconds"></a>

```java
public void resetTimeoutMilliseconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.functionList">functionList</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList">MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.functionListInput">functionListInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct">MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.outputInput">outputInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.runtimeInput">runtimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.timeoutMillisecondsInput">timeoutMillisecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.output">output</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.runtime">runtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.timeoutMilliseconds">timeoutMilliseconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration">MediatailorFunctionSequentialExecutorConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `functionList`<sup>Required</sup> <a name="functionList" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.functionList"></a>

```java
public MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList getFunctionList();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList">MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList</a>

---

##### `functionListInput`<sup>Optional</sup> <a name="functionListInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.functionListInput"></a>

```java
public IResolvable|java.util.List<MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct> getFunctionListInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct">MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct</a>>

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.outputInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutputInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.runtimeInput"></a>

```java
public java.lang.String getRuntimeInput();
```

- *Type:* java.lang.String

---

##### `timeoutMillisecondsInput`<sup>Optional</sup> <a name="timeoutMillisecondsInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.timeoutMillisecondsInput"></a>

```java
public java.lang.Number getTimeoutMillisecondsInput();
```

- *Type:* java.lang.Number

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.output"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

---

##### `timeoutMilliseconds`<sup>Required</sup> <a name="timeoutMilliseconds" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.timeoutMilliseconds"></a>

```java
public java.lang.Number getTimeoutMilliseconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorFunctionSequentialExecutorConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration">MediatailorFunctionSequentialExecutorConfiguration</a>

---


### MediatailorFunctionTagsList <a name="MediatailorFunctionTagsList" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_function.MediatailorFunctionTagsList;

new MediatailorFunctionTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.get"></a>

```java
public MediatailorFunctionTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags">MediatailorFunctionTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MediatailorFunctionTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags">MediatailorFunctionTags</a>>

---


### MediatailorFunctionTagsOutputReference <a name="MediatailorFunctionTagsOutputReference" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_function.MediatailorFunctionTagsOutputReference;

new MediatailorFunctionTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags">MediatailorFunctionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorFunctionTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags">MediatailorFunctionTags</a>

---


### MediatailorFunctionVastRequestConfigurationOutputReference <a name="MediatailorFunctionVastRequestConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_function.MediatailorFunctionVastRequestConfigurationOutputReference;

new MediatailorFunctionVastRequestConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.resetMethodType">resetMethodType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.resetOutput">resetOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.resetRequestTimeoutMilliseconds">resetRequestTimeoutMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBody` <a name="resetBody" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.resetBody"></a>

```java
public void resetBody()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetMethodType` <a name="resetMethodType" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.resetMethodType"></a>

```java
public void resetMethodType()
```

##### `resetOutput` <a name="resetOutput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.resetOutput"></a>

```java
public void resetOutput()
```

##### `resetRequestTimeoutMilliseconds` <a name="resetRequestTimeoutMilliseconds" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.resetRequestTimeoutMilliseconds"></a>

```java
public void resetRequestTimeoutMilliseconds()
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.resetRuntime"></a>

```java
public void resetRuntime()
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.resetUrl"></a>

```java
public void resetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.bodyInput">bodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.headersInput">headersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.methodTypeInput">methodTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.outputInput">outputInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.requestTimeoutMillisecondsInput">requestTimeoutMillisecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.runtimeInput">runtimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.methodType">methodType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.output">output</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.requestTimeoutMilliseconds">requestTimeoutMilliseconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.runtime">runtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfiguration">MediatailorFunctionVastRequestConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.bodyInput"></a>

```java
public java.lang.String getBodyInput();
```

- *Type:* java.lang.String

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.headersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `methodTypeInput`<sup>Optional</sup> <a name="methodTypeInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.methodTypeInput"></a>

```java
public java.lang.String getMethodTypeInput();
```

- *Type:* java.lang.String

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.outputInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutputInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `requestTimeoutMillisecondsInput`<sup>Optional</sup> <a name="requestTimeoutMillisecondsInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.requestTimeoutMillisecondsInput"></a>

```java
public java.lang.Number getRequestTimeoutMillisecondsInput();
```

- *Type:* java.lang.Number

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.runtimeInput"></a>

```java
public java.lang.String getRuntimeInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `methodType`<sup>Required</sup> <a name="methodType" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.methodType"></a>

```java
public java.lang.String getMethodType();
```

- *Type:* java.lang.String

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.output"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `requestTimeoutMilliseconds`<sup>Required</sup> <a name="requestTimeoutMilliseconds" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.requestTimeoutMilliseconds"></a>

```java
public java.lang.Number getRequestTimeoutMilliseconds();
```

- *Type:* java.lang.Number

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorFunctionVastRequestConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionVastRequestConfiguration">MediatailorFunctionVastRequestConfiguration</a>

---



