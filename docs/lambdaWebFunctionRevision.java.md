# `lambdaWebFunctionRevision` Submodule <a name="`lambdaWebFunctionRevision` Submodule" id="@cdktn/provider-awscc.lambdaWebFunctionRevision"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaWebFunctionRevision <a name="LambdaWebFunctionRevision" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision awscc_lambda_web_function_revision}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_revision.LambdaWebFunctionRevision;

LambdaWebFunctionRevision.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .buildConfig(LambdaWebFunctionRevisionBuildConfig)
    .functionName(java.lang.String)
    .serviceConfig(LambdaWebFunctionRevisionServiceConfig)
//  .description(java.lang.String)
//  .kmsKeyArn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.buildConfig">buildConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a></code> | The build configuration for the revision. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.functionName">functionName</a></code> | <code>java.lang.String</code> | The name of the web function this revision belongs to. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.serviceConfig">serviceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a></code> | The service configuration for the revision. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the revision. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | The ARN of the KMS key used to encrypt the revision. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `buildConfig`<sup>Required</sup> <a name="buildConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.buildConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a>

The build configuration for the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#build_config LambdaWebFunctionRevision#build_config}

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.functionName"></a>

- *Type:* java.lang.String

The name of the web function this revision belongs to.

The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#function_name LambdaWebFunctionRevision#function_name}

---

##### `serviceConfig`<sup>Required</sup> <a name="serviceConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.serviceConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a>

The service configuration for the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#service_config LambdaWebFunctionRevision#service_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#description LambdaWebFunctionRevision#description}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.kmsKeyArn"></a>

- *Type:* java.lang.String

The ARN of the KMS key used to encrypt the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#kms_key_arn LambdaWebFunctionRevision#kms_key_arn}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putBuildConfig">putBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putServiceConfig">putServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBuildConfig` <a name="putBuildConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putBuildConfig"></a>

