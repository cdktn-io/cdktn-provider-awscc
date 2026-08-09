# `qbusinessIndex` Submodule <a name="`qbusinessIndex` Submodule" id="@cdktn/provider-awscc.qbusinessIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QbusinessIndex <a name="QbusinessIndex" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index awscc_qbusiness_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_index.QbusinessIndex;

QbusinessIndex.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .displayName(java.lang.String)
//  .capacityConfiguration(QbusinessIndexCapacityConfiguration)
//  .description(java.lang.String)
//  .documentAttributeConfigurations(IResolvable|java.util.List<QbusinessIndexDocumentAttributeConfigurations>)
//  .tags(IResolvable|java.util.List<QbusinessIndexTags>)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#application_id QbusinessIndex#application_id}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#display_name QbusinessIndex#display_name}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.capacityConfiguration">capacityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfiguration">QbusinessIndexCapacityConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#capacity_configuration QbusinessIndex#capacity_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#description QbusinessIndex#description}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.documentAttributeConfigurations">documentAttributeConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations">QbusinessIndexDocumentAttributeConfigurations</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#document_attribute_configurations QbusinessIndex#document_attribute_configurations}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags">QbusinessIndexTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#tags QbusinessIndex#tags}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#type QbusinessIndex#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#application_id QbusinessIndex#application_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#display_name QbusinessIndex#display_name}.

---

##### `capacityConfiguration`<sup>Optional</sup> <a name="capacityConfiguration" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.capacityConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfiguration">QbusinessIndexCapacityConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#capacity_configuration QbusinessIndex#capacity_configuration}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#description QbusinessIndex#description}.

---

##### `documentAttributeConfigurations`<sup>Optional</sup> <a name="documentAttributeConfigurations" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.documentAttributeConfigurations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations">QbusinessIndexDocumentAttributeConfigurations</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#document_attribute_configurations QbusinessIndex#document_attribute_configurations}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags">QbusinessIndexTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#tags QbusinessIndex#tags}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#type QbusinessIndex#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.putCapacityConfiguration">putCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.putDocumentAttributeConfigurations">putDocumentAttributeConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.resetCapacityConfiguration">resetCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.resetDocumentAttributeConfigurations">resetDocumentAttributeConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapacityConfiguration` <a name="putCapacityConfiguration" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.putCapacityConfiguration"></a>

