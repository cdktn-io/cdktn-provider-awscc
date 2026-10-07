# `lambdaWebFunctionEndpoint` Submodule <a name="`lambdaWebFunctionEndpoint` Submodule" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaWebFunctionEndpoint <a name="LambdaWebFunctionEndpoint" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint awscc_lambda_web_function_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_endpoint.LambdaWebFunctionEndpoint;

LambdaWebFunctionEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authType(java.lang.String)
    .endpointName(java.lang.String)
    .endpointType(java.lang.String)
    .functionName(java.lang.String)
//  .description(java.lang.String)
//  .regions(java.util.List<java.lang.String>)
//  .revisionWeights(IResolvable|java.util.List<LambdaWebFunctionEndpointRevisionWeights>)
//  .scalingConfig(LambdaWebFunctionEndpointScalingConfig)
//  .throttleConfig(LambdaWebFunctionEndpointThrottleConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.authType">authType</a></code> | <code>java.lang.String</code> | The authentication type for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.endpointName">endpointName</a></code> | <code>java.lang.String</code> | The name of the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.endpointType">endpointType</a></code> | <code>java.lang.String</code> | The type of the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.functionName">functionName</a></code> | <code>java.lang.String</code> | The name of the web function this endpoint belongs to. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | The list of AWS Regions for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.revisionWeights">revisionWeights</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights">LambdaWebFunctionEndpointRevisionWeights</a>></code> | List of revision routing entries. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.scalingConfig">scalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig">LambdaWebFunctionEndpointScalingConfig</a></code> | The scaling configuration for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.throttleConfig">throttleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig">LambdaWebFunctionEndpointThrottleConfig</a></code> | The throttling configuration for the endpoint. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.authType"></a>

- *Type:* java.lang.String

The authentication type for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#auth_type LambdaWebFunctionEndpoint#auth_type}

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.endpointName"></a>

- *Type:* java.lang.String

The name of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#endpoint_name LambdaWebFunctionEndpoint#endpoint_name}

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.endpointType"></a>

- *Type:* java.lang.String

The type of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#endpoint_type LambdaWebFunctionEndpoint#endpoint_type}

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.functionName"></a>

- *Type:* java.lang.String

The name of the web function this endpoint belongs to.

The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#function_name LambdaWebFunctionEndpoint#function_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#description LambdaWebFunctionEndpoint#description}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.regions"></a>

- *Type:* java.util.List<java.lang.String>

The list of AWS Regions for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#regions LambdaWebFunctionEndpoint#regions}

---

##### `revisionWeights`<sup>Optional</sup> <a name="revisionWeights" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.revisionWeights"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights">LambdaWebFunctionEndpointRevisionWeights</a>>

List of revision routing entries.

1 or 2 entries. With 1 entry, weight must be 100. With 2 entries, weights must sum to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#revision_weights LambdaWebFunctionEndpoint#revision_weights}

---

##### `scalingConfig`<sup>Optional</sup> <a name="scalingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.scalingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig">LambdaWebFunctionEndpointScalingConfig</a>

The scaling configuration for the endpoint.

Optionally constrains how many concurrent execution environments the endpoint can use, in addition to your account's vCPU quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#scaling_config LambdaWebFunctionEndpoint#scaling_config}

---

##### `throttleConfig`<sup>Optional</sup> <a name="throttleConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.throttleConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig">LambdaWebFunctionEndpointThrottleConfig</a>

The throttling configuration for the endpoint.

Optionally constrains the request rate that the endpoint accepts, in addition to your account's rate limit quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#throttle_config LambdaWebFunctionEndpoint#throttle_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.putRevisionWeights">putRevisionWeights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.putScalingConfig">putScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.putThrottleConfig">putThrottleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetRegions">resetRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetRevisionWeights">resetRevisionWeights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetScalingConfig">resetScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetThrottleConfig">resetThrottleConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRevisionWeights` <a name="putRevisionWeights" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.putRevisionWeights"></a>

