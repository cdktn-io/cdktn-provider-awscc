# `neptunegraphPrivateGraphEndpoint` Submodule <a name="`neptunegraphPrivateGraphEndpoint` Submodule" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptunegraphPrivateGraphEndpoint <a name="NeptunegraphPrivateGraphEndpoint" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptunegraph_private_graph_endpoint awscc_neptunegraph_private_graph_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.neptunegraph_private_graph_endpoint.NeptunegraphPrivateGraphEndpoint;

NeptunegraphPrivateGraphEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .graphIdentifier(java.lang.String)
    .vpcId(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnetIds(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.graphIdentifier">graphIdentifier</a></code> | <code>java.lang.String</code> | The auto-generated Graph Id assigned by the service. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | The VPC where you want the private graph endpoint to be created, ie, the graph will be reachable from within the VPC. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The security group Ids associated with the VPC where you want the private graph endpoint to be created, ie, the graph will be reachable from within the VPC. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | The subnet Ids associated with the VPC where you want the private graph endpoint to be created, ie, the graph will be reachable from within the VPC. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `graphIdentifier`<sup>Required</sup> <a name="graphIdentifier" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.graphIdentifier"></a>

- *Type:* java.lang.String

The auto-generated Graph Id assigned by the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptunegraph_private_graph_endpoint#graph_identifier NeptunegraphPrivateGraphEndpoint#graph_identifier}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

The VPC where you want the private graph endpoint to be created, ie, the graph will be reachable from within the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptunegraph_private_graph_endpoint#vpc_id NeptunegraphPrivateGraphEndpoint#vpc_id}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.securityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

The security group Ids associated with the VPC where you want the private graph endpoint to be created, ie, the graph will be reachable from within the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptunegraph_private_graph_endpoint#security_group_ids NeptunegraphPrivateGraphEndpoint#security_group_ids}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.subnetIds"></a>

- *Type:* java.util.List<java.lang.String>

The subnet Ids associated with the VPC where you want the private graph endpoint to be created, ie, the graph will be reachable from within the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptunegraph_private_graph_endpoint#subnet_ids NeptunegraphPrivateGraphEndpoint#subnet_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NeptunegraphPrivateGraphEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isConstruct"></a>

```java
import io.cdktn.providers.awscc.neptunegraph_private_graph_endpoint.NeptunegraphPrivateGraphEndpoint;

NeptunegraphPrivateGraphEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.neptunegraph_private_graph_endpoint.NeptunegraphPrivateGraphEndpoint;

NeptunegraphPrivateGraphEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.neptunegraph_private_graph_endpoint.NeptunegraphPrivateGraphEndpoint;

NeptunegraphPrivateGraphEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.neptunegraph_private_graph_endpoint.NeptunegraphPrivateGraphEndpoint;

NeptunegraphPrivateGraphEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NeptunegraphPrivateGraphEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NeptunegraphPrivateGraphEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NeptunegraphPrivateGraphEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NeptunegraphPrivateGraphEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptunegraph_private_graph_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NeptunegraphPrivateGraphEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.privateGraphEndpointIdentifier">privateGraphEndpointIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.graphIdentifierInput">graphIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.graphIdentifier">graphIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `privateGraphEndpointIdentifier`<sup>Required</sup> <a name="privateGraphEndpointIdentifier" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.privateGraphEndpointIdentifier"></a>

```java
public java.lang.String getPrivateGraphEndpointIdentifier();
```

- *Type:* java.lang.String

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

---

##### `graphIdentifierInput`<sup>Optional</sup> <a name="graphIdentifierInput" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.graphIdentifierInput"></a>

```java
public java.lang.String getGraphIdentifierInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `graphIdentifier`<sup>Required</sup> <a name="graphIdentifier" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.graphIdentifier"></a>

```java
public java.lang.String getGraphIdentifier();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NeptunegraphPrivateGraphEndpointConfig <a name="NeptunegraphPrivateGraphEndpointConfig" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.neptunegraph_private_graph_endpoint.NeptunegraphPrivateGraphEndpointConfig;

NeptunegraphPrivateGraphEndpointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .graphIdentifier(java.lang.String)
    .vpcId(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnetIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.graphIdentifier">graphIdentifier</a></code> | <code>java.lang.String</code> | The auto-generated Graph Id assigned by the service. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | The VPC where you want the private graph endpoint to be created, ie, the graph will be reachable from within the VPC. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The security group Ids associated with the VPC where you want the private graph endpoint to be created, ie, the graph will be reachable from within the VPC. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | The subnet Ids associated with the VPC where you want the private graph endpoint to be created, ie, the graph will be reachable from within the VPC. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `graphIdentifier`<sup>Required</sup> <a name="graphIdentifier" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.graphIdentifier"></a>

```java
public java.lang.String getGraphIdentifier();
```

- *Type:* java.lang.String

The auto-generated Graph Id assigned by the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptunegraph_private_graph_endpoint#graph_identifier NeptunegraphPrivateGraphEndpoint#graph_identifier}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

The VPC where you want the private graph endpoint to be created, ie, the graph will be reachable from within the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptunegraph_private_graph_endpoint#vpc_id NeptunegraphPrivateGraphEndpoint#vpc_id}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

The security group Ids associated with the VPC where you want the private graph endpoint to be created, ie, the graph will be reachable from within the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptunegraph_private_graph_endpoint#security_group_ids NeptunegraphPrivateGraphEndpoint#security_group_ids}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

The subnet Ids associated with the VPC where you want the private graph endpoint to be created, ie, the graph will be reachable from within the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptunegraph_private_graph_endpoint#subnet_ids NeptunegraphPrivateGraphEndpoint#subnet_ids}

---



