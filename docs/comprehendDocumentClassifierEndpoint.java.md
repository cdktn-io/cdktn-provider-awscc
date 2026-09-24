# `comprehendDocumentClassifierEndpoint` Submodule <a name="`comprehendDocumentClassifierEndpoint` Submodule" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComprehendDocumentClassifierEndpoint <a name="ComprehendDocumentClassifierEndpoint" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/comprehend_document_classifier_endpoint awscc_comprehend_document_classifier_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_document_classifier_endpoint.ComprehendDocumentClassifierEndpoint;

ComprehendDocumentClassifierEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .desiredInferenceUnits(java.lang.Number)
    .endpointName(java.lang.String)
    .modelArn(java.lang.String)
//  .tags(IResolvable|java.util.List<ComprehendDocumentClassifierEndpointTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.desiredInferenceUnits">desiredInferenceUnits</a></code> | <code>java.lang.Number</code> | The desired number of inference units to be used by the model. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.endpointName">endpointName</a></code> | <code>java.lang.String</code> | The name of the endpoint. The name must be unique within the AWS Region and account. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.modelArn">modelArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the document classifier model to which the endpoint is attached. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a>></code> | Tags associated with the endpoint being created. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `desiredInferenceUnits`<sup>Required</sup> <a name="desiredInferenceUnits" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.desiredInferenceUnits"></a>

- *Type:* java.lang.Number

The desired number of inference units to be used by the model.

Each inference unit represents throughput of 100 characters per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/comprehend_document_classifier_endpoint#desired_inference_units ComprehendDocumentClassifierEndpoint#desired_inference_units}

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.endpointName"></a>

- *Type:* java.lang.String

The name of the endpoint. The name must be unique within the AWS Region and account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/comprehend_document_classifier_endpoint#endpoint_name ComprehendDocumentClassifierEndpoint#endpoint_name}

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.modelArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the document classifier model to which the endpoint is attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/comprehend_document_classifier_endpoint#model_arn ComprehendDocumentClassifierEndpoint#model_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a>>

Tags associated with the endpoint being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/comprehend_document_classifier_endpoint#tags ComprehendDocumentClassifierEndpoint#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ComprehendDocumentClassifierEndpointTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComprehendDocumentClassifierEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isConstruct"></a>

```java
import io.cdktn.providers.awscc.comprehend_document_classifier_endpoint.ComprehendDocumentClassifierEndpoint;

ComprehendDocumentClassifierEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.comprehend_document_classifier_endpoint.ComprehendDocumentClassifierEndpoint;

ComprehendDocumentClassifierEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.comprehend_document_classifier_endpoint.ComprehendDocumentClassifierEndpoint;

ComprehendDocumentClassifierEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.comprehend_document_classifier_endpoint.ComprehendDocumentClassifierEndpoint;

ComprehendDocumentClassifierEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComprehendDocumentClassifierEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ComprehendDocumentClassifierEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComprehendDocumentClassifierEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComprehendDocumentClassifierEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/comprehend_document_classifier_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ComprehendDocumentClassifierEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.currentInferenceUnits">currentInferenceUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList">ComprehendDocumentClassifierEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.desiredInferenceUnitsInput">desiredInferenceUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.endpointNameInput">endpointNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.modelArnInput">modelArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.desiredInferenceUnits">desiredInferenceUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.endpointName">endpointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.modelArn">modelArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `currentInferenceUnits`<sup>Required</sup> <a name="currentInferenceUnits" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.currentInferenceUnits"></a>

```java
public java.lang.Number getCurrentInferenceUnits();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.lastModifiedTime"></a>

```java
public java.lang.String getLastModifiedTime();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.tags"></a>

```java
public ComprehendDocumentClassifierEndpointTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList">ComprehendDocumentClassifierEndpointTagsList</a>

---

##### `desiredInferenceUnitsInput`<sup>Optional</sup> <a name="desiredInferenceUnitsInput" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.desiredInferenceUnitsInput"></a>

```java
public java.lang.Number getDesiredInferenceUnitsInput();
```

- *Type:* java.lang.Number

---

##### `endpointNameInput`<sup>Optional</sup> <a name="endpointNameInput" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.endpointNameInput"></a>

```java
public java.lang.String getEndpointNameInput();
```