```java
public void putRevisionWeights(IResolvable|java.util.List<LambdaWebFunctionEndpointRevisionWeights> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.putRevisionWeights.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights">LambdaWebFunctionEndpointRevisionWeights</a>>

---

##### `putScalingConfig` <a name="putScalingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.putScalingConfig"></a>

```java
public void putScalingConfig(LambdaWebFunctionEndpointScalingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.putScalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig">LambdaWebFunctionEndpointScalingConfig</a>

---

##### `putThrottleConfig` <a name="putThrottleConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.putThrottleConfig"></a>

```java
public void putThrottleConfig(LambdaWebFunctionEndpointThrottleConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.putThrottleConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig">LambdaWebFunctionEndpointThrottleConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetRegions` <a name="resetRegions" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetRegions"></a>

```java
public void resetRegions()
```

##### `resetRevisionWeights` <a name="resetRevisionWeights" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetRevisionWeights"></a>

```java
public void resetRevisionWeights()
```

##### `resetScalingConfig` <a name="resetScalingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetScalingConfig"></a>

```java
public void resetScalingConfig()
```

##### `resetThrottleConfig` <a name="resetThrottleConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetThrottleConfig"></a>

```java
public void resetThrottleConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaWebFunctionEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.isConstruct"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_endpoint.LambdaWebFunctionEndpoint;

LambdaWebFunctionEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_endpoint.LambdaWebFunctionEndpoint;

LambdaWebFunctionEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_endpoint.LambdaWebFunctionEndpoint;

LambdaWebFunctionEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_endpoint.LambdaWebFunctionEndpoint;

LambdaWebFunctionEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LambdaWebFunctionEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LambdaWebFunctionEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LambdaWebFunctionEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LambdaWebFunctionEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LambdaWebFunctionEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointArn">endpointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.functionArn">functionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.regionalEndpoints">regionalEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap">LambdaWebFunctionEndpointRegionalEndpointsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.revisionWeights">revisionWeights</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList">LambdaWebFunctionEndpointRevisionWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.scalingConfig">scalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference">LambdaWebFunctionEndpointScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.stateReason">stateReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.throttleConfig">throttleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference">LambdaWebFunctionEndpointThrottleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.updateStatus">updateStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.updateStatusReason">updateStatusReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointNameInput">endpointNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointTypeInput">endpointTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.regionsInput">regionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.revisionWeightsInput">revisionWeightsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights">LambdaWebFunctionEndpointRevisionWeights</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.scalingConfigInput">scalingConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig">LambdaWebFunctionEndpointScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.throttleConfigInput">throttleConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig">LambdaWebFunctionEndpointThrottleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointName">endpointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `endpointArn`<sup>Required</sup> <a name="endpointArn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointArn"></a>

```java
public java.lang.String getEndpointArn();
```

- *Type:* java.lang.String

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.functionArn"></a>

```java
public java.lang.String getFunctionArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `regionalEndpoints`<sup>Required</sup> <a name="regionalEndpoints" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.regionalEndpoints"></a>

```java
public LambdaWebFunctionEndpointRegionalEndpointsMap getRegionalEndpoints();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap">LambdaWebFunctionEndpointRegionalEndpointsMap</a>

---

##### `revisionWeights`<sup>Required</sup> <a name="revisionWeights" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.revisionWeights"></a>

```java
public LambdaWebFunctionEndpointRevisionWeightsList getRevisionWeights();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList">LambdaWebFunctionEndpointRevisionWeightsList</a>

---

##### `scalingConfig`<sup>Required</sup> <a name="scalingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.scalingConfig"></a>

```java
public LambdaWebFunctionEndpointScalingConfigOutputReference getScalingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference">LambdaWebFunctionEndpointScalingConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateReason`<sup>Required</sup> <a name="stateReason" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.stateReason"></a>

```java
public java.lang.String getStateReason();
```

- *Type:* java.lang.String

---

##### `throttleConfig`<sup>Required</sup> <a name="throttleConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.throttleConfig"></a>

```java
public LambdaWebFunctionEndpointThrottleConfigOutputReference getThrottleConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference">LambdaWebFunctionEndpointThrottleConfigOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `updateStatus`<sup>Required</sup> <a name="updateStatus" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.updateStatus"></a>

```java
public java.lang.String getUpdateStatus();
```

- *Type:* java.lang.String

---

##### `updateStatusReason`<sup>Required</sup> <a name="updateStatusReason" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.updateStatusReason"></a>

```java
public java.lang.String getUpdateStatusReason();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `endpointNameInput`<sup>Optional</sup> <a name="endpointNameInput" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointNameInput"></a>

```java
public java.lang.String getEndpointNameInput();
```

- *Type:* java.lang.String

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointTypeInput"></a>

```java
public java.lang.String getEndpointTypeInput();
```

- *Type:* java.lang.String

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.regionsInput"></a>

```java
public java.util.List<java.lang.String> getRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `revisionWeightsInput`<sup>Optional</sup> <a name="revisionWeightsInput" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.revisionWeightsInput"></a>

```java
public IResolvable|java.util.List<LambdaWebFunctionEndpointRevisionWeights> getRevisionWeightsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights">LambdaWebFunctionEndpointRevisionWeights</a>>

---

##### `scalingConfigInput`<sup>Optional</sup> <a name="scalingConfigInput" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.scalingConfigInput"></a>

```java
public IResolvable|LambdaWebFunctionEndpointScalingConfig getScalingConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig">LambdaWebFunctionEndpointScalingConfig</a>

---

##### `throttleConfigInput`<sup>Optional</sup> <a name="throttleConfigInput" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.throttleConfigInput"></a>

```java
public IResolvable|LambdaWebFunctionEndpointThrottleConfig getThrottleConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig">LambdaWebFunctionEndpointThrottleConfig</a>

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointName"></a>

```java
public java.lang.String getEndpointName();
```

- *Type:* java.lang.String

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaWebFunctionEndpointConfig <a name="LambdaWebFunctionEndpointConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_endpoint.LambdaWebFunctionEndpointConfig;

LambdaWebFunctionEndpointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authType(java.lang.String)
    .endpointName(java.lang.String)
    .endpointType(java.lang.String)
    .functionName(java.lang.String)
//  .description(java.lang.String)
//  .regions(java.util.List<java.lang.String>)
//  .revisionWeights(IResolvable|java.util.List<LambdaWebFunctionEndpointRevisionWeights>)
//  .scalingConfig(LambdaWebFunctionEndpointScalingConfig)
//  .throttleConfig(LambdaWebFunctionEndpointThrottleConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.authType">authType</a></code> | <code>java.lang.String</code> | The authentication type for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.endpointName">endpointName</a></code> | <code>java.lang.String</code> | The name of the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | The type of the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.functionName">functionName</a></code> | <code>java.lang.String</code> | The name of the web function this endpoint belongs to. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | The list of AWS Regions for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.revisionWeights">revisionWeights</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights">LambdaWebFunctionEndpointRevisionWeights</a>></code> | List of revision routing entries. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.scalingConfig">scalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig">LambdaWebFunctionEndpointScalingConfig</a></code> | The scaling configuration for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.throttleConfig">throttleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig">LambdaWebFunctionEndpointThrottleConfig</a></code> | The throttling configuration for the endpoint. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

The authentication type for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#auth_type LambdaWebFunctionEndpoint#auth_type}

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.endpointName"></a>

```java
public java.lang.String getEndpointName();
```

- *Type:* java.lang.String

The name of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#endpoint_name LambdaWebFunctionEndpoint#endpoint_name}

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

The type of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#endpoint_type LambdaWebFunctionEndpoint#endpoint_type}

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

The name of the web function this endpoint belongs to.

The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#function_name LambdaWebFunctionEndpoint#function_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#description LambdaWebFunctionEndpoint#description}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

The list of AWS Regions for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#regions LambdaWebFunctionEndpoint#regions}

---

##### `revisionWeights`<sup>Optional</sup> <a name="revisionWeights" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.revisionWeights"></a>

```java
public IResolvable|java.util.List<LambdaWebFunctionEndpointRevisionWeights> getRevisionWeights();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights">LambdaWebFunctionEndpointRevisionWeights</a>>

List of revision routing entries.

1 or 2 entries. With 1 entry, weight must be 100. With 2 entries, weights must sum to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#revision_weights LambdaWebFunctionEndpoint#revision_weights}

---

##### `scalingConfig`<sup>Optional</sup> <a name="scalingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.scalingConfig"></a>

```java
public LambdaWebFunctionEndpointScalingConfig getScalingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig">LambdaWebFunctionEndpointScalingConfig</a>

The scaling configuration for the endpoint.

Optionally constrains how many concurrent execution environments the endpoint can use, in addition to your account's vCPU quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#scaling_config LambdaWebFunctionEndpoint#scaling_config}

---

##### `throttleConfig`<sup>Optional</sup> <a name="throttleConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.throttleConfig"></a>

```java
public LambdaWebFunctionEndpointThrottleConfig getThrottleConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig">LambdaWebFunctionEndpointThrottleConfig</a>

The throttling configuration for the endpoint.

Optionally constrains the request rate that the endpoint accepts, in addition to your account's rate limit quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#throttle_config LambdaWebFunctionEndpoint#throttle_config}

---

### LambdaWebFunctionEndpointRegionalEndpoints <a name="LambdaWebFunctionEndpointRegionalEndpoints" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpoints.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_endpoint.LambdaWebFunctionEndpointRegionalEndpoints;

LambdaWebFunctionEndpointRegionalEndpoints.builder()
    .build();
```


### LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights <a name="LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_endpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights;

LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights.builder()
    .build();
```


### LambdaWebFunctionEndpointRegionalEndpointsScalingConfig <a name="LambdaWebFunctionEndpointRegionalEndpointsScalingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_endpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfig;

LambdaWebFunctionEndpointRegionalEndpointsScalingConfig.builder()
    .build();
```


### LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig <a name="LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_endpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig;

LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig.builder()
    .build();
```


### LambdaWebFunctionEndpointRevisionWeights <a name="LambdaWebFunctionEndpointRevisionWeights" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_endpoint.LambdaWebFunctionEndpointRevisionWeights;

LambdaWebFunctionEndpointRevisionWeights.builder()
//  .revisionId(java.lang.String)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights.property.revisionId">revisionId</a></code> | <code>java.lang.String</code> | The revision identifier. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights.property.weight">weight</a></code> | <code>java.lang.Number</code> | The traffic weight for this revision. |

---

##### `revisionId`<sup>Optional</sup> <a name="revisionId" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights.property.revisionId"></a>

```java
public java.lang.String getRevisionId();
```

- *Type:* java.lang.String

The revision identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#revision_id LambdaWebFunctionEndpoint#revision_id}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

The traffic weight for this revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#weight LambdaWebFunctionEndpoint#weight}

---

### LambdaWebFunctionEndpointScalingConfig <a name="LambdaWebFunctionEndpointScalingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_endpoint.LambdaWebFunctionEndpointScalingConfig;

LambdaWebFunctionEndpointScalingConfig.builder()
//  .maxEnvironments(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig.property.maxEnvironments">maxEnvironments</a></code> | <code>java.lang.Number</code> | The maximum number of concurrent execution environments for the endpoint. |

---

##### `maxEnvironments`<sup>Optional</sup> <a name="maxEnvironments" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig.property.maxEnvironments"></a>

```java
public java.lang.Number getMaxEnvironments();
```

- *Type:* java.lang.Number

The maximum number of concurrent execution environments for the endpoint.

This optional limit further constrains the endpoint's scaling. When omitted, the endpoint's scaling is limited only by your account's vCPU quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#max_environments LambdaWebFunctionEndpoint#max_environments}

---

### LambdaWebFunctionEndpointThrottleConfig <a name="LambdaWebFunctionEndpointThrottleConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_endpoint.LambdaWebFunctionEndpointThrottleConfig;

LambdaWebFunctionEndpointThrottleConfig.builder()
//  .rateLimit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig.property.rateLimit">rateLimit</a></code> | <code>java.lang.Number</code> | The maximum request rate per second for the endpoint, up to a maximum of 10000. |

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig.property.rateLimit"></a>

```java
public java.lang.Number getRateLimit();
```

- *Type:* java.lang.Number

The maximum request rate per second for the endpoint, up to a maximum of 10000.

This optional limit further constrains the endpoint's request rate. When omitted, the endpoint's request rate is limited only by your account's rate limit quota. Specify 0 to reject all new requests. Other supported values are 100 through 1000 in increments of 100, and 2000 through 10000 in increments of 1000. Supported values can vary by Region; if you specify an unsupported value, the error lists the values available in that Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#rate_limit LambdaWebFunctionEndpoint#rate_limit}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaWebFunctionEndpointRegionalEndpointsMap <a name="LambdaWebFunctionEndpointRegionalEndpointsMap" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_endpoint.LambdaWebFunctionEndpointRegionalEndpointsMap;

new LambdaWebFunctionEndpointRegionalEndpointsMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.get"></a>

```java
public LambdaWebFunctionEndpointRegionalEndpointsOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### LambdaWebFunctionEndpointRegionalEndpointsOutputReference <a name="LambdaWebFunctionEndpointRegionalEndpointsOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_endpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference;

new LambdaWebFunctionEndpointRegionalEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.revisionWeights">revisionWeights</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList">LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.scalingConfig">scalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference">LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.stateReason">stateReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.throttleConfig">throttleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference">LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.updateStatus">updateStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.updateStatusReason">updateStatusReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpoints">LambdaWebFunctionEndpointRegionalEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `revisionWeights`<sup>Required</sup> <a name="revisionWeights" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.revisionWeights"></a>

```java
public LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList getRevisionWeights();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList">LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList</a>

---

##### `scalingConfig`<sup>Required</sup> <a name="scalingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.scalingConfig"></a>

```java
public LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference getScalingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference">LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateReason`<sup>Required</sup> <a name="stateReason" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.stateReason"></a>

```java
public java.lang.String getStateReason();
```

- *Type:* java.lang.String

---

##### `throttleConfig`<sup>Required</sup> <a name="throttleConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.throttleConfig"></a>

```java
public LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference getThrottleConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference">LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference</a>

---

##### `updateStatus`<sup>Required</sup> <a name="updateStatus" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.updateStatus"></a>

```java
public java.lang.String getUpdateStatus();
```

- *Type:* java.lang.String

---

##### `updateStatusReason`<sup>Required</sup> <a name="updateStatusReason" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.updateStatusReason"></a>

```java
public java.lang.String getUpdateStatusReason();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.internalValue"></a>

```java
public LambdaWebFunctionEndpointRegionalEndpoints getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpoints">LambdaWebFunctionEndpointRegionalEndpoints</a>

---


### LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList <a name="LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_endpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList;

new LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.get"></a>

```java
public LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference <a name="LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_endpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference;

new LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.revisionId">revisionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights">LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `revisionId`<sup>Required</sup> <a name="revisionId" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.revisionId"></a>

```java
public java.lang.String getRevisionId();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.internalValue"></a>

```java
public LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights">LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights</a>

---


### LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference <a name="LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_endpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference;

new LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.maxEnvironments">maxEnvironments</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfig">LambdaWebFunctionEndpointRegionalEndpointsScalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxEnvironments`<sup>Required</sup> <a name="maxEnvironments" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.maxEnvironments"></a>

```java
public java.lang.Number getMaxEnvironments();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.internalValue"></a>

```java
public LambdaWebFunctionEndpointRegionalEndpointsScalingConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfig">LambdaWebFunctionEndpointRegionalEndpointsScalingConfig</a>

---


### LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference <a name="LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_endpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference;

new LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.rateLimit">rateLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig">LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.rateLimit"></a>

```java
public java.lang.Number getRateLimit();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.internalValue"></a>

```java
public LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig">LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig</a>

---


### LambdaWebFunctionEndpointRevisionWeightsList <a name="LambdaWebFunctionEndpointRevisionWeightsList" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_endpoint.LambdaWebFunctionEndpointRevisionWeightsList;

new LambdaWebFunctionEndpointRevisionWeightsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.get"></a>

```java
public LambdaWebFunctionEndpointRevisionWeightsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights">LambdaWebFunctionEndpointRevisionWeights</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LambdaWebFunctionEndpointRevisionWeights> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights">LambdaWebFunctionEndpointRevisionWeights</a>>

---


### LambdaWebFunctionEndpointRevisionWeightsOutputReference <a name="LambdaWebFunctionEndpointRevisionWeightsOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_endpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference;

new LambdaWebFunctionEndpointRevisionWeightsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.resetRevisionId">resetRevisionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRevisionId` <a name="resetRevisionId" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.resetRevisionId"></a>

```java
public void resetRevisionId()
```

##### `resetWeight` <a name="resetWeight" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.revisionIdInput">revisionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.revisionId">revisionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights">LambdaWebFunctionEndpointRevisionWeights</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `revisionIdInput`<sup>Optional</sup> <a name="revisionIdInput" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.revisionIdInput"></a>

```java
public java.lang.String getRevisionIdInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `revisionId`<sup>Required</sup> <a name="revisionId" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.revisionId"></a>

```java
public java.lang.String getRevisionId();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaWebFunctionEndpointRevisionWeights getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights">LambdaWebFunctionEndpointRevisionWeights</a>

---


### LambdaWebFunctionEndpointScalingConfigOutputReference <a name="LambdaWebFunctionEndpointScalingConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_endpoint.LambdaWebFunctionEndpointScalingConfigOutputReference;

new LambdaWebFunctionEndpointScalingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.resetMaxEnvironments">resetMaxEnvironments</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxEnvironments` <a name="resetMaxEnvironments" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.resetMaxEnvironments"></a>

```java
public void resetMaxEnvironments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.maxEnvironmentsInput">maxEnvironmentsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.maxEnvironments">maxEnvironments</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig">LambdaWebFunctionEndpointScalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxEnvironmentsInput`<sup>Optional</sup> <a name="maxEnvironmentsInput" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.maxEnvironmentsInput"></a>

```java
public java.lang.Number getMaxEnvironmentsInput();
```

- *Type:* java.lang.Number

---

##### `maxEnvironments`<sup>Required</sup> <a name="maxEnvironments" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.maxEnvironments"></a>

```java
public java.lang.Number getMaxEnvironments();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaWebFunctionEndpointScalingConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig">LambdaWebFunctionEndpointScalingConfig</a>

---


### LambdaWebFunctionEndpointThrottleConfigOutputReference <a name="LambdaWebFunctionEndpointThrottleConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_endpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference;

new LambdaWebFunctionEndpointThrottleConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.resetRateLimit">resetRateLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRateLimit` <a name="resetRateLimit" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.resetRateLimit"></a>

```java
public void resetRateLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.rateLimitInput">rateLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.rateLimit">rateLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig">LambdaWebFunctionEndpointThrottleConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rateLimitInput`<sup>Optional</sup> <a name="rateLimitInput" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.rateLimitInput"></a>

```java
public java.lang.Number getRateLimitInput();
```

- *Type:* java.lang.Number

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.rateLimit"></a>

```java
public java.lang.Number getRateLimit();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaWebFunctionEndpointThrottleConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig">LambdaWebFunctionEndpointThrottleConfig</a>

---