```java
public void putBuildConfig(LambdaWebFunctionRevisionBuildConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putBuildConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a>

---

##### `putServiceConfig` <a name="putServiceConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putServiceConfig"></a>

```java
public void putServiceConfig(LambdaWebFunctionRevisionServiceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putServiceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaWebFunctionRevision resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isConstruct"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_revision.LambdaWebFunctionRevision;

LambdaWebFunctionRevision.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_revision.LambdaWebFunctionRevision;

LambdaWebFunctionRevision.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_revision.LambdaWebFunctionRevision;

LambdaWebFunctionRevision.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_revision.LambdaWebFunctionRevision;

LambdaWebFunctionRevision.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LambdaWebFunctionRevision.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LambdaWebFunctionRevision resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LambdaWebFunctionRevision to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LambdaWebFunctionRevision that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LambdaWebFunctionRevision to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.buildConfig">buildConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference">LambdaWebFunctionRevisionBuildConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.functionArn">functionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.revisionArn">revisionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.revisionId">revisionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.serviceConfig">serviceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference">LambdaWebFunctionRevisionServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.stateReason">stateReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.buildConfigInput">buildConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.serviceConfigInput">serviceConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `buildConfig`<sup>Required</sup> <a name="buildConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.buildConfig"></a>

```java
public LambdaWebFunctionRevisionBuildConfigOutputReference getBuildConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference">LambdaWebFunctionRevisionBuildConfigOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.functionArn"></a>

```java
public java.lang.String getFunctionArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `revisionArn`<sup>Required</sup> <a name="revisionArn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.revisionArn"></a>

```java
public java.lang.String getRevisionArn();
```

- *Type:* java.lang.String

---

##### `revisionId`<sup>Required</sup> <a name="revisionId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.revisionId"></a>

```java
public java.lang.String getRevisionId();
```

- *Type:* java.lang.String

---

##### `serviceConfig`<sup>Required</sup> <a name="serviceConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.serviceConfig"></a>

```java
public LambdaWebFunctionRevisionServiceConfigOutputReference getServiceConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference">LambdaWebFunctionRevisionServiceConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateReason`<sup>Required</sup> <a name="stateReason" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.stateReason"></a>

```java
public java.lang.String getStateReason();
```

- *Type:* java.lang.String

---

##### `buildConfigInput`<sup>Optional</sup> <a name="buildConfigInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.buildConfigInput"></a>

```java
public IResolvable|LambdaWebFunctionRevisionBuildConfig getBuildConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `serviceConfigInput`<sup>Optional</sup> <a name="serviceConfigInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.serviceConfigInput"></a>

```java
public IResolvable|LambdaWebFunctionRevisionServiceConfig getServiceConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaWebFunctionRevisionBuildConfig <a name="LambdaWebFunctionRevisionBuildConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_revision.LambdaWebFunctionRevisionBuildConfig;

LambdaWebFunctionRevisionBuildConfig.builder()
    .codeConfig(LambdaWebFunctionRevisionBuildConfigCodeConfig)
    .runtimeConfig(LambdaWebFunctionRevisionBuildConfigRuntimeConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig.property.codeConfig">codeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig">LambdaWebFunctionRevisionBuildConfigCodeConfig</a></code> | The code configuration for the revision. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig.property.runtimeConfig">runtimeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig">LambdaWebFunctionRevisionBuildConfigRuntimeConfig</a></code> | The runtime configuration for the revision. |

---

##### `codeConfig`<sup>Required</sup> <a name="codeConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig.property.codeConfig"></a>

```java
public LambdaWebFunctionRevisionBuildConfigCodeConfig getCodeConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig">LambdaWebFunctionRevisionBuildConfigCodeConfig</a>

The code configuration for the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#code_config LambdaWebFunctionRevision#code_config}

---

##### `runtimeConfig`<sup>Required</sup> <a name="runtimeConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig.property.runtimeConfig"></a>

```java
public LambdaWebFunctionRevisionBuildConfigRuntimeConfig getRuntimeConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig">LambdaWebFunctionRevisionBuildConfigRuntimeConfig</a>

The runtime configuration for the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#runtime_config LambdaWebFunctionRevision#runtime_config}

---

### LambdaWebFunctionRevisionBuildConfigCodeConfig <a name="LambdaWebFunctionRevisionBuildConfigCodeConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_revision.LambdaWebFunctionRevisionBuildConfigCodeConfig;

LambdaWebFunctionRevisionBuildConfigCodeConfig.builder()
    .s3Object(LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig.property.s3Object">s3Object</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a></code> | The Amazon S3 location of the deployment artifact. |

---

##### `s3Object`<sup>Required</sup> <a name="s3Object" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig.property.s3Object"></a>

```java
public LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object getS3Object();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a>

The Amazon S3 location of the deployment artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#s3_object LambdaWebFunctionRevision#s3_object}

---

### LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object <a name="LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_revision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object;

LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.builder()
    .bucket(java.lang.String)
    .key(java.lang.String)
//  .versionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.property.bucket">bucket</a></code> | <code>java.lang.String</code> | The S3 bucket name. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.property.key">key</a></code> | <code>java.lang.String</code> | The S3 object key. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.property.versionId">versionId</a></code> | <code>java.lang.String</code> | The S3 object version ID. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

The S3 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#bucket LambdaWebFunctionRevision#bucket}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The S3 object key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#key LambdaWebFunctionRevision#key}

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

The S3 object version ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#version_id LambdaWebFunctionRevision#version_id}

---

### LambdaWebFunctionRevisionBuildConfigRuntimeConfig <a name="LambdaWebFunctionRevisionBuildConfigRuntimeConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_revision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig;

LambdaWebFunctionRevisionBuildConfigRuntimeConfig.builder()
    .runtime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig.property.runtime">runtime</a></code> | <code>java.lang.String</code> | The runtime identifier. |

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

The runtime identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#runtime LambdaWebFunctionRevision#runtime}

---

### LambdaWebFunctionRevisionConfig <a name="LambdaWebFunctionRevisionConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_revision.LambdaWebFunctionRevisionConfig;

LambdaWebFunctionRevisionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .buildConfig(LambdaWebFunctionRevisionBuildConfig)
    .functionName(java.lang.String)
    .serviceConfig(LambdaWebFunctionRevisionServiceConfig)
//  .description(java.lang.String)
//  .kmsKeyArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.buildConfig">buildConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a></code> | The build configuration for the revision. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.functionName">functionName</a></code> | <code>java.lang.String</code> | The name of the web function this revision belongs to. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.serviceConfig">serviceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a></code> | The service configuration for the revision. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the revision. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | The ARN of the KMS key used to encrypt the revision. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `buildConfig`<sup>Required</sup> <a name="buildConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.buildConfig"></a>

```java
public LambdaWebFunctionRevisionBuildConfig getBuildConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a>

The build configuration for the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#build_config LambdaWebFunctionRevision#build_config}

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

The name of the web function this revision belongs to.

The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#function_name LambdaWebFunctionRevision#function_name}

---

##### `serviceConfig`<sup>Required</sup> <a name="serviceConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.serviceConfig"></a>

```java
public LambdaWebFunctionRevisionServiceConfig getServiceConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a>

The service configuration for the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#service_config LambdaWebFunctionRevision#service_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#description LambdaWebFunctionRevision#description}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

The ARN of the KMS key used to encrypt the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#kms_key_arn LambdaWebFunctionRevision#kms_key_arn}

---

### LambdaWebFunctionRevisionServiceConfig <a name="LambdaWebFunctionRevisionServiceConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_revision.LambdaWebFunctionRevisionServiceConfig;

LambdaWebFunctionRevisionServiceConfig.builder()
    .executionRoleArn(java.lang.String)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .maxConcurrencyPerEnvironment(java.lang.Number)
//  .telemetryConfig(LambdaWebFunctionRevisionServiceConfigTelemetryConfig)
//  .timeoutSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the execution role. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Environment variables for the function. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.maxConcurrencyPerEnvironment">maxConcurrencyPerEnvironment</a></code> | <code>java.lang.Number</code> | The maximum concurrency per environment. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.telemetryConfig">telemetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfig</a></code> | The telemetry configuration. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | The function timeout in seconds. |

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

The ARN of the execution role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#execution_role_arn LambdaWebFunctionRevision#execution_role_arn}

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Environment variables for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#environment_variables LambdaWebFunctionRevision#environment_variables}

---

##### `maxConcurrencyPerEnvironment`<sup>Optional</sup> <a name="maxConcurrencyPerEnvironment" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.maxConcurrencyPerEnvironment"></a>

```java
public java.lang.Number getMaxConcurrencyPerEnvironment();
```

- *Type:* java.lang.Number

The maximum concurrency per environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#max_concurrency_per_environment LambdaWebFunctionRevision#max_concurrency_per_environment}

---

##### `telemetryConfig`<sup>Optional</sup> <a name="telemetryConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.telemetryConfig"></a>

```java
public LambdaWebFunctionRevisionServiceConfigTelemetryConfig getTelemetryConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfig</a>

The telemetry configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#telemetry_config LambdaWebFunctionRevision#telemetry_config}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

The function timeout in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#timeout_seconds LambdaWebFunctionRevision#timeout_seconds}

---

### LambdaWebFunctionRevisionServiceConfigTelemetryConfig <a name="LambdaWebFunctionRevisionServiceConfigTelemetryConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_revision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig;

LambdaWebFunctionRevisionServiceConfigTelemetryConfig.builder()
//  .loggingConfig(LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a></code> | The logging configuration for the web function. |

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig.property.loggingConfig"></a>

```java
public LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig getLoggingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>

The logging configuration for the web function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#logging_config LambdaWebFunctionRevision#logging_config}

---

### LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig <a name="LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_revision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig;

LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.builder()
//  .applicationLogLevel(java.lang.String)
//  .logGroup(java.lang.String)
//  .systemLogLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.applicationLogLevel">applicationLogLevel</a></code> | <code>java.lang.String</code> | The application log level. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | The CloudWatch log group name. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.systemLogLevel">systemLogLevel</a></code> | <code>java.lang.String</code> | The system log level. |

---

##### `applicationLogLevel`<sup>Optional</sup> <a name="applicationLogLevel" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.applicationLogLevel"></a>

```java
public java.lang.String getApplicationLogLevel();
```

- *Type:* java.lang.String

The application log level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#application_log_level LambdaWebFunctionRevision#application_log_level}

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

The CloudWatch log group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#log_group LambdaWebFunctionRevision#log_group}

---

##### `systemLogLevel`<sup>Optional</sup> <a name="systemLogLevel" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.systemLogLevel"></a>

```java
public java.lang.String getSystemLogLevel();
```

- *Type:* java.lang.String

The system log level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#system_log_level LambdaWebFunctionRevision#system_log_level}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference <a name="LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_revision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference;

new LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.putS3Object">putS3Object</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Object` <a name="putS3Object" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.putS3Object"></a>

```java
public void putS3Object(LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.putS3Object.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3Object">s3Object</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference">LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3ObjectInput">s3ObjectInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig">LambdaWebFunctionRevisionBuildConfigCodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3Object`<sup>Required</sup> <a name="s3Object" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3Object"></a>

```java
public LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference getS3Object();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference">LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference</a>

---

##### `s3ObjectInput`<sup>Optional</sup> <a name="s3ObjectInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3ObjectInput"></a>

```java
public IResolvable|LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object getS3ObjectInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaWebFunctionRevisionBuildConfigCodeConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig">LambdaWebFunctionRevisionBuildConfigCodeConfig</a>

---


### LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference <a name="LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_revision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference;

new LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resetVersionId">resetVersionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersionId` <a name="resetVersionId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resetVersionId"></a>

```java
public void resetVersionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionIdInput">versionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionIdInput"></a>

```java
public java.lang.String getVersionIdInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a>

---


### LambdaWebFunctionRevisionBuildConfigOutputReference <a name="LambdaWebFunctionRevisionBuildConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_revision.LambdaWebFunctionRevisionBuildConfigOutputReference;

new LambdaWebFunctionRevisionBuildConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.putCodeConfig">putCodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.putRuntimeConfig">putRuntimeConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeConfig` <a name="putCodeConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.putCodeConfig"></a>

```java
public void putCodeConfig(LambdaWebFunctionRevisionBuildConfigCodeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.putCodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig">LambdaWebFunctionRevisionBuildConfigCodeConfig</a>

---

##### `putRuntimeConfig` <a name="putRuntimeConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.putRuntimeConfig"></a>

```java
public void putRuntimeConfig(LambdaWebFunctionRevisionBuildConfigRuntimeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.putRuntimeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig">LambdaWebFunctionRevisionBuildConfigRuntimeConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.codeConfig">codeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference">LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.runtimeConfig">runtimeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference">LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.codeConfigInput">codeConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig">LambdaWebFunctionRevisionBuildConfigCodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.runtimeConfigInput">runtimeConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig">LambdaWebFunctionRevisionBuildConfigRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeConfig`<sup>Required</sup> <a name="codeConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.codeConfig"></a>

```java
public LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference getCodeConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference">LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference</a>

---

##### `runtimeConfig`<sup>Required</sup> <a name="runtimeConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.runtimeConfig"></a>

```java
public LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference getRuntimeConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference">LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference</a>

---

##### `codeConfigInput`<sup>Optional</sup> <a name="codeConfigInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.codeConfigInput"></a>

```java
public IResolvable|LambdaWebFunctionRevisionBuildConfigCodeConfig getCodeConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig">LambdaWebFunctionRevisionBuildConfigCodeConfig</a>

---

##### `runtimeConfigInput`<sup>Optional</sup> <a name="runtimeConfigInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.runtimeConfigInput"></a>

```java
public IResolvable|LambdaWebFunctionRevisionBuildConfigRuntimeConfig getRuntimeConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig">LambdaWebFunctionRevisionBuildConfigRuntimeConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaWebFunctionRevisionBuildConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a>

---


### LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference <a name="LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_revision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference;

new LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtimeInput">runtimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtime">runtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig">LambdaWebFunctionRevisionBuildConfigRuntimeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtimeInput"></a>

```java
public java.lang.String getRuntimeInput();
```

- *Type:* java.lang.String

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaWebFunctionRevisionBuildConfigRuntimeConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig">LambdaWebFunctionRevisionBuildConfigRuntimeConfig</a>

---


### LambdaWebFunctionRevisionServiceConfigOutputReference <a name="LambdaWebFunctionRevisionServiceConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_revision.LambdaWebFunctionRevisionServiceConfigOutputReference;

new LambdaWebFunctionRevisionServiceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.putTelemetryConfig">putTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetMaxConcurrencyPerEnvironment">resetMaxConcurrencyPerEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetTelemetryConfig">resetTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTelemetryConfig` <a name="putTelemetryConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.putTelemetryConfig"></a>

```java
public void putTelemetryConfig(LambdaWebFunctionRevisionServiceConfigTelemetryConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.putTelemetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfig</a>

---

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetEnvironmentVariables"></a>

```java
public void resetEnvironmentVariables()
```

##### `resetMaxConcurrencyPerEnvironment` <a name="resetMaxConcurrencyPerEnvironment" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetMaxConcurrencyPerEnvironment"></a>

```java
public void resetMaxConcurrencyPerEnvironment()
```

##### `resetTelemetryConfig` <a name="resetTelemetryConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetTelemetryConfig"></a>

```java
public void resetTelemetryConfig()
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetTimeoutSeconds"></a>

```java
public void resetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.telemetryConfig">telemetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference">LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironmentInput">maxConcurrencyPerEnvironmentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.telemetryConfigInput">telemetryConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironment">maxConcurrencyPerEnvironment</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `telemetryConfig`<sup>Required</sup> <a name="telemetryConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.telemetryConfig"></a>

```java
public LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference getTelemetryConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference">LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference</a>

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.environmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.executionRoleArnInput"></a>

```java
public java.lang.String getExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `maxConcurrencyPerEnvironmentInput`<sup>Optional</sup> <a name="maxConcurrencyPerEnvironmentInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironmentInput"></a>

```java
public java.lang.Number getMaxConcurrencyPerEnvironmentInput();
```

- *Type:* java.lang.Number

---

##### `telemetryConfigInput`<sup>Optional</sup> <a name="telemetryConfigInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.telemetryConfigInput"></a>

```java
public IResolvable|LambdaWebFunctionRevisionServiceConfigTelemetryConfig getTelemetryConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfig</a>

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.timeoutSecondsInput"></a>

```java
public java.lang.Number getTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `maxConcurrencyPerEnvironment`<sup>Required</sup> <a name="maxConcurrencyPerEnvironment" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironment"></a>

```java
public java.lang.Number getMaxConcurrencyPerEnvironment();
```

- *Type:* java.lang.Number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaWebFunctionRevisionServiceConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a>

---


### LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference <a name="LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_revision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference;

new LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetApplicationLogLevel">resetApplicationLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetSystemLogLevel">resetSystemLogLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationLogLevel` <a name="resetApplicationLogLevel" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetApplicationLogLevel"></a>

```java
public void resetApplicationLogLevel()
```

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetLogGroup"></a>

```java
public void resetLogGroup()
```

##### `resetSystemLogLevel` <a name="resetSystemLogLevel" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetSystemLogLevel"></a>

```java
public void resetSystemLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevelInput">applicationLogLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevelInput">systemLogLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevel">applicationLogLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevel">systemLogLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationLogLevelInput`<sup>Optional</sup> <a name="applicationLogLevelInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevelInput"></a>

```java
public java.lang.String getApplicationLogLevelInput();
```

- *Type:* java.lang.String

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroupInput"></a>

```java
public java.lang.String getLogGroupInput();
```

- *Type:* java.lang.String

---

##### `systemLogLevelInput`<sup>Optional</sup> <a name="systemLogLevelInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevelInput"></a>

```java
public java.lang.String getSystemLogLevelInput();
```

- *Type:* java.lang.String

---

##### `applicationLogLevel`<sup>Required</sup> <a name="applicationLogLevel" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevel"></a>

```java
public java.lang.String getApplicationLogLevel();
```

- *Type:* java.lang.String

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

---

##### `systemLogLevel`<sup>Required</sup> <a name="systemLogLevel" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevel"></a>

```java
public java.lang.String getSystemLogLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>

---


### LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference <a name="LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_web_function_revision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference;

new LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.putLoggingConfig"></a>

```java
public void putLoggingConfig(LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>

---

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resetLoggingConfig"></a>

```java
public void resetLoggingConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfigInput">loggingConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfig"></a>

```java
public LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference getLoggingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference</a>

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfigInput"></a>

```java
public IResolvable|LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig getLoggingConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaWebFunctionRevisionServiceConfigTelemetryConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfig</a>

---



