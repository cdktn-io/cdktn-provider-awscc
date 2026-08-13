# `redshiftEndpointAccess` Submodule <a name="`redshiftEndpointAccess` Submodule" id="@cdktn/provider-awscc.redshiftEndpointAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftEndpointAccess <a name="RedshiftEndpointAccess" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_endpoint_access awscc_redshift_endpoint_access}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_endpoint_access.RedshiftEndpointAccess;

RedshiftEndpointAccess.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clusterIdentifier(java.lang.String)
    .endpointName(java.lang.String)
    .subnetGroupName(java.lang.String)
    .vpcSecurityGroupIds(java.util.List<java.lang.String>)
//  .resourceOwner(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | A unique identifier for the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.endpointName">endpointName</a></code> | <code>java.lang.String</code> | The name of the endpoint. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.subnetGroupName">subnetGroupName</a></code> | <code>java.lang.String</code> | The subnet group name where Amazon Redshift chooses to deploy the endpoint. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of vpc security group ids to apply to the created endpoint access. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.resourceOwner">resourceOwner</a></code> | <code>java.lang.String</code> | The AWS account ID of the owner of the cluster. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.clusterIdentifier"></a>

- *Type:* java.lang.String

A unique identifier for the cluster.

You use this identifier to refer to the cluster for any subsequent cluster operations such as deleting or modifying. All alphabetical characters must be lower case, no hypens at the end, no two consecutive hyphens. Cluster name should be unique for all clusters within an AWS account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_endpoint_access#cluster_identifier RedshiftEndpointAccess#cluster_identifier}

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.endpointName"></a>

- *Type:* java.lang.String

The name of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_endpoint_access#endpoint_name RedshiftEndpointAccess#endpoint_name}

---

##### `subnetGroupName`<sup>Required</sup> <a name="subnetGroupName" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.subnetGroupName"></a>

- *Type:* java.lang.String

The subnet group name where Amazon Redshift chooses to deploy the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_endpoint_access#subnet_group_name RedshiftEndpointAccess#subnet_group_name}

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

A list of vpc security group ids to apply to the created endpoint access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_endpoint_access#vpc_security_group_ids RedshiftEndpointAccess#vpc_security_group_ids}

---

##### `resourceOwner`<sup>Optional</sup> <a name="resourceOwner" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.resourceOwner"></a>

- *Type:* java.lang.String

The AWS account ID of the owner of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_endpoint_access#resource_owner RedshiftEndpointAccess#resource_owner}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.resetResourceOwner">resetResourceOwner</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetResourceOwner` <a name="resetResourceOwner" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.resetResourceOwner"></a>

```java
public void resetResourceOwner()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftEndpointAccess resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.isConstruct"></a>

```java
import io.cdktn.providers.awscc.redshift_endpoint_access.RedshiftEndpointAccess;

RedshiftEndpointAccess.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.redshift_endpoint_access.RedshiftEndpointAccess;

RedshiftEndpointAccess.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.redshift_endpoint_access.RedshiftEndpointAccess;

RedshiftEndpointAccess.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.redshift_endpoint_access.RedshiftEndpointAccess;

RedshiftEndpointAccess.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RedshiftEndpointAccess.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RedshiftEndpointAccess resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RedshiftEndpointAccess to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RedshiftEndpointAccess that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_endpoint_access#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftEndpointAccess to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.endpointCreateTime">endpointCreateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.endpointStatus">endpointStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.vpcEndpoint">vpcEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference">RedshiftEndpointAccessVpcEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.vpcSecurityGroups">vpcSecurityGroups</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsList">RedshiftEndpointAccessVpcSecurityGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.endpointNameInput">endpointNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.resourceOwnerInput">resourceOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.subnetGroupNameInput">subnetGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.endpointName">endpointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.resourceOwner">resourceOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.subnetGroupName">subnetGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `endpointCreateTime`<sup>Required</sup> <a name="endpointCreateTime" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.endpointCreateTime"></a>

```java
public java.lang.String getEndpointCreateTime();
```

- *Type:* java.lang.String

---