- *Type:* java.lang.String

---

##### `modelArnInput`<sup>Optional</sup> <a name="modelArnInput" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.modelArnInput"></a>

```java
public java.lang.String getModelArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ComprehendDocumentClassifierEndpointTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a>>

---

##### `desiredInferenceUnits`<sup>Required</sup> <a name="desiredInferenceUnits" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.desiredInferenceUnits"></a>

```java
public java.lang.Number getDesiredInferenceUnits();
```

- *Type:* java.lang.Number

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.endpointName"></a>

```java
public java.lang.String getEndpointName();
```

- *Type:* java.lang.String

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.modelArn"></a>

```java
public java.lang.String getModelArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComprehendDocumentClassifierEndpointConfig <a name="ComprehendDocumentClassifierEndpointConfig" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_document_classifier_endpoint.ComprehendDocumentClassifierEndpointConfig;

ComprehendDocumentClassifierEndpointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .desiredInferenceUnits(java.lang.Number)
    .endpointName(java.lang.String)
    .modelArn(java.lang.String)
//  .tags(IResolvable|java.util.List<ComprehendDocumentClassifierEndpointTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.desiredInferenceUnits">desiredInferenceUnits</a></code> | <code>java.lang.Number</code> | The desired number of inference units to be used by the model. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.endpointName">endpointName</a></code> | <code>java.lang.String</code> | The name of the endpoint. The name must be unique within the AWS Region and account. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.modelArn">modelArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the document classifier model to which the endpoint is attached. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a>></code> | Tags associated with the endpoint being created. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `desiredInferenceUnits`<sup>Required</sup> <a name="desiredInferenceUnits" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.desiredInferenceUnits"></a>

```java
public java.lang.Number getDesiredInferenceUnits();
```

- *Type:* java.lang.Number

The desired number of inference units to be used by the model.

Each inference unit represents throughput of 100 characters per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/comprehend_document_classifier_endpoint#desired_inference_units ComprehendDocumentClassifierEndpoint#desired_inference_units}

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.endpointName"></a>

```java
public java.lang.String getEndpointName();
```

- *Type:* java.lang.String

The name of the endpoint. The name must be unique within the AWS Region and account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/comprehend_document_classifier_endpoint#endpoint_name ComprehendDocumentClassifierEndpoint#endpoint_name}

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.modelArn"></a>

```java
public java.lang.String getModelArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the document classifier model to which the endpoint is attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/comprehend_document_classifier_endpoint#model_arn ComprehendDocumentClassifierEndpoint#model_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ComprehendDocumentClassifierEndpointTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a>>

Tags associated with the endpoint being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/comprehend_document_classifier_endpoint#tags ComprehendDocumentClassifierEndpoint#tags}

---

### ComprehendDocumentClassifierEndpointTags <a name="ComprehendDocumentClassifierEndpointTags" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_document_classifier_endpoint.ComprehendDocumentClassifierEndpointTags;

ComprehendDocumentClassifierEndpointTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags.property.key">key</a></code> | <code>java.lang.String</code> | The initial part of a key-value pair that forms a tag associated with a given resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags.property.value">value</a></code> | <code>java.lang.String</code> | The second part of a key-value pair that forms a tag associated with a given resource. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The initial part of a key-value pair that forms a tag associated with a given resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/comprehend_document_classifier_endpoint#key ComprehendDocumentClassifierEndpoint#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The second part of a key-value pair that forms a tag associated with a given resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/comprehend_document_classifier_endpoint#value ComprehendDocumentClassifierEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ComprehendDocumentClassifierEndpointTagsList <a name="ComprehendDocumentClassifierEndpointTagsList" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_document_classifier_endpoint.ComprehendDocumentClassifierEndpointTagsList;

new ComprehendDocumentClassifierEndpointTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.get"></a>

```java
public ComprehendDocumentClassifierEndpointTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ComprehendDocumentClassifierEndpointTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a>>

---


### ComprehendDocumentClassifierEndpointTagsOutputReference <a name="ComprehendDocumentClassifierEndpointTagsOutputReference" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_document_classifier_endpoint.ComprehendDocumentClassifierEndpointTagsOutputReference;

new ComprehendDocumentClassifierEndpointTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComprehendDocumentClassifierEndpointTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a>

---



