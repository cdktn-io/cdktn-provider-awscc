# `vpclatticeListener` Submodule <a name="`vpclatticeListener` Submodule" id="@cdktn/provider-awscc.vpclatticeListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeListener <a name="VpclatticeListener" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener awscc_vpclattice_listener}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer"></a>

```java
import io.cdktn.providers.awscc.vpclattice_listener.VpclatticeListener;

VpclatticeListener.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .defaultAction(VpclatticeListenerDefaultAction)
    .protocol(java.lang.String)
//  .name(java.lang.String)
//  .port(java.lang.Number)
//  .serviceIdentifier(java.lang.String)
//  .tags(IResolvable|java.util.List<VpclatticeListenerTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.defaultAction">defaultAction</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction">VpclatticeListenerDefaultAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#default_action VpclatticeListener#default_action}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#protocol VpclatticeListener#protocol}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#name VpclatticeListener#name}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#port VpclatticeListener#port}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.serviceIdentifier">serviceIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#service_identifier VpclatticeListener#service_identifier}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags">VpclatticeListenerTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#tags VpclatticeListener#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.defaultAction"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction">VpclatticeListenerDefaultAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#default_action VpclatticeListener#default_action}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#protocol VpclatticeListener#protocol}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#name VpclatticeListener#name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#port VpclatticeListener#port}.

---

##### `serviceIdentifier`<sup>Optional</sup> <a name="serviceIdentifier" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.serviceIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#service_identifier VpclatticeListener#service_identifier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags">VpclatticeListenerTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#tags VpclatticeListener#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.putDefaultAction">putDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.resetServiceIdentifier">resetServiceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefaultAction` <a name="putDefaultAction" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.putDefaultAction"></a>

```java
public void putDefaultAction(VpclatticeListenerDefaultAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.putDefaultAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction">VpclatticeListenerDefaultAction</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<VpclatticeListenerTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags">VpclatticeListenerTags</a>>

---

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.resetName"></a>

```java
public void resetName()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.resetPort"></a>

```java
public void resetPort()
```

##### `resetServiceIdentifier` <a name="resetServiceIdentifier" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.resetServiceIdentifier"></a>

```java
public void resetServiceIdentifier()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VpclatticeListener resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.isConstruct"></a>

```java
import io.cdktn.providers.awscc.vpclattice_listener.VpclatticeListener;

VpclatticeListener.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.vpclattice_listener.VpclatticeListener;

VpclatticeListener.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.vpclattice_listener.VpclatticeListener;

VpclatticeListener.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.vpclattice_listener.VpclatticeListener;

VpclatticeListener.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VpclatticeListener.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VpclatticeListener resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VpclatticeListener to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VpclatticeListener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VpclatticeListener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.defaultAction">defaultAction</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference">VpclatticeListenerDefaultActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.listenerId">listenerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.serviceArn">serviceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList">VpclatticeListenerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.defaultActionInput">defaultActionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction">VpclatticeListenerDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.serviceIdentifierInput">serviceIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags">VpclatticeListenerTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.serviceIdentifier">serviceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.defaultAction"></a>

```java
public VpclatticeListenerDefaultActionOutputReference getDefaultAction();
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference">VpclatticeListenerDefaultActionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.listenerId"></a>

```java
public java.lang.String getListenerId();
```

- *Type:* java.lang.String

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.serviceArn"></a>

```java
public java.lang.String getServiceArn();
```

- *Type:* java.lang.String

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.tags"></a>

```java
public VpclatticeListenerTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList">VpclatticeListenerTagsList</a>

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.defaultActionInput"></a>

```java
public IResolvable|VpclatticeListenerDefaultAction getDefaultActionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction">VpclatticeListenerDefaultAction</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `serviceIdentifierInput`<sup>Optional</sup> <a name="serviceIdentifierInput" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.serviceIdentifierInput"></a>

```java
public java.lang.String getServiceIdentifierInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.tagsInput"></a>

```java
public IResolvable|java.util.List<VpclatticeListenerTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags">VpclatticeListenerTags</a>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `serviceIdentifier`<sup>Required</sup> <a name="serviceIdentifier" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.serviceIdentifier"></a>

```java
public java.lang.String getServiceIdentifier();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeListenerConfig <a name="VpclatticeListenerConfig" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.vpclattice_listener.VpclatticeListenerConfig;

VpclatticeListenerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .defaultAction(VpclatticeListenerDefaultAction)
    .protocol(java.lang.String)
//  .name(java.lang.String)
//  .port(java.lang.Number)
//  .serviceIdentifier(java.lang.String)
//  .tags(IResolvable|java.util.List<VpclatticeListenerTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.defaultAction">defaultAction</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction">VpclatticeListenerDefaultAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#default_action VpclatticeListener#default_action}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#protocol VpclatticeListener#protocol}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#name VpclatticeListener#name}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#port VpclatticeListener#port}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.serviceIdentifier">serviceIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#service_identifier VpclatticeListener#service_identifier}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags">VpclatticeListenerTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#tags VpclatticeListener#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.defaultAction"></a>

```java
public VpclatticeListenerDefaultAction getDefaultAction();
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction">VpclatticeListenerDefaultAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#default_action VpclatticeListener#default_action}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#protocol VpclatticeListener#protocol}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#name VpclatticeListener#name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#port VpclatticeListener#port}.

---

##### `serviceIdentifier`<sup>Optional</sup> <a name="serviceIdentifier" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.serviceIdentifier"></a>

```java
public java.lang.String getServiceIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#service_identifier VpclatticeListener#service_identifier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.tags"></a>

```java
public IResolvable|java.util.List<VpclatticeListenerTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags">VpclatticeListenerTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#tags VpclatticeListener#tags}.

---

### VpclatticeListenerDefaultAction <a name="VpclatticeListenerDefaultAction" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction.Initializer"></a>

```java
import io.cdktn.providers.awscc.vpclattice_listener.VpclatticeListenerDefaultAction;

VpclatticeListenerDefaultAction.builder()
//  .fixedResponse(VpclatticeListenerDefaultActionFixedResponse)
//  .forward(VpclatticeListenerDefaultActionForward)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction.property.fixedResponse">fixedResponse</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse">VpclatticeListenerDefaultActionFixedResponse</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#fixed_response VpclatticeListener#fixed_response}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction.property.forward">forward</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForward">VpclatticeListenerDefaultActionForward</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#forward VpclatticeListener#forward}. |

---

##### `fixedResponse`<sup>Optional</sup> <a name="fixedResponse" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction.property.fixedResponse"></a>

```java
public VpclatticeListenerDefaultActionFixedResponse getFixedResponse();
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse">VpclatticeListenerDefaultActionFixedResponse</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#fixed_response VpclatticeListener#fixed_response}.

---

##### `forward`<sup>Optional</sup> <a name="forward" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction.property.forward"></a>

```java
public VpclatticeListenerDefaultActionForward getForward();
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForward">VpclatticeListenerDefaultActionForward</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#forward VpclatticeListener#forward}.

---

### VpclatticeListenerDefaultActionFixedResponse <a name="VpclatticeListenerDefaultActionFixedResponse" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse.Initializer"></a>

```java
import io.cdktn.providers.awscc.vpclattice_listener.VpclatticeListenerDefaultActionFixedResponse;

VpclatticeListenerDefaultActionFixedResponse.builder()
//  .statusCode(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse.property.statusCode">statusCode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#status_code VpclatticeListener#status_code}. |

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse.property.statusCode"></a>

```java
public java.lang.Number getStatusCode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#status_code VpclatticeListener#status_code}.

---

### VpclatticeListenerDefaultActionForward <a name="VpclatticeListenerDefaultActionForward" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForward"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForward.Initializer"></a>

```java
import io.cdktn.providers.awscc.vpclattice_listener.VpclatticeListenerDefaultActionForward;

VpclatticeListenerDefaultActionForward.builder()
//  .targetGroups(IResolvable|java.util.List<VpclatticeListenerDefaultActionForwardTargetGroups>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForward.property.targetGroups">targetGroups</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups">VpclatticeListenerDefaultActionForwardTargetGroups</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#target_groups VpclatticeListener#target_groups}. |

---

##### `targetGroups`<sup>Optional</sup> <a name="targetGroups" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForward.property.targetGroups"></a>

```java
public IResolvable|java.util.List<VpclatticeListenerDefaultActionForwardTargetGroups> getTargetGroups();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups">VpclatticeListenerDefaultActionForwardTargetGroups</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#target_groups VpclatticeListener#target_groups}.

---

### VpclatticeListenerDefaultActionForwardTargetGroups <a name="VpclatticeListenerDefaultActionForwardTargetGroups" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups.Initializer"></a>

