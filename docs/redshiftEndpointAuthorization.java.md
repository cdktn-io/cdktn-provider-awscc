# `redshiftEndpointAuthorization` Submodule <a name="`redshiftEndpointAuthorization` Submodule" id="@cdktn/provider-awscc.redshiftEndpointAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftEndpointAuthorization <a name="RedshiftEndpointAuthorization" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_endpoint_authorization awscc_redshift_endpoint_authorization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_endpoint_authorization.RedshiftEndpointAuthorization;

RedshiftEndpointAuthorization.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .account(java.lang.String)
    .clusterIdentifier(java.lang.String)
//  .force(java.lang.Boolean|IResolvable)
//  .vpcIds(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.account">account</a></code> | <code>java.lang.String</code> | The target AWS account ID to grant or revoke access for. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | The cluster identifier. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.force">force</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to force the revoke action. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.vpcIds">vpcIds</a></code> | <code>java.util.List<java.lang.String></code> | The virtual private cloud (VPC) identifiers to grant or revoke access to. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.account"></a>

- *Type:* java.lang.String

The target AWS account ID to grant or revoke access for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_endpoint_authorization#account RedshiftEndpointAuthorization#account}

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.clusterIdentifier"></a>

- *Type:* java.lang.String

The cluster identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_endpoint_authorization#cluster_identifier RedshiftEndpointAuthorization#cluster_identifier}

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.force"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to force the revoke action.

If true, the Redshift-managed VPC endpoints associated with the endpoint authorization are also deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_endpoint_authorization#force RedshiftEndpointAuthorization#force}

---

##### `vpcIds`<sup>Optional</sup> <a name="vpcIds" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.vpcIds"></a>

- *Type:* java.util.List<java.lang.String>

The virtual private cloud (VPC) identifiers to grant or revoke access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_endpoint_authorization#vpc_ids RedshiftEndpointAuthorization#vpc_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetForce">resetForce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetVpcIds">resetVpcIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetForce` <a name="resetForce" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetForce"></a>

```java
public void resetForce()
```

##### `resetVpcIds` <a name="resetVpcIds" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetVpcIds"></a>

```java
public void resetVpcIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftEndpointAuthorization resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isConstruct"></a>

```java
import io.cdktn.providers.awscc.redshift_endpoint_authorization.RedshiftEndpointAuthorization;

RedshiftEndpointAuthorization.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.redshift_endpoint_authorization.RedshiftEndpointAuthorization;

RedshiftEndpointAuthorization.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.redshift_endpoint_authorization.RedshiftEndpointAuthorization;

RedshiftEndpointAuthorization.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.redshift_endpoint_authorization.RedshiftEndpointAuthorization;

RedshiftEndpointAuthorization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RedshiftEndpointAuthorization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RedshiftEndpointAuthorization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RedshiftEndpointAuthorization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RedshiftEndpointAuthorization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_endpoint_authorization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftEndpointAuthorization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.allowedAllVpCs">allowedAllVpCs</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.allowedVpCs">allowedVpCs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.authorizeTime">authorizeTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.clusterStatus">clusterStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.endpointCount">endpointCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.grantee">grantee</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.grantor">grantor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.accountInput">accountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.forceInput">forceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.vpcIdsInput">vpcIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.account">account</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.force">force</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.vpcIds">vpcIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allowedAllVpCs`<sup>Required</sup> <a name="allowedAllVpCs" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.allowedAllVpCs"></a>

```java
public IResolvable getAllowedAllVpCs();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `allowedVpCs`<sup>Required</sup> <a name="allowedVpCs" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.allowedVpCs"></a>

```java
public java.util.List<java.lang.String> getAllowedVpCs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorizeTime`<sup>Required</sup> <a name="authorizeTime" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.authorizeTime"></a>

```java
public java.lang.String getAuthorizeTime();
```

- *Type:* java.lang.String

---

##### `clusterStatus`<sup>Required</sup> <a name="clusterStatus" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.clusterStatus"></a>

```java
public java.lang.String getClusterStatus();
```

- *Type:* java.lang.String

---

##### `endpointCount`<sup>Required</sup> <a name="endpointCount" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.endpointCount"></a>

```java
public java.lang.Number getEndpointCount();
```

- *Type:* java.lang.Number

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.grantee"></a>

```java
public java.lang.String getGrantee();
```

- *Type:* java.lang.String

---

##### `grantor`<sup>Required</sup> <a name="grantor" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.grantor"></a>

```java
public java.lang.String getGrantor();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.accountInput"></a>

```java
public java.lang.String getAccountInput();
```

- *Type:* java.lang.String

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.clusterIdentifierInput"></a>

```java
public java.lang.String getClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `forceInput`<sup>Optional</sup> <a name="forceInput" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.forceInput"></a>

```java
public java.lang.Boolean|IResolvable getForceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `vpcIdsInput`<sup>Optional</sup> <a name="vpcIdsInput" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.vpcIdsInput"></a>

```java
public java.util.List<java.lang.String> getVpcIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.account"></a>

```java
public java.lang.String getAccount();
```

- *Type:* java.lang.String

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.clusterIdentifier"></a>

```java
public java.lang.String getClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `force`<sup>Required</sup> <a name="force" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.force"></a>

```java
public java.lang.Boolean|IResolvable getForce();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `vpcIds`<sup>Required</sup> <a name="vpcIds" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.vpcIds"></a>

```java
public java.util.List<java.lang.String> getVpcIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftEndpointAuthorizationConfig <a name="RedshiftEndpointAuthorizationConfig" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_endpoint_authorization.RedshiftEndpointAuthorizationConfig;

RedshiftEndpointAuthorizationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .account(java.lang.String)
    .clusterIdentifier(java.lang.String)
//  .force(java.lang.Boolean|IResolvable)
//  .vpcIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.account">account</a></code> | <code>java.lang.String</code> | The target AWS account ID to grant or revoke access for. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | The cluster identifier. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.force">force</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to force the revoke action. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.vpcIds">vpcIds</a></code> | <code>java.util.List<java.lang.String></code> | The virtual private cloud (VPC) identifiers to grant or revoke access to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.account"></a>

```java
public java.lang.String getAccount();
```

- *Type:* java.lang.String

The target AWS account ID to grant or revoke access for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_endpoint_authorization#account RedshiftEndpointAuthorization#account}

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.clusterIdentifier"></a>

```java
public java.lang.String getClusterIdentifier();
```

- *Type:* java.lang.String

The cluster identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_endpoint_authorization#cluster_identifier RedshiftEndpointAuthorization#cluster_identifier}

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.force"></a>

```java
public java.lang.Boolean|IResolvable getForce();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to force the revoke action.

If true, the Redshift-managed VPC endpoints associated with the endpoint authorization are also deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_endpoint_authorization#force RedshiftEndpointAuthorization#force}

---

##### `vpcIds`<sup>Optional</sup> <a name="vpcIds" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.vpcIds"></a>

```java
public java.util.List<java.lang.String> getVpcIds();
```

- *Type:* java.util.List<java.lang.String>

The virtual private cloud (VPC) identifiers to grant or revoke access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_endpoint_authorization#vpc_ids RedshiftEndpointAuthorization#vpc_ids}

---



