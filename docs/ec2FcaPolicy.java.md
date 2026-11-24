# `ec2FcaPolicy` Submodule <a name="`ec2FcaPolicy` Submodule" id="@cdktn/provider-awscc.ec2FcaPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2FcaPolicy <a name="Ec2FcaPolicy" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy awscc_ec2_fca_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicy;

Ec2FcaPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .networkResourceType(java.lang.String)
//  .description(java.lang.String)
//  .instanceFcaPolicyDocument(Ec2FcaPolicyInstanceFcaPolicyDocument)
//  .natFcaPolicyDocument(Ec2FcaPolicyNatFcaPolicyDocument)
//  .pcxFcaPolicyDocument(Ec2FcaPolicyPcxFcaPolicyDocument)
//  .showBackEnabled(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<Ec2FcaPolicyTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.networkResourceType">networkResourceType</a></code> | <code>java.lang.String</code> | The type of network resource the FCA policy applies to. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the FCA policy. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.instanceFcaPolicyDocument">instanceFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a></code> | The FCA policy document for EC2 instance cost allocation. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.natFcaPolicyDocument">natFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a></code> | The FCA policy document for NAT gateway cost allocation. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.pcxFcaPolicyDocument">pcxFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a></code> | The FCA policy document for VPC peering connection cost allocation. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.showBackEnabled">showBackEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether show-back reporting is enabled for the FCA policy. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>></code> | The tags for the FCA policy. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `networkResourceType`<sup>Required</sup> <a name="networkResourceType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.networkResourceType"></a>

- *Type:* java.lang.String

The type of network resource the FCA policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#network_resource_type Ec2FcaPolicy#network_resource_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the FCA policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#description Ec2FcaPolicy#description}

---

##### `instanceFcaPolicyDocument`<sup>Optional</sup> <a name="instanceFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.instanceFcaPolicyDocument"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a>

The FCA policy document for EC2 instance cost allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#instance_fca_policy_document Ec2FcaPolicy#instance_fca_policy_document}

---

##### `natFcaPolicyDocument`<sup>Optional</sup> <a name="natFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.natFcaPolicyDocument"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a>

The FCA policy document for NAT gateway cost allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#nat_fca_policy_document Ec2FcaPolicy#nat_fca_policy_document}

---

##### `pcxFcaPolicyDocument`<sup>Optional</sup> <a name="pcxFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.pcxFcaPolicyDocument"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a>

The FCA policy document for VPC peering connection cost allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#pcx_fca_policy_document Ec2FcaPolicy#pcx_fca_policy_document}

---

##### `showBackEnabled`<sup>Optional</sup> <a name="showBackEnabled" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.showBackEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether show-back reporting is enabled for the FCA policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#show_back_enabled Ec2FcaPolicy#show_back_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>>

The tags for the FCA policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#tags Ec2FcaPolicy#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putInstanceFcaPolicyDocument">putInstanceFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putNatFcaPolicyDocument">putNatFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putPcxFcaPolicyDocument">putPcxFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetInstanceFcaPolicyDocument">resetInstanceFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetNatFcaPolicyDocument">resetNatFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetPcxFcaPolicyDocument">resetPcxFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetShowBackEnabled">resetShowBackEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInstanceFcaPolicyDocument` <a name="putInstanceFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putInstanceFcaPolicyDocument"></a>

