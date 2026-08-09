# `protonServiceTemplate` Submodule <a name="`protonServiceTemplate` Submodule" id="@cdktn/provider-awscc.protonServiceTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProtonServiceTemplate <a name="ProtonServiceTemplate" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/proton_service_template awscc_proton_service_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer"></a>

```java
import io.cdktn.providers.awscc.proton_service_template.ProtonServiceTemplate;

ProtonServiceTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .encryptionKey(java.lang.String)
//  .name(java.lang.String)
//  .pipelineProvisioning(java.lang.String)
//  .tags(IResolvable|java.util.List<ProtonServiceTemplateTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | <p>A description of the service template.</p>. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | <p>The name of the service template as displayed in the developer interface.</p>. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.encryptionKey">encryptionKey</a></code> | <code>java.lang.String</code> | <p>A customer provided encryption key that's used to encrypt data.</p>. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/proton_service_template#name ProtonServiceTemplate#name}. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.pipelineProvisioning">pipelineProvisioning</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/proton_service_template#pipeline_provisioning ProtonServiceTemplate#pipeline_provisioning}. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTags">ProtonServiceTemplateTags</a>></code> | <p>An optional list of metadata items that you can associate with the Proton service template. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

<p>A description of the service template.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/proton_service_template#description ProtonServiceTemplate#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

<p>The name of the service template as displayed in the developer interface.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/proton_service_template#display_name ProtonServiceTemplate#display_name}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.encryptionKey"></a>

- *Type:* java.lang.String

<p>A customer provided encryption key that's used to encrypt data.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/proton_service_template#encryption_key ProtonServiceTemplate#encryption_key}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/proton_service_template#name ProtonServiceTemplate#name}.

---

##### `pipelineProvisioning`<sup>Optional</sup> <a name="pipelineProvisioning" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.pipelineProvisioning"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/proton_service_template#pipeline_provisioning ProtonServiceTemplate#pipeline_provisioning}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTags">ProtonServiceTemplateTags</a>>

<p>An optional list of metadata items that you can associate with the Proton service template.

A tag is a key-value pair.</p>
<p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
<i>Proton User Guide</i>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/proton_service_template#tags ProtonServiceTemplate#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.resetPipelineProvisioning">resetPipelineProvisioning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ProtonServiceTemplateTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTags">ProtonServiceTemplateTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.resetEncryptionKey"></a>

```java
public void resetEncryptionKey()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.resetName"></a>

```java
public void resetName()
```

##### `resetPipelineProvisioning` <a name="resetPipelineProvisioning" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.resetPipelineProvisioning"></a>

```java
public void resetPipelineProvisioning()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ProtonServiceTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.isConstruct"></a>

```java
import io.cdktn.providers.awscc.proton_service_template.ProtonServiceTemplate;

ProtonServiceTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.proton_service_template.ProtonServiceTemplate;

ProtonServiceTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.proton_service_template.ProtonServiceTemplate;

ProtonServiceTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.proton_service_template.ProtonServiceTemplate;

ProtonServiceTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ProtonServiceTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ProtonServiceTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ProtonServiceTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ProtonServiceTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/proton_service_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ProtonServiceTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList">ProtonServiceTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.pipelineProvisioningInput">pipelineProvisioningInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTags">ProtonServiceTemplateTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.encryptionKey">encryptionKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.pipelineProvisioning">pipelineProvisioning</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.tags"></a>

```java
public ProtonServiceTemplateTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList">ProtonServiceTemplateTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.encryptionKeyInput"></a>

```java
public java.lang.String getEncryptionKeyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pipelineProvisioningInput`<sup>Optional</sup> <a name="pipelineProvisioningInput" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.pipelineProvisioningInput"></a>

```java
public java.lang.String getPipelineProvisioningInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ProtonServiceTemplateTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTags">ProtonServiceTemplateTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.encryptionKey"></a>

```java
public java.lang.String getEncryptionKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pipelineProvisioning`<sup>Required</sup> <a name="pipelineProvisioning" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.pipelineProvisioning"></a>

```java
public java.lang.String getPipelineProvisioning();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ProtonServiceTemplateConfig <a name="ProtonServiceTemplateConfig" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.proton_service_template.ProtonServiceTemplateConfig;

ProtonServiceTemplateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .encryptionKey(java.lang.String)
//  .name(java.lang.String)
//  .pipelineProvisioning(java.lang.String)
//  .tags(IResolvable|java.util.List<ProtonServiceTemplateTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateConfig.property.description">description</a></code> | <code>java.lang.String</code> | <p>A description of the service template.</p>. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | <p>The name of the service template as displayed in the developer interface.</p>. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateConfig.property.encryptionKey">encryptionKey</a></code> | <code>java.lang.String</code> | <p>A customer provided encryption key that's used to encrypt data.</p>. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/proton_service_template#name ProtonServiceTemplate#name}. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateConfig.property.pipelineProvisioning">pipelineProvisioning</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/proton_service_template#pipeline_provisioning ProtonServiceTemplate#pipeline_provisioning}. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTags">ProtonServiceTemplateTags</a>></code> | <p>An optional list of metadata items that you can associate with the Proton service template. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

<p>A description of the service template.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/proton_service_template#description ProtonServiceTemplate#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

<p>The name of the service template as displayed in the developer interface.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/proton_service_template#display_name ProtonServiceTemplate#display_name}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateConfig.property.encryptionKey"></a>

```java
public java.lang.String getEncryptionKey();
```

- *Type:* java.lang.String

<p>A customer provided encryption key that's used to encrypt data.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/proton_service_template#encryption_key ProtonServiceTemplate#encryption_key}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/proton_service_template#name ProtonServiceTemplate#name}.

---

##### `pipelineProvisioning`<sup>Optional</sup> <a name="pipelineProvisioning" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateConfig.property.pipelineProvisioning"></a>

```java
public java.lang.String getPipelineProvisioning();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/proton_service_template#pipeline_provisioning ProtonServiceTemplate#pipeline_provisioning}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ProtonServiceTemplateTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTags">ProtonServiceTemplateTags</a>>

<p>An optional list of metadata items that you can associate with the Proton service template.

A tag is a key-value pair.</p>
<p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
<i>Proton User Guide</i>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/proton_service_template#tags ProtonServiceTemplate#tags}

---

### ProtonServiceTemplateTags <a name="ProtonServiceTemplateTags" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.proton_service_template.ProtonServiceTemplateTags;

ProtonServiceTemplateTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTags.property.key">key</a></code> | <code>java.lang.String</code> | <p>The key of the resource tag.</p>. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTags.property.value">value</a></code> | <code>java.lang.String</code> | <p>The value of the resource tag.</p>. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

<p>The key of the resource tag.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/proton_service_template#key ProtonServiceTemplate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

<p>The value of the resource tag.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/proton_service_template#value ProtonServiceTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ProtonServiceTemplateTagsList <a name="ProtonServiceTemplateTagsList" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.proton_service_template.ProtonServiceTemplateTagsList;

new ProtonServiceTemplateTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList.get"></a>

```java
public ProtonServiceTemplateTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTags">ProtonServiceTemplateTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ProtonServiceTemplateTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTags">ProtonServiceTemplateTags</a>>

---


### ProtonServiceTemplateTagsOutputReference <a name="ProtonServiceTemplateTagsOutputReference" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.proton_service_template.ProtonServiceTemplateTagsOutputReference;

new ProtonServiceTemplateTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTags">ProtonServiceTemplateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ProtonServiceTemplateTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.protonServiceTemplate.ProtonServiceTemplateTags">ProtonServiceTemplateTags</a>

---



