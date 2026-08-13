# `rdsDbProxyTargetGroup` Submodule <a name="`rdsDbProxyTargetGroup` Submodule" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDbProxyTargetGroup <a name="RdsDbProxyTargetGroup" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group awscc_rds_db_proxy_target_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_proxy_target_group.RdsDbProxyTargetGroup;

RdsDbProxyTargetGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dbProxyName(java.lang.String)
    .targetGroupName(java.lang.String)
//  .connectionPoolConfigurationInfo(RdsDbProxyTargetGroupConnectionPoolConfigurationInfo)
//  .dbClusterIdentifiers(java.util.List<java.lang.String>)
//  .dbInstanceIdentifiers(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.dbProxyName">dbProxyName</a></code> | <code>java.lang.String</code> | The identifier for the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.targetGroupName">targetGroupName</a></code> | <code>java.lang.String</code> | The identifier for the DBProxyTargetGroup. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.connectionPoolConfigurationInfo">connectionPoolConfigurationInfo</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#connection_pool_configuration_info RdsDbProxyTargetGroup#connection_pool_configuration_info}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.dbClusterIdentifiers">dbClusterIdentifiers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#db_cluster_identifiers RdsDbProxyTargetGroup#db_cluster_identifiers}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.dbInstanceIdentifiers">dbInstanceIdentifiers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#db_instance_identifiers RdsDbProxyTargetGroup#db_instance_identifiers}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dbProxyName`<sup>Required</sup> <a name="dbProxyName" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.dbProxyName"></a>

- *Type:* java.lang.String

The identifier for the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#db_proxy_name RdsDbProxyTargetGroup#db_proxy_name}

---

##### `targetGroupName`<sup>Required</sup> <a name="targetGroupName" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.targetGroupName"></a>

- *Type:* java.lang.String

The identifier for the DBProxyTargetGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#target_group_name RdsDbProxyTargetGroup#target_group_name}

---

##### `connectionPoolConfigurationInfo`<sup>Optional</sup> <a name="connectionPoolConfigurationInfo" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.connectionPoolConfigurationInfo"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#connection_pool_configuration_info RdsDbProxyTargetGroup#connection_pool_configuration_info}.

---

##### `dbClusterIdentifiers`<sup>Optional</sup> <a name="dbClusterIdentifiers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.dbClusterIdentifiers"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#db_cluster_identifiers RdsDbProxyTargetGroup#db_cluster_identifiers}.

---

##### `dbInstanceIdentifiers`<sup>Optional</sup> <a name="dbInstanceIdentifiers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.dbInstanceIdentifiers"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#db_instance_identifiers RdsDbProxyTargetGroup#db_instance_identifiers}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.putConnectionPoolConfigurationInfo">putConnectionPoolConfigurationInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetConnectionPoolConfigurationInfo">resetConnectionPoolConfigurationInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetDbClusterIdentifiers">resetDbClusterIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetDbInstanceIdentifiers">resetDbInstanceIdentifiers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectionPoolConfigurationInfo` <a name="putConnectionPoolConfigurationInfo" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.putConnectionPoolConfigurationInfo"></a>

```java
public void putConnectionPoolConfigurationInfo(RdsDbProxyTargetGroupConnectionPoolConfigurationInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.putConnectionPoolConfigurationInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a>

---

##### `resetConnectionPoolConfigurationInfo` <a name="resetConnectionPoolConfigurationInfo" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetConnectionPoolConfigurationInfo"></a>

```java
public void resetConnectionPoolConfigurationInfo()
```

##### `resetDbClusterIdentifiers` <a name="resetDbClusterIdentifiers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetDbClusterIdentifiers"></a>

```java
public void resetDbClusterIdentifiers()
```

##### `resetDbInstanceIdentifiers` <a name="resetDbInstanceIdentifiers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetDbInstanceIdentifiers"></a>

```java
public void resetDbInstanceIdentifiers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RdsDbProxyTargetGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isConstruct"></a>

