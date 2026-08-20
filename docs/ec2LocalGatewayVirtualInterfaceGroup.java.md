# `ec2LocalGatewayVirtualInterfaceGroup` Submodule <a name="`ec2LocalGatewayVirtualInterfaceGroup` Submodule" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2LocalGatewayVirtualInterfaceGroup <a name="Ec2LocalGatewayVirtualInterfaceGroup" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_local_gateway_virtual_interface_group awscc_ec2_local_gateway_virtual_interface_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_local_gateway_virtual_interface_group.Ec2LocalGatewayVirtualInterfaceGroup;

Ec2LocalGatewayVirtualInterfaceGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .localGatewayId(java.lang.String)
//  .localBgpAsn(java.lang.Number)
//  .localBgpAsnExtended(java.lang.Number)
//  .tags(IResolvable|java.util.List<Ec2LocalGatewayVirtualInterfaceGroupTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.localGatewayId">localGatewayId</a></code> | <code>java.lang.String</code> | The ID of the local gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.localBgpAsn">localBgpAsn</a></code> | <code>java.lang.Number</code> | The Autonomous System Number(ASN) for the local Border Gateway Protocol (BGP). |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.localBgpAsnExtended">localBgpAsnExtended</a></code> | <code>java.lang.Number</code> | The extended 32-bit ASN for the local BGP configuration. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags">Ec2LocalGatewayVirtualInterfaceGroupTags</a>></code> | The tags assigned to the virtual interface group. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `localGatewayId`<sup>Required</sup> <a name="localGatewayId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.localGatewayId"></a>

- *Type:* java.lang.String

The ID of the local gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_local_gateway_virtual_interface_group#local_gateway_id Ec2LocalGatewayVirtualInterfaceGroup#local_gateway_id}

---

##### `localBgpAsn`<sup>Optional</sup> <a name="localBgpAsn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.localBgpAsn"></a>

- *Type:* java.lang.Number

