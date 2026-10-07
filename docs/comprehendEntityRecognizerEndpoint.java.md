# `comprehendEntityRecognizerEndpoint` Submodule <a name="`comprehendEntityRecognizerEndpoint` Submodule" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComprehendEntityRecognizerEndpoint <a name="ComprehendEntityRecognizerEndpoint" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer_endpoint awscc_comprehend_entity_recognizer_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer_endpoint.ComprehendEntityRecognizerEndpoint;

ComprehendEntityRecognizerEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .desiredInferenceUnits(java.lang.Number)
    .endpointName(java.lang.String)
//  .dataAccessRoleArn(java.lang.String)
//  .flywheelArn(java.lang.String)
//  .modelArn(java.lang.String)
//  .tags(IResolvable|java.util.List<ComprehendEntityRecognizerEndpointTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.desiredInferenceUnits">desiredInferenceUnits</a></code> | <code>java.lang.Number</code> | The desired number of inference units to be used by the model. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.endpointName">endpointName</a></code> | <code>java.lang.String</code> | The name of the endpoint. The name must be unique within the AWS Region and account. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to trained custom models encrypted with a customer managed key (ModelKmsKeyId). |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.flywheelArn">flywheelArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the flywheel to which the endpoint is attached. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.modelArn">modelArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the entity recognizer model to which the endpoint is attached. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a>></code> | Tags associated with the endpoint being created. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `desiredInferenceUnits`<sup>Required</sup> <a name="desiredInferenceUnits" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.desiredInferenceUnits"></a>

- *Type:* java.lang.Number

The desired number of inference units to be used by the model.

Each inference unit represents throughput of 100 characters per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer_endpoint#desired_inference_units ComprehendEntityRecognizerEndpoint#desired_inference_units}

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.endpointName"></a>

- *Type:* java.lang.String

The name of the endpoint. The name must be unique within the AWS Region and account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer_endpoint#endpoint_name ComprehendEntityRecognizerEndpoint#endpoint_name}

---

##### `dataAccessRoleArn`<sup>Optional</sup> <a name="dataAccessRoleArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.dataAccessRoleArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to trained custom models encrypted with a customer managed key (ModelKmsKeyId).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer_endpoint#data_access_role_arn ComprehendEntityRecognizerEndpoint#data_access_role_arn}

---

##### `flywheelArn`<sup>Optional</sup> <a name="flywheelArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.flywheelArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the flywheel to which the endpoint is attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer_endpoint#flywheel_arn ComprehendEntityRecognizerEndpoint#flywheel_arn}

---

##### `modelArn`<sup>Optional</sup> <a name="modelArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.modelArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the entity recognizer model to which the endpoint is attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer_endpoint#model_arn ComprehendEntityRecognizerEndpoint#model_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a>>

Tags associated with the endpoint being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer_endpoint#tags ComprehendEntityRecognizerEndpoint#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetDataAccessRoleArn">resetDataAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetFlywheelArn">resetFlywheelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetModelArn">resetModelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ComprehendEntityRecognizerEndpointTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a>>

---

##### `resetDataAccessRoleArn` <a name="resetDataAccessRoleArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetDataAccessRoleArn"></a>

```java
public void resetDataAccessRoleArn()
```

##### `resetFlywheelArn` <a name="resetFlywheelArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetFlywheelArn"></a>

```java
public void resetFlywheelArn()
```

##### `resetModelArn` <a name="resetModelArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetModelArn"></a>

```java
public void resetModelArn()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComprehendEntityRecognizerEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isConstruct"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer_endpoint.ComprehendEntityRecognizerEndpoint;

ComprehendEntityRecognizerEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer_endpoint.ComprehendEntityRecognizerEndpoint;

ComprehendEntityRecognizerEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer_endpoint.ComprehendEntityRecognizerEndpoint;

ComprehendEntityRecognizerEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer_endpoint.ComprehendEntityRecognizerEndpoint;

ComprehendEntityRecognizerEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComprehendEntityRecognizerEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ComprehendEntityRecognizerEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComprehendEntityRecognizerEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComprehendEntityRecognizerEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ComprehendEntityRecognizerEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.currentInferenceUnits">currentInferenceUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.endpointStatus">endpointStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList">ComprehendEntityRecognizerEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.dataAccessRoleArnInput">dataAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.desiredInferenceUnitsInput">desiredInferenceUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.endpointNameInput">endpointNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.flywheelArnInput">flywheelArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.modelArnInput">modelArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.desiredInferenceUnits">desiredInferenceUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.endpointName">endpointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.flywheelArn">flywheelArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.modelArn">modelArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `currentInferenceUnits`<sup>Required</sup> <a name="currentInferenceUnits" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.currentInferenceUnits"></a>

```java
public java.lang.Number getCurrentInferenceUnits();
```

- *Type:* java.lang.Number

---

##### `endpointStatus`<sup>Required</sup> <a name="endpointStatus" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.endpointStatus"></a>

```java
public java.lang.String getEndpointStatus();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.lastModifiedTime"></a>

```java
public java.lang.String getLastModifiedTime();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.tags"></a>

```java
public ComprehendEntityRecognizerEndpointTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList">ComprehendEntityRecognizerEndpointTagsList</a>

---

##### `dataAccessRoleArnInput`<sup>Optional</sup> <a name="dataAccessRoleArnInput" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.dataAccessRoleArnInput"></a>