```java
public void putCapacityConfiguration(QbusinessIndexCapacityConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.putCapacityConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfiguration">QbusinessIndexCapacityConfiguration</a>

---

##### `putDocumentAttributeConfigurations` <a name="putDocumentAttributeConfigurations" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.putDocumentAttributeConfigurations"></a>

```java
public void putDocumentAttributeConfigurations(IResolvable|java.util.List<QbusinessIndexDocumentAttributeConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.putDocumentAttributeConfigurations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations">QbusinessIndexDocumentAttributeConfigurations</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<QbusinessIndexTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags">QbusinessIndexTags</a>>

---

##### `resetCapacityConfiguration` <a name="resetCapacityConfiguration" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.resetCapacityConfiguration"></a>

```java
public void resetCapacityConfiguration()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDocumentAttributeConfigurations` <a name="resetDocumentAttributeConfigurations" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.resetDocumentAttributeConfigurations"></a>

```java
public void resetDocumentAttributeConfigurations()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.resetTags"></a>

```java
public void resetTags()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a QbusinessIndex resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.isConstruct"></a>

```java
import io.cdktn.providers.awscc.qbusiness_index.QbusinessIndex;

QbusinessIndex.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.qbusiness_index.QbusinessIndex;

QbusinessIndex.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.qbusiness_index.QbusinessIndex;

QbusinessIndex.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.qbusiness_index.QbusinessIndex;

QbusinessIndex.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),QbusinessIndex.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a QbusinessIndex resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the QbusinessIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing QbusinessIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the QbusinessIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.capacityConfiguration">capacityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference">QbusinessIndexCapacityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.documentAttributeConfigurations">documentAttributeConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList">QbusinessIndexDocumentAttributeConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.indexArn">indexArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.indexId">indexId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.indexStatistics">indexStatistics</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference">QbusinessIndexIndexStatisticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList">QbusinessIndexTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.capacityConfigurationInput">capacityConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfiguration">QbusinessIndexCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.documentAttributeConfigurationsInput">documentAttributeConfigurationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations">QbusinessIndexDocumentAttributeConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags">QbusinessIndexTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `capacityConfiguration`<sup>Required</sup> <a name="capacityConfiguration" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.capacityConfiguration"></a>

```java
public QbusinessIndexCapacityConfigurationOutputReference getCapacityConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference">QbusinessIndexCapacityConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `documentAttributeConfigurations`<sup>Required</sup> <a name="documentAttributeConfigurations" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.documentAttributeConfigurations"></a>

```java
public QbusinessIndexDocumentAttributeConfigurationsList getDocumentAttributeConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList">QbusinessIndexDocumentAttributeConfigurationsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `indexArn`<sup>Required</sup> <a name="indexArn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.indexArn"></a>

```java
public java.lang.String getIndexArn();
```

- *Type:* java.lang.String

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.indexId"></a>

```java
public java.lang.String getIndexId();
```

- *Type:* java.lang.String

---

##### `indexStatistics`<sup>Required</sup> <a name="indexStatistics" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.indexStatistics"></a>

```java
public QbusinessIndexIndexStatisticsOutputReference getIndexStatistics();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference">QbusinessIndexIndexStatisticsOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.tags"></a>

```java
public QbusinessIndexTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList">QbusinessIndexTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `capacityConfigurationInput`<sup>Optional</sup> <a name="capacityConfigurationInput" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.capacityConfigurationInput"></a>

```java
public IResolvable|QbusinessIndexCapacityConfiguration getCapacityConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfiguration">QbusinessIndexCapacityConfiguration</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `documentAttributeConfigurationsInput`<sup>Optional</sup> <a name="documentAttributeConfigurationsInput" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.documentAttributeConfigurationsInput"></a>

```java
public IResolvable|java.util.List<QbusinessIndexDocumentAttributeConfigurations> getDocumentAttributeConfigurationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations">QbusinessIndexDocumentAttributeConfigurations</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.tagsInput"></a>

```java
public IResolvable|java.util.List<QbusinessIndexTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags">QbusinessIndexTags</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### QbusinessIndexCapacityConfiguration <a name="QbusinessIndexCapacityConfiguration" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_index.QbusinessIndexCapacityConfiguration;

QbusinessIndexCapacityConfiguration.builder()
//  .units(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfiguration.property.units">units</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#units QbusinessIndex#units}. |

---

##### `units`<sup>Optional</sup> <a name="units" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfiguration.property.units"></a>

```java
public java.lang.Number getUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#units QbusinessIndex#units}.

---

### QbusinessIndexConfig <a name="QbusinessIndexConfig" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_index.QbusinessIndexConfig;

QbusinessIndexConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .displayName(java.lang.String)
//  .capacityConfiguration(QbusinessIndexCapacityConfiguration)
//  .description(java.lang.String)
//  .documentAttributeConfigurations(IResolvable|java.util.List<QbusinessIndexDocumentAttributeConfigurations>)
//  .tags(IResolvable|java.util.List<QbusinessIndexTags>)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#application_id QbusinessIndex#application_id}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#display_name QbusinessIndex#display_name}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.capacityConfiguration">capacityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfiguration">QbusinessIndexCapacityConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#capacity_configuration QbusinessIndex#capacity_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#description QbusinessIndex#description}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.documentAttributeConfigurations">documentAttributeConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations">QbusinessIndexDocumentAttributeConfigurations</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#document_attribute_configurations QbusinessIndex#document_attribute_configurations}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags">QbusinessIndexTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#tags QbusinessIndex#tags}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#type QbusinessIndex#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#application_id QbusinessIndex#application_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#display_name QbusinessIndex#display_name}.

---

##### `capacityConfiguration`<sup>Optional</sup> <a name="capacityConfiguration" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.capacityConfiguration"></a>

```java
public QbusinessIndexCapacityConfiguration getCapacityConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfiguration">QbusinessIndexCapacityConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#capacity_configuration QbusinessIndex#capacity_configuration}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#description QbusinessIndex#description}.

---

##### `documentAttributeConfigurations`<sup>Optional</sup> <a name="documentAttributeConfigurations" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.documentAttributeConfigurations"></a>

```java
public IResolvable|java.util.List<QbusinessIndexDocumentAttributeConfigurations> getDocumentAttributeConfigurations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations">QbusinessIndexDocumentAttributeConfigurations</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#document_attribute_configurations QbusinessIndex#document_attribute_configurations}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.tags"></a>

```java
public IResolvable|java.util.List<QbusinessIndexTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags">QbusinessIndexTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#tags QbusinessIndex#tags}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#type QbusinessIndex#type}.

---

### QbusinessIndexDocumentAttributeConfigurations <a name="QbusinessIndexDocumentAttributeConfigurations" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_index.QbusinessIndexDocumentAttributeConfigurations;

QbusinessIndexDocumentAttributeConfigurations.builder()
//  .name(java.lang.String)
//  .search(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#name QbusinessIndex#name}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations.property.search">search</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#search QbusinessIndex#search}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#type QbusinessIndex#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#name QbusinessIndex#name}.

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#search QbusinessIndex#search}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#type QbusinessIndex#type}.

---

### QbusinessIndexIndexStatistics <a name="QbusinessIndexIndexStatistics" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatistics.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_index.QbusinessIndexIndexStatistics;

QbusinessIndexIndexStatistics.builder()
    .build();
```


### QbusinessIndexIndexStatisticsTextDocumentStatistics <a name="QbusinessIndexIndexStatisticsTextDocumentStatistics" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatistics.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_index.QbusinessIndexIndexStatisticsTextDocumentStatistics;

QbusinessIndexIndexStatisticsTextDocumentStatistics.builder()
    .build();
```


### QbusinessIndexTags <a name="QbusinessIndexTags" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_index.QbusinessIndexTags;

QbusinessIndexTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#key QbusinessIndex#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#value QbusinessIndex#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#key QbusinessIndex#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_index#value QbusinessIndex#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### QbusinessIndexCapacityConfigurationOutputReference <a name="QbusinessIndexCapacityConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_index.QbusinessIndexCapacityConfigurationOutputReference;

new QbusinessIndexCapacityConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.resetUnits">resetUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnits` <a name="resetUnits" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.resetUnits"></a>

```java
public void resetUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.property.unitsInput">unitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.property.units">units</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfiguration">QbusinessIndexCapacityConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unitsInput`<sup>Optional</sup> <a name="unitsInput" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.property.unitsInput"></a>

```java
public java.lang.Number getUnitsInput();
```

- *Type:* java.lang.Number

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.property.units"></a>

```java
public java.lang.Number getUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessIndexCapacityConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfiguration">QbusinessIndexCapacityConfiguration</a>

---


### QbusinessIndexDocumentAttributeConfigurationsList <a name="QbusinessIndexDocumentAttributeConfigurationsList" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_index.QbusinessIndexDocumentAttributeConfigurationsList;

new QbusinessIndexDocumentAttributeConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.get"></a>

```java
public QbusinessIndexDocumentAttributeConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations">QbusinessIndexDocumentAttributeConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QbusinessIndexDocumentAttributeConfigurations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations">QbusinessIndexDocumentAttributeConfigurations</a>>

---


### QbusinessIndexDocumentAttributeConfigurationsOutputReference <a name="QbusinessIndexDocumentAttributeConfigurationsOutputReference" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_index.QbusinessIndexDocumentAttributeConfigurationsOutputReference;

new QbusinessIndexDocumentAttributeConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetSearch` <a name="resetSearch" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.resetSearch"></a>

```java
public void resetSearch()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.searchInput">searchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.search">search</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations">QbusinessIndexDocumentAttributeConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.searchInput"></a>

```java
public java.lang.String getSearchInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessIndexDocumentAttributeConfigurations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations">QbusinessIndexDocumentAttributeConfigurations</a>

---


### QbusinessIndexIndexStatisticsOutputReference <a name="QbusinessIndexIndexStatisticsOutputReference" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_index.QbusinessIndexIndexStatisticsOutputReference;

new QbusinessIndexIndexStatisticsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.property.textDocumentStatistics">textDocumentStatistics</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference">QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatistics">QbusinessIndexIndexStatistics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `textDocumentStatistics`<sup>Required</sup> <a name="textDocumentStatistics" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.property.textDocumentStatistics"></a>

```java
public QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference getTextDocumentStatistics();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference">QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.property.internalValue"></a>

```java
public QbusinessIndexIndexStatistics getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatistics">QbusinessIndexIndexStatistics</a>

---


### QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference <a name="QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_index.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference;

new QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextBytes">indexedTextBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextDocumentCount">indexedTextDocumentCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatistics">QbusinessIndexIndexStatisticsTextDocumentStatistics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `indexedTextBytes`<sup>Required</sup> <a name="indexedTextBytes" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextBytes"></a>

```java
public java.lang.Number getIndexedTextBytes();
```

- *Type:* java.lang.Number

---

##### `indexedTextDocumentCount`<sup>Required</sup> <a name="indexedTextDocumentCount" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextDocumentCount"></a>

```java
public java.lang.Number getIndexedTextDocumentCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.internalValue"></a>

```java
public QbusinessIndexIndexStatisticsTextDocumentStatistics getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatistics">QbusinessIndexIndexStatisticsTextDocumentStatistics</a>

---


### QbusinessIndexTagsList <a name="QbusinessIndexTagsList" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_index.QbusinessIndexTagsList;

new QbusinessIndexTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.get"></a>

```java
public QbusinessIndexTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags">QbusinessIndexTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QbusinessIndexTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags">QbusinessIndexTags</a>>

---


### QbusinessIndexTagsOutputReference <a name="QbusinessIndexTagsOutputReference" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_index.QbusinessIndexTagsOutputReference;

new QbusinessIndexTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags">QbusinessIndexTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessIndexTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags">QbusinessIndexTags</a>

---