```java
import io.cdktn.providers.awscc.vpclattice_listener.VpclatticeListenerDefaultActionForwardTargetGroups;

VpclatticeListenerDefaultActionForwardTargetGroups.builder()
//  .targetGroupIdentifier(java.lang.String)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups.property.targetGroupIdentifier">targetGroupIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#target_group_identifier VpclatticeListener#target_group_identifier}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#weight VpclatticeListener#weight}. |

---

##### `targetGroupIdentifier`<sup>Optional</sup> <a name="targetGroupIdentifier" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups.property.targetGroupIdentifier"></a>

```java
public java.lang.String getTargetGroupIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#target_group_identifier VpclatticeListener#target_group_identifier}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#weight VpclatticeListener#weight}.

---

### VpclatticeListenerTags <a name="VpclatticeListenerTags" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.vpclattice_listener.VpclatticeListenerTags;

VpclatticeListenerTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#key VpclatticeListener#key}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#value VpclatticeListener#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#key VpclatticeListener#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_listener#value VpclatticeListener#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeListenerDefaultActionFixedResponseOutputReference <a name="VpclatticeListenerDefaultActionFixedResponseOutputReference" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.vpclattice_listener.VpclatticeListenerDefaultActionFixedResponseOutputReference;

new VpclatticeListenerDefaultActionFixedResponseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.resetStatusCode"></a>

```java
public void resetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.statusCode">statusCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse">VpclatticeListenerDefaultActionFixedResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.statusCodeInput"></a>

```java
public java.lang.Number getStatusCodeInput();
```

- *Type:* java.lang.Number

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.statusCode"></a>

```java
public java.lang.Number getStatusCode();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.internalValue"></a>

```java
public IResolvable|VpclatticeListenerDefaultActionFixedResponse getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse">VpclatticeListenerDefaultActionFixedResponse</a>

---


### VpclatticeListenerDefaultActionForwardOutputReference <a name="VpclatticeListenerDefaultActionForwardOutputReference" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.vpclattice_listener.VpclatticeListenerDefaultActionForwardOutputReference;

new VpclatticeListenerDefaultActionForwardOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.putTargetGroups">putTargetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.resetTargetGroups">resetTargetGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetGroups` <a name="putTargetGroups" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.putTargetGroups"></a>

```java
public void putTargetGroups(IResolvable|java.util.List<VpclatticeListenerDefaultActionForwardTargetGroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.putTargetGroups.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups">VpclatticeListenerDefaultActionForwardTargetGroups</a>>

---

##### `resetTargetGroups` <a name="resetTargetGroups" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.resetTargetGroups"></a>

```java
public void resetTargetGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.targetGroups">targetGroups</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList">VpclatticeListenerDefaultActionForwardTargetGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.targetGroupsInput">targetGroupsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups">VpclatticeListenerDefaultActionForwardTargetGroups</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForward">VpclatticeListenerDefaultActionForward</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetGroups`<sup>Required</sup> <a name="targetGroups" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.targetGroups"></a>

```java
public VpclatticeListenerDefaultActionForwardTargetGroupsList getTargetGroups();
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList">VpclatticeListenerDefaultActionForwardTargetGroupsList</a>

---

##### `targetGroupsInput`<sup>Optional</sup> <a name="targetGroupsInput" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.targetGroupsInput"></a>

```java
public IResolvable|java.util.List<VpclatticeListenerDefaultActionForwardTargetGroups> getTargetGroupsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups">VpclatticeListenerDefaultActionForwardTargetGroups</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.internalValue"></a>

```java
public IResolvable|VpclatticeListenerDefaultActionForward getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForward">VpclatticeListenerDefaultActionForward</a>

---


### VpclatticeListenerDefaultActionForwardTargetGroupsList <a name="VpclatticeListenerDefaultActionForwardTargetGroupsList" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.vpclattice_listener.VpclatticeListenerDefaultActionForwardTargetGroupsList;

new VpclatticeListenerDefaultActionForwardTargetGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.get"></a>

```java
public VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups">VpclatticeListenerDefaultActionForwardTargetGroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VpclatticeListenerDefaultActionForwardTargetGroups> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups">VpclatticeListenerDefaultActionForwardTargetGroups</a>>

---


### VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference <a name="VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.vpclattice_listener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference;

new VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.resetTargetGroupIdentifier">resetTargetGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTargetGroupIdentifier` <a name="resetTargetGroupIdentifier" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.resetTargetGroupIdentifier"></a>

```java
public void resetTargetGroupIdentifier()
```

##### `resetWeight` <a name="resetWeight" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.targetGroupIdentifierInput">targetGroupIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.targetGroupIdentifier">targetGroupIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups">VpclatticeListenerDefaultActionForwardTargetGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetGroupIdentifierInput`<sup>Optional</sup> <a name="targetGroupIdentifierInput" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.targetGroupIdentifierInput"></a>

```java
public java.lang.String getTargetGroupIdentifierInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `targetGroupIdentifier`<sup>Required</sup> <a name="targetGroupIdentifier" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.targetGroupIdentifier"></a>

```java
public java.lang.String getTargetGroupIdentifier();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.internalValue"></a>

```java
public IResolvable|VpclatticeListenerDefaultActionForwardTargetGroups getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups">VpclatticeListenerDefaultActionForwardTargetGroups</a>

---


### VpclatticeListenerDefaultActionOutputReference <a name="VpclatticeListenerDefaultActionOutputReference" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.vpclattice_listener.VpclatticeListenerDefaultActionOutputReference;

new VpclatticeListenerDefaultActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.putFixedResponse">putFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.putForward">putForward</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.resetFixedResponse">resetFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.resetForward">resetForward</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFixedResponse` <a name="putFixedResponse" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.putFixedResponse"></a>

```java
public void putFixedResponse(VpclatticeListenerDefaultActionFixedResponse value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.putFixedResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse">VpclatticeListenerDefaultActionFixedResponse</a>

---

##### `putForward` <a name="putForward" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.putForward"></a>

```java
public void putForward(VpclatticeListenerDefaultActionForward value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.putForward.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForward">VpclatticeListenerDefaultActionForward</a>

---

##### `resetFixedResponse` <a name="resetFixedResponse" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.resetFixedResponse"></a>

```java
public void resetFixedResponse()
```

##### `resetForward` <a name="resetForward" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.resetForward"></a>

```java
public void resetForward()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.fixedResponse">fixedResponse</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference">VpclatticeListenerDefaultActionFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.forward">forward</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference">VpclatticeListenerDefaultActionForwardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.fixedResponseInput">fixedResponseInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse">VpclatticeListenerDefaultActionFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.forwardInput">forwardInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForward">VpclatticeListenerDefaultActionForward</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction">VpclatticeListenerDefaultAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fixedResponse`<sup>Required</sup> <a name="fixedResponse" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.fixedResponse"></a>

```java
public VpclatticeListenerDefaultActionFixedResponseOutputReference getFixedResponse();
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference">VpclatticeListenerDefaultActionFixedResponseOutputReference</a>

---

##### `forward`<sup>Required</sup> <a name="forward" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.forward"></a>

```java
public VpclatticeListenerDefaultActionForwardOutputReference getForward();
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference">VpclatticeListenerDefaultActionForwardOutputReference</a>

---

##### `fixedResponseInput`<sup>Optional</sup> <a name="fixedResponseInput" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.fixedResponseInput"></a>

```java
public IResolvable|VpclatticeListenerDefaultActionFixedResponse getFixedResponseInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse">VpclatticeListenerDefaultActionFixedResponse</a>

---

##### `forwardInput`<sup>Optional</sup> <a name="forwardInput" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.forwardInput"></a>

```java
public IResolvable|VpclatticeListenerDefaultActionForward getForwardInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForward">VpclatticeListenerDefaultActionForward</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.internalValue"></a>

```java
public IResolvable|VpclatticeListenerDefaultAction getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction">VpclatticeListenerDefaultAction</a>

---


### VpclatticeListenerTagsList <a name="VpclatticeListenerTagsList" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.vpclattice_listener.VpclatticeListenerTagsList;

new VpclatticeListenerTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.get"></a>

```java
public VpclatticeListenerTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags">VpclatticeListenerTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VpclatticeListenerTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags">VpclatticeListenerTags</a>>

---


### VpclatticeListenerTagsOutputReference <a name="VpclatticeListenerTagsOutputReference" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.vpclattice_listener.VpclatticeListenerTagsOutputReference;

new VpclatticeListenerTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags">VpclatticeListenerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|VpclatticeListenerTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags">VpclatticeListenerTags</a>

---



