# `ec2EgressOnlyInternetGateway` Submodule <a name="`ec2EgressOnlyInternetGateway` Submodule" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2EgressOnlyInternetGateway <a name="Ec2EgressOnlyInternetGateway" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_egress_only_internet_gateway awscc_ec2_egress_only_internet_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_egress_only_internet_gateway.Ec2EgressOnlyInternetGateway;

Ec2EgressOnlyInternetGateway.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .vpcId(java.lang.String)
//  .tags(IResolvable|java.util.List<Ec2EgressOnlyInternetGatewayTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | The ID of the VPC for which to create the egress-only internet gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags">Ec2EgressOnlyInternetGatewayTags</a>></code> | Any tags assigned to the egress only internet gateway. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

The ID of the VPC for which to create the egress-only internet gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_egress_only_internet_gateway#vpc_id Ec2EgressOnlyInternetGateway#vpc_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags">Ec2EgressOnlyInternetGatewayTags</a>>

Any tags assigned to the egress only internet gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_egress_only_internet_gateway#tags Ec2EgressOnlyInternetGateway#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Ec2EgressOnlyInternetGatewayTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags">Ec2EgressOnlyInternetGatewayTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2EgressOnlyInternetGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_egress_only_internet_gateway.Ec2EgressOnlyInternetGateway;

Ec2EgressOnlyInternetGateway.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_egress_only_internet_gateway.Ec2EgressOnlyInternetGateway;

Ec2EgressOnlyInternetGateway.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_egress_only_internet_gateway.Ec2EgressOnlyInternetGateway;

Ec2EgressOnlyInternetGateway.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_egress_only_internet_gateway.Ec2EgressOnlyInternetGateway;

Ec2EgressOnlyInternetGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2EgressOnlyInternetGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2EgressOnlyInternetGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2EgressOnlyInternetGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2EgressOnlyInternetGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_egress_only_internet_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2EgressOnlyInternetGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.egressOnlyInternetGatewayId">egressOnlyInternetGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList">Ec2EgressOnlyInternetGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags">Ec2EgressOnlyInternetGatewayTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `egressOnlyInternetGatewayId`<sup>Required</sup> <a name="egressOnlyInternetGatewayId" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.egressOnlyInternetGatewayId"></a>

```java
public java.lang.String getEgressOnlyInternetGatewayId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.tags"></a>

```java
public Ec2EgressOnlyInternetGatewayTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList">Ec2EgressOnlyInternetGatewayTagsList</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Ec2EgressOnlyInternetGatewayTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags">Ec2EgressOnlyInternetGatewayTags</a>>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2EgressOnlyInternetGatewayConfig <a name="Ec2EgressOnlyInternetGatewayConfig" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_egress_only_internet_gateway.Ec2EgressOnlyInternetGatewayConfig;

Ec2EgressOnlyInternetGatewayConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .vpcId(java.lang.String)
//  .tags(IResolvable|java.util.List<Ec2EgressOnlyInternetGatewayTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | The ID of the VPC for which to create the egress-only internet gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags">Ec2EgressOnlyInternetGatewayTags</a>></code> | Any tags assigned to the egress only internet gateway. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

The ID of the VPC for which to create the egress-only internet gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_egress_only_internet_gateway#vpc_id Ec2EgressOnlyInternetGateway#vpc_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Ec2EgressOnlyInternetGatewayTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags">Ec2EgressOnlyInternetGatewayTags</a>>

Any tags assigned to the egress only internet gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_egress_only_internet_gateway#tags Ec2EgressOnlyInternetGateway#tags}

---

### Ec2EgressOnlyInternetGatewayTags <a name="Ec2EgressOnlyInternetGatewayTags" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_egress_only_internet_gateway.Ec2EgressOnlyInternetGatewayTags;

Ec2EgressOnlyInternetGatewayTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_egress_only_internet_gateway#key Ec2EgressOnlyInternetGateway#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_egress_only_internet_gateway#value Ec2EgressOnlyInternetGateway#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_egress_only_internet_gateway#key Ec2EgressOnlyInternetGateway#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_egress_only_internet_gateway#value Ec2EgressOnlyInternetGateway#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2EgressOnlyInternetGatewayTagsList <a name="Ec2EgressOnlyInternetGatewayTagsList" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_egress_only_internet_gateway.Ec2EgressOnlyInternetGatewayTagsList;

new Ec2EgressOnlyInternetGatewayTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.get"></a>

```java
public Ec2EgressOnlyInternetGatewayTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags">Ec2EgressOnlyInternetGatewayTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2EgressOnlyInternetGatewayTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags">Ec2EgressOnlyInternetGatewayTags</a>>

---


### Ec2EgressOnlyInternetGatewayTagsOutputReference <a name="Ec2EgressOnlyInternetGatewayTagsOutputReference" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_egress_only_internet_gateway.Ec2EgressOnlyInternetGatewayTagsOutputReference;

new Ec2EgressOnlyInternetGatewayTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags">Ec2EgressOnlyInternetGatewayTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2EgressOnlyInternetGatewayTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags">Ec2EgressOnlyInternetGatewayTags</a>

---



