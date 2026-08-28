# `outpostsSite` Submodule <a name="`outpostsSite` Submodule" id="@cdktn/provider-awscc.outpostsSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OutpostsSite <a name="OutpostsSite" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site awscc_outposts_site}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer"></a>

```java
import io.cdktn.providers.awscc.outposts_site.OutpostsSite;

OutpostsSite.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .notes(java.lang.String)
//  .operatingAddress(OutpostsSiteOperatingAddress)
//  .rackPhysicalProperties(OutpostsSiteRackPhysicalProperties)
//  .shippingAddress(OutpostsSiteShippingAddress)
//  .tags(IResolvable|java.util.List<OutpostsSiteTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#name OutpostsSite#name}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#description OutpostsSite#description}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.notes">notes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#notes OutpostsSite#notes}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.operatingAddress">operatingAddress</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#operating_address OutpostsSite#operating_address}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.rackPhysicalProperties">rackPhysicalProperties</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#rack_physical_properties OutpostsSite#rack_physical_properties}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.shippingAddress">shippingAddress</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#shipping_address OutpostsSite#shipping_address}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#tags OutpostsSite#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#name OutpostsSite#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#description OutpostsSite#description}.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.notes"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#notes OutpostsSite#notes}.

---

##### `operatingAddress`<sup>Optional</sup> <a name="operatingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.operatingAddress"></a>

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#operating_address OutpostsSite#operating_address}.

---

##### `rackPhysicalProperties`<sup>Optional</sup> <a name="rackPhysicalProperties" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.rackPhysicalProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#rack_physical_properties OutpostsSite#rack_physical_properties}.

---

##### `shippingAddress`<sup>Optional</sup> <a name="shippingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.shippingAddress"></a>

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#shipping_address OutpostsSite#shipping_address}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#tags OutpostsSite#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.putOperatingAddress">putOperatingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.putRackPhysicalProperties">putRackPhysicalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.putShippingAddress">putShippingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetNotes">resetNotes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetOperatingAddress">resetOperatingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetRackPhysicalProperties">resetRackPhysicalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetShippingAddress">resetShippingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOperatingAddress` <a name="putOperatingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putOperatingAddress"></a>

