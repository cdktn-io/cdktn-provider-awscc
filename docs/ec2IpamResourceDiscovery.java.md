# `ec2IpamResourceDiscovery` Submodule <a name="`ec2IpamResourceDiscovery` Submodule" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2IpamResourceDiscovery <a name="Ec2IpamResourceDiscovery" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_resource_discovery awscc_ec2_ipam_resource_discovery}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_resource_discovery.Ec2IpamResourceDiscovery;

Ec2IpamResourceDiscovery.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .description(java.lang.String)
//  .operatingRegions(IResolvable|java.util.List<Ec2IpamResourceDiscoveryOperatingRegions>)
//  .organizationalUnitExclusions(IResolvable|java.util.List<Ec2IpamResourceDiscoveryOrganizationalUnitExclusions>)
//  .tags(IResolvable|java.util.List<Ec2IpamResourceDiscoveryTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_resource_discovery#description Ec2IpamResourceDiscovery#description}. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.operatingRegions">operatingRegions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions">Ec2IpamResourceDiscoveryOperatingRegions</a>></code> | The regions Resource Discovery is enabled for. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.organizationalUnitExclusions">organizationalUnitExclusions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions">Ec2IpamResourceDiscoveryOrganizationalUnitExclusions</a>></code> | A set of organizational unit (OU) exclusions for this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags">Ec2IpamResourceDiscoveryTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_resource_discovery#description Ec2IpamResourceDiscovery#description}.

---

##### `operatingRegions`<sup>Optional</sup> <a name="operatingRegions" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.operatingRegions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions">Ec2IpamResourceDiscoveryOperatingRegions</a>>

The regions Resource Discovery is enabled for.

Allows resource discoveries to be created in these regions, as well as enabling monitoring

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_resource_discovery#operating_regions Ec2IpamResourceDiscovery#operating_regions}

---

##### `organizationalUnitExclusions`<sup>Optional</sup> <a name="organizationalUnitExclusions" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.organizationalUnitExclusions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions">Ec2IpamResourceDiscoveryOrganizationalUnitExclusions</a>>

A set of organizational unit (OU) exclusions for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_resource_discovery#organizational_unit_exclusions Ec2IpamResourceDiscovery#organizational_unit_exclusions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags">Ec2IpamResourceDiscoveryTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_resource_discovery#tags Ec2IpamResourceDiscovery#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.putOperatingRegions">putOperatingRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.putOrganizationalUnitExclusions">putOrganizationalUnitExclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.resetOperatingRegions">resetOperatingRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.resetOrganizationalUnitExclusions">resetOrganizationalUnitExclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOperatingRegions` <a name="putOperatingRegions" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.putOperatingRegions"></a>

