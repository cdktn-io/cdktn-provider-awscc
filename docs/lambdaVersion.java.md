# `lambdaVersion` Submodule <a name="`lambdaVersion` Submodule" id="@cdktn/provider-awscc.lambdaVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaVersion <a name="LambdaVersion" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version awscc_lambda_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_version.LambdaVersion;

LambdaVersion.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .functionName(java.lang.String)
//  .codeSha256(java.lang.String)
//  .description(java.lang.String)
//  .functionScalingConfig(LambdaVersionFunctionScalingConfig)
//  .provisionedConcurrencyConfig(LambdaVersionProvisionedConcurrencyConfig)
//  .runtimePolicy(LambdaVersionRuntimePolicy)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.functionName">functionName</a></code> | <code>java.lang.String</code> | The name of the Lambda function. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.codeSha256">codeSha256</a></code> | <code>java.lang.String</code> | Only publish a version if the hash value matches the value that's specified. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description for the version to override the description in the function configuration. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.functionScalingConfig">functionScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig">LambdaVersionFunctionScalingConfig</a></code> | The scaling configuration to apply to the function, including minimum and maximum execution environment limits. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.provisionedConcurrencyConfig">provisionedConcurrencyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig">LambdaVersionProvisionedConcurrencyConfig</a></code> | Specifies a provisioned concurrency configuration for a function's version. Updates are not supported for this property. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.runtimePolicy">runtimePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy">LambdaVersionRuntimePolicy</a></code> | Specifies the runtime management configuration of a function. Displays runtimeVersionArn only for Manual. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.functionName"></a>

- *Type:* java.lang.String

The name of the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#function_name LambdaVersion#function_name}

---

##### `codeSha256`<sup>Optional</sup> <a name="codeSha256" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.codeSha256"></a>

- *Type:* java.lang.String

Only publish a version if the hash value matches the value that's specified.

Use this option to avoid publishing a version if the function code has changed since you last updated it. Updates are not supported for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#code_sha_256 LambdaVersion#code_sha_256}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description for the version to override the description in the function configuration.

Updates are not supported for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#description LambdaVersion#description}

---

##### `functionScalingConfig`<sup>Optional</sup> <a name="functionScalingConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.functionScalingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig">LambdaVersionFunctionScalingConfig</a>

The scaling configuration to apply to the function, including minimum and maximum execution environment limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#function_scaling_config LambdaVersion#function_scaling_config}

---

##### `provisionedConcurrencyConfig`<sup>Optional</sup> <a name="provisionedConcurrencyConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.provisionedConcurrencyConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig">LambdaVersionProvisionedConcurrencyConfig</a>

Specifies a provisioned concurrency configuration for a function's version. Updates are not supported for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#provisioned_concurrency_config LambdaVersion#provisioned_concurrency_config}

---

##### `runtimePolicy`<sup>Optional</sup> <a name="runtimePolicy" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.runtimePolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy">LambdaVersionRuntimePolicy</a>

Specifies the runtime management configuration of a function. Displays runtimeVersionArn only for Manual.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#runtime_policy LambdaVersion#runtime_policy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putFunctionScalingConfig">putFunctionScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putProvisionedConcurrencyConfig">putProvisionedConcurrencyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putRuntimePolicy">putRuntimePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetCodeSha256">resetCodeSha256</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetFunctionScalingConfig">resetFunctionScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetProvisionedConcurrencyConfig">resetProvisionedConcurrencyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetRuntimePolicy">resetRuntimePolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFunctionScalingConfig` <a name="putFunctionScalingConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putFunctionScalingConfig"></a>