```java
public void putOperatingAddress(OutpostsSiteOperatingAddress value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putOperatingAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a>

---

##### `putRackPhysicalProperties` <a name="putRackPhysicalProperties" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putRackPhysicalProperties"></a>

```java
public void putRackPhysicalProperties(OutpostsSiteRackPhysicalProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putRackPhysicalProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a>

---

##### `putShippingAddress` <a name="putShippingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putShippingAddress"></a>

```java
public void putShippingAddress(OutpostsSiteShippingAddress value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putShippingAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<OutpostsSiteTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetNotes` <a name="resetNotes" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetNotes"></a>

```java
public void resetNotes()
```

##### `resetOperatingAddress` <a name="resetOperatingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetOperatingAddress"></a>

```java
public void resetOperatingAddress()
```

##### `resetRackPhysicalProperties` <a name="resetRackPhysicalProperties" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetRackPhysicalProperties"></a>

```java
public void resetRackPhysicalProperties()
```

##### `resetShippingAddress` <a name="resetShippingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetShippingAddress"></a>

```java
public void resetShippingAddress()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OutpostsSite resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isConstruct"></a>

```java
import io.cdktn.providers.awscc.outposts_site.OutpostsSite;

OutpostsSite.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.outposts_site.OutpostsSite;

OutpostsSite.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.outposts_site.OutpostsSite;

OutpostsSite.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.outposts_site.OutpostsSite;

OutpostsSite.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OutpostsSite.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OutpostsSite resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OutpostsSite to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OutpostsSite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OutpostsSite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.operatingAddress">operatingAddress</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference">OutpostsSiteOperatingAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.rackPhysicalProperties">rackPhysicalProperties</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference">OutpostsSiteRackPhysicalPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.shippingAddress">shippingAddress</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference">OutpostsSiteShippingAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.siteArn">siteArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.siteId">siteId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList">OutpostsSiteTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.notesInput">notesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.operatingAddressInput">operatingAddressInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.rackPhysicalPropertiesInput">rackPhysicalPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.shippingAddressInput">shippingAddressInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.notes">notes</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `operatingAddress`<sup>Required</sup> <a name="operatingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.operatingAddress"></a>

```java
public OutpostsSiteOperatingAddressOutputReference getOperatingAddress();
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference">OutpostsSiteOperatingAddressOutputReference</a>

---

##### `rackPhysicalProperties`<sup>Required</sup> <a name="rackPhysicalProperties" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.rackPhysicalProperties"></a>

```java
public OutpostsSiteRackPhysicalPropertiesOutputReference getRackPhysicalProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference">OutpostsSiteRackPhysicalPropertiesOutputReference</a>

---

##### `shippingAddress`<sup>Required</sup> <a name="shippingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.shippingAddress"></a>

```java
public OutpostsSiteShippingAddressOutputReference getShippingAddress();
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference">OutpostsSiteShippingAddressOutputReference</a>

---

##### `siteArn`<sup>Required</sup> <a name="siteArn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.siteArn"></a>

```java
public java.lang.String getSiteArn();
```

- *Type:* java.lang.String

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tags"></a>

```java
public OutpostsSiteTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList">OutpostsSiteTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.notesInput"></a>

```java
public java.lang.String getNotesInput();
```

- *Type:* java.lang.String

---

##### `operatingAddressInput`<sup>Optional</sup> <a name="operatingAddressInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.operatingAddressInput"></a>

```java
public IResolvable|OutpostsSiteOperatingAddress getOperatingAddressInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a>

---

##### `rackPhysicalPropertiesInput`<sup>Optional</sup> <a name="rackPhysicalPropertiesInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.rackPhysicalPropertiesInput"></a>

```java
public IResolvable|OutpostsSiteRackPhysicalProperties getRackPhysicalPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a>

---

##### `shippingAddressInput`<sup>Optional</sup> <a name="shippingAddressInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.shippingAddressInput"></a>

```java
public IResolvable|OutpostsSiteShippingAddress getShippingAddressInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tagsInput"></a>

```java
public IResolvable|java.util.List<OutpostsSiteTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OutpostsSiteConfig <a name="OutpostsSiteConfig" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.outposts_site.OutpostsSiteConfig;

OutpostsSiteConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .notes(java.lang.String)
//  .operatingAddress(OutpostsSiteOperatingAddress)
//  .rackPhysicalProperties(OutpostsSiteRackPhysicalProperties)
//  .shippingAddress(OutpostsSiteShippingAddress)
//  .tags(IResolvable|java.util.List<OutpostsSiteTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#name OutpostsSite#name}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#description OutpostsSite#description}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.notes">notes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#notes OutpostsSite#notes}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.operatingAddress">operatingAddress</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#operating_address OutpostsSite#operating_address}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.rackPhysicalProperties">rackPhysicalProperties</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#rack_physical_properties OutpostsSite#rack_physical_properties}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.shippingAddress">shippingAddress</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#shipping_address OutpostsSite#shipping_address}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#tags OutpostsSite#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#name OutpostsSite#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#description OutpostsSite#description}.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#notes OutpostsSite#notes}.

---

##### `operatingAddress`<sup>Optional</sup> <a name="operatingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.operatingAddress"></a>

```java
public OutpostsSiteOperatingAddress getOperatingAddress();
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#operating_address OutpostsSite#operating_address}.

---

##### `rackPhysicalProperties`<sup>Optional</sup> <a name="rackPhysicalProperties" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.rackPhysicalProperties"></a>

```java
public OutpostsSiteRackPhysicalProperties getRackPhysicalProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#rack_physical_properties OutpostsSite#rack_physical_properties}.

---

##### `shippingAddress`<sup>Optional</sup> <a name="shippingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.shippingAddress"></a>

```java
public OutpostsSiteShippingAddress getShippingAddress();
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#shipping_address OutpostsSite#shipping_address}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.tags"></a>

```java
public IResolvable|java.util.List<OutpostsSiteTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#tags OutpostsSite#tags}.

---

### OutpostsSiteOperatingAddress <a name="OutpostsSiteOperatingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.Initializer"></a>

```java
import io.cdktn.providers.awscc.outposts_site.OutpostsSiteOperatingAddress;

OutpostsSiteOperatingAddress.builder()
//  .addressLine1(java.lang.String)
//  .addressLine2(java.lang.String)
//  .addressLine3(java.lang.String)
//  .city(java.lang.String)
//  .contactName(java.lang.String)
//  .contactPhoneNumber(java.lang.String)
//  .countryCode(java.lang.String)
//  .districtOrCounty(java.lang.String)
//  .municipality(java.lang.String)
//  .postalCode(java.lang.String)
//  .stateOrRegion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine1">addressLine1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#address_line_1 OutpostsSite#address_line_1}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine2">addressLine2</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#address_line_2 OutpostsSite#address_line_2}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine3">addressLine3</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#address_line_3 OutpostsSite#address_line_3}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.city">city</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#city OutpostsSite#city}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.contactName">contactName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#contact_name OutpostsSite#contact_name}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.contactPhoneNumber">contactPhoneNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#contact_phone_number OutpostsSite#contact_phone_number}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#country_code OutpostsSite#country_code}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.districtOrCounty">districtOrCounty</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#district_or_county OutpostsSite#district_or_county}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.municipality">municipality</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#municipality OutpostsSite#municipality}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#postal_code OutpostsSite#postal_code}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.stateOrRegion">stateOrRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#state_or_region OutpostsSite#state_or_region}. |

---

##### `addressLine1`<sup>Optional</sup> <a name="addressLine1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine1"></a>

```java
public java.lang.String getAddressLine1();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#address_line_1 OutpostsSite#address_line_1}.

---

##### `addressLine2`<sup>Optional</sup> <a name="addressLine2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine2"></a>

```java
public java.lang.String getAddressLine2();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#address_line_2 OutpostsSite#address_line_2}.

---

##### `addressLine3`<sup>Optional</sup> <a name="addressLine3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine3"></a>

```java
public java.lang.String getAddressLine3();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#address_line_3 OutpostsSite#address_line_3}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#city OutpostsSite#city}.

---

##### `contactName`<sup>Optional</sup> <a name="contactName" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.contactName"></a>

```java
public java.lang.String getContactName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#contact_name OutpostsSite#contact_name}.

---

##### `contactPhoneNumber`<sup>Optional</sup> <a name="contactPhoneNumber" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.contactPhoneNumber"></a>

```java
public java.lang.String getContactPhoneNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#contact_phone_number OutpostsSite#contact_phone_number}.

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#country_code OutpostsSite#country_code}.

---

##### `districtOrCounty`<sup>Optional</sup> <a name="districtOrCounty" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.districtOrCounty"></a>

```java
public java.lang.String getDistrictOrCounty();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#district_or_county OutpostsSite#district_or_county}.

---

##### `municipality`<sup>Optional</sup> <a name="municipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.municipality"></a>

```java
public java.lang.String getMunicipality();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#municipality OutpostsSite#municipality}.

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#postal_code OutpostsSite#postal_code}.

---

##### `stateOrRegion`<sup>Optional</sup> <a name="stateOrRegion" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.stateOrRegion"></a>

```java
public java.lang.String getStateOrRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#state_or_region OutpostsSite#state_or_region}.

---

### OutpostsSiteRackPhysicalProperties <a name="OutpostsSiteRackPhysicalProperties" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.outposts_site.OutpostsSiteRackPhysicalProperties;

OutpostsSiteRackPhysicalProperties.builder()
//  .fiberOpticCableType(java.lang.String)
//  .maximumSupportedWeightLbs(java.lang.String)
//  .opticalStandard(java.lang.String)
//  .powerConnector(java.lang.String)
//  .powerDrawKva(java.lang.String)
//  .powerFeedDrop(java.lang.String)
//  .powerPhase(java.lang.String)
//  .uplinkCount(java.lang.String)
//  .uplinkGbps(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.fiberOpticCableType">fiberOpticCableType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#fiber_optic_cable_type OutpostsSite#fiber_optic_cable_type}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.maximumSupportedWeightLbs">maximumSupportedWeightLbs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#maximum_supported_weight_lbs OutpostsSite#maximum_supported_weight_lbs}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.opticalStandard">opticalStandard</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#optical_standard OutpostsSite#optical_standard}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerConnector">powerConnector</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#power_connector OutpostsSite#power_connector}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerDrawKva">powerDrawKva</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#power_draw_kva OutpostsSite#power_draw_kva}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerFeedDrop">powerFeedDrop</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#power_feed_drop OutpostsSite#power_feed_drop}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerPhase">powerPhase</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#power_phase OutpostsSite#power_phase}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.uplinkCount">uplinkCount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#uplink_count OutpostsSite#uplink_count}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.uplinkGbps">uplinkGbps</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#uplink_gbps OutpostsSite#uplink_gbps}. |

---

##### `fiberOpticCableType`<sup>Optional</sup> <a name="fiberOpticCableType" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.fiberOpticCableType"></a>

```java
public java.lang.String getFiberOpticCableType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#fiber_optic_cable_type OutpostsSite#fiber_optic_cable_type}.

---

##### `maximumSupportedWeightLbs`<sup>Optional</sup> <a name="maximumSupportedWeightLbs" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.maximumSupportedWeightLbs"></a>

```java
public java.lang.String getMaximumSupportedWeightLbs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#maximum_supported_weight_lbs OutpostsSite#maximum_supported_weight_lbs}.

---

##### `opticalStandard`<sup>Optional</sup> <a name="opticalStandard" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.opticalStandard"></a>

```java
public java.lang.String getOpticalStandard();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#optical_standard OutpostsSite#optical_standard}.

---

##### `powerConnector`<sup>Optional</sup> <a name="powerConnector" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerConnector"></a>

```java
public java.lang.String getPowerConnector();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#power_connector OutpostsSite#power_connector}.

---

##### `powerDrawKva`<sup>Optional</sup> <a name="powerDrawKva" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerDrawKva"></a>

```java
public java.lang.String getPowerDrawKva();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#power_draw_kva OutpostsSite#power_draw_kva}.

---

##### `powerFeedDrop`<sup>Optional</sup> <a name="powerFeedDrop" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerFeedDrop"></a>

```java
public java.lang.String getPowerFeedDrop();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#power_feed_drop OutpostsSite#power_feed_drop}.

---

##### `powerPhase`<sup>Optional</sup> <a name="powerPhase" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerPhase"></a>

```java
public java.lang.String getPowerPhase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#power_phase OutpostsSite#power_phase}.

---

##### `uplinkCount`<sup>Optional</sup> <a name="uplinkCount" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.uplinkCount"></a>

```java
public java.lang.String getUplinkCount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#uplink_count OutpostsSite#uplink_count}.

---

##### `uplinkGbps`<sup>Optional</sup> <a name="uplinkGbps" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.uplinkGbps"></a>

```java
public java.lang.String getUplinkGbps();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#uplink_gbps OutpostsSite#uplink_gbps}.

---

### OutpostsSiteShippingAddress <a name="OutpostsSiteShippingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.Initializer"></a>

```java
import io.cdktn.providers.awscc.outposts_site.OutpostsSiteShippingAddress;

OutpostsSiteShippingAddress.builder()
//  .addressLine1(java.lang.String)
//  .addressLine2(java.lang.String)
//  .addressLine3(java.lang.String)
//  .city(java.lang.String)
//  .contactName(java.lang.String)
//  .contactPhoneNumber(java.lang.String)
//  .countryCode(java.lang.String)
//  .districtOrCounty(java.lang.String)
//  .municipality(java.lang.String)
//  .postalCode(java.lang.String)
//  .stateOrRegion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine1">addressLine1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#address_line_1 OutpostsSite#address_line_1}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine2">addressLine2</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#address_line_2 OutpostsSite#address_line_2}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine3">addressLine3</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#address_line_3 OutpostsSite#address_line_3}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.city">city</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#city OutpostsSite#city}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.contactName">contactName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#contact_name OutpostsSite#contact_name}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.contactPhoneNumber">contactPhoneNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#contact_phone_number OutpostsSite#contact_phone_number}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#country_code OutpostsSite#country_code}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.districtOrCounty">districtOrCounty</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#district_or_county OutpostsSite#district_or_county}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.municipality">municipality</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#municipality OutpostsSite#municipality}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#postal_code OutpostsSite#postal_code}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.stateOrRegion">stateOrRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#state_or_region OutpostsSite#state_or_region}. |

---

##### `addressLine1`<sup>Optional</sup> <a name="addressLine1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine1"></a>

```java
public java.lang.String getAddressLine1();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#address_line_1 OutpostsSite#address_line_1}.

---

##### `addressLine2`<sup>Optional</sup> <a name="addressLine2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine2"></a>

```java
public java.lang.String getAddressLine2();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#address_line_2 OutpostsSite#address_line_2}.

---

##### `addressLine3`<sup>Optional</sup> <a name="addressLine3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine3"></a>

```java
public java.lang.String getAddressLine3();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#address_line_3 OutpostsSite#address_line_3}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#city OutpostsSite#city}.

---

##### `contactName`<sup>Optional</sup> <a name="contactName" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.contactName"></a>

```java
public java.lang.String getContactName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#contact_name OutpostsSite#contact_name}.

---

##### `contactPhoneNumber`<sup>Optional</sup> <a name="contactPhoneNumber" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.contactPhoneNumber"></a>

```java
public java.lang.String getContactPhoneNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#contact_phone_number OutpostsSite#contact_phone_number}.

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#country_code OutpostsSite#country_code}.

---

##### `districtOrCounty`<sup>Optional</sup> <a name="districtOrCounty" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.districtOrCounty"></a>

```java
public java.lang.String getDistrictOrCounty();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#district_or_county OutpostsSite#district_or_county}.

---

##### `municipality`<sup>Optional</sup> <a name="municipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.municipality"></a>

```java
public java.lang.String getMunicipality();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#municipality OutpostsSite#municipality}.

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#postal_code OutpostsSite#postal_code}.

---

##### `stateOrRegion`<sup>Optional</sup> <a name="stateOrRegion" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.stateOrRegion"></a>

```java
public java.lang.String getStateOrRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#state_or_region OutpostsSite#state_or_region}.

---

### OutpostsSiteTags <a name="OutpostsSiteTags" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.outposts_site.OutpostsSiteTags;

OutpostsSiteTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#key OutpostsSite#key}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#value OutpostsSite#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#key OutpostsSite#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/outposts_site#value OutpostsSite#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### OutpostsSiteOperatingAddressOutputReference <a name="OutpostsSiteOperatingAddressOutputReference" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.outposts_site.OutpostsSiteOperatingAddressOutputReference;

new OutpostsSiteOperatingAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine1">resetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine2">resetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine3">resetAddressLine3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetContactName">resetContactName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetContactPhoneNumber">resetContactPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetDistrictOrCounty">resetDistrictOrCounty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetMunicipality">resetMunicipality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetStateOrRegion">resetStateOrRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddressLine1` <a name="resetAddressLine1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine1"></a>

```java
public void resetAddressLine1()
```

##### `resetAddressLine2` <a name="resetAddressLine2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine2"></a>

```java
public void resetAddressLine2()
```

##### `resetAddressLine3` <a name="resetAddressLine3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine3"></a>

```java
public void resetAddressLine3()
```

##### `resetCity` <a name="resetCity" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetCity"></a>

```java
public void resetCity()
```

##### `resetContactName` <a name="resetContactName" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetContactName"></a>

```java
public void resetContactName()
```

##### `resetContactPhoneNumber` <a name="resetContactPhoneNumber" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetContactPhoneNumber"></a>

```java
public void resetContactPhoneNumber()
```

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetCountryCode"></a>

```java
public void resetCountryCode()
```

##### `resetDistrictOrCounty` <a name="resetDistrictOrCounty" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetDistrictOrCounty"></a>

```java
public void resetDistrictOrCounty()
```

##### `resetMunicipality` <a name="resetMunicipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetMunicipality"></a>

```java
public void resetMunicipality()
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetPostalCode"></a>

```java
public void resetPostalCode()
```

##### `resetStateOrRegion` <a name="resetStateOrRegion" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetStateOrRegion"></a>

```java
public void resetStateOrRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine1Input">addressLine1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine2Input">addressLine2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine3Input">addressLine3Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.cityInput">cityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactNameInput">contactNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactPhoneNumberInput">contactPhoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.districtOrCountyInput">districtOrCountyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.municipalityInput">municipalityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.stateOrRegionInput">stateOrRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine1">addressLine1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine2">addressLine2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine3">addressLine3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactName">contactName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactPhoneNumber">contactPhoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.districtOrCounty">districtOrCounty</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.municipality">municipality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.stateOrRegion">stateOrRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressLine1Input`<sup>Optional</sup> <a name="addressLine1Input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine1Input"></a>

```java
public java.lang.String getAddressLine1Input();
```

- *Type:* java.lang.String

---

##### `addressLine2Input`<sup>Optional</sup> <a name="addressLine2Input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine2Input"></a>

```java
public java.lang.String getAddressLine2Input();
```

- *Type:* java.lang.String

---

##### `addressLine3Input`<sup>Optional</sup> <a name="addressLine3Input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine3Input"></a>

```java
public java.lang.String getAddressLine3Input();
```

- *Type:* java.lang.String

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.cityInput"></a>

```java
public java.lang.String getCityInput();
```

- *Type:* java.lang.String

---

##### `contactNameInput`<sup>Optional</sup> <a name="contactNameInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactNameInput"></a>

```java
public java.lang.String getContactNameInput();
```

- *Type:* java.lang.String

---

##### `contactPhoneNumberInput`<sup>Optional</sup> <a name="contactPhoneNumberInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactPhoneNumberInput"></a>

```java
public java.lang.String getContactPhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.countryCodeInput"></a>

```java
public java.lang.String getCountryCodeInput();
```

- *Type:* java.lang.String

---

##### `districtOrCountyInput`<sup>Optional</sup> <a name="districtOrCountyInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.districtOrCountyInput"></a>

```java
public java.lang.String getDistrictOrCountyInput();
```

- *Type:* java.lang.String

---

##### `municipalityInput`<sup>Optional</sup> <a name="municipalityInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.municipalityInput"></a>

```java
public java.lang.String getMunicipalityInput();
```

- *Type:* java.lang.String

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.postalCodeInput"></a>

```java
public java.lang.String getPostalCodeInput();
```

- *Type:* java.lang.String

---

##### `stateOrRegionInput`<sup>Optional</sup> <a name="stateOrRegionInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.stateOrRegionInput"></a>

```java
public java.lang.String getStateOrRegionInput();
```

- *Type:* java.lang.String

---

##### `addressLine1`<sup>Required</sup> <a name="addressLine1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine1"></a>

```java
public java.lang.String getAddressLine1();
```

- *Type:* java.lang.String

---

##### `addressLine2`<sup>Required</sup> <a name="addressLine2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine2"></a>

```java
public java.lang.String getAddressLine2();
```

- *Type:* java.lang.String

---

##### `addressLine3`<sup>Required</sup> <a name="addressLine3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine3"></a>

```java
public java.lang.String getAddressLine3();
```

- *Type:* java.lang.String

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `contactName`<sup>Required</sup> <a name="contactName" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactName"></a>

```java
public java.lang.String getContactName();
```

- *Type:* java.lang.String

---

##### `contactPhoneNumber`<sup>Required</sup> <a name="contactPhoneNumber" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactPhoneNumber"></a>

```java
public java.lang.String getContactPhoneNumber();
```

- *Type:* java.lang.String

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

---

##### `districtOrCounty`<sup>Required</sup> <a name="districtOrCounty" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.districtOrCounty"></a>

```java
public java.lang.String getDistrictOrCounty();
```

- *Type:* java.lang.String

---

##### `municipality`<sup>Required</sup> <a name="municipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.municipality"></a>

```java
public java.lang.String getMunicipality();
```

- *Type:* java.lang.String

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `stateOrRegion`<sup>Required</sup> <a name="stateOrRegion" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.stateOrRegion"></a>

```java
public java.lang.String getStateOrRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.internalValue"></a>

```java
public IResolvable|OutpostsSiteOperatingAddress getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a>

---


### OutpostsSiteRackPhysicalPropertiesOutputReference <a name="OutpostsSiteRackPhysicalPropertiesOutputReference" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.outposts_site.OutpostsSiteRackPhysicalPropertiesOutputReference;

new OutpostsSiteRackPhysicalPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetFiberOpticCableType">resetFiberOpticCableType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetMaximumSupportedWeightLbs">resetMaximumSupportedWeightLbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetOpticalStandard">resetOpticalStandard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerConnector">resetPowerConnector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerDrawKva">resetPowerDrawKva</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerFeedDrop">resetPowerFeedDrop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerPhase">resetPowerPhase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetUplinkCount">resetUplinkCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetUplinkGbps">resetUplinkGbps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFiberOpticCableType` <a name="resetFiberOpticCableType" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetFiberOpticCableType"></a>

```java
public void resetFiberOpticCableType()
```

##### `resetMaximumSupportedWeightLbs` <a name="resetMaximumSupportedWeightLbs" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetMaximumSupportedWeightLbs"></a>

```java
public void resetMaximumSupportedWeightLbs()
```

##### `resetOpticalStandard` <a name="resetOpticalStandard" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetOpticalStandard"></a>

```java
public void resetOpticalStandard()
```

##### `resetPowerConnector` <a name="resetPowerConnector" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerConnector"></a>

```java
public void resetPowerConnector()
```

##### `resetPowerDrawKva` <a name="resetPowerDrawKva" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerDrawKva"></a>

```java
public void resetPowerDrawKva()
```

##### `resetPowerFeedDrop` <a name="resetPowerFeedDrop" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerFeedDrop"></a>

```java
public void resetPowerFeedDrop()
```

##### `resetPowerPhase` <a name="resetPowerPhase" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerPhase"></a>

```java
public void resetPowerPhase()
```

##### `resetUplinkCount` <a name="resetUplinkCount" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetUplinkCount"></a>

```java
public void resetUplinkCount()
```

##### `resetUplinkGbps` <a name="resetUplinkGbps" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetUplinkGbps"></a>

```java
public void resetUplinkGbps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fiberOpticCableTypeInput">fiberOpticCableTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.maximumSupportedWeightLbsInput">maximumSupportedWeightLbsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.opticalStandardInput">opticalStandardInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerConnectorInput">powerConnectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerDrawKvaInput">powerDrawKvaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerFeedDropInput">powerFeedDropInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerPhaseInput">powerPhaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkCountInput">uplinkCountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkGbpsInput">uplinkGbpsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fiberOpticCableType">fiberOpticCableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.maximumSupportedWeightLbs">maximumSupportedWeightLbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.opticalStandard">opticalStandard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerConnector">powerConnector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerDrawKva">powerDrawKva</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerFeedDrop">powerFeedDrop</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerPhase">powerPhase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkCount">uplinkCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkGbps">uplinkGbps</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fiberOpticCableTypeInput`<sup>Optional</sup> <a name="fiberOpticCableTypeInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fiberOpticCableTypeInput"></a>

```java
public java.lang.String getFiberOpticCableTypeInput();
```

- *Type:* java.lang.String

---

##### `maximumSupportedWeightLbsInput`<sup>Optional</sup> <a name="maximumSupportedWeightLbsInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.maximumSupportedWeightLbsInput"></a>

```java
public java.lang.String getMaximumSupportedWeightLbsInput();
```

- *Type:* java.lang.String

---

##### `opticalStandardInput`<sup>Optional</sup> <a name="opticalStandardInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.opticalStandardInput"></a>

```java
public java.lang.String getOpticalStandardInput();
```

- *Type:* java.lang.String

---

##### `powerConnectorInput`<sup>Optional</sup> <a name="powerConnectorInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerConnectorInput"></a>

```java
public java.lang.String getPowerConnectorInput();
```

- *Type:* java.lang.String

---

##### `powerDrawKvaInput`<sup>Optional</sup> <a name="powerDrawKvaInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerDrawKvaInput"></a>

```java
public java.lang.String getPowerDrawKvaInput();
```

- *Type:* java.lang.String

---

##### `powerFeedDropInput`<sup>Optional</sup> <a name="powerFeedDropInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerFeedDropInput"></a>

```java
public java.lang.String getPowerFeedDropInput();
```

- *Type:* java.lang.String

---

##### `powerPhaseInput`<sup>Optional</sup> <a name="powerPhaseInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerPhaseInput"></a>

```java
public java.lang.String getPowerPhaseInput();
```

- *Type:* java.lang.String

---

##### `uplinkCountInput`<sup>Optional</sup> <a name="uplinkCountInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkCountInput"></a>

```java
public java.lang.String getUplinkCountInput();
```

- *Type:* java.lang.String

---

##### `uplinkGbpsInput`<sup>Optional</sup> <a name="uplinkGbpsInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkGbpsInput"></a>

```java
public java.lang.String getUplinkGbpsInput();
```

- *Type:* java.lang.String

---

##### `fiberOpticCableType`<sup>Required</sup> <a name="fiberOpticCableType" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fiberOpticCableType"></a>

```java
public java.lang.String getFiberOpticCableType();
```

- *Type:* java.lang.String

---

##### `maximumSupportedWeightLbs`<sup>Required</sup> <a name="maximumSupportedWeightLbs" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.maximumSupportedWeightLbs"></a>

```java
public java.lang.String getMaximumSupportedWeightLbs();
```

- *Type:* java.lang.String

---

##### `opticalStandard`<sup>Required</sup> <a name="opticalStandard" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.opticalStandard"></a>

```java
public java.lang.String getOpticalStandard();
```

- *Type:* java.lang.String

---

##### `powerConnector`<sup>Required</sup> <a name="powerConnector" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerConnector"></a>

```java
public java.lang.String getPowerConnector();
```

- *Type:* java.lang.String

---

##### `powerDrawKva`<sup>Required</sup> <a name="powerDrawKva" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerDrawKva"></a>

```java
public java.lang.String getPowerDrawKva();
```

- *Type:* java.lang.String

---

##### `powerFeedDrop`<sup>Required</sup> <a name="powerFeedDrop" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerFeedDrop"></a>

```java
public java.lang.String getPowerFeedDrop();
```

- *Type:* java.lang.String

---

##### `powerPhase`<sup>Required</sup> <a name="powerPhase" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerPhase"></a>

```java
public java.lang.String getPowerPhase();
```

- *Type:* java.lang.String

---

##### `uplinkCount`<sup>Required</sup> <a name="uplinkCount" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkCount"></a>

```java
public java.lang.String getUplinkCount();
```

- *Type:* java.lang.String

---

##### `uplinkGbps`<sup>Required</sup> <a name="uplinkGbps" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkGbps"></a>

```java
public java.lang.String getUplinkGbps();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|OutpostsSiteRackPhysicalProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a>

---


### OutpostsSiteShippingAddressOutputReference <a name="OutpostsSiteShippingAddressOutputReference" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.outposts_site.OutpostsSiteShippingAddressOutputReference;

new OutpostsSiteShippingAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine1">resetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine2">resetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine3">resetAddressLine3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetContactName">resetContactName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetContactPhoneNumber">resetContactPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetDistrictOrCounty">resetDistrictOrCounty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetMunicipality">resetMunicipality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetStateOrRegion">resetStateOrRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddressLine1` <a name="resetAddressLine1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine1"></a>

```java
public void resetAddressLine1()
```

##### `resetAddressLine2` <a name="resetAddressLine2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine2"></a>

```java
public void resetAddressLine2()
```

##### `resetAddressLine3` <a name="resetAddressLine3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine3"></a>

```java
public void resetAddressLine3()
```

##### `resetCity` <a name="resetCity" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetCity"></a>

```java
public void resetCity()
```

##### `resetContactName` <a name="resetContactName" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetContactName"></a>

```java
public void resetContactName()
```

##### `resetContactPhoneNumber` <a name="resetContactPhoneNumber" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetContactPhoneNumber"></a>

```java
public void resetContactPhoneNumber()
```

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetCountryCode"></a>

```java
public void resetCountryCode()
```

##### `resetDistrictOrCounty` <a name="resetDistrictOrCounty" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetDistrictOrCounty"></a>

```java
public void resetDistrictOrCounty()
```

##### `resetMunicipality` <a name="resetMunicipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetMunicipality"></a>

```java
public void resetMunicipality()
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetPostalCode"></a>

```java
public void resetPostalCode()
```

##### `resetStateOrRegion` <a name="resetStateOrRegion" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetStateOrRegion"></a>

```java
public void resetStateOrRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine1Input">addressLine1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine2Input">addressLine2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine3Input">addressLine3Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.cityInput">cityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactNameInput">contactNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactPhoneNumberInput">contactPhoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.districtOrCountyInput">districtOrCountyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.municipalityInput">municipalityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.stateOrRegionInput">stateOrRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine1">addressLine1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine2">addressLine2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine3">addressLine3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactName">contactName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactPhoneNumber">contactPhoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.districtOrCounty">districtOrCounty</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.municipality">municipality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.stateOrRegion">stateOrRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressLine1Input`<sup>Optional</sup> <a name="addressLine1Input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine1Input"></a>

```java
public java.lang.String getAddressLine1Input();
```

- *Type:* java.lang.String

---

##### `addressLine2Input`<sup>Optional</sup> <a name="addressLine2Input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine2Input"></a>

```java
public java.lang.String getAddressLine2Input();
```

- *Type:* java.lang.String

---

##### `addressLine3Input`<sup>Optional</sup> <a name="addressLine3Input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine3Input"></a>

```java
public java.lang.String getAddressLine3Input();
```

- *Type:* java.lang.String

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.cityInput"></a>

```java
public java.lang.String getCityInput();
```

- *Type:* java.lang.String

---

##### `contactNameInput`<sup>Optional</sup> <a name="contactNameInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactNameInput"></a>

```java
public java.lang.String getContactNameInput();
```

- *Type:* java.lang.String

---

##### `contactPhoneNumberInput`<sup>Optional</sup> <a name="contactPhoneNumberInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactPhoneNumberInput"></a>

```java
public java.lang.String getContactPhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.countryCodeInput"></a>

```java
public java.lang.String getCountryCodeInput();
```

- *Type:* java.lang.String

---

##### `districtOrCountyInput`<sup>Optional</sup> <a name="districtOrCountyInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.districtOrCountyInput"></a>

```java
public java.lang.String getDistrictOrCountyInput();
```

- *Type:* java.lang.String

---

##### `municipalityInput`<sup>Optional</sup> <a name="municipalityInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.municipalityInput"></a>

```java
public java.lang.String getMunicipalityInput();
```

- *Type:* java.lang.String

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.postalCodeInput"></a>

```java
public java.lang.String getPostalCodeInput();
```

- *Type:* java.lang.String

---

##### `stateOrRegionInput`<sup>Optional</sup> <a name="stateOrRegionInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.stateOrRegionInput"></a>

```java
public java.lang.String getStateOrRegionInput();
```

- *Type:* java.lang.String

---

##### `addressLine1`<sup>Required</sup> <a name="addressLine1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine1"></a>

```java
public java.lang.String getAddressLine1();
```

- *Type:* java.lang.String

---

##### `addressLine2`<sup>Required</sup> <a name="addressLine2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine2"></a>

```java
public java.lang.String getAddressLine2();
```

- *Type:* java.lang.String

---

##### `addressLine3`<sup>Required</sup> <a name="addressLine3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine3"></a>

```java
public java.lang.String getAddressLine3();
```

- *Type:* java.lang.String

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `contactName`<sup>Required</sup> <a name="contactName" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactName"></a>

```java
public java.lang.String getContactName();
```

- *Type:* java.lang.String

---

##### `contactPhoneNumber`<sup>Required</sup> <a name="contactPhoneNumber" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactPhoneNumber"></a>

```java
public java.lang.String getContactPhoneNumber();
```

- *Type:* java.lang.String

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

---

##### `districtOrCounty`<sup>Required</sup> <a name="districtOrCounty" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.districtOrCounty"></a>

```java
public java.lang.String getDistrictOrCounty();
```

- *Type:* java.lang.String

---

##### `municipality`<sup>Required</sup> <a name="municipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.municipality"></a>

```java
public java.lang.String getMunicipality();
```

- *Type:* java.lang.String

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `stateOrRegion`<sup>Required</sup> <a name="stateOrRegion" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.stateOrRegion"></a>

```java
public java.lang.String getStateOrRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.internalValue"></a>

```java
public IResolvable|OutpostsSiteShippingAddress getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a>

---


### OutpostsSiteTagsList <a name="OutpostsSiteTagsList" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.outposts_site.OutpostsSiteTagsList;

new OutpostsSiteTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.get"></a>

```java
public OutpostsSiteTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OutpostsSiteTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>>

---


### OutpostsSiteTagsOutputReference <a name="OutpostsSiteTagsOutputReference" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.outposts_site.OutpostsSiteTagsOutputReference;

new OutpostsSiteTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|OutpostsSiteTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>

---



