# `cloudformationGeneratedTemplate` Submodule <a name="`cloudformationGeneratedTemplate` Submodule" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationGeneratedTemplate <a name="CloudformationGeneratedTemplate" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_generated_template awscc_cloudformation_generated_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_generated_template.CloudformationGeneratedTemplate;

CloudformationGeneratedTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .generatedTemplateName(java.lang.String)
//  .templateConfiguration(CloudformationGeneratedTemplateTemplateConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.generatedTemplateName">generatedTemplateName</a></code> | <code>java.lang.String</code> | The name assigned to the generated template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.templateConfiguration">templateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration">CloudformationGeneratedTemplateTemplateConfiguration</a></code> | The configuration details of the generated template. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `generatedTemplateName`<sup>Required</sup> <a name="generatedTemplateName" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.generatedTemplateName"></a>

- *Type:* java.lang.String

The name assigned to the generated template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_generated_template#generated_template_name CloudformationGeneratedTemplate#generated_template_name}

---

##### `templateConfiguration`<sup>Optional</sup> <a name="templateConfiguration" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.templateConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration">CloudformationGeneratedTemplateTemplateConfiguration</a>

The configuration details of the generated template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_generated_template#template_configuration CloudformationGeneratedTemplate#template_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.putTemplateConfiguration">putTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.resetTemplateConfiguration">resetTemplateConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTemplateConfiguration` <a name="putTemplateConfiguration" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.putTemplateConfiguration"></a>

```java
public void putTemplateConfiguration(CloudformationGeneratedTemplateTemplateConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.putTemplateConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration">CloudformationGeneratedTemplateTemplateConfiguration</a>

---

##### `resetTemplateConfiguration` <a name="resetTemplateConfiguration" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.resetTemplateConfiguration"></a>

```java
public void resetTemplateConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudformationGeneratedTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cloudformation_generated_template.CloudformationGeneratedTemplate;

CloudformationGeneratedTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cloudformation_generated_template.CloudformationGeneratedTemplate;

CloudformationGeneratedTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cloudformation_generated_template.CloudformationGeneratedTemplate;

CloudformationGeneratedTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cloudformation_generated_template.CloudformationGeneratedTemplate;

CloudformationGeneratedTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudformationGeneratedTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudformationGeneratedTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudformationGeneratedTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudformationGeneratedTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_generated_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationGeneratedTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.generatedTemplateId">generatedTemplateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.progress">progress</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference">CloudformationGeneratedTemplateProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.templateConfiguration">templateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference">CloudformationGeneratedTemplateTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.totalWarnings">totalWarnings</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.generatedTemplateNameInput">generatedTemplateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.templateConfigurationInput">templateConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration">CloudformationGeneratedTemplateTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.generatedTemplateName">generatedTemplateName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `generatedTemplateId`<sup>Required</sup> <a name="generatedTemplateId" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.generatedTemplateId"></a>

```java
public java.lang.String getGeneratedTemplateId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

---

##### `progress`<sup>Required</sup> <a name="progress" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.progress"></a>

```java
public CloudformationGeneratedTemplateProgressOutputReference getProgress();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference">CloudformationGeneratedTemplateProgressOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `templateConfiguration`<sup>Required</sup> <a name="templateConfiguration" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.templateConfiguration"></a>

```java
public CloudformationGeneratedTemplateTemplateConfigurationOutputReference getTemplateConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference">CloudformationGeneratedTemplateTemplateConfigurationOutputReference</a>

---

##### `totalWarnings`<sup>Required</sup> <a name="totalWarnings" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.totalWarnings"></a>

```java
public java.lang.Number getTotalWarnings();
```

- *Type:* java.lang.Number

---

##### `generatedTemplateNameInput`<sup>Optional</sup> <a name="generatedTemplateNameInput" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.generatedTemplateNameInput"></a>

```java
public java.lang.String getGeneratedTemplateNameInput();
```

- *Type:* java.lang.String

---

##### `templateConfigurationInput`<sup>Optional</sup> <a name="templateConfigurationInput" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.templateConfigurationInput"></a>

```java
public IResolvable|CloudformationGeneratedTemplateTemplateConfiguration getTemplateConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration">CloudformationGeneratedTemplateTemplateConfiguration</a>

---

##### `generatedTemplateName`<sup>Required</sup> <a name="generatedTemplateName" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.generatedTemplateName"></a>

