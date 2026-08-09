# `ec2LocalGatewayRouteTableVpcAssociation` Submodule <a name="`ec2LocalGatewayRouteTableVpcAssociation` Submodule" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2LocalGatewayRouteTableVpcAssociation <a name="Ec2LocalGatewayRouteTableVpcAssociation" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_route_table_vpc_association awscc_ec2_local_gateway_route_table_vpc_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_local_gateway_route_table_vpc_association.Ec2LocalGatewayRouteTableVpcAssociation;

Ec2LocalGatewayRouteTableVpcAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .localGatewayRouteTableId(java.lang.String)
    .vpcId(java.lang.String)
//  .tags(IResolvable|java.util.List<Ec2LocalGatewayRouteTableVpcAssociationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.localGatewayRouteTableId">localGatewayRouteTableId</a></code> | <code>java.lang.String</code> | The ID of the local gateway route table. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | The ID of the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags">Ec2LocalGatewayRouteTableVpcAssociationTags</a>></code> | The tags for the association. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `localGatewayRouteTableId`<sup>Required</sup> <a name="localGatewayRouteTableId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.localGatewayRouteTableId"></a>

- *Type:* java.lang.String

The ID of the local gateway route table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_route_table_vpc_association#local_gateway_route_table_id Ec2LocalGatewayRouteTableVpcAssociation#local_gateway_route_table_id}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

The ID of the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_route_table_vpc_association#vpc_id Ec2LocalGatewayRouteTableVpcAssociation#vpc_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags">Ec2LocalGatewayRouteTableVpcAssociationTags</a>>

The tags for the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_route_table_vpc_association#tags Ec2LocalGatewayRouteTableVpcAssociation#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Ec2LocalGatewayRouteTableVpcAssociationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags">Ec2LocalGatewayRouteTableVpcAssociationTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2LocalGatewayRouteTableVpcAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_local_gateway_route_table_vpc_association.Ec2LocalGatewayRouteTableVpcAssociation;

Ec2LocalGatewayRouteTableVpcAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_local_gateway_route_table_vpc_association.Ec2LocalGatewayRouteTableVpcAssociation;

Ec2LocalGatewayRouteTableVpcAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_local_gateway_route_table_vpc_association.Ec2LocalGatewayRouteTableVpcAssociation;

Ec2LocalGatewayRouteTableVpcAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_local_gateway_route_table_vpc_association.Ec2LocalGatewayRouteTableVpcAssociation;

Ec2LocalGatewayRouteTableVpcAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2LocalGatewayRouteTableVpcAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2LocalGatewayRouteTableVpcAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2LocalGatewayRouteTableVpcAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2LocalGatewayRouteTableVpcAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_route_table_vpc_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2LocalGatewayRouteTableVpcAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayId">localGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableVpcAssociationId">localGatewayRouteTableVpcAssociationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList">Ec2LocalGatewayRouteTableVpcAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableIdInput">localGatewayRouteTableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags">Ec2LocalGatewayRouteTableVpcAssociationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableId">localGatewayRouteTableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `localGatewayId`<sup>Required</sup> <a name="localGatewayId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayId"></a>

```java
public java.lang.String getLocalGatewayId();
```

- *Type:* java.lang.String

---

##### `localGatewayRouteTableVpcAssociationId`<sup>Required</sup> <a name="localGatewayRouteTableVpcAssociationId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableVpcAssociationId"></a>

```java
public java.lang.String getLocalGatewayRouteTableVpcAssociationId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tags"></a>

```java
public Ec2LocalGatewayRouteTableVpcAssociationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList">Ec2LocalGatewayRouteTableVpcAssociationTagsList</a>

---

##### `localGatewayRouteTableIdInput`<sup>Optional</sup> <a name="localGatewayRouteTableIdInput" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableIdInput"></a>

```java
public java.lang.String getLocalGatewayRouteTableIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Ec2LocalGatewayRouteTableVpcAssociationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags">Ec2LocalGatewayRouteTableVpcAssociationTags</a>>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `localGatewayRouteTableId`<sup>Required</sup> <a name="localGatewayRouteTableId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableId"></a>

```java
public java.lang.String getLocalGatewayRouteTableId();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2LocalGatewayRouteTableVpcAssociationConfig <a name="Ec2LocalGatewayRouteTableVpcAssociationConfig" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_local_gateway_route_table_vpc_association.Ec2LocalGatewayRouteTableVpcAssociationConfig;

Ec2LocalGatewayRouteTableVpcAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .localGatewayRouteTableId(java.lang.String)
    .vpcId(java.lang.String)
//  .tags(IResolvable|java.util.List<Ec2LocalGatewayRouteTableVpcAssociationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.localGatewayRouteTableId">localGatewayRouteTableId</a></code> | <code>java.lang.String</code> | The ID of the local gateway route table. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | The ID of the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags">Ec2LocalGatewayRouteTableVpcAssociationTags</a>></code> | The tags for the association. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `localGatewayRouteTableId`<sup>Required</sup> <a name="localGatewayRouteTableId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.localGatewayRouteTableId"></a>

```java
public java.lang.String getLocalGatewayRouteTableId();
```

- *Type:* java.lang.String

The ID of the local gateway route table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_route_table_vpc_association#local_gateway_route_table_id Ec2LocalGatewayRouteTableVpcAssociation#local_gateway_route_table_id}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

The ID of the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_route_table_vpc_association#vpc_id Ec2LocalGatewayRouteTableVpcAssociation#vpc_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Ec2LocalGatewayRouteTableVpcAssociationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags">Ec2LocalGatewayRouteTableVpcAssociationTags</a>>

The tags for the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_route_table_vpc_association#tags Ec2LocalGatewayRouteTableVpcAssociation#tags}

---

### Ec2LocalGatewayRouteTableVpcAssociationTags <a name="Ec2LocalGatewayRouteTableVpcAssociationTags" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_local_gateway_route_table_vpc_association.Ec2LocalGatewayRouteTableVpcAssociationTags;

Ec2LocalGatewayRouteTableVpcAssociationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_route_table_vpc_association#key Ec2LocalGatewayRouteTableVpcAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_route_table_vpc_association#value Ec2LocalGatewayRouteTableVpcAssociation#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_route_table_vpc_association#key Ec2LocalGatewayRouteTableVpcAssociation#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_route_table_vpc_association#value Ec2LocalGatewayRouteTableVpcAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2LocalGatewayRouteTableVpcAssociationTagsList <a name="Ec2LocalGatewayRouteTableVpcAssociationTagsList" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_local_gateway_route_table_vpc_association.Ec2LocalGatewayRouteTableVpcAssociationTagsList;

new Ec2LocalGatewayRouteTableVpcAssociationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.get"></a>

```java
public Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags">Ec2LocalGatewayRouteTableVpcAssociationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2LocalGatewayRouteTableVpcAssociationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags">Ec2LocalGatewayRouteTableVpcAssociationTags</a>>

---


### Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference <a name="Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_local_gateway_route_table_vpc_association.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference;

new Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags">Ec2LocalGatewayRouteTableVpcAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2LocalGatewayRouteTableVpcAssociationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags">Ec2LocalGatewayRouteTableVpcAssociationTags</a>

---



