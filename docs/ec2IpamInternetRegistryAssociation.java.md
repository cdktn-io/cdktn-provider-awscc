# `ec2IpamInternetRegistryAssociation` Submodule <a name="`ec2IpamInternetRegistryAssociation` Submodule" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2IpamInternetRegistryAssociation <a name="Ec2IpamInternetRegistryAssociation" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association awscc_ec2_ipam_internet_registry_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_internet_registry_association.Ec2IpamInternetRegistryAssociation;

Ec2IpamInternetRegistryAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ipamId(java.lang.String)
    .organizationHandle(java.lang.String)
    .rir(java.lang.String)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<Ec2IpamInternetRegistryAssociationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.ipamId">ipamId</a></code> | <code>java.lang.String</code> | The ID of the IPAM to associate with the internet registry. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.organizationHandle">organizationHandle</a></code> | <code>java.lang.String</code> | The organization handle at the internet registry (for example, a RIPE NCC organization ID or ARIN Org ID). |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.rir">rir</a></code> | <code>java.lang.String</code> | The Regional Internet Registry to associate with. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description for the internet registry association. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags">Ec2IpamInternetRegistryAssociationTags</a>></code> | The tags assigned to the internet registry association. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ipamId`<sup>Required</sup> <a name="ipamId" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.ipamId"></a>

- *Type:* java.lang.String

The ID of the IPAM to associate with the internet registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#ipam_id Ec2IpamInternetRegistryAssociation#ipam_id}

---

##### `organizationHandle`<sup>Required</sup> <a name="organizationHandle" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.organizationHandle"></a>

- *Type:* java.lang.String

The organization handle at the internet registry (for example, a RIPE NCC organization ID or ARIN Org ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#organization_handle Ec2IpamInternetRegistryAssociation#organization_handle}

---

##### `rir`<sup>Required</sup> <a name="rir" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.rir"></a>

- *Type:* java.lang.String

The Regional Internet Registry to associate with.

The service returns these values in upper case, so the enum uses the round-tripping form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#rir Ec2IpamInternetRegistryAssociation#rir}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description for the internet registry association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#description Ec2IpamInternetRegistryAssociation#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags">Ec2IpamInternetRegistryAssociationTags</a>>

The tags assigned to the internet registry association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#tags Ec2IpamInternetRegistryAssociation#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Ec2IpamInternetRegistryAssociationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags">Ec2IpamInternetRegistryAssociationTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2IpamInternetRegistryAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_internet_registry_association.Ec2IpamInternetRegistryAssociation;

Ec2IpamInternetRegistryAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_internet_registry_association.Ec2IpamInternetRegistryAssociation;

Ec2IpamInternetRegistryAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_internet_registry_association.Ec2IpamInternetRegistryAssociation;

Ec2IpamInternetRegistryAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_internet_registry_association.Ec2IpamInternetRegistryAssociation;

Ec2IpamInternetRegistryAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2IpamInternetRegistryAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2IpamInternetRegistryAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2IpamInternetRegistryAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2IpamInternetRegistryAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2IpamInternetRegistryAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.childRequestXml">childRequestXml</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.ipamInternetRegistryAssociationArn">ipamInternetRegistryAssociationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.ipamInternetRegistryAssociationId">ipamInternetRegistryAssociationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.ipamRegion">ipamRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList">Ec2IpamInternetRegistryAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.ipamIdInput">ipamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.organizationHandleInput">organizationHandleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.rirInput">rirInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags">Ec2IpamInternetRegistryAssociationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.ipamId">ipamId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.organizationHandle">organizationHandle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.rir">rir</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `childRequestXml`<sup>Required</sup> <a name="childRequestXml" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.childRequestXml"></a>

```java
public java.lang.String getChildRequestXml();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipamInternetRegistryAssociationArn`<sup>Required</sup> <a name="ipamInternetRegistryAssociationArn" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.ipamInternetRegistryAssociationArn"></a>

```java
public java.lang.String getIpamInternetRegistryAssociationArn();
```

- *Type:* java.lang.String

---

##### `ipamInternetRegistryAssociationId`<sup>Required</sup> <a name="ipamInternetRegistryAssociationId" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.ipamInternetRegistryAssociationId"></a>

```java
public java.lang.String getIpamInternetRegistryAssociationId();
```

- *Type:* java.lang.String

---

##### `ipamRegion`<sup>Required</sup> <a name="ipamRegion" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.ipamRegion"></a>

```java
public java.lang.String getIpamRegion();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.tags"></a>

