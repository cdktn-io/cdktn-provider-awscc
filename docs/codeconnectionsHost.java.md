# `codeconnectionsHost` Submodule <a name="`codeconnectionsHost` Submodule" id="@cdktn/provider-awscc.codeconnectionsHost"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeconnectionsHost <a name="CodeconnectionsHost" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeconnections_host awscc_codeconnections_host}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer"></a>

```java
import io.cdktn.providers.awscc.codeconnections_host.CodeconnectionsHost;

CodeconnectionsHost.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .providerEndpoint(java.lang.String)
    .providerType(java.lang.String)
//  .tags(IResolvable|java.util.List<CodeconnectionsHostTags>)
//  .vpcConfiguration(CodeconnectionsHostVpcConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the host. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.providerEndpoint">providerEndpoint</a></code> | <code>java.lang.String</code> | The endpoint of the infrastructure where your provider type is installed. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.providerType">providerType</a></code> | <code>java.lang.String</code> | The name of the installed provider to be associated with your connection. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTags">CodeconnectionsHostTags</a>></code> | Tags to apply to the host. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a></code> | The VPC configuration provisioned for the host. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeconnections_host#name CodeconnectionsHost#name}

---

##### `providerEndpoint`<sup>Required</sup> <a name="providerEndpoint" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.providerEndpoint"></a>

- *Type:* java.lang.String

The endpoint of the infrastructure where your provider type is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeconnections_host#provider_endpoint CodeconnectionsHost#provider_endpoint}

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.providerType"></a>

- *Type:* java.lang.String

The name of the installed provider to be associated with your connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeconnections_host#provider_type CodeconnectionsHost#provider_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTags">CodeconnectionsHostTags</a>>

Tags to apply to the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeconnections_host#tags CodeconnectionsHost#tags}

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="vpcConfiguration" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.vpcConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a>

The VPC configuration provisioned for the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeconnections_host#vpc_configuration CodeconnectionsHost#vpc_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.putVpcConfiguration">putVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.resetVpcConfiguration">resetVpcConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CodeconnectionsHostTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTags">CodeconnectionsHostTags</a>>

---

##### `putVpcConfiguration` <a name="putVpcConfiguration" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.putVpcConfiguration"></a>

```java
public void putVpcConfiguration(CodeconnectionsHostVpcConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.resetTags"></a>

```java
public void resetTags()
```

##### `resetVpcConfiguration` <a name="resetVpcConfiguration" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.resetVpcConfiguration"></a>

```java
public void resetVpcConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CodeconnectionsHost resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.isConstruct"></a>

```java
import io.cdktn.providers.awscc.codeconnections_host.CodeconnectionsHost;

CodeconnectionsHost.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.codeconnections_host.CodeconnectionsHost;

CodeconnectionsHost.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.codeconnections_host.CodeconnectionsHost;

CodeconnectionsHost.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.codeconnections_host.CodeconnectionsHost;

CodeconnectionsHost.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CodeconnectionsHost.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CodeconnectionsHost resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CodeconnectionsHost to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CodeconnectionsHost that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeconnections_host#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CodeconnectionsHost to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.hostArn">hostArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.hostId">hostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList">CodeconnectionsHostTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference">CodeconnectionsHostVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.providerEndpointInput">providerEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.providerTypeInput">providerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTags">CodeconnectionsHostTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.vpcConfigurationInput">vpcConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.providerEndpoint">providerEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.providerType">providerType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `hostArn`<sup>Required</sup> <a name="hostArn" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.hostArn"></a>

```java
public java.lang.String getHostArn();
```

- *Type:* java.lang.String

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.hostId"></a>

```java
public java.lang.String getHostId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.tags"></a>

```java
public CodeconnectionsHostTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList">CodeconnectionsHostTagsList</a>

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.vpcConfiguration"></a>

```java
public CodeconnectionsHostVpcConfigurationOutputReference getVpcConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference">CodeconnectionsHostVpcConfigurationOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `providerEndpointInput`<sup>Optional</sup> <a name="providerEndpointInput" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.providerEndpointInput"></a>

```java
public java.lang.String getProviderEndpointInput();
```

- *Type:* java.lang.String

---

##### `providerTypeInput`<sup>Optional</sup> <a name="providerTypeInput" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.providerTypeInput"></a>

```java
public java.lang.String getProviderTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CodeconnectionsHostTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTags">CodeconnectionsHostTags</a>>

---

##### `vpcConfigurationInput`<sup>Optional</sup> <a name="vpcConfigurationInput" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.vpcConfigurationInput"></a>

```java
public IResolvable|CodeconnectionsHostVpcConfiguration getVpcConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `providerEndpoint`<sup>Required</sup> <a name="providerEndpoint" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.providerEndpoint"></a>

```java
public java.lang.String getProviderEndpoint();
```

- *Type:* java.lang.String

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.providerType"></a>

```java
public java.lang.String getProviderType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHost.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CodeconnectionsHostConfig <a name="CodeconnectionsHostConfig" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.codeconnections_host.CodeconnectionsHostConfig;

CodeconnectionsHostConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .providerEndpoint(java.lang.String)
    .providerType(java.lang.String)
//  .tags(IResolvable|java.util.List<CodeconnectionsHostTags>)
//  .vpcConfiguration(CodeconnectionsHostVpcConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the host. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostConfig.property.providerEndpoint">providerEndpoint</a></code> | <code>java.lang.String</code> | The endpoint of the infrastructure where your provider type is installed. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostConfig.property.providerType">providerType</a></code> | <code>java.lang.String</code> | The name of the installed provider to be associated with your connection. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTags">CodeconnectionsHostTags</a>></code> | Tags to apply to the host. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostConfig.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a></code> | The VPC configuration provisioned for the host. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeconnections_host#name CodeconnectionsHost#name}

---

##### `providerEndpoint`<sup>Required</sup> <a name="providerEndpoint" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostConfig.property.providerEndpoint"></a>

```java
public java.lang.String getProviderEndpoint();
```

- *Type:* java.lang.String

The endpoint of the infrastructure where your provider type is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeconnections_host#provider_endpoint CodeconnectionsHost#provider_endpoint}

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostConfig.property.providerType"></a>

```java
public java.lang.String getProviderType();
```

- *Type:* java.lang.String

The name of the installed provider to be associated with your connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeconnections_host#provider_type CodeconnectionsHost#provider_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CodeconnectionsHostTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTags">CodeconnectionsHostTags</a>>

Tags to apply to the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeconnections_host#tags CodeconnectionsHost#tags}

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="vpcConfiguration" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostConfig.property.vpcConfiguration"></a>

```java
public CodeconnectionsHostVpcConfiguration getVpcConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a>

The VPC configuration provisioned for the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeconnections_host#vpc_configuration CodeconnectionsHost#vpc_configuration}

---

### CodeconnectionsHostTags <a name="CodeconnectionsHostTags" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.codeconnections_host.CodeconnectionsHostTags;

CodeconnectionsHostTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeconnections_host#key CodeconnectionsHost#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeconnections_host#value CodeconnectionsHost#value}

---

### CodeconnectionsHostVpcConfiguration <a name="CodeconnectionsHostVpcConfiguration" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.codeconnections_host.CodeconnectionsHostVpcConfiguration;

CodeconnectionsHostVpcConfiguration.builder()
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tlsCertificate(java.lang.String)
//  .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfiguration.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The ID of the security group or security groups associated with the Amazon VPC. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfiguration.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | The ID of the subnet or subnets associated with the Amazon VPC. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfiguration.property.tlsCertificate">tlsCertificate</a></code> | <code>java.lang.String</code> | The value of the Transport Layer Security (TLS) certificate associated with the infrastructure where your provider type is installed. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfiguration.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | The ID of the Amazon VPC connected to the infrastructure where your provider type is installed. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfiguration.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

The ID of the security group or security groups associated with the Amazon VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeconnections_host#security_group_ids CodeconnectionsHost#security_group_ids}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfiguration.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

The ID of the subnet or subnets associated with the Amazon VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeconnections_host#subnet_ids CodeconnectionsHost#subnet_ids}

---

##### `tlsCertificate`<sup>Optional</sup> <a name="tlsCertificate" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfiguration.property.tlsCertificate"></a>

```java
public java.lang.String getTlsCertificate();
```

- *Type:* java.lang.String

The value of the Transport Layer Security (TLS) certificate associated with the infrastructure where your provider type is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeconnections_host#tls_certificate CodeconnectionsHost#tls_certificate}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfiguration.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

The ID of the Amazon VPC connected to the infrastructure where your provider type is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeconnections_host#vpc_id CodeconnectionsHost#vpc_id}

---

## Classes <a name="Classes" id="Classes"></a>

### CodeconnectionsHostTagsList <a name="CodeconnectionsHostTagsList" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.codeconnections_host.CodeconnectionsHostTagsList;

new CodeconnectionsHostTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList.get"></a>

```java
public CodeconnectionsHostTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTags">CodeconnectionsHostTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CodeconnectionsHostTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTags">CodeconnectionsHostTags</a>>

---


### CodeconnectionsHostTagsOutputReference <a name="CodeconnectionsHostTagsOutputReference" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.codeconnections_host.CodeconnectionsHostTagsOutputReference;

new CodeconnectionsHostTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTags">CodeconnectionsHostTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CodeconnectionsHostTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostTags">CodeconnectionsHostTags</a>

---


### CodeconnectionsHostVpcConfigurationOutputReference <a name="CodeconnectionsHostVpcConfigurationOutputReference" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.codeconnections_host.CodeconnectionsHostVpcConfigurationOutputReference;

new CodeconnectionsHostVpcConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.resetTlsCertificate">resetTlsCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```

##### `resetTlsCertificate` <a name="resetTlsCertificate" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.resetTlsCertificate"></a>

```java
public void resetTlsCertificate()
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.resetVpcId"></a>

```java
public void resetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.tlsCertificateInput">tlsCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.tlsCertificate">tlsCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tlsCertificateInput`<sup>Optional</sup> <a name="tlsCertificateInput" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.tlsCertificateInput"></a>

```java
public java.lang.String getTlsCertificateInput();
```

- *Type:* java.lang.String

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tlsCertificate`<sup>Required</sup> <a name="tlsCertificate" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.tlsCertificate"></a>

```java
public java.lang.String getTlsCertificate();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|CodeconnectionsHostVpcConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a>

---