```java
import io.cdktn.providers.awscc.rds_db_proxy_target_group.RdsDbProxyTargetGroup;

RdsDbProxyTargetGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.rds_db_proxy_target_group.RdsDbProxyTargetGroup;

RdsDbProxyTargetGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.rds_db_proxy_target_group.RdsDbProxyTargetGroup;

RdsDbProxyTargetGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.rds_db_proxy_target_group.RdsDbProxyTargetGroup;

RdsDbProxyTargetGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RdsDbProxyTargetGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RdsDbProxyTargetGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RdsDbProxyTargetGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RdsDbProxyTargetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RdsDbProxyTargetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.connectionPoolConfigurationInfo">connectionPoolConfigurationInfo</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference">RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.targetGroupArn">targetGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.connectionPoolConfigurationInfoInput">connectionPoolConfigurationInfoInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbClusterIdentifiersInput">dbClusterIdentifiersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbInstanceIdentifiersInput">dbInstanceIdentifiersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbProxyNameInput">dbProxyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.targetGroupNameInput">targetGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbClusterIdentifiers">dbClusterIdentifiers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbInstanceIdentifiers">dbInstanceIdentifiers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbProxyName">dbProxyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.targetGroupName">targetGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectionPoolConfigurationInfo`<sup>Required</sup> <a name="connectionPoolConfigurationInfo" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.connectionPoolConfigurationInfo"></a>

```java
public RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference getConnectionPoolConfigurationInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference">RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.targetGroupArn"></a>

```java
public java.lang.String getTargetGroupArn();
```

- *Type:* java.lang.String

---

##### `connectionPoolConfigurationInfoInput`<sup>Optional</sup> <a name="connectionPoolConfigurationInfoInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.connectionPoolConfigurationInfoInput"></a>

```java
public IResolvable|RdsDbProxyTargetGroupConnectionPoolConfigurationInfo getConnectionPoolConfigurationInfoInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a>

---

##### `dbClusterIdentifiersInput`<sup>Optional</sup> <a name="dbClusterIdentifiersInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbClusterIdentifiersInput"></a>

```java
public java.util.List<java.lang.String> getDbClusterIdentifiersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dbInstanceIdentifiersInput`<sup>Optional</sup> <a name="dbInstanceIdentifiersInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbInstanceIdentifiersInput"></a>

```java
public java.util.List<java.lang.String> getDbInstanceIdentifiersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dbProxyNameInput`<sup>Optional</sup> <a name="dbProxyNameInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbProxyNameInput"></a>

```java
public java.lang.String getDbProxyNameInput();
```

- *Type:* java.lang.String

---

##### `targetGroupNameInput`<sup>Optional</sup> <a name="targetGroupNameInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.targetGroupNameInput"></a>

```java
public java.lang.String getTargetGroupNameInput();
```

- *Type:* java.lang.String

---

##### `dbClusterIdentifiers`<sup>Required</sup> <a name="dbClusterIdentifiers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbClusterIdentifiers"></a>

```java
public java.util.List<java.lang.String> getDbClusterIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dbInstanceIdentifiers`<sup>Required</sup> <a name="dbInstanceIdentifiers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbInstanceIdentifiers"></a>

```java
public java.util.List<java.lang.String> getDbInstanceIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dbProxyName`<sup>Required</sup> <a name="dbProxyName" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbProxyName"></a>

```java
public java.lang.String getDbProxyName();
```

- *Type:* java.lang.String

---

##### `targetGroupName`<sup>Required</sup> <a name="targetGroupName" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.targetGroupName"></a>

```java
public java.lang.String getTargetGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDbProxyTargetGroupConfig <a name="RdsDbProxyTargetGroupConfig" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_proxy_target_group.RdsDbProxyTargetGroupConfig;

RdsDbProxyTargetGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dbProxyName(java.lang.String)
    .targetGroupName(java.lang.String)
//  .connectionPoolConfigurationInfo(RdsDbProxyTargetGroupConnectionPoolConfigurationInfo)
//  .dbClusterIdentifiers(java.util.List<java.lang.String>)
//  .dbInstanceIdentifiers(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dbProxyName">dbProxyName</a></code> | <code>java.lang.String</code> | The identifier for the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.targetGroupName">targetGroupName</a></code> | <code>java.lang.String</code> | The identifier for the DBProxyTargetGroup. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.connectionPoolConfigurationInfo">connectionPoolConfigurationInfo</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#connection_pool_configuration_info RdsDbProxyTargetGroup#connection_pool_configuration_info}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dbClusterIdentifiers">dbClusterIdentifiers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#db_cluster_identifiers RdsDbProxyTargetGroup#db_cluster_identifiers}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dbInstanceIdentifiers">dbInstanceIdentifiers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#db_instance_identifiers RdsDbProxyTargetGroup#db_instance_identifiers}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dbProxyName`<sup>Required</sup> <a name="dbProxyName" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dbProxyName"></a>

```java
public java.lang.String getDbProxyName();
```

- *Type:* java.lang.String