```java
public Ec2IpamInternetRegistryAssociationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList">Ec2IpamInternetRegistryAssociationTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `ipamIdInput`<sup>Optional</sup> <a name="ipamIdInput" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.ipamIdInput"></a>

```java
public java.lang.String getIpamIdInput();
```

- *Type:* java.lang.String

---

##### `organizationHandleInput`<sup>Optional</sup> <a name="organizationHandleInput" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.organizationHandleInput"></a>

```java
public java.lang.String getOrganizationHandleInput();
```

- *Type:* java.lang.String

---

##### `rirInput`<sup>Optional</sup> <a name="rirInput" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.rirInput"></a>

```java
public java.lang.String getRirInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Ec2IpamInternetRegistryAssociationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags">Ec2IpamInternetRegistryAssociationTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `ipamId`<sup>Required</sup> <a name="ipamId" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.ipamId"></a>

```java
public java.lang.String getIpamId();
```

- *Type:* java.lang.String

---

##### `organizationHandle`<sup>Required</sup> <a name="organizationHandle" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.organizationHandle"></a>

```java
public java.lang.String getOrganizationHandle();
```

- *Type:* java.lang.String

---

##### `rir`<sup>Required</sup> <a name="rir" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.rir"></a>

```java
public java.lang.String getRir();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2IpamInternetRegistryAssociationConfig <a name="Ec2IpamInternetRegistryAssociationConfig" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_internet_registry_association.Ec2IpamInternetRegistryAssociationConfig;

Ec2IpamInternetRegistryAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ipamId(java.lang.String)
    .organizationHandle(java.lang.String)
    .rir(java.lang.String)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<Ec2IpamInternetRegistryAssociationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.ipamId">ipamId</a></code> | <code>java.lang.String</code> | The ID of the IPAM to associate with the internet registry. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.organizationHandle">organizationHandle</a></code> | <code>java.lang.String</code> | The organization handle at the internet registry (for example, a RIPE NCC organization ID or ARIN Org ID). |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.rir">rir</a></code> | <code>java.lang.String</code> | The Regional Internet Registry to associate with. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description for the internet registry association. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags">Ec2IpamInternetRegistryAssociationTags</a>></code> | The tags assigned to the internet registry association. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ipamId`<sup>Required</sup> <a name="ipamId" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.ipamId"></a>

```java
public java.lang.String getIpamId();
```

- *Type:* java.lang.String

The ID of the IPAM to associate with the internet registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#ipam_id Ec2IpamInternetRegistryAssociation#ipam_id}

---

##### `organizationHandle`<sup>Required</sup> <a name="organizationHandle" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.organizationHandle"></a>

```java
public java.lang.String getOrganizationHandle();
```

- *Type:* java.lang.String

The organization handle at the internet registry (for example, a RIPE NCC organization ID or ARIN Org ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#organization_handle Ec2IpamInternetRegistryAssociation#organization_handle}

---

##### `rir`<sup>Required</sup> <a name="rir" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.rir"></a>

```java
public java.lang.String getRir();
```

- *Type:* java.lang.String

The Regional Internet Registry to associate with.

The service returns these values in upper case, so the enum uses the round-tripping form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#rir Ec2IpamInternetRegistryAssociation#rir}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description for the internet registry association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#description Ec2IpamInternetRegistryAssociation#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Ec2IpamInternetRegistryAssociationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags">Ec2IpamInternetRegistryAssociationTags</a>>

The tags assigned to the internet registry association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#tags Ec2IpamInternetRegistryAssociation#tags}

---

### Ec2IpamInternetRegistryAssociationTags <a name="Ec2IpamInternetRegistryAssociationTags" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_internet_registry_association.Ec2IpamInternetRegistryAssociationTags;

Ec2IpamInternetRegistryAssociationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags.property.key">key</a></code> | <code>java.lang.String</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#key Ec2IpamInternetRegistryAssociation#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#value Ec2IpamInternetRegistryAssociation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2IpamInternetRegistryAssociationTagsList <a name="Ec2IpamInternetRegistryAssociationTagsList" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_internet_registry_association.Ec2IpamInternetRegistryAssociationTagsList;

new Ec2IpamInternetRegistryAssociationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.get"></a>

```java
public Ec2IpamInternetRegistryAssociationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags">Ec2IpamInternetRegistryAssociationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2IpamInternetRegistryAssociationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags">Ec2IpamInternetRegistryAssociationTags</a>>

---


### Ec2IpamInternetRegistryAssociationTagsOutputReference <a name="Ec2IpamInternetRegistryAssociationTagsOutputReference" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_internet_registry_association.Ec2IpamInternetRegistryAssociationTagsOutputReference;

new Ec2IpamInternetRegistryAssociationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags">Ec2IpamInternetRegistryAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2IpamInternetRegistryAssociationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags">Ec2IpamInternetRegistryAssociationTags</a>

---