```java
public void putOperatingRegions(IResolvable|java.util.List<Ec2IpamResourceDiscoveryOperatingRegions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.putOperatingRegions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions">Ec2IpamResourceDiscoveryOperatingRegions</a>>

---

##### `putOrganizationalUnitExclusions` <a name="putOrganizationalUnitExclusions" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.putOrganizationalUnitExclusions"></a>

```java
public void putOrganizationalUnitExclusions(IResolvable|java.util.List<Ec2IpamResourceDiscoveryOrganizationalUnitExclusions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.putOrganizationalUnitExclusions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions">Ec2IpamResourceDiscoveryOrganizationalUnitExclusions</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Ec2IpamResourceDiscoveryTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags">Ec2IpamResourceDiscoveryTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetOperatingRegions` <a name="resetOperatingRegions" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.resetOperatingRegions"></a>

```java
public void resetOperatingRegions()
```

##### `resetOrganizationalUnitExclusions` <a name="resetOrganizationalUnitExclusions" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.resetOrganizationalUnitExclusions"></a>

```java
public void resetOrganizationalUnitExclusions()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2IpamResourceDiscovery resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_resource_discovery.Ec2IpamResourceDiscovery;

Ec2IpamResourceDiscovery.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_resource_discovery.Ec2IpamResourceDiscovery;

Ec2IpamResourceDiscovery.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_resource_discovery.Ec2IpamResourceDiscovery;

Ec2IpamResourceDiscovery.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_resource_discovery.Ec2IpamResourceDiscovery;

Ec2IpamResourceDiscovery.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2IpamResourceDiscovery.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2IpamResourceDiscovery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2IpamResourceDiscovery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2IpamResourceDiscovery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_resource_discovery#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2IpamResourceDiscovery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.ipamResourceDiscoveryArn">ipamResourceDiscoveryArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.ipamResourceDiscoveryId">ipamResourceDiscoveryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.ipamResourceDiscoveryRegion">ipamResourceDiscoveryRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.isDefault">isDefault</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.operatingRegions">operatingRegions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList">Ec2IpamResourceDiscoveryOperatingRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.organizationalUnitExclusions">organizationalUnitExclusions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList">Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList">Ec2IpamResourceDiscoveryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.operatingRegionsInput">operatingRegionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions">Ec2IpamResourceDiscoveryOperatingRegions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.organizationalUnitExclusionsInput">organizationalUnitExclusionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions">Ec2IpamResourceDiscoveryOrganizationalUnitExclusions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags">Ec2IpamResourceDiscoveryTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipamResourceDiscoveryArn`<sup>Required</sup> <a name="ipamResourceDiscoveryArn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.ipamResourceDiscoveryArn"></a>

```java
public java.lang.String getIpamResourceDiscoveryArn();
```

- *Type:* java.lang.String

---

##### `ipamResourceDiscoveryId`<sup>Required</sup> <a name="ipamResourceDiscoveryId" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.ipamResourceDiscoveryId"></a>

```java
public java.lang.String getIpamResourceDiscoveryId();
```

- *Type:* java.lang.String

---

##### `ipamResourceDiscoveryRegion`<sup>Required</sup> <a name="ipamResourceDiscoveryRegion" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.ipamResourceDiscoveryRegion"></a>

```java
public java.lang.String getIpamResourceDiscoveryRegion();
```

- *Type:* java.lang.String

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.isDefault"></a>

```java
public IResolvable getIsDefault();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `operatingRegions`<sup>Required</sup> <a name="operatingRegions" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.operatingRegions"></a>

```java
public Ec2IpamResourceDiscoveryOperatingRegionsList getOperatingRegions();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList">Ec2IpamResourceDiscoveryOperatingRegionsList</a>

---

##### `organizationalUnitExclusions`<sup>Required</sup> <a name="organizationalUnitExclusions" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.organizationalUnitExclusions"></a>

```java
public Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList getOrganizationalUnitExclusions();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList">Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList</a>

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.tags"></a>

```java
public Ec2IpamResourceDiscoveryTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList">Ec2IpamResourceDiscoveryTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `operatingRegionsInput`<sup>Optional</sup> <a name="operatingRegionsInput" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.operatingRegionsInput"></a>

```java
public IResolvable|java.util.List<Ec2IpamResourceDiscoveryOperatingRegions> getOperatingRegionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions">Ec2IpamResourceDiscoveryOperatingRegions</a>>

---

##### `organizationalUnitExclusionsInput`<sup>Optional</sup> <a name="organizationalUnitExclusionsInput" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.organizationalUnitExclusionsInput"></a>

```java
public IResolvable|java.util.List<Ec2IpamResourceDiscoveryOrganizationalUnitExclusions> getOrganizationalUnitExclusionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions">Ec2IpamResourceDiscoveryOrganizationalUnitExclusions</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Ec2IpamResourceDiscoveryTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags">Ec2IpamResourceDiscoveryTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2IpamResourceDiscoveryConfig <a name="Ec2IpamResourceDiscoveryConfig" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_resource_discovery.Ec2IpamResourceDiscoveryConfig;

Ec2IpamResourceDiscoveryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .description(java.lang.String)
//  .operatingRegions(IResolvable|java.util.List<Ec2IpamResourceDiscoveryOperatingRegions>)
//  .organizationalUnitExclusions(IResolvable|java.util.List<Ec2IpamResourceDiscoveryOrganizationalUnitExclusions>)
//  .tags(IResolvable|java.util.List<Ec2IpamResourceDiscoveryTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_resource_discovery#description Ec2IpamResourceDiscovery#description}. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.operatingRegions">operatingRegions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions">Ec2IpamResourceDiscoveryOperatingRegions</a>></code> | The regions Resource Discovery is enabled for. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.organizationalUnitExclusions">organizationalUnitExclusions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions">Ec2IpamResourceDiscoveryOrganizationalUnitExclusions</a>></code> | A set of organizational unit (OU) exclusions for this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags">Ec2IpamResourceDiscoveryTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_resource_discovery#description Ec2IpamResourceDiscovery#description}.

---

##### `operatingRegions`<sup>Optional</sup> <a name="operatingRegions" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.operatingRegions"></a>

```java
public IResolvable|java.util.List<Ec2IpamResourceDiscoveryOperatingRegions> getOperatingRegions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions">Ec2IpamResourceDiscoveryOperatingRegions</a>>

The regions Resource Discovery is enabled for.

Allows resource discoveries to be created in these regions, as well as enabling monitoring

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_resource_discovery#operating_regions Ec2IpamResourceDiscovery#operating_regions}

---

##### `organizationalUnitExclusions`<sup>Optional</sup> <a name="organizationalUnitExclusions" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.organizationalUnitExclusions"></a>

```java
public IResolvable|java.util.List<Ec2IpamResourceDiscoveryOrganizationalUnitExclusions> getOrganizationalUnitExclusions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions">Ec2IpamResourceDiscoveryOrganizationalUnitExclusions</a>>

A set of organizational unit (OU) exclusions for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_resource_discovery#organizational_unit_exclusions Ec2IpamResourceDiscovery#organizational_unit_exclusions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Ec2IpamResourceDiscoveryTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags">Ec2IpamResourceDiscoveryTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_resource_discovery#tags Ec2IpamResourceDiscovery#tags}

---

### Ec2IpamResourceDiscoveryOperatingRegions <a name="Ec2IpamResourceDiscoveryOperatingRegions" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_resource_discovery.Ec2IpamResourceDiscoveryOperatingRegions;

Ec2IpamResourceDiscoveryOperatingRegions.builder()
//  .regionName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions.property.regionName">regionName</a></code> | <code>java.lang.String</code> | The name of the region. |

---

##### `regionName`<sup>Optional</sup> <a name="regionName" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions.property.regionName"></a>

```java
public java.lang.String getRegionName();
```

- *Type:* java.lang.String

The name of the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_resource_discovery#region_name Ec2IpamResourceDiscovery#region_name}

---

### Ec2IpamResourceDiscoveryOrganizationalUnitExclusions <a name="Ec2IpamResourceDiscoveryOrganizationalUnitExclusions" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_resource_discovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions;

Ec2IpamResourceDiscoveryOrganizationalUnitExclusions.builder()
//  .organizationsEntityPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions.property.organizationsEntityPath">organizationsEntityPath</a></code> | <code>java.lang.String</code> | An AWS Organizations entity path. |

---

##### `organizationsEntityPath`<sup>Optional</sup> <a name="organizationsEntityPath" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions.property.organizationsEntityPath"></a>

```java
public java.lang.String getOrganizationsEntityPath();
```

- *Type:* java.lang.String

An AWS Organizations entity path.

Build the path for the OU(s) using AWS Organizations IDs separated by a '/'. Include all child OUs by ending the path with '/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_resource_discovery#organizations_entity_path Ec2IpamResourceDiscovery#organizations_entity_path}

---

### Ec2IpamResourceDiscoveryTags <a name="Ec2IpamResourceDiscoveryTags" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_resource_discovery.Ec2IpamResourceDiscoveryTags;

Ec2IpamResourceDiscoveryTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_resource_discovery#key Ec2IpamResourceDiscovery#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_resource_discovery#value Ec2IpamResourceDiscovery#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2IpamResourceDiscoveryOperatingRegionsList <a name="Ec2IpamResourceDiscoveryOperatingRegionsList" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_resource_discovery.Ec2IpamResourceDiscoveryOperatingRegionsList;

new Ec2IpamResourceDiscoveryOperatingRegionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.get"></a>

```java
public Ec2IpamResourceDiscoveryOperatingRegionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions">Ec2IpamResourceDiscoveryOperatingRegions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2IpamResourceDiscoveryOperatingRegions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions">Ec2IpamResourceDiscoveryOperatingRegions</a>>

---


### Ec2IpamResourceDiscoveryOperatingRegionsOutputReference <a name="Ec2IpamResourceDiscoveryOperatingRegionsOutputReference" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_resource_discovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference;

new Ec2IpamResourceDiscoveryOperatingRegionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.resetRegionName">resetRegionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegionName` <a name="resetRegionName" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.resetRegionName"></a>

```java
public void resetRegionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.property.regionNameInput">regionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.property.regionName">regionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions">Ec2IpamResourceDiscoveryOperatingRegions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regionNameInput`<sup>Optional</sup> <a name="regionNameInput" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.property.regionNameInput"></a>

```java
public java.lang.String getRegionNameInput();
```

- *Type:* java.lang.String

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.property.regionName"></a>

```java
public java.lang.String getRegionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2IpamResourceDiscoveryOperatingRegions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions">Ec2IpamResourceDiscoveryOperatingRegions</a>

---


### Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList <a name="Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_resource_discovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList;

new Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.get"></a>

```java
public Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions">Ec2IpamResourceDiscoveryOrganizationalUnitExclusions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2IpamResourceDiscoveryOrganizationalUnitExclusions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions">Ec2IpamResourceDiscoveryOrganizationalUnitExclusions</a>>

---


### Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference <a name="Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_resource_discovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference;

new Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.resetOrganizationsEntityPath">resetOrganizationsEntityPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOrganizationsEntityPath` <a name="resetOrganizationsEntityPath" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.resetOrganizationsEntityPath"></a>

```java
public void resetOrganizationsEntityPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.organizationsEntityPathInput">organizationsEntityPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.organizationsEntityPath">organizationsEntityPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions">Ec2IpamResourceDiscoveryOrganizationalUnitExclusions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `organizationsEntityPathInput`<sup>Optional</sup> <a name="organizationsEntityPathInput" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.organizationsEntityPathInput"></a>

```java
public java.lang.String getOrganizationsEntityPathInput();
```

- *Type:* java.lang.String

---

##### `organizationsEntityPath`<sup>Required</sup> <a name="organizationsEntityPath" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.organizationsEntityPath"></a>

```java
public java.lang.String getOrganizationsEntityPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2IpamResourceDiscoveryOrganizationalUnitExclusions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions">Ec2IpamResourceDiscoveryOrganizationalUnitExclusions</a>

---


### Ec2IpamResourceDiscoveryTagsList <a name="Ec2IpamResourceDiscoveryTagsList" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_resource_discovery.Ec2IpamResourceDiscoveryTagsList;

new Ec2IpamResourceDiscoveryTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.get"></a>

```java
public Ec2IpamResourceDiscoveryTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags">Ec2IpamResourceDiscoveryTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2IpamResourceDiscoveryTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags">Ec2IpamResourceDiscoveryTags</a>>

---


### Ec2IpamResourceDiscoveryTagsOutputReference <a name="Ec2IpamResourceDiscoveryTagsOutputReference" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_resource_discovery.Ec2IpamResourceDiscoveryTagsOutputReference;

new Ec2IpamResourceDiscoveryTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags">Ec2IpamResourceDiscoveryTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2IpamResourceDiscoveryTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags">Ec2IpamResourceDiscoveryTags</a>

---



