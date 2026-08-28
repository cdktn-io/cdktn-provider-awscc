# `ec2SecurityGroup` Submodule <a name="`ec2SecurityGroup` Submodule" id="@cdktn/provider-awscc.ec2SecurityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2SecurityGroup <a name="Ec2SecurityGroup" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group awscc_ec2_security_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_security_group.Ec2SecurityGroup;

Ec2SecurityGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .groupDescription(java.lang.String)
//  .groupName(java.lang.String)
//  .securityGroupEgress(IResolvable|java.util.List<Ec2SecurityGroupSecurityGroupEgress>)
//  .securityGroupIngress(IResolvable|java.util.List<Ec2SecurityGroupSecurityGroupIngress>)
//  .tags(IResolvable|java.util.List<Ec2SecurityGroupTags>)
//  .vpcId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.groupDescription">groupDescription</a></code> | <code>java.lang.String</code> | A description for the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.groupName">groupName</a></code> | <code>java.lang.String</code> | The name of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.securityGroupEgress">securityGroupEgress</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a>></code> | [VPC only] The outbound rules associated with the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.securityGroupIngress">securityGroupIngress</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a>></code> | The inbound rules associated with the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a>></code> | Any tags assigned to the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | The ID of the VPC for the security group. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `groupDescription`<sup>Required</sup> <a name="groupDescription" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.groupDescription"></a>

- *Type:* java.lang.String

A description for the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#group_description Ec2SecurityGroup#group_description}

---

##### `groupName`<sup>Optional</sup> <a name="groupName" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.groupName"></a>

- *Type:* java.lang.String

The name of the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#group_name Ec2SecurityGroup#group_name}

---

##### `securityGroupEgress`<sup>Optional</sup> <a name="securityGroupEgress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.securityGroupEgress"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a>>

[VPC only] The outbound rules associated with the security group.

There is a short interruption during which you cannot connect to the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#security_group_egress Ec2SecurityGroup#security_group_egress}

---

##### `securityGroupIngress`<sup>Optional</sup> <a name="securityGroupIngress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.securityGroupIngress"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a>>

The inbound rules associated with the security group.

There is a short interruption during which you cannot connect to the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#security_group_ingress Ec2SecurityGroup#security_group_ingress}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a>>

Any tags assigned to the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#tags Ec2SecurityGroup#tags}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

The ID of the VPC for the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#vpc_id Ec2SecurityGroup#vpc_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.putSecurityGroupEgress">putSecurityGroupEgress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.putSecurityGroupIngress">putSecurityGroupIngress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetGroupName">resetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetSecurityGroupEgress">resetSecurityGroupEgress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetSecurityGroupIngress">resetSecurityGroupIngress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSecurityGroupEgress` <a name="putSecurityGroupEgress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.putSecurityGroupEgress"></a>