```java
public java.lang.String getGeneratedTemplateName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationGeneratedTemplateConfig <a name="CloudformationGeneratedTemplateConfig" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_generated_template.CloudformationGeneratedTemplateConfig;

CloudformationGeneratedTemplateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .generatedTemplateName(java.lang.String)
//  .templateConfiguration(CloudformationGeneratedTemplateTemplateConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.generatedTemplateName">generatedTemplateName</a></code> | <code>java.lang.String</code> | The name assigned to the generated template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.templateConfiguration">templateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration">CloudformationGeneratedTemplateTemplateConfiguration</a></code> | The configuration details of the generated template. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `generatedTemplateName`<sup>Required</sup> <a name="generatedTemplateName" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.generatedTemplateName"></a>

```java
public java.lang.String getGeneratedTemplateName();
```

- *Type:* java.lang.String

The name assigned to the generated template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_generated_template#generated_template_name CloudformationGeneratedTemplate#generated_template_name}

---

##### `templateConfiguration`<sup>Optional</sup> <a name="templateConfiguration" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.templateConfiguration"></a>

```java
public CloudformationGeneratedTemplateTemplateConfiguration getTemplateConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration">CloudformationGeneratedTemplateTemplateConfiguration</a>

The configuration details of the generated template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_generated_template#template_configuration CloudformationGeneratedTemplate#template_configuration}

---

### CloudformationGeneratedTemplateProgress <a name="CloudformationGeneratedTemplateProgress" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgress.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_generated_template.CloudformationGeneratedTemplateProgress;

CloudformationGeneratedTemplateProgress.builder()
    .build();
```


### CloudformationGeneratedTemplateTemplateConfiguration <a name="CloudformationGeneratedTemplateTemplateConfiguration" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_generated_template.CloudformationGeneratedTemplateTemplateConfiguration;

CloudformationGeneratedTemplateTemplateConfiguration.builder()
//  .deletionPolicy(java.lang.String)
//  .updateReplacePolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | The DeletionPolicy assigned to resources in the generated template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration.property.updateReplacePolicy">updateReplacePolicy</a></code> | <code>java.lang.String</code> | The UpdateReplacePolicy assigned to resources in the generated template. |

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

The DeletionPolicy assigned to resources in the generated template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_generated_template#deletion_policy CloudformationGeneratedTemplate#deletion_policy}

---

##### `updateReplacePolicy`<sup>Optional</sup> <a name="updateReplacePolicy" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration.property.updateReplacePolicy"></a>

```java
public java.lang.String getUpdateReplacePolicy();
```

- *Type:* java.lang.String

The UpdateReplacePolicy assigned to resources in the generated template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_generated_template#update_replace_policy CloudformationGeneratedTemplate#update_replace_policy}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationGeneratedTemplateProgressOutputReference <a name="CloudformationGeneratedTemplateProgressOutputReference" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_generated_template.CloudformationGeneratedTemplateProgressOutputReference;

new CloudformationGeneratedTemplateProgressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesFailed">resourcesFailed</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesPending">resourcesPending</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesProcessing">resourcesProcessing</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesSucceeded">resourcesSucceeded</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgress">CloudformationGeneratedTemplateProgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourcesFailed`<sup>Required</sup> <a name="resourcesFailed" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesFailed"></a>

```java
public java.lang.Number getResourcesFailed();
```

- *Type:* java.lang.Number

---

##### `resourcesPending`<sup>Required</sup> <a name="resourcesPending" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesPending"></a>

```java
public java.lang.Number getResourcesPending();
```

- *Type:* java.lang.Number

---

##### `resourcesProcessing`<sup>Required</sup> <a name="resourcesProcessing" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesProcessing"></a>

```java
public java.lang.Number getResourcesProcessing();
```

- *Type:* java.lang.Number

---

##### `resourcesSucceeded`<sup>Required</sup> <a name="resourcesSucceeded" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesSucceeded"></a>

```java
public java.lang.Number getResourcesSucceeded();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.internalValue"></a>

```java
public CloudformationGeneratedTemplateProgress getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgress">CloudformationGeneratedTemplateProgress</a>

---


### CloudformationGeneratedTemplateTemplateConfigurationOutputReference <a name="CloudformationGeneratedTemplateTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_generated_template.CloudformationGeneratedTemplateTemplateConfigurationOutputReference;

new CloudformationGeneratedTemplateTemplateConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.resetUpdateReplacePolicy">resetUpdateReplacePolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetUpdateReplacePolicy` <a name="resetUpdateReplacePolicy" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.resetUpdateReplacePolicy"></a>

```java
public void resetUpdateReplacePolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.updateReplacePolicyInput">updateReplacePolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.updateReplacePolicy">updateReplacePolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration">CloudformationGeneratedTemplateTemplateConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `updateReplacePolicyInput`<sup>Optional</sup> <a name="updateReplacePolicyInput" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.updateReplacePolicyInput"></a>

```java
public java.lang.String getUpdateReplacePolicyInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `updateReplacePolicy`<sup>Required</sup> <a name="updateReplacePolicy" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.updateReplacePolicy"></a>

```java
public java.lang.String getUpdateReplacePolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudformationGeneratedTemplateTemplateConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration">CloudformationGeneratedTemplateTemplateConfiguration</a>

---