```java
public java.lang.String getDataAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `desiredInferenceUnitsInput`<sup>Optional</sup> <a name="desiredInferenceUnitsInput" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.desiredInferenceUnitsInput"></a>

```java
public java.lang.Number getDesiredInferenceUnitsInput();
```

- *Type:* java.lang.Number

---

##### `endpointNameInput`<sup>Optional</sup> <a name="endpointNameInput" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.endpointNameInput"></a>

```java
public java.lang.String getEndpointNameInput();
```

- *Type:* java.lang.String

---

##### `flywheelArnInput`<sup>Optional</sup> <a name="flywheelArnInput" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.flywheelArnInput"></a>

```java
public java.lang.String getFlywheelArnInput();
```

- *Type:* java.lang.String

---

##### `modelArnInput`<sup>Optional</sup> <a name="modelArnInput" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.modelArnInput"></a>

```java
public java.lang.String getModelArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ComprehendEntityRecognizerEndpointTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a>>

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.dataAccessRoleArn"></a>

```java
public java.lang.String getDataAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `desiredInferenceUnits`<sup>Required</sup> <a name="desiredInferenceUnits" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.desiredInferenceUnits"></a>

```java
public java.lang.Number getDesiredInferenceUnits();
```

- *Type:* java.lang.Number

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.endpointName"></a>

```java
public java.lang.String getEndpointName();
```

- *Type:* java.lang.String

---

##### `flywheelArn`<sup>Required</sup> <a name="flywheelArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.flywheelArn"></a>

```java
public java.lang.String getFlywheelArn();
```

- *Type:* java.lang.String

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.modelArn"></a>

```java
public java.lang.String getModelArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComprehendEntityRecognizerEndpointConfig <a name="ComprehendEntityRecognizerEndpointConfig" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer_endpoint.ComprehendEntityRecognizerEndpointConfig;

ComprehendEntityRecognizerEndpointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .desiredInferenceUnits(java.lang.Number)
    .endpointName(java.lang.String)
//  .dataAccessRoleArn(java.lang.String)
//  .flywheelArn(java.lang.String)
//  .modelArn(java.lang.String)
//  .tags(IResolvable|java.util.List<ComprehendEntityRecognizerEndpointTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.desiredInferenceUnits">desiredInferenceUnits</a></code> | <code>java.lang.Number</code> | The desired number of inference units to be used by the model. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.endpointName">endpointName</a></code> | <code>java.lang.String</code> | The name of the endpoint. The name must be unique within the AWS Region and account. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to trained custom models encrypted with a customer managed key (ModelKmsKeyId). |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.flywheelArn">flywheelArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the flywheel to which the endpoint is attached. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.modelArn">modelArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the entity recognizer model to which the endpoint is attached. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a>></code> | Tags associated with the endpoint being created. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `desiredInferenceUnits`<sup>Required</sup> <a name="desiredInferenceUnits" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.desiredInferenceUnits"></a>

```java
public java.lang.Number getDesiredInferenceUnits();
```

- *Type:* java.lang.Number

The desired number of inference units to be used by the model.

Each inference unit represents throughput of 100 characters per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer_endpoint#desired_inference_units ComprehendEntityRecognizerEndpoint#desired_inference_units}

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.endpointName"></a>

```java
public java.lang.String getEndpointName();
```

- *Type:* java.lang.String

The name of the endpoint. The name must be unique within the AWS Region and account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer_endpoint#endpoint_name ComprehendEntityRecognizerEndpoint#endpoint_name}

---

##### `dataAccessRoleArn`<sup>Optional</sup> <a name="dataAccessRoleArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.dataAccessRoleArn"></a>

```java
public java.lang.String getDataAccessRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to trained custom models encrypted with a customer managed key (ModelKmsKeyId).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer_endpoint#data_access_role_arn ComprehendEntityRecognizerEndpoint#data_access_role_arn}

---

##### `flywheelArn`<sup>Optional</sup> <a name="flywheelArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.flywheelArn"></a>

```java
public java.lang.String getFlywheelArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the flywheel to which the endpoint is attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer_endpoint#flywheel_arn ComprehendEntityRecognizerEndpoint#flywheel_arn}

---

##### `modelArn`<sup>Optional</sup> <a name="modelArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.modelArn"></a>

```java
public java.lang.String getModelArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the entity recognizer model to which the endpoint is attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer_endpoint#model_arn ComprehendEntityRecognizerEndpoint#model_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ComprehendEntityRecognizerEndpointTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a>>

Tags associated with the endpoint being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer_endpoint#tags ComprehendEntityRecognizerEndpoint#tags}

---

### ComprehendEntityRecognizerEndpointTags <a name="ComprehendEntityRecognizerEndpointTags" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer_endpoint.ComprehendEntityRecognizerEndpointTags;

ComprehendEntityRecognizerEndpointTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags.property.key">key</a></code> | <code>java.lang.String</code> | The initial part of a key-value pair that forms a tag associated with a given resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags.property.value">value</a></code> | <code>java.lang.String</code> | The second part of a key-value pair that forms a tag associated with a given resource. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The initial part of a key-value pair that forms a tag associated with a given resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer_endpoint#key ComprehendEntityRecognizerEndpoint#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The second part of a key-value pair that forms a tag associated with a given resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer_endpoint#value ComprehendEntityRecognizerEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ComprehendEntityRecognizerEndpointTagsList <a name="ComprehendEntityRecognizerEndpointTagsList" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer_endpoint.ComprehendEntityRecognizerEndpointTagsList;

new ComprehendEntityRecognizerEndpointTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.get"></a>

```java
public ComprehendEntityRecognizerEndpointTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ComprehendEntityRecognizerEndpointTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a>>

---


### ComprehendEntityRecognizerEndpointTagsOutputReference <a name="ComprehendEntityRecognizerEndpointTagsOutputReference" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer_endpoint.ComprehendEntityRecognizerEndpointTagsOutputReference;

new ComprehendEntityRecognizerEndpointTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComprehendEntityRecognizerEndpointTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a>

---