The identifier for the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#db_proxy_name RdsDbProxyTargetGroup#db_proxy_name}

---

##### `targetGroupName`<sup>Required</sup> <a name="targetGroupName" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.targetGroupName"></a>

```java
public java.lang.String getTargetGroupName();
```

- *Type:* java.lang.String

The identifier for the DBProxyTargetGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#target_group_name RdsDbProxyTargetGroup#target_group_name}

---

##### `connectionPoolConfigurationInfo`<sup>Optional</sup> <a name="connectionPoolConfigurationInfo" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.connectionPoolConfigurationInfo"></a>

```java
public RdsDbProxyTargetGroupConnectionPoolConfigurationInfo getConnectionPoolConfigurationInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#connection_pool_configuration_info RdsDbProxyTargetGroup#connection_pool_configuration_info}.

---

##### `dbClusterIdentifiers`<sup>Optional</sup> <a name="dbClusterIdentifiers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dbClusterIdentifiers"></a>

```java
public java.util.List<java.lang.String> getDbClusterIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#db_cluster_identifiers RdsDbProxyTargetGroup#db_cluster_identifiers}.

---

##### `dbInstanceIdentifiers`<sup>Optional</sup> <a name="dbInstanceIdentifiers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dbInstanceIdentifiers"></a>

```java
public java.util.List<java.lang.String> getDbInstanceIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#db_instance_identifiers RdsDbProxyTargetGroup#db_instance_identifiers}.

---

### RdsDbProxyTargetGroupConnectionPoolConfigurationInfo <a name="RdsDbProxyTargetGroupConnectionPoolConfigurationInfo" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_proxy_target_group.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo;

RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.builder()
//  .connectionBorrowTimeout(java.lang.Number)
//  .initQuery(java.lang.String)
//  .maxConnectionsPercent(java.lang.Number)
//  .maxIdleConnectionsPercent(java.lang.Number)
//  .sessionPinningFilters(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.connectionBorrowTimeout">connectionBorrowTimeout</a></code> | <code>java.lang.Number</code> | The number of seconds for a proxy to wait for a connection to become available in the connection pool. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.initQuery">initQuery</a></code> | <code>java.lang.String</code> | One or more SQL statements for the proxy to run when opening each new database connection. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.maxConnectionsPercent">maxConnectionsPercent</a></code> | <code>java.lang.Number</code> | The maximum size of the connection pool for each target in a target group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.maxIdleConnectionsPercent">maxIdleConnectionsPercent</a></code> | <code>java.lang.Number</code> | Controls how actively the proxy closes idle database connections in the connection pool. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.sessionPinningFilters">sessionPinningFilters</a></code> | <code>java.util.List<java.lang.String></code> | Each item in the list represents a class of SQL operations that normally cause all later statements in a session using a proxy to be pinned to the same underlying database connection. |

---

##### `connectionBorrowTimeout`<sup>Optional</sup> <a name="connectionBorrowTimeout" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.connectionBorrowTimeout"></a>

```java
public java.lang.Number getConnectionBorrowTimeout();
```

- *Type:* java.lang.Number

The number of seconds for a proxy to wait for a connection to become available in the connection pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#connection_borrow_timeout RdsDbProxyTargetGroup#connection_borrow_timeout}

---

##### `initQuery`<sup>Optional</sup> <a name="initQuery" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.initQuery"></a>

```java
public java.lang.String getInitQuery();
```

- *Type:* java.lang.String

One or more SQL statements for the proxy to run when opening each new database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#init_query RdsDbProxyTargetGroup#init_query}

---

##### `maxConnectionsPercent`<sup>Optional</sup> <a name="maxConnectionsPercent" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.maxConnectionsPercent"></a>

```java
public java.lang.Number getMaxConnectionsPercent();
```

- *Type:* java.lang.Number

The maximum size of the connection pool for each target in a target group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#max_connections_percent RdsDbProxyTargetGroup#max_connections_percent}

---

##### `maxIdleConnectionsPercent`<sup>Optional</sup> <a name="maxIdleConnectionsPercent" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.maxIdleConnectionsPercent"></a>

```java
public java.lang.Number getMaxIdleConnectionsPercent();
```

- *Type:* java.lang.Number

Controls how actively the proxy closes idle database connections in the connection pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#max_idle_connections_percent RdsDbProxyTargetGroup#max_idle_connections_percent}

---

##### `sessionPinningFilters`<sup>Optional</sup> <a name="sessionPinningFilters" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.sessionPinningFilters"></a>

```java
public java.util.List<java.lang.String> getSessionPinningFilters();
```

- *Type:* java.util.List<java.lang.String>

Each item in the list represents a class of SQL operations that normally cause all later statements in a session using a proxy to be pinned to the same underlying database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#session_pinning_filters RdsDbProxyTargetGroup#session_pinning_filters}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference <a name="RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_proxy_target_group.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference;

new RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetConnectionBorrowTimeout">resetConnectionBorrowTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetInitQuery">resetInitQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetMaxConnectionsPercent">resetMaxConnectionsPercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetMaxIdleConnectionsPercent">resetMaxIdleConnectionsPercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetSessionPinningFilters">resetSessionPinningFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionBorrowTimeout` <a name="resetConnectionBorrowTimeout" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetConnectionBorrowTimeout"></a>

```java
public void resetConnectionBorrowTimeout()
```

##### `resetInitQuery` <a name="resetInitQuery" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetInitQuery"></a>

```java
public void resetInitQuery()
```

##### `resetMaxConnectionsPercent` <a name="resetMaxConnectionsPercent" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetMaxConnectionsPercent"></a>

```java
public void resetMaxConnectionsPercent()
```

##### `resetMaxIdleConnectionsPercent` <a name="resetMaxIdleConnectionsPercent" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetMaxIdleConnectionsPercent"></a>

```java
public void resetMaxIdleConnectionsPercent()
```

##### `resetSessionPinningFilters` <a name="resetSessionPinningFilters" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetSessionPinningFilters"></a>

```java
public void resetSessionPinningFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.connectionBorrowTimeoutInput">connectionBorrowTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.initQueryInput">initQueryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxConnectionsPercentInput">maxConnectionsPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxIdleConnectionsPercentInput">maxIdleConnectionsPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.sessionPinningFiltersInput">sessionPinningFiltersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.connectionBorrowTimeout">connectionBorrowTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.initQuery">initQuery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxConnectionsPercent">maxConnectionsPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxIdleConnectionsPercent">maxIdleConnectionsPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.sessionPinningFilters">sessionPinningFilters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionBorrowTimeoutInput`<sup>Optional</sup> <a name="connectionBorrowTimeoutInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.connectionBorrowTimeoutInput"></a>

```java
public java.lang.Number getConnectionBorrowTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `initQueryInput`<sup>Optional</sup> <a name="initQueryInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.initQueryInput"></a>

```java
public java.lang.String getInitQueryInput();
```

- *Type:* java.lang.String

---

##### `maxConnectionsPercentInput`<sup>Optional</sup> <a name="maxConnectionsPercentInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxConnectionsPercentInput"></a>

```java
public java.lang.Number getMaxConnectionsPercentInput();
```

- *Type:* java.lang.Number

---

##### `maxIdleConnectionsPercentInput`<sup>Optional</sup> <a name="maxIdleConnectionsPercentInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxIdleConnectionsPercentInput"></a>

```java
public java.lang.Number getMaxIdleConnectionsPercentInput();
```

- *Type:* java.lang.Number

---

##### `sessionPinningFiltersInput`<sup>Optional</sup> <a name="sessionPinningFiltersInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.sessionPinningFiltersInput"></a>

```java
public java.util.List<java.lang.String> getSessionPinningFiltersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectionBorrowTimeout`<sup>Required</sup> <a name="connectionBorrowTimeout" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.connectionBorrowTimeout"></a>

```java
public java.lang.Number getConnectionBorrowTimeout();
```

- *Type:* java.lang.Number

---

##### `initQuery`<sup>Required</sup> <a name="initQuery" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.initQuery"></a>

```java
public java.lang.String getInitQuery();
```

- *Type:* java.lang.String

---

##### `maxConnectionsPercent`<sup>Required</sup> <a name="maxConnectionsPercent" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxConnectionsPercent"></a>

```java
public java.lang.Number getMaxConnectionsPercent();
```

- *Type:* java.lang.Number

---

##### `maxIdleConnectionsPercent`<sup>Required</sup> <a name="maxIdleConnectionsPercent" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxIdleConnectionsPercent"></a>

```java
public java.lang.Number getMaxIdleConnectionsPercent();
```

- *Type:* java.lang.Number

---

##### `sessionPinningFilters`<sup>Required</sup> <a name="sessionPinningFilters" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.sessionPinningFilters"></a>

```java
public java.util.List<java.lang.String> getSessionPinningFilters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.internalValue"></a>

```java
public IResolvable|RdsDbProxyTargetGroupConnectionPoolConfigurationInfo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a>

---



