# `ec2IpamPrefixListResolverTarget` Submodule <a name="`ec2IpamPrefixListResolverTarget` Submodule" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2IpamPrefixListResolverTarget <a name="Ec2IpamPrefixListResolverTarget" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target awscc_ec2_ipam_prefix_list_resolver_target}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_prefix_list_resolver_target.Ec2IpamPrefixListResolverTarget;

Ec2IpamPrefixListResolverTarget.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ipamPrefixListResolverId(java.lang.String)
    .prefixListId(java.lang.String)
    .prefixListRegion(java.lang.String)
    .trackLatestVersion(java.lang.Boolean|IResolvable)
//  .desiredVersion(java.lang.Number)
//  .tags(IResolvable|java.util.List<Ec2IpamPrefixListResolverTargetTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.ipamPrefixListResolverId">ipamPrefixListResolverId</a></code> | <code>java.lang.String</code> | The Id of the IPAM Prefix List Resolver associated with this Target. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.prefixListId">prefixListId</a></code> | <code>java.lang.String</code> | The Id of the Managed Prefix List. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.prefixListRegion">prefixListRegion</a></code> | <code>java.lang.String</code> | The region that the Managed Prefix List is located in. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.trackLatestVersion">trackLatestVersion</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether this Target automatically tracks the latest version of the Prefix List Resolver. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.desiredVersion">desiredVersion</a></code> | <code>java.lang.Number</code> | The desired version of the Prefix List Resolver that this Target should synchronize with. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ipamPrefixListResolverId`<sup>Required</sup> <a name="ipamPrefixListResolverId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.ipamPrefixListResolverId"></a>

- *Type:* java.lang.String

The Id of the IPAM Prefix List Resolver associated with this Target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#ipam_prefix_list_resolver_id Ec2IpamPrefixListResolverTarget#ipam_prefix_list_resolver_id}

---

##### `prefixListId`<sup>Required</sup> <a name="prefixListId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.prefixListId"></a>

- *Type:* java.lang.String

The Id of the Managed Prefix List.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#prefix_list_id Ec2IpamPrefixListResolverTarget#prefix_list_id}

---

##### `prefixListRegion`<sup>Required</sup> <a name="prefixListRegion" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.prefixListRegion"></a>

- *Type:* java.lang.String

The region that the Managed Prefix List is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#prefix_list_region Ec2IpamPrefixListResolverTarget#prefix_list_region}

---

##### `trackLatestVersion`<sup>Required</sup> <a name="trackLatestVersion" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.trackLatestVersion"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether this Target automatically tracks the latest version of the Prefix List Resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#track_latest_version Ec2IpamPrefixListResolverTarget#track_latest_version}

---

##### `desiredVersion`<sup>Optional</sup> <a name="desiredVersion" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.desiredVersion"></a>

- *Type:* java.lang.Number

The desired version of the Prefix List Resolver that this Target should synchronize with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#desired_version Ec2IpamPrefixListResolverTarget#desired_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#tags Ec2IpamPrefixListResolverTarget#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.resetDesiredVersion">resetDesiredVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Ec2IpamPrefixListResolverTargetTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a>>

---

##### `resetDesiredVersion` <a name="resetDesiredVersion" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.resetDesiredVersion"></a>

