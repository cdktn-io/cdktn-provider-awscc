# `ec2SqlHaStandbyDetectedInstance` Submodule <a name="`ec2SqlHaStandbyDetectedInstance` Submodule" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2SqlHaStandbyDetectedInstance <a name="Ec2SqlHaStandbyDetectedInstance" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_sql_ha_standby_detected_instance awscc_ec2_sql_ha_standby_detected_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_sql_ha_standby_detected_instance.Ec2SqlHaStandbyDetectedInstance;

Ec2SqlHaStandbyDetectedInstance.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceId(java.lang.String)
//  .sqlServerCredentials(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | The ID of the EC2 instance to enable for SQL Server high availability standby detection. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.sqlServerCredentials">sqlServerCredentials</a></code> | <code>java.lang.String</code> | The ARN of the AWS Secrets Manager secret containing SQL Server access credentials to the EC2 instance. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

The ID of the EC2 instance to enable for SQL Server high availability standby detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_sql_ha_standby_detected_instance#instance_id Ec2SqlHaStandbyDetectedInstance#instance_id}

---

##### `sqlServerCredentials`<sup>Optional</sup> <a name="sqlServerCredentials" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.sqlServerCredentials"></a>

- *Type:* java.lang.String

The ARN of the AWS Secrets Manager secret containing SQL Server access credentials to the EC2 instance.

If not specified, AWS Systems Manager agent will use default local user credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_sql_ha_standby_detected_instance#sql_server_credentials Ec2SqlHaStandbyDetectedInstance#sql_server_credentials}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.resetSqlServerCredentials">resetSqlServerCredentials</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetSqlServerCredentials` <a name="resetSqlServerCredentials" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.resetSqlServerCredentials"></a>

```java
public void resetSqlServerCredentials()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2SqlHaStandbyDetectedInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_sql_ha_standby_detected_instance.Ec2SqlHaStandbyDetectedInstance;

Ec2SqlHaStandbyDetectedInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_sql_ha_standby_detected_instance.Ec2SqlHaStandbyDetectedInstance;

Ec2SqlHaStandbyDetectedInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_sql_ha_standby_detected_instance.Ec2SqlHaStandbyDetectedInstance;

Ec2SqlHaStandbyDetectedInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_sql_ha_standby_detected_instance.Ec2SqlHaStandbyDetectedInstance;

Ec2SqlHaStandbyDetectedInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2SqlHaStandbyDetectedInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2SqlHaStandbyDetectedInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2SqlHaStandbyDetectedInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2SqlHaStandbyDetectedInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_sql_ha_standby_detected_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2SqlHaStandbyDetectedInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.haStatus">haStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.sqlServerLicenseUsage">sqlServerLicenseUsage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.sqlServerCredentialsInput">sqlServerCredentialsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.sqlServerCredentials">sqlServerCredentials</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `haStatus`<sup>Required</sup> <a name="haStatus" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.haStatus"></a>

```java
public java.lang.String getHaStatus();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

---

##### `sqlServerLicenseUsage`<sup>Required</sup> <a name="sqlServerLicenseUsage" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.sqlServerLicenseUsage"></a>

```java
public java.lang.String getSqlServerLicenseUsage();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `sqlServerCredentialsInput`<sup>Optional</sup> <a name="sqlServerCredentialsInput" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.sqlServerCredentialsInput"></a>

```java
public java.lang.String getSqlServerCredentialsInput();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `sqlServerCredentials`<sup>Required</sup> <a name="sqlServerCredentials" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.sqlServerCredentials"></a>

```java
public java.lang.String getSqlServerCredentials();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2SqlHaStandbyDetectedInstanceConfig <a name="Ec2SqlHaStandbyDetectedInstanceConfig" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_sql_ha_standby_detected_instance.Ec2SqlHaStandbyDetectedInstanceConfig;

Ec2SqlHaStandbyDetectedInstanceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceId(java.lang.String)
//  .sqlServerCredentials(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | The ID of the EC2 instance to enable for SQL Server high availability standby detection. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.sqlServerCredentials">sqlServerCredentials</a></code> | <code>java.lang.String</code> | The ARN of the AWS Secrets Manager secret containing SQL Server access credentials to the EC2 instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

The ID of the EC2 instance to enable for SQL Server high availability standby detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_sql_ha_standby_detected_instance#instance_id Ec2SqlHaStandbyDetectedInstance#instance_id}

---

##### `sqlServerCredentials`<sup>Optional</sup> <a name="sqlServerCredentials" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.sqlServerCredentials"></a>

```java
public java.lang.String getSqlServerCredentials();
```

- *Type:* java.lang.String

The ARN of the AWS Secrets Manager secret containing SQL Server access credentials to the EC2 instance.

If not specified, AWS Systems Manager agent will use default local user credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_sql_ha_standby_detected_instance#sql_server_credentials Ec2SqlHaStandbyDetectedInstance#sql_server_credentials}

---