```java
public void putSecurityGroupEgress(IResolvable|java.util.List<Ec2SecurityGroupSecurityGroupEgress> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.putSecurityGroupEgress.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a>>

---

##### `putSecurityGroupIngress` <a name="putSecurityGroupIngress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.putSecurityGroupIngress"></a>

```java
public void putSecurityGroupIngress(IResolvable|java.util.List<Ec2SecurityGroupSecurityGroupIngress> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.putSecurityGroupIngress.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Ec2SecurityGroupTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a>>

---

##### `resetGroupName` <a name="resetGroupName" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetGroupName"></a>

```java
public void resetGroupName()
```

##### `resetSecurityGroupEgress` <a name="resetSecurityGroupEgress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetSecurityGroupEgress"></a>

```java
public void resetSecurityGroupEgress()
```

##### `resetSecurityGroupIngress` <a name="resetSecurityGroupIngress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetSecurityGroupIngress"></a>

```java
public void resetSecurityGroupIngress()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetTags"></a>

```java
public void resetTags()
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetVpcId"></a>

```java
public void resetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2SecurityGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_security_group.Ec2SecurityGroup;

Ec2SecurityGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_security_group.Ec2SecurityGroup;

Ec2SecurityGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_security_group.Ec2SecurityGroup;

Ec2SecurityGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_security_group.Ec2SecurityGroup;

Ec2SecurityGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2SecurityGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2SecurityGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2SecurityGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2SecurityGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2SecurityGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupEgress">securityGroupEgress</a></code> | <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList">Ec2SecurityGroupSecurityGroupEgressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupIngress">securityGroupIngress</a></code> | <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList">Ec2SecurityGroupSecurityGroupIngressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList">Ec2SecurityGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupDescriptionInput">groupDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupNameInput">groupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupEgressInput">securityGroupEgressInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupIngressInput">securityGroupIngressInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupDescription">groupDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupName">groupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `securityGroupEgress`<sup>Required</sup> <a name="securityGroupEgress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupEgress"></a>

```java
public Ec2SecurityGroupSecurityGroupEgressList getSecurityGroupEgress();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList">Ec2SecurityGroupSecurityGroupEgressList</a>

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `securityGroupIngress`<sup>Required</sup> <a name="securityGroupIngress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupIngress"></a>

```java
public Ec2SecurityGroupSecurityGroupIngressList getSecurityGroupIngress();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList">Ec2SecurityGroupSecurityGroupIngressList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.tags"></a>

```java
public Ec2SecurityGroupTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList">Ec2SecurityGroupTagsList</a>

---

##### `groupDescriptionInput`<sup>Optional</sup> <a name="groupDescriptionInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupDescriptionInput"></a>

```java
public java.lang.String getGroupDescriptionInput();
```

- *Type:* java.lang.String

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupNameInput"></a>

```java
public java.lang.String getGroupNameInput();
```

- *Type:* java.lang.String

---

##### `securityGroupEgressInput`<sup>Optional</sup> <a name="securityGroupEgressInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupEgressInput"></a>

```java
public IResolvable|java.util.List<Ec2SecurityGroupSecurityGroupEgress> getSecurityGroupEgressInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a>>

---

##### `securityGroupIngressInput`<sup>Optional</sup> <a name="securityGroupIngressInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupIngressInput"></a>

```java
public IResolvable|java.util.List<Ec2SecurityGroupSecurityGroupIngress> getSecurityGroupIngressInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Ec2SecurityGroupTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a>>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `groupDescription`<sup>Required</sup> <a name="groupDescription" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupDescription"></a>

```java
public java.lang.String getGroupDescription();
```

- *Type:* java.lang.String

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2SecurityGroupConfig <a name="Ec2SecurityGroupConfig" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_security_group.Ec2SecurityGroupConfig;

Ec2SecurityGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .groupDescription(java.lang.String)
//  .groupName(java.lang.String)
//  .securityGroupEgress(IResolvable|java.util.List<Ec2SecurityGroupSecurityGroupEgress>)
//  .securityGroupIngress(IResolvable|java.util.List<Ec2SecurityGroupSecurityGroupIngress>)
//  .tags(IResolvable|java.util.List<Ec2SecurityGroupTags>)
//  .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.groupDescription">groupDescription</a></code> | <code>java.lang.String</code> | A description for the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.groupName">groupName</a></code> | <code>java.lang.String</code> | The name of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.securityGroupEgress">securityGroupEgress</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a>></code> | [VPC only] The outbound rules associated with the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.securityGroupIngress">securityGroupIngress</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a>></code> | The inbound rules associated with the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a>></code> | Any tags assigned to the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | The ID of the VPC for the security group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `groupDescription`<sup>Required</sup> <a name="groupDescription" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.groupDescription"></a>

```java
public java.lang.String getGroupDescription();
```

- *Type:* java.lang.String

A description for the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#group_description Ec2SecurityGroup#group_description}

---

##### `groupName`<sup>Optional</sup> <a name="groupName" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

The name of the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#group_name Ec2SecurityGroup#group_name}

---

##### `securityGroupEgress`<sup>Optional</sup> <a name="securityGroupEgress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.securityGroupEgress"></a>

```java
public IResolvable|java.util.List<Ec2SecurityGroupSecurityGroupEgress> getSecurityGroupEgress();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a>>

[VPC only] The outbound rules associated with the security group.

There is a short interruption during which you cannot connect to the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#security_group_egress Ec2SecurityGroup#security_group_egress}

---

##### `securityGroupIngress`<sup>Optional</sup> <a name="securityGroupIngress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.securityGroupIngress"></a>

```java
public IResolvable|java.util.List<Ec2SecurityGroupSecurityGroupIngress> getSecurityGroupIngress();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a>>

The inbound rules associated with the security group.

There is a short interruption during which you cannot connect to the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#security_group_ingress Ec2SecurityGroup#security_group_ingress}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Ec2SecurityGroupTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a>>

Any tags assigned to the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#tags Ec2SecurityGroup#tags}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

The ID of the VPC for the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#vpc_id Ec2SecurityGroup#vpc_id}

---

### Ec2SecurityGroupSecurityGroupEgress <a name="Ec2SecurityGroupSecurityGroupEgress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_security_group.Ec2SecurityGroupSecurityGroupEgress;

Ec2SecurityGroupSecurityGroupEgress.builder()
//  .cidrIp(java.lang.String)
//  .cidrIpv6(java.lang.String)
//  .description(java.lang.String)
//  .destinationPrefixListId(java.lang.String)
//  .destinationSecurityGroupId(java.lang.String)
//  .fromPort(java.lang.Number)
//  .ipProtocol(java.lang.String)
//  .toPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.cidrIp">cidrIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#cidr_ip Ec2SecurityGroup#cidr_ip}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.cidrIpv6">cidrIpv6</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#cidr_ipv_6 Ec2SecurityGroup#cidr_ipv_6}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#description Ec2SecurityGroup#description}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.destinationPrefixListId">destinationPrefixListId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#destination_prefix_list_id Ec2SecurityGroup#destination_prefix_list_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.destinationSecurityGroupId">destinationSecurityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#destination_security_group_id Ec2SecurityGroup#destination_security_group_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#from_port Ec2SecurityGroup#from_port}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#ip_protocol Ec2SecurityGroup#ip_protocol}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#to_port Ec2SecurityGroup#to_port}. |

---

##### `cidrIp`<sup>Optional</sup> <a name="cidrIp" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.cidrIp"></a>

```java
public java.lang.String getCidrIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#cidr_ip Ec2SecurityGroup#cidr_ip}.

---

##### `cidrIpv6`<sup>Optional</sup> <a name="cidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.cidrIpv6"></a>

```java
public java.lang.String getCidrIpv6();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#cidr_ipv_6 Ec2SecurityGroup#cidr_ipv_6}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#description Ec2SecurityGroup#description}.

---

##### `destinationPrefixListId`<sup>Optional</sup> <a name="destinationPrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.destinationPrefixListId"></a>

```java
public java.lang.String getDestinationPrefixListId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#destination_prefix_list_id Ec2SecurityGroup#destination_prefix_list_id}.

---

##### `destinationSecurityGroupId`<sup>Optional</sup> <a name="destinationSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.destinationSecurityGroupId"></a>

```java
public java.lang.String getDestinationSecurityGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#destination_security_group_id Ec2SecurityGroup#destination_security_group_id}.

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#from_port Ec2SecurityGroup#from_port}.

---

##### `ipProtocol`<sup>Optional</sup> <a name="ipProtocol" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#ip_protocol Ec2SecurityGroup#ip_protocol}.

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#to_port Ec2SecurityGroup#to_port}.

---

### Ec2SecurityGroupSecurityGroupIngress <a name="Ec2SecurityGroupSecurityGroupIngress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_security_group.Ec2SecurityGroupSecurityGroupIngress;

Ec2SecurityGroupSecurityGroupIngress.builder()
//  .cidrIp(java.lang.String)
//  .cidrIpv6(java.lang.String)
//  .description(java.lang.String)
//  .fromPort(java.lang.Number)
//  .ipProtocol(java.lang.String)
//  .sourcePrefixListId(java.lang.String)
//  .sourceSecurityGroupId(java.lang.String)
//  .sourceSecurityGroupName(java.lang.String)
//  .sourceSecurityGroupOwnerId(java.lang.String)
//  .toPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.cidrIp">cidrIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#cidr_ip Ec2SecurityGroup#cidr_ip}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.cidrIpv6">cidrIpv6</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#cidr_ipv_6 Ec2SecurityGroup#cidr_ipv_6}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#description Ec2SecurityGroup#description}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#from_port Ec2SecurityGroup#from_port}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#ip_protocol Ec2SecurityGroup#ip_protocol}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.sourcePrefixListId">sourcePrefixListId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#source_prefix_list_id Ec2SecurityGroup#source_prefix_list_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.sourceSecurityGroupId">sourceSecurityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#source_security_group_id Ec2SecurityGroup#source_security_group_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.sourceSecurityGroupName">sourceSecurityGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#source_security_group_name Ec2SecurityGroup#source_security_group_name}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.sourceSecurityGroupOwnerId">sourceSecurityGroupOwnerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#source_security_group_owner_id Ec2SecurityGroup#source_security_group_owner_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#to_port Ec2SecurityGroup#to_port}. |

---

##### `cidrIp`<sup>Optional</sup> <a name="cidrIp" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.cidrIp"></a>

```java
public java.lang.String getCidrIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#cidr_ip Ec2SecurityGroup#cidr_ip}.

---

##### `cidrIpv6`<sup>Optional</sup> <a name="cidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.cidrIpv6"></a>

```java
public java.lang.String getCidrIpv6();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#cidr_ipv_6 Ec2SecurityGroup#cidr_ipv_6}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#description Ec2SecurityGroup#description}.

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#from_port Ec2SecurityGroup#from_port}.

---

##### `ipProtocol`<sup>Optional</sup> <a name="ipProtocol" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#ip_protocol Ec2SecurityGroup#ip_protocol}.

---

##### `sourcePrefixListId`<sup>Optional</sup> <a name="sourcePrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.sourcePrefixListId"></a>

```java
public java.lang.String getSourcePrefixListId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#source_prefix_list_id Ec2SecurityGroup#source_prefix_list_id}.

---

##### `sourceSecurityGroupId`<sup>Optional</sup> <a name="sourceSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.sourceSecurityGroupId"></a>

```java
public java.lang.String getSourceSecurityGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#source_security_group_id Ec2SecurityGroup#source_security_group_id}.

---

##### `sourceSecurityGroupName`<sup>Optional</sup> <a name="sourceSecurityGroupName" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.sourceSecurityGroupName"></a>

```java
public java.lang.String getSourceSecurityGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#source_security_group_name Ec2SecurityGroup#source_security_group_name}.

---

##### `sourceSecurityGroupOwnerId`<sup>Optional</sup> <a name="sourceSecurityGroupOwnerId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.sourceSecurityGroupOwnerId"></a>

```java
public java.lang.String getSourceSecurityGroupOwnerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#source_security_group_owner_id Ec2SecurityGroup#source_security_group_owner_id}.

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#to_port Ec2SecurityGroup#to_port}.

---

### Ec2SecurityGroupTags <a name="Ec2SecurityGroupTags" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_security_group.Ec2SecurityGroupTags;

Ec2SecurityGroupTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#key Ec2SecurityGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#value Ec2SecurityGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#key Ec2SecurityGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group#value Ec2SecurityGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2SecurityGroupSecurityGroupEgressList <a name="Ec2SecurityGroupSecurityGroupEgressList" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_security_group.Ec2SecurityGroupSecurityGroupEgressList;

new Ec2SecurityGroupSecurityGroupEgressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.get"></a>

```java
public Ec2SecurityGroupSecurityGroupEgressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2SecurityGroupSecurityGroupEgress> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a>>

---


### Ec2SecurityGroupSecurityGroupEgressOutputReference <a name="Ec2SecurityGroupSecurityGroupEgressOutputReference" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_security_group.Ec2SecurityGroupSecurityGroupEgressOutputReference;

new Ec2SecurityGroupSecurityGroupEgressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetCidrIp">resetCidrIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetCidrIpv6">resetCidrIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetDestinationPrefixListId">resetDestinationPrefixListId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetDestinationSecurityGroupId">resetDestinationSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetIpProtocol">resetIpProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrIp` <a name="resetCidrIp" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetCidrIp"></a>

```java
public void resetCidrIp()
```

##### `resetCidrIpv6` <a name="resetCidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetCidrIpv6"></a>

```java
public void resetCidrIpv6()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDestinationPrefixListId` <a name="resetDestinationPrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetDestinationPrefixListId"></a>

```java
public void resetDestinationPrefixListId()
```

##### `resetDestinationSecurityGroupId` <a name="resetDestinationSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetDestinationSecurityGroupId"></a>

```java
public void resetDestinationSecurityGroupId()
```

##### `resetFromPort` <a name="resetFromPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetFromPort"></a>

```java
public void resetFromPort()
```

##### `resetIpProtocol` <a name="resetIpProtocol" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetIpProtocol"></a>

```java
public void resetIpProtocol()
```

##### `resetToPort` <a name="resetToPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetToPort"></a>

```java
public void resetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.cidrIpInput">cidrIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.cidrIpv6Input">cidrIpv6Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.destinationPrefixListIdInput">destinationPrefixListIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.destinationSecurityGroupIdInput">destinationSecurityGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.ipProtocolInput">ipProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.toPortInput">toPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.cidrIp">cidrIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.cidrIpv6">cidrIpv6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.destinationPrefixListId">destinationPrefixListId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.destinationSecurityGroupId">destinationSecurityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrIpInput`<sup>Optional</sup> <a name="cidrIpInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.cidrIpInput"></a>

```java
public java.lang.String getCidrIpInput();
```

- *Type:* java.lang.String

---

##### `cidrIpv6Input`<sup>Optional</sup> <a name="cidrIpv6Input" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.cidrIpv6Input"></a>

```java
public java.lang.String getCidrIpv6Input();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `destinationPrefixListIdInput`<sup>Optional</sup> <a name="destinationPrefixListIdInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.destinationPrefixListIdInput"></a>

```java
public java.lang.String getDestinationPrefixListIdInput();
```

- *Type:* java.lang.String

---

##### `destinationSecurityGroupIdInput`<sup>Optional</sup> <a name="destinationSecurityGroupIdInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.destinationSecurityGroupIdInput"></a>

```java
public java.lang.String getDestinationSecurityGroupIdInput();
```

- *Type:* java.lang.String

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.fromPortInput"></a>

```java
public java.lang.Number getFromPortInput();
```

- *Type:* java.lang.Number

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.ipProtocolInput"></a>

```java
public java.lang.String getIpProtocolInput();
```

- *Type:* java.lang.String

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.toPortInput"></a>

```java
public java.lang.Number getToPortInput();
```

- *Type:* java.lang.Number

---

##### `cidrIp`<sup>Required</sup> <a name="cidrIp" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.cidrIp"></a>

```java
public java.lang.String getCidrIp();
```

- *Type:* java.lang.String

---

##### `cidrIpv6`<sup>Required</sup> <a name="cidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.cidrIpv6"></a>

```java
public java.lang.String getCidrIpv6();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `destinationPrefixListId`<sup>Required</sup> <a name="destinationPrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.destinationPrefixListId"></a>

```java
public java.lang.String getDestinationPrefixListId();
```

- *Type:* java.lang.String

---

##### `destinationSecurityGroupId`<sup>Required</sup> <a name="destinationSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.destinationSecurityGroupId"></a>

```java
public java.lang.String getDestinationSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2SecurityGroupSecurityGroupEgress getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a>

---


### Ec2SecurityGroupSecurityGroupIngressList <a name="Ec2SecurityGroupSecurityGroupIngressList" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_security_group.Ec2SecurityGroupSecurityGroupIngressList;

new Ec2SecurityGroupSecurityGroupIngressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.get"></a>

```java
public Ec2SecurityGroupSecurityGroupIngressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2SecurityGroupSecurityGroupIngress> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a>>

---


### Ec2SecurityGroupSecurityGroupIngressOutputReference <a name="Ec2SecurityGroupSecurityGroupIngressOutputReference" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_security_group.Ec2SecurityGroupSecurityGroupIngressOutputReference;

new Ec2SecurityGroupSecurityGroupIngressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetCidrIp">resetCidrIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetCidrIpv6">resetCidrIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetIpProtocol">resetIpProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetSourcePrefixListId">resetSourcePrefixListId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetSourceSecurityGroupId">resetSourceSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetSourceSecurityGroupName">resetSourceSecurityGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetSourceSecurityGroupOwnerId">resetSourceSecurityGroupOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrIp` <a name="resetCidrIp" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetCidrIp"></a>

```java
public void resetCidrIp()
```

##### `resetCidrIpv6` <a name="resetCidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetCidrIpv6"></a>

```java
public void resetCidrIpv6()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFromPort` <a name="resetFromPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetFromPort"></a>

```java
public void resetFromPort()
```

##### `resetIpProtocol` <a name="resetIpProtocol" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetIpProtocol"></a>

```java
public void resetIpProtocol()
```

##### `resetSourcePrefixListId` <a name="resetSourcePrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetSourcePrefixListId"></a>

```java
public void resetSourcePrefixListId()
```

##### `resetSourceSecurityGroupId` <a name="resetSourceSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetSourceSecurityGroupId"></a>

```java
public void resetSourceSecurityGroupId()
```

##### `resetSourceSecurityGroupName` <a name="resetSourceSecurityGroupName" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetSourceSecurityGroupName"></a>

```java
public void resetSourceSecurityGroupName()
```

##### `resetSourceSecurityGroupOwnerId` <a name="resetSourceSecurityGroupOwnerId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetSourceSecurityGroupOwnerId"></a>

```java
public void resetSourceSecurityGroupOwnerId()
```

##### `resetToPort` <a name="resetToPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetToPort"></a>

```java
public void resetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.cidrIpInput">cidrIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.cidrIpv6Input">cidrIpv6Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.ipProtocolInput">ipProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourcePrefixListIdInput">sourcePrefixListIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupIdInput">sourceSecurityGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupNameInput">sourceSecurityGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupOwnerIdInput">sourceSecurityGroupOwnerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.toPortInput">toPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.cidrIp">cidrIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.cidrIpv6">cidrIpv6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourcePrefixListId">sourcePrefixListId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupId">sourceSecurityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupName">sourceSecurityGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupOwnerId">sourceSecurityGroupOwnerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrIpInput`<sup>Optional</sup> <a name="cidrIpInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.cidrIpInput"></a>

```java
public java.lang.String getCidrIpInput();
```

- *Type:* java.lang.String

---

##### `cidrIpv6Input`<sup>Optional</sup> <a name="cidrIpv6Input" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.cidrIpv6Input"></a>

```java
public java.lang.String getCidrIpv6Input();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.fromPortInput"></a>

```java
public java.lang.Number getFromPortInput();
```

- *Type:* java.lang.Number

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.ipProtocolInput"></a>

```java
public java.lang.String getIpProtocolInput();
```

- *Type:* java.lang.String

---

##### `sourcePrefixListIdInput`<sup>Optional</sup> <a name="sourcePrefixListIdInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourcePrefixListIdInput"></a>

```java
public java.lang.String getSourcePrefixListIdInput();
```

- *Type:* java.lang.String

---

##### `sourceSecurityGroupIdInput`<sup>Optional</sup> <a name="sourceSecurityGroupIdInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupIdInput"></a>

```java
public java.lang.String getSourceSecurityGroupIdInput();
```

- *Type:* java.lang.String

---

##### `sourceSecurityGroupNameInput`<sup>Optional</sup> <a name="sourceSecurityGroupNameInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupNameInput"></a>

```java
public java.lang.String getSourceSecurityGroupNameInput();
```

- *Type:* java.lang.String

---

##### `sourceSecurityGroupOwnerIdInput`<sup>Optional</sup> <a name="sourceSecurityGroupOwnerIdInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupOwnerIdInput"></a>

```java
public java.lang.String getSourceSecurityGroupOwnerIdInput();
```

- *Type:* java.lang.String

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.toPortInput"></a>

```java
public java.lang.Number getToPortInput();
```

- *Type:* java.lang.Number

---

##### `cidrIp`<sup>Required</sup> <a name="cidrIp" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.cidrIp"></a>

```java
public java.lang.String getCidrIp();
```

- *Type:* java.lang.String

---

##### `cidrIpv6`<sup>Required</sup> <a name="cidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.cidrIpv6"></a>

```java
public java.lang.String getCidrIpv6();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

---

##### `sourcePrefixListId`<sup>Required</sup> <a name="sourcePrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourcePrefixListId"></a>

```java
public java.lang.String getSourcePrefixListId();
```

- *Type:* java.lang.String

---

##### `sourceSecurityGroupId`<sup>Required</sup> <a name="sourceSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupId"></a>

```java
public java.lang.String getSourceSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `sourceSecurityGroupName`<sup>Required</sup> <a name="sourceSecurityGroupName" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupName"></a>

```java
public java.lang.String getSourceSecurityGroupName();
```

- *Type:* java.lang.String

---

##### `sourceSecurityGroupOwnerId`<sup>Required</sup> <a name="sourceSecurityGroupOwnerId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupOwnerId"></a>

```java
public java.lang.String getSourceSecurityGroupOwnerId();
```

- *Type:* java.lang.String

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2SecurityGroupSecurityGroupIngress getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a>

---


### Ec2SecurityGroupTagsList <a name="Ec2SecurityGroupTagsList" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_security_group.Ec2SecurityGroupTagsList;

new Ec2SecurityGroupTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.get"></a>

```java
public Ec2SecurityGroupTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2SecurityGroupTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a>>

---


### Ec2SecurityGroupTagsOutputReference <a name="Ec2SecurityGroupTagsOutputReference" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_security_group.Ec2SecurityGroupTagsOutputReference;

new Ec2SecurityGroupTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2SecurityGroupTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a>

---