##### `endpointStatus`<sup>Required</sup> <a name="endpointStatus" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.endpointStatus"></a>

```java
public java.lang.String getEndpointStatus();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `vpcEndpoint`<sup>Required</sup> <a name="vpcEndpoint" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.vpcEndpoint"></a>

```java
public RedshiftEndpointAccessVpcEndpointOutputReference getVpcEndpoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference">RedshiftEndpointAccessVpcEndpointOutputReference</a>

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="vpcSecurityGroups" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.vpcSecurityGroups"></a>

```java
public RedshiftEndpointAccessVpcSecurityGroupsList getVpcSecurityGroups();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsList">RedshiftEndpointAccessVpcSecurityGroupsList</a>

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.clusterIdentifierInput"></a>

```java
public java.lang.String getClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `endpointNameInput`<sup>Optional</sup> <a name="endpointNameInput" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.endpointNameInput"></a>

```java
public java.lang.String getEndpointNameInput();
```

- *Type:* java.lang.String

---

##### `resourceOwnerInput`<sup>Optional</sup> <a name="resourceOwnerInput" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.resourceOwnerInput"></a>

```java
public java.lang.String getResourceOwnerInput();
```

- *Type:* java.lang.String

---

##### `subnetGroupNameInput`<sup>Optional</sup> <a name="subnetGroupNameInput" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.subnetGroupNameInput"></a>

```java
public java.lang.String getSubnetGroupNameInput();
```

- *Type:* java.lang.String

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.vpcSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.clusterIdentifier"></a>

```java
public java.lang.String getClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.endpointName"></a>

```java
public java.lang.String getEndpointName();
```

- *Type:* java.lang.String

---

##### `resourceOwner`<sup>Required</sup> <a name="resourceOwner" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.resourceOwner"></a>

```java
public java.lang.String getResourceOwner();
```

- *Type:* java.lang.String

---

##### `subnetGroupName`<sup>Required</sup> <a name="subnetGroupName" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.subnetGroupName"></a>

```java
public java.lang.String getSubnetGroupName();
```

- *Type:* java.lang.String

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccess.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftEndpointAccessConfig <a name="RedshiftEndpointAccessConfig" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_endpoint_access.RedshiftEndpointAccessConfig;

RedshiftEndpointAccessConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clusterIdentifier(java.lang.String)
    .endpointName(java.lang.String)
    .subnetGroupName(java.lang.String)
    .vpcSecurityGroupIds(java.util.List<java.lang.String>)
//  .resourceOwner(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | A unique identifier for the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.endpointName">endpointName</a></code> | <code>java.lang.String</code> | The name of the endpoint. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.subnetGroupName">subnetGroupName</a></code> | <code>java.lang.String</code> | The subnet group name where Amazon Redshift chooses to deploy the endpoint. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of vpc security group ids to apply to the created endpoint access. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.resourceOwner">resourceOwner</a></code> | <code>java.lang.String</code> | The AWS account ID of the owner of the cluster. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.clusterIdentifier"></a>

```java
public java.lang.String getClusterIdentifier();
```

- *Type:* java.lang.String

A unique identifier for the cluster.

You use this identifier to refer to the cluster for any subsequent cluster operations such as deleting or modifying. All alphabetical characters must be lower case, no hypens at the end, no two consecutive hyphens. Cluster name should be unique for all clusters within an AWS account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_endpoint_access#cluster_identifier RedshiftEndpointAccess#cluster_identifier}

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.endpointName"></a>

```java
public java.lang.String getEndpointName();
```

- *Type:* java.lang.String

The name of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_endpoint_access#endpoint_name RedshiftEndpointAccess#endpoint_name}

---

##### `subnetGroupName`<sup>Required</sup> <a name="subnetGroupName" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.subnetGroupName"></a>

```java
public java.lang.String getSubnetGroupName();
```

- *Type:* java.lang.String

The subnet group name where Amazon Redshift chooses to deploy the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_endpoint_access#subnet_group_name RedshiftEndpointAccess#subnet_group_name}

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

A list of vpc security group ids to apply to the created endpoint access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_endpoint_access#vpc_security_group_ids RedshiftEndpointAccess#vpc_security_group_ids}

---

##### `resourceOwner`<sup>Optional</sup> <a name="resourceOwner" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.resourceOwner"></a>

```java
public java.lang.String getResourceOwner();
```

- *Type:* java.lang.String

The AWS account ID of the owner of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_endpoint_access#resource_owner RedshiftEndpointAccess#resource_owner}

---

### RedshiftEndpointAccessVpcEndpoint <a name="RedshiftEndpointAccessVpcEndpoint" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_endpoint_access.RedshiftEndpointAccessVpcEndpoint;

RedshiftEndpointAccessVpcEndpoint.builder()
    .build();
```