The Autonomous System Number(ASN) for the local Border Gateway Protocol (BGP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_local_gateway_virtual_interface_group#local_bgp_asn Ec2LocalGatewayVirtualInterfaceGroup#local_bgp_asn}

---

##### `localBgpAsnExtended`<sup>Optional</sup> <a name="localBgpAsnExtended" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.localBgpAsnExtended"></a>

- *Type:* java.lang.Number

The extended 32-bit ASN for the local BGP configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_local_gateway_virtual_interface_group#local_bgp_asn_extended Ec2LocalGatewayVirtualInterfaceGroup#local_bgp_asn_extended}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags">Ec2LocalGatewayVirtualInterfaceGroupTags</a>>

The tags assigned to the virtual interface group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_local_gateway_virtual_interface_group#tags Ec2LocalGatewayVirtualInterfaceGroup#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.resetLocalBgpAsn">resetLocalBgpAsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.resetLocalBgpAsnExtended">resetLocalBgpAsnExtended</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Ec2LocalGatewayVirtualInterfaceGroupTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags">Ec2LocalGatewayVirtualInterfaceGroupTags</a>>

---

##### `resetLocalBgpAsn` <a name="resetLocalBgpAsn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.resetLocalBgpAsn"></a>

```java
public void resetLocalBgpAsn()
```

##### `resetLocalBgpAsnExtended` <a name="resetLocalBgpAsnExtended" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.resetLocalBgpAsnExtended"></a>

```java
public void resetLocalBgpAsnExtended()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2LocalGatewayVirtualInterfaceGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_local_gateway_virtual_interface_group.Ec2LocalGatewayVirtualInterfaceGroup;

Ec2LocalGatewayVirtualInterfaceGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_local_gateway_virtual_interface_group.Ec2LocalGatewayVirtualInterfaceGroup;

Ec2LocalGatewayVirtualInterfaceGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_local_gateway_virtual_interface_group.Ec2LocalGatewayVirtualInterfaceGroup;

Ec2LocalGatewayVirtualInterfaceGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_local_gateway_virtual_interface_group.Ec2LocalGatewayVirtualInterfaceGroup;

Ec2LocalGatewayVirtualInterfaceGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2LocalGatewayVirtualInterfaceGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2LocalGatewayVirtualInterfaceGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2LocalGatewayVirtualInterfaceGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2LocalGatewayVirtualInterfaceGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_local_gateway_virtual_interface_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2LocalGatewayVirtualInterfaceGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.configurationState">configurationState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceGroupArn">localGatewayVirtualInterfaceGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceGroupId">localGatewayVirtualInterfaceGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceIds">localGatewayVirtualInterfaceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList">Ec2LocalGatewayVirtualInterfaceGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localBgpAsnExtendedInput">localBgpAsnExtendedInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localBgpAsnInput">localBgpAsnInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayIdInput">localGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags">Ec2LocalGatewayVirtualInterfaceGroupTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localBgpAsn">localBgpAsn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localBgpAsnExtended">localBgpAsnExtended</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayId">localGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configurationState`<sup>Required</sup> <a name="configurationState" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.configurationState"></a>

```java
public java.lang.String getConfigurationState();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `localGatewayVirtualInterfaceGroupArn`<sup>Required</sup> <a name="localGatewayVirtualInterfaceGroupArn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceGroupArn"></a>

```java
public java.lang.String getLocalGatewayVirtualInterfaceGroupArn();
```

- *Type:* java.lang.String

---

##### `localGatewayVirtualInterfaceGroupId`<sup>Required</sup> <a name="localGatewayVirtualInterfaceGroupId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceGroupId"></a>

```java
public java.lang.String getLocalGatewayVirtualInterfaceGroupId();
```

- *Type:* java.lang.String

---

##### `localGatewayVirtualInterfaceIds`<sup>Required</sup> <a name="localGatewayVirtualInterfaceIds" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceIds"></a>

```java
public java.util.List<java.lang.String> getLocalGatewayVirtualInterfaceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.tags"></a>

```java
public Ec2LocalGatewayVirtualInterfaceGroupTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList">Ec2LocalGatewayVirtualInterfaceGroupTagsList</a>

---

##### `localBgpAsnExtendedInput`<sup>Optional</sup> <a name="localBgpAsnExtendedInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localBgpAsnExtendedInput"></a>

```java
public java.lang.Number getLocalBgpAsnExtendedInput();
```

- *Type:* java.lang.Number

---

##### `localBgpAsnInput`<sup>Optional</sup> <a name="localBgpAsnInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localBgpAsnInput"></a>

```java
public java.lang.Number getLocalBgpAsnInput();
```

- *Type:* java.lang.Number

---

##### `localGatewayIdInput`<sup>Optional</sup> <a name="localGatewayIdInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayIdInput"></a>

```java
public java.lang.String getLocalGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Ec2LocalGatewayVirtualInterfaceGroupTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags">Ec2LocalGatewayVirtualInterfaceGroupTags</a>>

---

##### `localBgpAsn`<sup>Required</sup> <a name="localBgpAsn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localBgpAsn"></a>

```java
public java.lang.Number getLocalBgpAsn();
```

- *Type:* java.lang.Number

---

##### `localBgpAsnExtended`<sup>Required</sup> <a name="localBgpAsnExtended" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localBgpAsnExtended"></a>

```java
public java.lang.Number getLocalBgpAsnExtended();
```

- *Type:* java.lang.Number

---

##### `localGatewayId`<sup>Required</sup> <a name="localGatewayId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayId"></a>

```java
public java.lang.String getLocalGatewayId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2LocalGatewayVirtualInterfaceGroupConfig <a name="Ec2LocalGatewayVirtualInterfaceGroupConfig" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_local_gateway_virtual_interface_group.Ec2LocalGatewayVirtualInterfaceGroupConfig;

Ec2LocalGatewayVirtualInterfaceGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .localGatewayId(java.lang.String)
//  .localBgpAsn(java.lang.Number)
//  .localBgpAsnExtended(java.lang.Number)
//  .tags(IResolvable|java.util.List<Ec2LocalGatewayVirtualInterfaceGroupTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.localGatewayId">localGatewayId</a></code> | <code>java.lang.String</code> | The ID of the local gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.localBgpAsn">localBgpAsn</a></code> | <code>java.lang.Number</code> | The Autonomous System Number(ASN) for the local Border Gateway Protocol (BGP). |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.localBgpAsnExtended">localBgpAsnExtended</a></code> | <code>java.lang.Number</code> | The extended 32-bit ASN for the local BGP configuration. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags">Ec2LocalGatewayVirtualInterfaceGroupTags</a>></code> | The tags assigned to the virtual interface group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `localGatewayId`<sup>Required</sup> <a name="localGatewayId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.localGatewayId"></a>

```java
public java.lang.String getLocalGatewayId();
```

- *Type:* java.lang.String

The ID of the local gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_local_gateway_virtual_interface_group#local_gateway_id Ec2LocalGatewayVirtualInterfaceGroup#local_gateway_id}

---

##### `localBgpAsn`<sup>Optional</sup> <a name="localBgpAsn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.localBgpAsn"></a>

```java
public java.lang.Number getLocalBgpAsn();
```

- *Type:* java.lang.Number

The Autonomous System Number(ASN) for the local Border Gateway Protocol (BGP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_local_gateway_virtual_interface_group#local_bgp_asn Ec2LocalGatewayVirtualInterfaceGroup#local_bgp_asn}

---

##### `localBgpAsnExtended`<sup>Optional</sup> <a name="localBgpAsnExtended" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.localBgpAsnExtended"></a>

```java
public java.lang.Number getLocalBgpAsnExtended();
```

- *Type:* java.lang.Number

The extended 32-bit ASN for the local BGP configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_local_gateway_virtual_interface_group#local_bgp_asn_extended Ec2LocalGatewayVirtualInterfaceGroup#local_bgp_asn_extended}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Ec2LocalGatewayVirtualInterfaceGroupTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags">Ec2LocalGatewayVirtualInterfaceGroupTags</a>>

The tags assigned to the virtual interface group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_local_gateway_virtual_interface_group#tags Ec2LocalGatewayVirtualInterfaceGroup#tags}

---

### Ec2LocalGatewayVirtualInterfaceGroupTags <a name="Ec2LocalGatewayVirtualInterfaceGroupTags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_local_gateway_virtual_interface_group.Ec2LocalGatewayVirtualInterfaceGroupTags;

Ec2LocalGatewayVirtualInterfaceGroupTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_local_gateway_virtual_interface_group#key Ec2LocalGatewayVirtualInterfaceGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_local_gateway_virtual_interface_group#value Ec2LocalGatewayVirtualInterfaceGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2LocalGatewayVirtualInterfaceGroupTagsList <a name="Ec2LocalGatewayVirtualInterfaceGroupTagsList" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_local_gateway_virtual_interface_group.Ec2LocalGatewayVirtualInterfaceGroupTagsList;

new Ec2LocalGatewayVirtualInterfaceGroupTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.get"></a>

```java
public Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags">Ec2LocalGatewayVirtualInterfaceGroupTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2LocalGatewayVirtualInterfaceGroupTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags">Ec2LocalGatewayVirtualInterfaceGroupTags</a>>

---


### Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference <a name="Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_local_gateway_virtual_interface_group.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference;

new Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags">Ec2LocalGatewayVirtualInterfaceGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2LocalGatewayVirtualInterfaceGroupTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags">Ec2LocalGatewayVirtualInterfaceGroupTags</a>

---