```java
public void putFunctionScalingConfig(LambdaVersionFunctionScalingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putFunctionScalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig">LambdaVersionFunctionScalingConfig</a>

---

##### `putProvisionedConcurrencyConfig` <a name="putProvisionedConcurrencyConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putProvisionedConcurrencyConfig"></a>

```java
public void putProvisionedConcurrencyConfig(LambdaVersionProvisionedConcurrencyConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putProvisionedConcurrencyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig">LambdaVersionProvisionedConcurrencyConfig</a>

---

##### `putRuntimePolicy` <a name="putRuntimePolicy" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putRuntimePolicy"></a>

```java
public void putRuntimePolicy(LambdaVersionRuntimePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putRuntimePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy">LambdaVersionRuntimePolicy</a>

---

##### `resetCodeSha256` <a name="resetCodeSha256" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetCodeSha256"></a>

```java
public void resetCodeSha256()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFunctionScalingConfig` <a name="resetFunctionScalingConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetFunctionScalingConfig"></a>

```java
public void resetFunctionScalingConfig()
```

##### `resetProvisionedConcurrencyConfig` <a name="resetProvisionedConcurrencyConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetProvisionedConcurrencyConfig"></a>

```java
public void resetProvisionedConcurrencyConfig()
```

##### `resetRuntimePolicy` <a name="resetRuntimePolicy" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetRuntimePolicy"></a>

```java
public void resetRuntimePolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isConstruct"></a>

```java
import io.cdktn.providers.awscc.lambda_version.LambdaVersion;

LambdaVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.lambda_version.LambdaVersion;

LambdaVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.lambda_version.LambdaVersion;

LambdaVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.lambda_version.LambdaVersion;

LambdaVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LambdaVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LambdaVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LambdaVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LambdaVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LambdaVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionArn">functionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionScalingConfig">functionScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference">LambdaVersionFunctionScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provisionedConcurrencyConfig">provisionedConcurrencyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference">LambdaVersionProvisionedConcurrencyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.runtimePolicy">runtimePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference">LambdaVersionRuntimePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.codeSha256Input">codeSha256Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionScalingConfigInput">functionScalingConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig">LambdaVersionFunctionScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provisionedConcurrencyConfigInput">provisionedConcurrencyConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig">LambdaVersionProvisionedConcurrencyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.runtimePolicyInput">runtimePolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy">LambdaVersionRuntimePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.codeSha256">codeSha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionArn"></a>

```java
public java.lang.String getFunctionArn();
```

- *Type:* java.lang.String

---

##### `functionScalingConfig`<sup>Required</sup> <a name="functionScalingConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionScalingConfig"></a>

```java
public LambdaVersionFunctionScalingConfigOutputReference getFunctionScalingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference">LambdaVersionFunctionScalingConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `provisionedConcurrencyConfig`<sup>Required</sup> <a name="provisionedConcurrencyConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provisionedConcurrencyConfig"></a>

```java
public LambdaVersionProvisionedConcurrencyConfigOutputReference getProvisionedConcurrencyConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference">LambdaVersionProvisionedConcurrencyConfigOutputReference</a>

---

##### `runtimePolicy`<sup>Required</sup> <a name="runtimePolicy" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.runtimePolicy"></a>

```java
public LambdaVersionRuntimePolicyOutputReference getRuntimePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference">LambdaVersionRuntimePolicyOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `codeSha256Input`<sup>Optional</sup> <a name="codeSha256Input" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.codeSha256Input"></a>

```java
public java.lang.String getCodeSha256Input();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `functionScalingConfigInput`<sup>Optional</sup> <a name="functionScalingConfigInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionScalingConfigInput"></a>

```java
public IResolvable|LambdaVersionFunctionScalingConfig getFunctionScalingConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig">LambdaVersionFunctionScalingConfig</a>

---

##### `provisionedConcurrencyConfigInput`<sup>Optional</sup> <a name="provisionedConcurrencyConfigInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provisionedConcurrencyConfigInput"></a>

```java
public IResolvable|LambdaVersionProvisionedConcurrencyConfig getProvisionedConcurrencyConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig">LambdaVersionProvisionedConcurrencyConfig</a>

---

##### `runtimePolicyInput`<sup>Optional</sup> <a name="runtimePolicyInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.runtimePolicyInput"></a>

```java
public IResolvable|LambdaVersionRuntimePolicy getRuntimePolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy">LambdaVersionRuntimePolicy</a>

---

##### `codeSha256`<sup>Required</sup> <a name="codeSha256" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.codeSha256"></a>

```java
public java.lang.String getCodeSha256();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaVersionConfig <a name="LambdaVersionConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_version.LambdaVersionConfig;

LambdaVersionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .functionName(java.lang.String)
//  .codeSha256(java.lang.String)
//  .description(java.lang.String)
//  .functionScalingConfig(LambdaVersionFunctionScalingConfig)
//  .provisionedConcurrencyConfig(LambdaVersionProvisionedConcurrencyConfig)
//  .runtimePolicy(LambdaVersionRuntimePolicy)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.functionName">functionName</a></code> | <code>java.lang.String</code> | The name of the Lambda function. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.codeSha256">codeSha256</a></code> | <code>java.lang.String</code> | Only publish a version if the hash value matches the value that's specified. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description for the version to override the description in the function configuration. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.functionScalingConfig">functionScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig">LambdaVersionFunctionScalingConfig</a></code> | The scaling configuration to apply to the function, including minimum and maximum execution environment limits. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.provisionedConcurrencyConfig">provisionedConcurrencyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig">LambdaVersionProvisionedConcurrencyConfig</a></code> | Specifies a provisioned concurrency configuration for a function's version. Updates are not supported for this property. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.runtimePolicy">runtimePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy">LambdaVersionRuntimePolicy</a></code> | Specifies the runtime management configuration of a function. Displays runtimeVersionArn only for Manual. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

The name of the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#function_name LambdaVersion#function_name}

---

##### `codeSha256`<sup>Optional</sup> <a name="codeSha256" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.codeSha256"></a>

```java
public java.lang.String getCodeSha256();
```

- *Type:* java.lang.String

Only publish a version if the hash value matches the value that's specified.

Use this option to avoid publishing a version if the function code has changed since you last updated it. Updates are not supported for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#code_sha_256 LambdaVersion#code_sha_256}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description for the version to override the description in the function configuration.

Updates are not supported for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#description LambdaVersion#description}

---

##### `functionScalingConfig`<sup>Optional</sup> <a name="functionScalingConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.functionScalingConfig"></a>

```java
public LambdaVersionFunctionScalingConfig getFunctionScalingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig">LambdaVersionFunctionScalingConfig</a>

The scaling configuration to apply to the function, including minimum and maximum execution environment limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#function_scaling_config LambdaVersion#function_scaling_config}

---

##### `provisionedConcurrencyConfig`<sup>Optional</sup> <a name="provisionedConcurrencyConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.provisionedConcurrencyConfig"></a>

```java
public LambdaVersionProvisionedConcurrencyConfig getProvisionedConcurrencyConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig">LambdaVersionProvisionedConcurrencyConfig</a>

Specifies a provisioned concurrency configuration for a function's version. Updates are not supported for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#provisioned_concurrency_config LambdaVersion#provisioned_concurrency_config}

---

##### `runtimePolicy`<sup>Optional</sup> <a name="runtimePolicy" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.runtimePolicy"></a>

```java
public LambdaVersionRuntimePolicy getRuntimePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy">LambdaVersionRuntimePolicy</a>

Specifies the runtime management configuration of a function. Displays runtimeVersionArn only for Manual.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#runtime_policy LambdaVersion#runtime_policy}

---

### LambdaVersionFunctionScalingConfig <a name="LambdaVersionFunctionScalingConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_version.LambdaVersionFunctionScalingConfig;

LambdaVersionFunctionScalingConfig.builder()
//  .maxExecutionEnvironments(java.lang.Number)
//  .minExecutionEnvironments(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig.property.maxExecutionEnvironments">maxExecutionEnvironments</a></code> | <code>java.lang.Number</code> | The maximum number of execution environments that can be provisioned for the function. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig.property.minExecutionEnvironments">minExecutionEnvironments</a></code> | <code>java.lang.Number</code> | The minimum number of execution environments to maintain for the function. |

---

##### `maxExecutionEnvironments`<sup>Optional</sup> <a name="maxExecutionEnvironments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig.property.maxExecutionEnvironments"></a>

```java
public java.lang.Number getMaxExecutionEnvironments();
```

- *Type:* java.lang.Number

The maximum number of execution environments that can be provisioned for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#max_execution_environments LambdaVersion#max_execution_environments}

---

##### `minExecutionEnvironments`<sup>Optional</sup> <a name="minExecutionEnvironments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig.property.minExecutionEnvironments"></a>

```java
public java.lang.Number getMinExecutionEnvironments();
```

- *Type:* java.lang.Number

The minimum number of execution environments to maintain for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#min_execution_environments LambdaVersion#min_execution_environments}

---

### LambdaVersionProvisionedConcurrencyConfig <a name="LambdaVersionProvisionedConcurrencyConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_version.LambdaVersionProvisionedConcurrencyConfig;

LambdaVersionProvisionedConcurrencyConfig.builder()
//  .provisionedConcurrentExecutions(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig.property.provisionedConcurrentExecutions">provisionedConcurrentExecutions</a></code> | <code>java.lang.Number</code> | The amount of provisioned concurrency to allocate for the version. |

---

##### `provisionedConcurrentExecutions`<sup>Optional</sup> <a name="provisionedConcurrentExecutions" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig.property.provisionedConcurrentExecutions"></a>

```java
public java.lang.Number getProvisionedConcurrentExecutions();
```

- *Type:* java.lang.Number

The amount of provisioned concurrency to allocate for the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#provisioned_concurrent_executions LambdaVersion#provisioned_concurrent_executions}

---

### LambdaVersionRuntimePolicy <a name="LambdaVersionRuntimePolicy" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_version.LambdaVersionRuntimePolicy;

LambdaVersionRuntimePolicy.builder()
//  .runtimeVersionArn(java.lang.String)
//  .updateRuntimeOn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy.property.runtimeVersionArn">runtimeVersionArn</a></code> | <code>java.lang.String</code> | The ARN of the runtime the function is configured to use. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy.property.updateRuntimeOn">updateRuntimeOn</a></code> | <code>java.lang.String</code> | The runtime update mode. |

---

##### `runtimeVersionArn`<sup>Optional</sup> <a name="runtimeVersionArn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy.property.runtimeVersionArn"></a>

```java
public java.lang.String getRuntimeVersionArn();
```

- *Type:* java.lang.String

The ARN of the runtime the function is configured to use.

If the runtime update mode is manual, the ARN is returned, otherwise null is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#runtime_version_arn LambdaVersion#runtime_version_arn}

---

##### `updateRuntimeOn`<sup>Optional</sup> <a name="updateRuntimeOn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy.property.updateRuntimeOn"></a>

```java
public java.lang.String getUpdateRuntimeOn();
```

- *Type:* java.lang.String

The runtime update mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#update_runtime_on LambdaVersion#update_runtime_on}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaVersionFunctionScalingConfigOutputReference <a name="LambdaVersionFunctionScalingConfigOutputReference" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_version.LambdaVersionFunctionScalingConfigOutputReference;

new LambdaVersionFunctionScalingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.resetMaxExecutionEnvironments">resetMaxExecutionEnvironments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.resetMinExecutionEnvironments">resetMinExecutionEnvironments</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxExecutionEnvironments` <a name="resetMaxExecutionEnvironments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.resetMaxExecutionEnvironments"></a>

```java
public void resetMaxExecutionEnvironments()
```

##### `resetMinExecutionEnvironments` <a name="resetMinExecutionEnvironments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.resetMinExecutionEnvironments"></a>

```java
public void resetMinExecutionEnvironments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.maxExecutionEnvironmentsInput">maxExecutionEnvironmentsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.minExecutionEnvironmentsInput">minExecutionEnvironmentsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.maxExecutionEnvironments">maxExecutionEnvironments</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.minExecutionEnvironments">minExecutionEnvironments</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig">LambdaVersionFunctionScalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxExecutionEnvironmentsInput`<sup>Optional</sup> <a name="maxExecutionEnvironmentsInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.maxExecutionEnvironmentsInput"></a>

```java
public java.lang.Number getMaxExecutionEnvironmentsInput();
```

- *Type:* java.lang.Number

---

##### `minExecutionEnvironmentsInput`<sup>Optional</sup> <a name="minExecutionEnvironmentsInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.minExecutionEnvironmentsInput"></a>

```java
public java.lang.Number getMinExecutionEnvironmentsInput();
```

- *Type:* java.lang.Number

---

##### `maxExecutionEnvironments`<sup>Required</sup> <a name="maxExecutionEnvironments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.maxExecutionEnvironments"></a>

```java
public java.lang.Number getMaxExecutionEnvironments();
```

- *Type:* java.lang.Number

---

##### `minExecutionEnvironments`<sup>Required</sup> <a name="minExecutionEnvironments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.minExecutionEnvironments"></a>

```java
public java.lang.Number getMinExecutionEnvironments();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaVersionFunctionScalingConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig">LambdaVersionFunctionScalingConfig</a>

---


### LambdaVersionProvisionedConcurrencyConfigOutputReference <a name="LambdaVersionProvisionedConcurrencyConfigOutputReference" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_version.LambdaVersionProvisionedConcurrencyConfigOutputReference;

new LambdaVersionProvisionedConcurrencyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.resetProvisionedConcurrentExecutions">resetProvisionedConcurrentExecutions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProvisionedConcurrentExecutions` <a name="resetProvisionedConcurrentExecutions" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.resetProvisionedConcurrentExecutions"></a>

```java
public void resetProvisionedConcurrentExecutions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.provisionedConcurrentExecutionsInput">provisionedConcurrentExecutionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.provisionedConcurrentExecutions">provisionedConcurrentExecutions</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig">LambdaVersionProvisionedConcurrencyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `provisionedConcurrentExecutionsInput`<sup>Optional</sup> <a name="provisionedConcurrentExecutionsInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.provisionedConcurrentExecutionsInput"></a>

```java
public java.lang.Number getProvisionedConcurrentExecutionsInput();
```

- *Type:* java.lang.Number

---

##### `provisionedConcurrentExecutions`<sup>Required</sup> <a name="provisionedConcurrentExecutions" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.provisionedConcurrentExecutions"></a>

```java
public java.lang.Number getProvisionedConcurrentExecutions();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaVersionProvisionedConcurrencyConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig">LambdaVersionProvisionedConcurrencyConfig</a>

---


### LambdaVersionRuntimePolicyOutputReference <a name="LambdaVersionRuntimePolicyOutputReference" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_version.LambdaVersionRuntimePolicyOutputReference;

new LambdaVersionRuntimePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.resetRuntimeVersionArn">resetRuntimeVersionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.resetUpdateRuntimeOn">resetUpdateRuntimeOn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRuntimeVersionArn` <a name="resetRuntimeVersionArn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.resetRuntimeVersionArn"></a>

```java
public void resetRuntimeVersionArn()
```

##### `resetUpdateRuntimeOn` <a name="resetUpdateRuntimeOn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.resetUpdateRuntimeOn"></a>

```java
public void resetUpdateRuntimeOn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.runtimeVersionArnInput">runtimeVersionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.updateRuntimeOnInput">updateRuntimeOnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.runtimeVersionArn">runtimeVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.updateRuntimeOn">updateRuntimeOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy">LambdaVersionRuntimePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `runtimeVersionArnInput`<sup>Optional</sup> <a name="runtimeVersionArnInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.runtimeVersionArnInput"></a>

```java
public java.lang.String getRuntimeVersionArnInput();
```

- *Type:* java.lang.String

---

##### `updateRuntimeOnInput`<sup>Optional</sup> <a name="updateRuntimeOnInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.updateRuntimeOnInput"></a>

```java
public java.lang.String getUpdateRuntimeOnInput();
```

- *Type:* java.lang.String

---

##### `runtimeVersionArn`<sup>Required</sup> <a name="runtimeVersionArn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.runtimeVersionArn"></a>

```java
public java.lang.String getRuntimeVersionArn();
```

- *Type:* java.lang.String

---

##### `updateRuntimeOn`<sup>Required</sup> <a name="updateRuntimeOn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.updateRuntimeOn"></a>

```java
public java.lang.String getUpdateRuntimeOn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaVersionRuntimePolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy">LambdaVersionRuntimePolicy</a>

---