### RedshiftEndpointAccessVpcEndpointNetworkInterfaces <a name="RedshiftEndpointAccessVpcEndpointNetworkInterfaces" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaces.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_endpoint_access.RedshiftEndpointAccessVpcEndpointNetworkInterfaces;

RedshiftEndpointAccessVpcEndpointNetworkInterfaces.builder()
    .build();
```


### RedshiftEndpointAccessVpcSecurityGroups <a name="RedshiftEndpointAccessVpcSecurityGroups" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroups.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_endpoint_access.RedshiftEndpointAccessVpcSecurityGroups;

RedshiftEndpointAccessVpcSecurityGroups.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### RedshiftEndpointAccessVpcEndpointNetworkInterfacesList <a name="RedshiftEndpointAccessVpcEndpointNetworkInterfacesList" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_endpoint_access.RedshiftEndpointAccessVpcEndpointNetworkInterfacesList;

new RedshiftEndpointAccessVpcEndpointNetworkInterfacesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesList.get"></a>

```java
public RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference <a name="RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_endpoint_access.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference;

new RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaces">RedshiftEndpointAccessVpcEndpointNetworkInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.property.internalValue"></a>

```java
public RedshiftEndpointAccessVpcEndpointNetworkInterfaces getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaces">RedshiftEndpointAccessVpcEndpointNetworkInterfaces</a>

---


### RedshiftEndpointAccessVpcEndpointOutputReference <a name="RedshiftEndpointAccessVpcEndpointOutputReference" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_endpoint_access.RedshiftEndpointAccessVpcEndpointOutputReference;

new RedshiftEndpointAccessVpcEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesList">RedshiftEndpointAccessVpcEndpointNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpoint">RedshiftEndpointAccessVpcEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkInterfaces`<sup>Required</sup> <a name="networkInterfaces" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.property.networkInterfaces"></a>

```java
public RedshiftEndpointAccessVpcEndpointNetworkInterfacesList getNetworkInterfaces();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfacesList">RedshiftEndpointAccessVpcEndpointNetworkInterfacesList</a>

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.property.internalValue"></a>

```java
public RedshiftEndpointAccessVpcEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpoint">RedshiftEndpointAccessVpcEndpoint</a>

---


### RedshiftEndpointAccessVpcSecurityGroupsList <a name="RedshiftEndpointAccessVpcSecurityGroupsList" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_endpoint_access.RedshiftEndpointAccessVpcSecurityGroupsList;

new RedshiftEndpointAccessVpcSecurityGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsList.get"></a>

```java
public RedshiftEndpointAccessVpcSecurityGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### RedshiftEndpointAccessVpcSecurityGroupsOutputReference <a name="RedshiftEndpointAccessVpcSecurityGroupsOutputReference" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_endpoint_access.RedshiftEndpointAccessVpcSecurityGroupsOutputReference;

new RedshiftEndpointAccessVpcSecurityGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.property.vpcSecurityGroupId">vpcSecurityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroups">RedshiftEndpointAccessVpcSecurityGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `vpcSecurityGroupId`<sup>Required</sup> <a name="vpcSecurityGroupId" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.property.vpcSecurityGroupId"></a>

```java
public java.lang.String getVpcSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroupsOutputReference.property.internalValue"></a>

```java
public RedshiftEndpointAccessVpcSecurityGroups getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftEndpointAccess.RedshiftEndpointAccessVpcSecurityGroups">RedshiftEndpointAccessVpcSecurityGroups</a>

---