```java
public void putInstanceFcaPolicyDocument(Ec2FcaPolicyInstanceFcaPolicyDocument value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putInstanceFcaPolicyDocument.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a>

---

##### `putNatFcaPolicyDocument` <a name="putNatFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putNatFcaPolicyDocument"></a>

```java
public void putNatFcaPolicyDocument(Ec2FcaPolicyNatFcaPolicyDocument value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putNatFcaPolicyDocument.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a>

---

##### `putPcxFcaPolicyDocument` <a name="putPcxFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putPcxFcaPolicyDocument"></a>

```java
public void putPcxFcaPolicyDocument(Ec2FcaPolicyPcxFcaPolicyDocument value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putPcxFcaPolicyDocument.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Ec2FcaPolicyTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetInstanceFcaPolicyDocument` <a name="resetInstanceFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetInstanceFcaPolicyDocument"></a>

```java
public void resetInstanceFcaPolicyDocument()
```

##### `resetNatFcaPolicyDocument` <a name="resetNatFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetNatFcaPolicyDocument"></a>

```java
public void resetNatFcaPolicyDocument()
```

##### `resetPcxFcaPolicyDocument` <a name="resetPcxFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetPcxFcaPolicyDocument"></a>

```java
public void resetPcxFcaPolicyDocument()
```

##### `resetShowBackEnabled` <a name="resetShowBackEnabled" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetShowBackEnabled"></a>

```java
public void resetShowBackEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2FcaPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicy;

Ec2FcaPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicy;

Ec2FcaPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicy;

Ec2FcaPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicy;

Ec2FcaPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2FcaPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2FcaPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2FcaPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2FcaPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2FcaPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.fcaPolicyId">fcaPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.instanceFcaPolicyDocument">instanceFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference">Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.latestVersion">latestVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.natFcaPolicyDocument">natFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference">Ec2FcaPolicyNatFcaPolicyDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.ownerAccount">ownerAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.pcxFcaPolicyDocument">pcxFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference">Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.policyCreatedAt">policyCreatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList">Ec2FcaPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.versionExpectedEffectiveAt">versionExpectedEffectiveAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.instanceFcaPolicyDocumentInput">instanceFcaPolicyDocumentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.natFcaPolicyDocumentInput">natFcaPolicyDocumentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.networkResourceTypeInput">networkResourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.pcxFcaPolicyDocumentInput">pcxFcaPolicyDocumentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.showBackEnabledInput">showBackEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.networkResourceType">networkResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.showBackEnabled">showBackEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `fcaPolicyId`<sup>Required</sup> <a name="fcaPolicyId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.fcaPolicyId"></a>

```java
public java.lang.String getFcaPolicyId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceFcaPolicyDocument`<sup>Required</sup> <a name="instanceFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.instanceFcaPolicyDocument"></a>

```java
public Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference getInstanceFcaPolicyDocument();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference">Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference</a>

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.latestVersion"></a>

```java
public java.lang.Number getLatestVersion();
```

- *Type:* java.lang.Number

---

##### `natFcaPolicyDocument`<sup>Required</sup> <a name="natFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.natFcaPolicyDocument"></a>

```java
public Ec2FcaPolicyNatFcaPolicyDocumentOutputReference getNatFcaPolicyDocument();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference">Ec2FcaPolicyNatFcaPolicyDocumentOutputReference</a>

---

##### `ownerAccount`<sup>Required</sup> <a name="ownerAccount" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.ownerAccount"></a>

```java
public java.lang.String getOwnerAccount();
```

- *Type:* java.lang.String

---

##### `pcxFcaPolicyDocument`<sup>Required</sup> <a name="pcxFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.pcxFcaPolicyDocument"></a>

```java
public Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference getPcxFcaPolicyDocument();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference">Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference</a>

---

##### `policyCreatedAt`<sup>Required</sup> <a name="policyCreatedAt" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.policyCreatedAt"></a>

```java
public java.lang.String getPolicyCreatedAt();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tags"></a>

```java
public Ec2FcaPolicyTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList">Ec2FcaPolicyTagsList</a>

---

##### `versionExpectedEffectiveAt`<sup>Required</sup> <a name="versionExpectedEffectiveAt" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.versionExpectedEffectiveAt"></a>

```java
public java.lang.String getVersionExpectedEffectiveAt();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `instanceFcaPolicyDocumentInput`<sup>Optional</sup> <a name="instanceFcaPolicyDocumentInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.instanceFcaPolicyDocumentInput"></a>

```java
public IResolvable|Ec2FcaPolicyInstanceFcaPolicyDocument getInstanceFcaPolicyDocumentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a>

---

##### `natFcaPolicyDocumentInput`<sup>Optional</sup> <a name="natFcaPolicyDocumentInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.natFcaPolicyDocumentInput"></a>

```java
public IResolvable|Ec2FcaPolicyNatFcaPolicyDocument getNatFcaPolicyDocumentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a>

---

##### `networkResourceTypeInput`<sup>Optional</sup> <a name="networkResourceTypeInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.networkResourceTypeInput"></a>

```java
public java.lang.String getNetworkResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `pcxFcaPolicyDocumentInput`<sup>Optional</sup> <a name="pcxFcaPolicyDocumentInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.pcxFcaPolicyDocumentInput"></a>

```java
public IResolvable|Ec2FcaPolicyPcxFcaPolicyDocument getPcxFcaPolicyDocumentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a>

---

##### `showBackEnabledInput`<sup>Optional</sup> <a name="showBackEnabledInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.showBackEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getShowBackEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Ec2FcaPolicyTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `networkResourceType`<sup>Required</sup> <a name="networkResourceType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.networkResourceType"></a>

```java
public java.lang.String getNetworkResourceType();
```

- *Type:* java.lang.String

---

##### `showBackEnabled`<sup>Required</sup> <a name="showBackEnabled" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.showBackEnabled"></a>

```java
public java.lang.Boolean|IResolvable getShowBackEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2FcaPolicyConfig <a name="Ec2FcaPolicyConfig" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicyConfig;

Ec2FcaPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .networkResourceType(java.lang.String)
//  .description(java.lang.String)
//  .instanceFcaPolicyDocument(Ec2FcaPolicyInstanceFcaPolicyDocument)
//  .natFcaPolicyDocument(Ec2FcaPolicyNatFcaPolicyDocument)
//  .pcxFcaPolicyDocument(Ec2FcaPolicyPcxFcaPolicyDocument)
//  .showBackEnabled(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<Ec2FcaPolicyTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.networkResourceType">networkResourceType</a></code> | <code>java.lang.String</code> | The type of network resource the FCA policy applies to. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the FCA policy. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.instanceFcaPolicyDocument">instanceFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a></code> | The FCA policy document for EC2 instance cost allocation. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.natFcaPolicyDocument">natFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a></code> | The FCA policy document for NAT gateway cost allocation. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.pcxFcaPolicyDocument">pcxFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a></code> | The FCA policy document for VPC peering connection cost allocation. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.showBackEnabled">showBackEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether show-back reporting is enabled for the FCA policy. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>></code> | The tags for the FCA policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `networkResourceType`<sup>Required</sup> <a name="networkResourceType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.networkResourceType"></a>

```java
public java.lang.String getNetworkResourceType();
```

- *Type:* java.lang.String

The type of network resource the FCA policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#network_resource_type Ec2FcaPolicy#network_resource_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the FCA policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#description Ec2FcaPolicy#description}

---

##### `instanceFcaPolicyDocument`<sup>Optional</sup> <a name="instanceFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.instanceFcaPolicyDocument"></a>

```java
public Ec2FcaPolicyInstanceFcaPolicyDocument getInstanceFcaPolicyDocument();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a>

The FCA policy document for EC2 instance cost allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#instance_fca_policy_document Ec2FcaPolicy#instance_fca_policy_document}

---

##### `natFcaPolicyDocument`<sup>Optional</sup> <a name="natFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.natFcaPolicyDocument"></a>

```java
public Ec2FcaPolicyNatFcaPolicyDocument getNatFcaPolicyDocument();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a>

The FCA policy document for NAT gateway cost allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#nat_fca_policy_document Ec2FcaPolicy#nat_fca_policy_document}

---

##### `pcxFcaPolicyDocument`<sup>Optional</sup> <a name="pcxFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.pcxFcaPolicyDocument"></a>

```java
public Ec2FcaPolicyPcxFcaPolicyDocument getPcxFcaPolicyDocument();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a>

The FCA policy document for VPC peering connection cost allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#pcx_fca_policy_document Ec2FcaPolicy#pcx_fca_policy_document}

---

##### `showBackEnabled`<sup>Optional</sup> <a name="showBackEnabled" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.showBackEnabled"></a>

```java
public java.lang.Boolean|IResolvable getShowBackEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether show-back reporting is enabled for the FCA policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#show_back_enabled Ec2FcaPolicy#show_back_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Ec2FcaPolicyTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>>

The tags for the FCA policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#tags Ec2FcaPolicy#tags}

---

### Ec2FcaPolicyInstanceFcaPolicyDocument <a name="Ec2FcaPolicyInstanceFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicyInstanceFcaPolicyDocument;

Ec2FcaPolicyInstanceFcaPolicyDocument.builder()
//  .cidrRangeSpecifications(Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications)
//  .dimensions(java.util.List<java.lang.String>)
//  .reportingGranularity(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.cidrRangeSpecifications">cidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a></code> | CIDR range specifications, used when the reporting granularity is 'cidr'. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.dimensions">dimensions</a></code> | <code>java.util.List<java.lang.String></code> | The cost dimensions to allocate. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.reportingGranularity">reportingGranularity</a></code> | <code>java.util.List<java.lang.String></code> | The granularity at which costs are reported. Contains exactly one value. |

---

##### `cidrRangeSpecifications`<sup>Optional</sup> <a name="cidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.cidrRangeSpecifications"></a>

```java
public Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications getCidrRangeSpecifications();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a>

CIDR range specifications, used when the reporting granularity is 'cidr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range_specifications Ec2FcaPolicy#cidr_range_specifications}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.dimensions"></a>

```java
public java.util.List<java.lang.String> getDimensions();
```

- *Type:* java.util.List<java.lang.String>

The cost dimensions to allocate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#dimensions Ec2FcaPolicy#dimensions}

---

##### `reportingGranularity`<sup>Optional</sup> <a name="reportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.reportingGranularity"></a>

```java
public java.util.List<java.lang.String> getReportingGranularity();
```

- *Type:* java.util.List<java.lang.String>

The granularity at which costs are reported. Contains exactly one value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#reporting_granularity Ec2FcaPolicy#reporting_granularity}

---

### Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications;

Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications.builder()
//  .prefixes(IResolvable|java.util.List<Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes>)
//  .prefixesType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications.property.prefixes">prefixes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>></code> | The CIDR range to label mappings. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType">prefixesType</a></code> | <code>java.lang.String</code> | The type of prefixes the mappings apply to. |

---

##### `prefixes`<sup>Optional</sup> <a name="prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications.property.prefixes"></a>

```java
public IResolvable|java.util.List<Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes> getPrefixes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>>

The CIDR range to label mappings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes Ec2FcaPolicy#prefixes}

---

##### `prefixesType`<sup>Optional</sup> <a name="prefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType"></a>

```java
public java.lang.String getPrefixesType();
```

- *Type:* java.lang.String

The type of prefixes the mappings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes_type Ec2FcaPolicy#prefixes_type}

---

### Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes;

Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes.builder()
//  .cidrLabel(java.lang.String)
//  .cidrRange(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel">cidrLabel</a></code> | <code>java.lang.String</code> | The label for the CIDR range. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange">cidrRange</a></code> | <code>java.lang.String</code> | The CIDR range. |

---

##### `cidrLabel`<sup>Optional</sup> <a name="cidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel"></a>

```java
public java.lang.String getCidrLabel();
```

- *Type:* java.lang.String

The label for the CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_label Ec2FcaPolicy#cidr_label}

---

##### `cidrRange`<sup>Optional</sup> <a name="cidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange"></a>

```java
public java.lang.String getCidrRange();
```

- *Type:* java.lang.String

The CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range Ec2FcaPolicy#cidr_range}

---

### Ec2FcaPolicyNatFcaPolicyDocument <a name="Ec2FcaPolicyNatFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicyNatFcaPolicyDocument;

Ec2FcaPolicyNatFcaPolicyDocument.builder()
//  .cidrRangeSpecifications(Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications)
//  .dimensions(java.util.List<java.lang.String>)
//  .reportingGranularity(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.cidrRangeSpecifications">cidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a></code> | CIDR range specifications, used when the reporting granularity is 'cidr'. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.dimensions">dimensions</a></code> | <code>java.util.List<java.lang.String></code> | The cost dimensions to allocate. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.reportingGranularity">reportingGranularity</a></code> | <code>java.util.List<java.lang.String></code> | The granularity at which costs are reported. Contains exactly one value. |

---

##### `cidrRangeSpecifications`<sup>Optional</sup> <a name="cidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.cidrRangeSpecifications"></a>

```java
public Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications getCidrRangeSpecifications();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a>

CIDR range specifications, used when the reporting granularity is 'cidr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range_specifications Ec2FcaPolicy#cidr_range_specifications}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.dimensions"></a>

```java
public java.util.List<java.lang.String> getDimensions();
```

- *Type:* java.util.List<java.lang.String>

The cost dimensions to allocate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#dimensions Ec2FcaPolicy#dimensions}

---

##### `reportingGranularity`<sup>Optional</sup> <a name="reportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.reportingGranularity"></a>

```java
public java.util.List<java.lang.String> getReportingGranularity();
```

- *Type:* java.util.List<java.lang.String>

The granularity at which costs are reported. Contains exactly one value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#reporting_granularity Ec2FcaPolicy#reporting_granularity}

---

### Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications <a name="Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications;

Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications.builder()
//  .prefixes(IResolvable|java.util.List<Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes>)
//  .prefixesType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications.property.prefixes">prefixes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>></code> | The CIDR range to label mappings. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType">prefixesType</a></code> | <code>java.lang.String</code> | The type of prefixes the mappings apply to. |

---

##### `prefixes`<sup>Optional</sup> <a name="prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications.property.prefixes"></a>

```java
public IResolvable|java.util.List<Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes> getPrefixes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>>

The CIDR range to label mappings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes Ec2FcaPolicy#prefixes}

---

##### `prefixesType`<sup>Optional</sup> <a name="prefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType"></a>

```java
public java.lang.String getPrefixesType();
```

- *Type:* java.lang.String

The type of prefixes the mappings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes_type Ec2FcaPolicy#prefixes_type}

---

### Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes <a name="Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes;

Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes.builder()
//  .cidrLabel(java.lang.String)
//  .cidrRange(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel">cidrLabel</a></code> | <code>java.lang.String</code> | The label for the CIDR range. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange">cidrRange</a></code> | <code>java.lang.String</code> | The CIDR range. |

---

##### `cidrLabel`<sup>Optional</sup> <a name="cidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel"></a>

```java
public java.lang.String getCidrLabel();
```

- *Type:* java.lang.String

The label for the CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_label Ec2FcaPolicy#cidr_label}

---

##### `cidrRange`<sup>Optional</sup> <a name="cidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange"></a>

```java
public java.lang.String getCidrRange();
```

- *Type:* java.lang.String

The CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range Ec2FcaPolicy#cidr_range}

---

### Ec2FcaPolicyPcxFcaPolicyDocument <a name="Ec2FcaPolicyPcxFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicyPcxFcaPolicyDocument;

Ec2FcaPolicyPcxFcaPolicyDocument.builder()
//  .cidrRangeSpecifications(Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications)
//  .dimensions(java.util.List<java.lang.String>)
//  .reportingGranularity(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.cidrRangeSpecifications">cidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a></code> | CIDR range specifications, used when the reporting granularity is 'cidr'. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.dimensions">dimensions</a></code> | <code>java.util.List<java.lang.String></code> | The cost dimensions to allocate. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.reportingGranularity">reportingGranularity</a></code> | <code>java.util.List<java.lang.String></code> | The granularity at which costs are reported. Contains exactly one value. |

---

##### `cidrRangeSpecifications`<sup>Optional</sup> <a name="cidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.cidrRangeSpecifications"></a>

```java
public Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications getCidrRangeSpecifications();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a>

CIDR range specifications, used when the reporting granularity is 'cidr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range_specifications Ec2FcaPolicy#cidr_range_specifications}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.dimensions"></a>

```java
public java.util.List<java.lang.String> getDimensions();
```

- *Type:* java.util.List<java.lang.String>

The cost dimensions to allocate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#dimensions Ec2FcaPolicy#dimensions}

---

##### `reportingGranularity`<sup>Optional</sup> <a name="reportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.reportingGranularity"></a>

```java
public java.util.List<java.lang.String> getReportingGranularity();
```

- *Type:* java.util.List<java.lang.String>

The granularity at which costs are reported. Contains exactly one value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#reporting_granularity Ec2FcaPolicy#reporting_granularity}

---

### Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications <a name="Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications;

Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications.builder()
//  .prefixes(IResolvable|java.util.List<Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes>)
//  .prefixesType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications.property.prefixes">prefixes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>></code> | The CIDR range to label mappings. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType">prefixesType</a></code> | <code>java.lang.String</code> | The type of prefixes the mappings apply to. |

---

##### `prefixes`<sup>Optional</sup> <a name="prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications.property.prefixes"></a>

```java
public IResolvable|java.util.List<Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes> getPrefixes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>>

The CIDR range to label mappings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes Ec2FcaPolicy#prefixes}

---

##### `prefixesType`<sup>Optional</sup> <a name="prefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType"></a>

```java
public java.lang.String getPrefixesType();
```

- *Type:* java.lang.String

The type of prefixes the mappings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes_type Ec2FcaPolicy#prefixes_type}

---

### Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes <a name="Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes;

Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes.builder()
//  .cidrLabel(java.lang.String)
//  .cidrRange(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel">cidrLabel</a></code> | <code>java.lang.String</code> | The label for the CIDR range. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange">cidrRange</a></code> | <code>java.lang.String</code> | The CIDR range. |

---

##### `cidrLabel`<sup>Optional</sup> <a name="cidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel"></a>

```java
public java.lang.String getCidrLabel();
```

- *Type:* java.lang.String

The label for the CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_label Ec2FcaPolicy#cidr_label}

---

##### `cidrRange`<sup>Optional</sup> <a name="cidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange"></a>

```java
public java.lang.String getCidrRange();
```

- *Type:* java.lang.String

The CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range Ec2FcaPolicy#cidr_range}

---

### Ec2FcaPolicyTags <a name="Ec2FcaPolicyTags" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicyTags;

Ec2FcaPolicyTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#key Ec2FcaPolicy#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#value Ec2FcaPolicy#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#key Ec2FcaPolicy#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#value Ec2FcaPolicy#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference;

new Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes">putPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes">resetPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType">resetPrefixesType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrefixes` <a name="putPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes"></a>

```java
public void putPrefixes(IResolvable|java.util.List<Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>>

---

##### `resetPrefixes` <a name="resetPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes"></a>

```java
public void resetPrefixes()
```

##### `resetPrefixesType` <a name="resetPrefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType"></a>

```java
public void resetPrefixesType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes">prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput">prefixesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput">prefixesTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType">prefixesType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `prefixes`<sup>Required</sup> <a name="prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes"></a>

```java
public Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList getPrefixes();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a>

---

##### `prefixesInput`<sup>Optional</sup> <a name="prefixesInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput"></a>

```java
public IResolvable|java.util.List<Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes> getPrefixesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>>

---

##### `prefixesTypeInput`<sup>Optional</sup> <a name="prefixesTypeInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput"></a>

```java
public java.lang.String getPrefixesTypeInput();
```

- *Type:* java.lang.String

---

##### `prefixesType`<sup>Required</sup> <a name="prefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType"></a>

```java
public java.lang.String getPrefixesType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a>

---


### Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList;

new Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get"></a>

```java
public Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>>

---


### Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference;

new Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel">resetCidrLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange">resetCidrRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrLabel` <a name="resetCidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel"></a>

```java
public void resetCidrLabel()
```

##### `resetCidrRange` <a name="resetCidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange"></a>

```java
public void resetCidrRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput">cidrLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput">cidrRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel">cidrLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange">cidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrLabelInput`<sup>Optional</sup> <a name="cidrLabelInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput"></a>

```java
public java.lang.String getCidrLabelInput();
```

- *Type:* java.lang.String

---

##### `cidrRangeInput`<sup>Optional</sup> <a name="cidrRangeInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput"></a>

```java
public java.lang.String getCidrRangeInput();
```

- *Type:* java.lang.String

---

##### `cidrLabel`<sup>Required</sup> <a name="cidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel"></a>

```java
public java.lang.String getCidrLabel();
```

- *Type:* java.lang.String

---

##### `cidrRange`<sup>Required</sup> <a name="cidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange"></a>

```java
public java.lang.String getCidrRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>

---


### Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference;

new Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.putCidrRangeSpecifications">putCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications">resetCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetReportingGranularity">resetReportingGranularity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCidrRangeSpecifications` <a name="putCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.putCidrRangeSpecifications"></a>

```java
public void putCidrRangeSpecifications(Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.putCidrRangeSpecifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a>

---

##### `resetCidrRangeSpecifications` <a name="resetCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications"></a>

```java
public void resetCidrRangeSpecifications()
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetDimensions"></a>

```java
public void resetDimensions()
```

##### `resetReportingGranularity` <a name="resetReportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetReportingGranularity"></a>

```java
public void resetReportingGranularity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications">cidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput">cidrRangeSpecificationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.reportingGranularityInput">reportingGranularityInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.dimensions">dimensions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.reportingGranularity">reportingGranularity</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrRangeSpecifications`<sup>Required</sup> <a name="cidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications"></a>

```java
public Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference getCidrRangeSpecifications();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a>

---

##### `cidrRangeSpecificationsInput`<sup>Optional</sup> <a name="cidrRangeSpecificationsInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput"></a>

```java
public IResolvable|Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications getCidrRangeSpecificationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a>

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.dimensionsInput"></a>

```java
public java.util.List<java.lang.String> getDimensionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `reportingGranularityInput`<sup>Optional</sup> <a name="reportingGranularityInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.reportingGranularityInput"></a>

```java
public java.util.List<java.lang.String> getReportingGranularityInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.dimensions"></a>

```java
public java.util.List<java.lang.String> getDimensions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `reportingGranularity`<sup>Required</sup> <a name="reportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.reportingGranularity"></a>

```java
public java.util.List<java.lang.String> getReportingGranularity();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2FcaPolicyInstanceFcaPolicyDocument getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a>

---


### Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference <a name="Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference;

new Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes">putPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes">resetPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType">resetPrefixesType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrefixes` <a name="putPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes"></a>

```java
public void putPrefixes(IResolvable|java.util.List<Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>>

---

##### `resetPrefixes` <a name="resetPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes"></a>

```java
public void resetPrefixes()
```

##### `resetPrefixesType` <a name="resetPrefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType"></a>

```java
public void resetPrefixesType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes">prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput">prefixesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput">prefixesTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType">prefixesType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `prefixes`<sup>Required</sup> <a name="prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes"></a>

```java
public Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList getPrefixes();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a>

---

##### `prefixesInput`<sup>Optional</sup> <a name="prefixesInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput"></a>

```java
public IResolvable|java.util.List<Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes> getPrefixesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>>

---

##### `prefixesTypeInput`<sup>Optional</sup> <a name="prefixesTypeInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput"></a>

```java
public java.lang.String getPrefixesTypeInput();
```

- *Type:* java.lang.String

---

##### `prefixesType`<sup>Required</sup> <a name="prefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType"></a>

```java
public java.lang.String getPrefixesType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a>

---


### Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList <a name="Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList;

new Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get"></a>

```java
public Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>>

---


### Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference <a name="Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference;

new Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel">resetCidrLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange">resetCidrRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrLabel` <a name="resetCidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel"></a>

```java
public void resetCidrLabel()
```

##### `resetCidrRange` <a name="resetCidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange"></a>

```java
public void resetCidrRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput">cidrLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput">cidrRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel">cidrLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange">cidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrLabelInput`<sup>Optional</sup> <a name="cidrLabelInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput"></a>

```java
public java.lang.String getCidrLabelInput();
```

- *Type:* java.lang.String

---

##### `cidrRangeInput`<sup>Optional</sup> <a name="cidrRangeInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput"></a>

```java
public java.lang.String getCidrRangeInput();
```

- *Type:* java.lang.String

---

##### `cidrLabel`<sup>Required</sup> <a name="cidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel"></a>

```java
public java.lang.String getCidrLabel();
```

- *Type:* java.lang.String

---

##### `cidrRange`<sup>Required</sup> <a name="cidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange"></a>

```java
public java.lang.String getCidrRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>

---


### Ec2FcaPolicyNatFcaPolicyDocumentOutputReference <a name="Ec2FcaPolicyNatFcaPolicyDocumentOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference;

new Ec2FcaPolicyNatFcaPolicyDocumentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.putCidrRangeSpecifications">putCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications">resetCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetReportingGranularity">resetReportingGranularity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCidrRangeSpecifications` <a name="putCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.putCidrRangeSpecifications"></a>

```java
public void putCidrRangeSpecifications(Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.putCidrRangeSpecifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a>

---

##### `resetCidrRangeSpecifications` <a name="resetCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications"></a>

```java
public void resetCidrRangeSpecifications()
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetDimensions"></a>

```java
public void resetDimensions()
```

##### `resetReportingGranularity` <a name="resetReportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetReportingGranularity"></a>

```java
public void resetReportingGranularity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications">cidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput">cidrRangeSpecificationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.reportingGranularityInput">reportingGranularityInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.dimensions">dimensions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.reportingGranularity">reportingGranularity</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrRangeSpecifications`<sup>Required</sup> <a name="cidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications"></a>

```java
public Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference getCidrRangeSpecifications();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a>

---

##### `cidrRangeSpecificationsInput`<sup>Optional</sup> <a name="cidrRangeSpecificationsInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput"></a>

```java
public IResolvable|Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications getCidrRangeSpecificationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a>

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.dimensionsInput"></a>

```java
public java.util.List<java.lang.String> getDimensionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `reportingGranularityInput`<sup>Optional</sup> <a name="reportingGranularityInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.reportingGranularityInput"></a>

```java
public java.util.List<java.lang.String> getReportingGranularityInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.dimensions"></a>

```java
public java.util.List<java.lang.String> getDimensions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `reportingGranularity`<sup>Required</sup> <a name="reportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.reportingGranularity"></a>

```java
public java.util.List<java.lang.String> getReportingGranularity();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2FcaPolicyNatFcaPolicyDocument getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a>

---


### Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference <a name="Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference;

new Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes">putPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes">resetPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType">resetPrefixesType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrefixes` <a name="putPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes"></a>

```java
public void putPrefixes(IResolvable|java.util.List<Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>>

---

##### `resetPrefixes` <a name="resetPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes"></a>

```java
public void resetPrefixes()
```

##### `resetPrefixesType` <a name="resetPrefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType"></a>

```java
public void resetPrefixesType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes">prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput">prefixesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput">prefixesTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType">prefixesType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `prefixes`<sup>Required</sup> <a name="prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes"></a>

```java
public Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList getPrefixes();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a>

---

##### `prefixesInput`<sup>Optional</sup> <a name="prefixesInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput"></a>

```java
public IResolvable|java.util.List<Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes> getPrefixesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>>

---

##### `prefixesTypeInput`<sup>Optional</sup> <a name="prefixesTypeInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput"></a>

```java
public java.lang.String getPrefixesTypeInput();
```

- *Type:* java.lang.String

---

##### `prefixesType`<sup>Required</sup> <a name="prefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType"></a>

```java
public java.lang.String getPrefixesType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a>

---


### Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList <a name="Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList;

new Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get"></a>

```java
public Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>>

---


### Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference <a name="Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference;

new Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel">resetCidrLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange">resetCidrRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrLabel` <a name="resetCidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel"></a>

```java
public void resetCidrLabel()
```

##### `resetCidrRange` <a name="resetCidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange"></a>

```java
public void resetCidrRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput">cidrLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput">cidrRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel">cidrLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange">cidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrLabelInput`<sup>Optional</sup> <a name="cidrLabelInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput"></a>

```java
public java.lang.String getCidrLabelInput();
```

- *Type:* java.lang.String

---

##### `cidrRangeInput`<sup>Optional</sup> <a name="cidrRangeInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput"></a>

```java
public java.lang.String getCidrRangeInput();
```

- *Type:* java.lang.String

---

##### `cidrLabel`<sup>Required</sup> <a name="cidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel"></a>

```java
public java.lang.String getCidrLabel();
```

- *Type:* java.lang.String

---

##### `cidrRange`<sup>Required</sup> <a name="cidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange"></a>

```java
public java.lang.String getCidrRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>

---


### Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference <a name="Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference;

new Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.putCidrRangeSpecifications">putCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications">resetCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetReportingGranularity">resetReportingGranularity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCidrRangeSpecifications` <a name="putCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.putCidrRangeSpecifications"></a>

```java
public void putCidrRangeSpecifications(Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.putCidrRangeSpecifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a>

---

##### `resetCidrRangeSpecifications` <a name="resetCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications"></a>

```java
public void resetCidrRangeSpecifications()
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetDimensions"></a>

```java
public void resetDimensions()
```

##### `resetReportingGranularity` <a name="resetReportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetReportingGranularity"></a>

```java
public void resetReportingGranularity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications">cidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput">cidrRangeSpecificationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.reportingGranularityInput">reportingGranularityInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.dimensions">dimensions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.reportingGranularity">reportingGranularity</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrRangeSpecifications`<sup>Required</sup> <a name="cidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications"></a>

```java
public Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference getCidrRangeSpecifications();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a>

---

##### `cidrRangeSpecificationsInput`<sup>Optional</sup> <a name="cidrRangeSpecificationsInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput"></a>

```java
public IResolvable|Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications getCidrRangeSpecificationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a>

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.dimensionsInput"></a>

```java
public java.util.List<java.lang.String> getDimensionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `reportingGranularityInput`<sup>Optional</sup> <a name="reportingGranularityInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.reportingGranularityInput"></a>

```java
public java.util.List<java.lang.String> getReportingGranularityInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.dimensions"></a>

```java
public java.util.List<java.lang.String> getDimensions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `reportingGranularity`<sup>Required</sup> <a name="reportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.reportingGranularity"></a>

```java
public java.util.List<java.lang.String> getReportingGranularity();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2FcaPolicyPcxFcaPolicyDocument getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a>

---


### Ec2FcaPolicyTagsList <a name="Ec2FcaPolicyTagsList" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicyTagsList;

new Ec2FcaPolicyTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.get"></a>

```java
public Ec2FcaPolicyTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2FcaPolicyTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>>

---


### Ec2FcaPolicyTagsOutputReference <a name="Ec2FcaPolicyTagsOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_fca_policy.Ec2FcaPolicyTagsOutputReference;

new Ec2FcaPolicyTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2FcaPolicyTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>

---