```java
public void resetDesiredVersion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2IpamPrefixListResolverTarget resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_prefix_list_resolver_target.Ec2IpamPrefixListResolverTarget;

Ec2IpamPrefixListResolverTarget.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_prefix_list_resolver_target.Ec2IpamPrefixListResolverTarget;

Ec2IpamPrefixListResolverTarget.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_prefix_list_resolver_target.Ec2IpamPrefixListResolverTarget;

Ec2IpamPrefixListResolverTarget.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_prefix_list_resolver_target.Ec2IpamPrefixListResolverTarget;

Ec2IpamPrefixListResolverTarget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2IpamPrefixListResolverTarget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2IpamPrefixListResolverTarget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2IpamPrefixListResolverTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2IpamPrefixListResolverTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2IpamPrefixListResolverTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverTargetArn">ipamPrefixListResolverTargetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverTargetId">ipamPrefixListResolverTargetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList">Ec2IpamPrefixListResolverTargetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.desiredVersionInput">desiredVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverIdInput">ipamPrefixListResolverIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListIdInput">prefixListIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListRegionInput">prefixListRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.trackLatestVersionInput">trackLatestVersionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.desiredVersion">desiredVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverId">ipamPrefixListResolverId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListId">prefixListId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListRegion">prefixListRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.trackLatestVersion">trackLatestVersion</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipamPrefixListResolverTargetArn`<sup>Required</sup> <a name="ipamPrefixListResolverTargetArn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverTargetArn"></a>

```java
public java.lang.String getIpamPrefixListResolverTargetArn();
```

- *Type:* java.lang.String

---

##### `ipamPrefixListResolverTargetId`<sup>Required</sup> <a name="ipamPrefixListResolverTargetId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverTargetId"></a>

```java
public java.lang.String getIpamPrefixListResolverTargetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.tags"></a>

```java
public Ec2IpamPrefixListResolverTargetTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList">Ec2IpamPrefixListResolverTargetTagsList</a>

---

##### `desiredVersionInput`<sup>Optional</sup> <a name="desiredVersionInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.desiredVersionInput"></a>

```java
public java.lang.Number getDesiredVersionInput();
```

- *Type:* java.lang.Number

---

##### `ipamPrefixListResolverIdInput`<sup>Optional</sup> <a name="ipamPrefixListResolverIdInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverIdInput"></a>

```java
public java.lang.String getIpamPrefixListResolverIdInput();
```

- *Type:* java.lang.String

---

##### `prefixListIdInput`<sup>Optional</sup> <a name="prefixListIdInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListIdInput"></a>

```java
public java.lang.String getPrefixListIdInput();
```

- *Type:* java.lang.String

---

##### `prefixListRegionInput`<sup>Optional</sup> <a name="prefixListRegionInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListRegionInput"></a>

```java
public java.lang.String getPrefixListRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Ec2IpamPrefixListResolverTargetTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a>>

---

##### `trackLatestVersionInput`<sup>Optional</sup> <a name="trackLatestVersionInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.trackLatestVersionInput"></a>

```java
public java.lang.Boolean|IResolvable getTrackLatestVersionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `desiredVersion`<sup>Required</sup> <a name="desiredVersion" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.desiredVersion"></a>

```java
public java.lang.Number getDesiredVersion();
```

- *Type:* java.lang.Number

---

##### `ipamPrefixListResolverId`<sup>Required</sup> <a name="ipamPrefixListResolverId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverId"></a>

```java
public java.lang.String getIpamPrefixListResolverId();
```

- *Type:* java.lang.String

---

##### `prefixListId`<sup>Required</sup> <a name="prefixListId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListId"></a>

```java
public java.lang.String getPrefixListId();
```

- *Type:* java.lang.String

---

##### `prefixListRegion`<sup>Required</sup> <a name="prefixListRegion" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListRegion"></a>

```java
public java.lang.String getPrefixListRegion();
```

- *Type:* java.lang.String

---

##### `trackLatestVersion`<sup>Required</sup> <a name="trackLatestVersion" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.trackLatestVersion"></a>

```java
public java.lang.Boolean|IResolvable getTrackLatestVersion();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2IpamPrefixListResolverTargetConfig <a name="Ec2IpamPrefixListResolverTargetConfig" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_prefix_list_resolver_target.Ec2IpamPrefixListResolverTargetConfig;

Ec2IpamPrefixListResolverTargetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ipamPrefixListResolverId(java.lang.String)
    .prefixListId(java.lang.String)
    .prefixListRegion(java.lang.String)
    .trackLatestVersion(java.lang.Boolean|IResolvable)
//  .desiredVersion(java.lang.Number)
//  .tags(IResolvable|java.util.List<Ec2IpamPrefixListResolverTargetTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.ipamPrefixListResolverId">ipamPrefixListResolverId</a></code> | <code>java.lang.String</code> | The Id of the IPAM Prefix List Resolver associated with this Target. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.prefixListId">prefixListId</a></code> | <code>java.lang.String</code> | The Id of the Managed Prefix List. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.prefixListRegion">prefixListRegion</a></code> | <code>java.lang.String</code> | The region that the Managed Prefix List is located in. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.trackLatestVersion">trackLatestVersion</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether this Target automatically tracks the latest version of the Prefix List Resolver. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.desiredVersion">desiredVersion</a></code> | <code>java.lang.Number</code> | The desired version of the Prefix List Resolver that this Target should synchronize with. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ipamPrefixListResolverId`<sup>Required</sup> <a name="ipamPrefixListResolverId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.ipamPrefixListResolverId"></a>

```java
public java.lang.String getIpamPrefixListResolverId();
```

- *Type:* java.lang.String

The Id of the IPAM Prefix List Resolver associated with this Target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#ipam_prefix_list_resolver_id Ec2IpamPrefixListResolverTarget#ipam_prefix_list_resolver_id}

---

##### `prefixListId`<sup>Required</sup> <a name="prefixListId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.prefixListId"></a>

```java
public java.lang.String getPrefixListId();
```

- *Type:* java.lang.String

The Id of the Managed Prefix List.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#prefix_list_id Ec2IpamPrefixListResolverTarget#prefix_list_id}

---

##### `prefixListRegion`<sup>Required</sup> <a name="prefixListRegion" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.prefixListRegion"></a>

```java
public java.lang.String getPrefixListRegion();
```

- *Type:* java.lang.String

The region that the Managed Prefix List is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#prefix_list_region Ec2IpamPrefixListResolverTarget#prefix_list_region}

---

##### `trackLatestVersion`<sup>Required</sup> <a name="trackLatestVersion" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.trackLatestVersion"></a>

```java
public java.lang.Boolean|IResolvable getTrackLatestVersion();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether this Target automatically tracks the latest version of the Prefix List Resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#track_latest_version Ec2IpamPrefixListResolverTarget#track_latest_version}

---

##### `desiredVersion`<sup>Optional</sup> <a name="desiredVersion" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.desiredVersion"></a>

```java
public java.lang.Number getDesiredVersion();
```

- *Type:* java.lang.Number

The desired version of the Prefix List Resolver that this Target should synchronize with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#desired_version Ec2IpamPrefixListResolverTarget#desired_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Ec2IpamPrefixListResolverTargetTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#tags Ec2IpamPrefixListResolverTarget#tags}

---

### Ec2IpamPrefixListResolverTargetTags <a name="Ec2IpamPrefixListResolverTargetTags" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_prefix_list_resolver_target.Ec2IpamPrefixListResolverTargetTags;

Ec2IpamPrefixListResolverTargetTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#key Ec2IpamPrefixListResolverTarget#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#value Ec2IpamPrefixListResolverTarget#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2IpamPrefixListResolverTargetTagsList <a name="Ec2IpamPrefixListResolverTargetTagsList" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_prefix_list_resolver_target.Ec2IpamPrefixListResolverTargetTagsList;

new Ec2IpamPrefixListResolverTargetTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.get"></a>

```java
public Ec2IpamPrefixListResolverTargetTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2IpamPrefixListResolverTargetTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a>>

---


### Ec2IpamPrefixListResolverTargetTagsOutputReference <a name="Ec2IpamPrefixListResolverTargetTagsOutputReference" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_prefix_list_resolver_target.Ec2IpamPrefixListResolverTargetTagsOutputReference;

new Ec2IpamPrefixListResolverTargetTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2IpamPrefixListResolverTargetTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a>

---



