# `route53RecoveryreadinessRecoveryGroup` Submodule <a name="`route53RecoveryreadinessRecoveryGroup` Submodule" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecoveryreadinessRecoveryGroup <a name="Route53RecoveryreadinessRecoveryGroup" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoveryreadiness_recovery_group awscc_route53recoveryreadiness_recovery_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_recoveryreadiness_recovery_group.Route53RecoveryreadinessRecoveryGroup;

Route53RecoveryreadinessRecoveryGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .cells(java.util.List<java.lang.String>)
//  .recoveryGroupName(java.lang.String)
//  .tags(IResolvable|java.util.List<Route53RecoveryreadinessRecoveryGroupTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.cells">cells</a></code> | <code>java.util.List<java.lang.String></code> | A list of the cell Amazon Resource Names (ARNs) in the recovery group. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.recoveryGroupName">recoveryGroupName</a></code> | <code>java.lang.String</code> | The name of the recovery group to create. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTags">Route53RecoveryreadinessRecoveryGroupTags</a>></code> | A collection of tags associated with a resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cells`<sup>Optional</sup> <a name="cells" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.cells"></a>

- *Type:* java.util.List<java.lang.String>

A list of the cell Amazon Resource Names (ARNs) in the recovery group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoveryreadiness_recovery_group#cells Route53RecoveryreadinessRecoveryGroup#cells}

---

##### `recoveryGroupName`<sup>Optional</sup> <a name="recoveryGroupName" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.recoveryGroupName"></a>

- *Type:* java.lang.String

The name of the recovery group to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoveryreadiness_recovery_group#recovery_group_name Route53RecoveryreadinessRecoveryGroup#recovery_group_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTags">Route53RecoveryreadinessRecoveryGroupTags</a>>

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoveryreadiness_recovery_group#tags Route53RecoveryreadinessRecoveryGroup#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetCells">resetCells</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetRecoveryGroupName">resetRecoveryGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Route53RecoveryreadinessRecoveryGroupTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTags">Route53RecoveryreadinessRecoveryGroupTags</a>>

---

##### `resetCells` <a name="resetCells" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetCells"></a>

```java
public void resetCells()
```

##### `resetRecoveryGroupName` <a name="resetRecoveryGroupName" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetRecoveryGroupName"></a>

```java
public void resetRecoveryGroupName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53RecoveryreadinessRecoveryGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isConstruct"></a>

```java
import io.cdktn.providers.awscc.route53_recoveryreadiness_recovery_group.Route53RecoveryreadinessRecoveryGroup;

Route53RecoveryreadinessRecoveryGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.route53_recoveryreadiness_recovery_group.Route53RecoveryreadinessRecoveryGroup;

Route53RecoveryreadinessRecoveryGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.route53_recoveryreadiness_recovery_group.Route53RecoveryreadinessRecoveryGroup;

Route53RecoveryreadinessRecoveryGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.route53_recoveryreadiness_recovery_group.Route53RecoveryreadinessRecoveryGroup;

Route53RecoveryreadinessRecoveryGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Route53RecoveryreadinessRecoveryGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Route53RecoveryreadinessRecoveryGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Route53RecoveryreadinessRecoveryGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Route53RecoveryreadinessRecoveryGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoveryreadiness_recovery_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Route53RecoveryreadinessRecoveryGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.recoveryGroupArn">recoveryGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList">Route53RecoveryreadinessRecoveryGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.cellsInput">cellsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.recoveryGroupNameInput">recoveryGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTags">Route53RecoveryreadinessRecoveryGroupTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.cells">cells</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.recoveryGroupName">recoveryGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `recoveryGroupArn`<sup>Required</sup> <a name="recoveryGroupArn" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.recoveryGroupArn"></a>

```java
public java.lang.String getRecoveryGroupArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tags"></a>

```java
public Route53RecoveryreadinessRecoveryGroupTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList">Route53RecoveryreadinessRecoveryGroupTagsList</a>

---

##### `cellsInput`<sup>Optional</sup> <a name="cellsInput" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.cellsInput"></a>

```java
public java.util.List<java.lang.String> getCellsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `recoveryGroupNameInput`<sup>Optional</sup> <a name="recoveryGroupNameInput" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.recoveryGroupNameInput"></a>

```java
public java.lang.String getRecoveryGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Route53RecoveryreadinessRecoveryGroupTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTags">Route53RecoveryreadinessRecoveryGroupTags</a>>

---

##### `cells`<sup>Required</sup> <a name="cells" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.cells"></a>

```java
public java.util.List<java.lang.String> getCells();
```

- *Type:* java.util.List<java.lang.String>

---

##### `recoveryGroupName`<sup>Required</sup> <a name="recoveryGroupName" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.recoveryGroupName"></a>

```java
public java.lang.String getRecoveryGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecoveryreadinessRecoveryGroupConfig <a name="Route53RecoveryreadinessRecoveryGroupConfig" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_recoveryreadiness_recovery_group.Route53RecoveryreadinessRecoveryGroupConfig;

Route53RecoveryreadinessRecoveryGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .cells(java.util.List<java.lang.String>)
//  .recoveryGroupName(java.lang.String)
//  .tags(IResolvable|java.util.List<Route53RecoveryreadinessRecoveryGroupTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.cells">cells</a></code> | <code>java.util.List<java.lang.String></code> | A list of the cell Amazon Resource Names (ARNs) in the recovery group. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.recoveryGroupName">recoveryGroupName</a></code> | <code>java.lang.String</code> | The name of the recovery group to create. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTags">Route53RecoveryreadinessRecoveryGroupTags</a>></code> | A collection of tags associated with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cells`<sup>Optional</sup> <a name="cells" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.cells"></a>

```java
public java.util.List<java.lang.String> getCells();
```

- *Type:* java.util.List<java.lang.String>

A list of the cell Amazon Resource Names (ARNs) in the recovery group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoveryreadiness_recovery_group#cells Route53RecoveryreadinessRecoveryGroup#cells}

---

##### `recoveryGroupName`<sup>Optional</sup> <a name="recoveryGroupName" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.recoveryGroupName"></a>

```java
public java.lang.String getRecoveryGroupName();
```

- *Type:* java.lang.String

The name of the recovery group to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoveryreadiness_recovery_group#recovery_group_name Route53RecoveryreadinessRecoveryGroup#recovery_group_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Route53RecoveryreadinessRecoveryGroupTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTags">Route53RecoveryreadinessRecoveryGroupTags</a>>

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoveryreadiness_recovery_group#tags Route53RecoveryreadinessRecoveryGroup#tags}

---

### Route53RecoveryreadinessRecoveryGroupTags <a name="Route53RecoveryreadinessRecoveryGroupTags" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_recoveryreadiness_recovery_group.Route53RecoveryreadinessRecoveryGroupTags;

Route53RecoveryreadinessRecoveryGroupTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoveryreadiness_recovery_group#key Route53RecoveryreadinessRecoveryGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoveryreadiness_recovery_group#value Route53RecoveryreadinessRecoveryGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoveryreadiness_recovery_group#key Route53RecoveryreadinessRecoveryGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoveryreadiness_recovery_group#value Route53RecoveryreadinessRecoveryGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecoveryreadinessRecoveryGroupTagsList <a name="Route53RecoveryreadinessRecoveryGroupTagsList" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_recoveryreadiness_recovery_group.Route53RecoveryreadinessRecoveryGroupTagsList;

new Route53RecoveryreadinessRecoveryGroupTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList.get"></a>

```java
public Route53RecoveryreadinessRecoveryGroupTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTags">Route53RecoveryreadinessRecoveryGroupTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Route53RecoveryreadinessRecoveryGroupTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTags">Route53RecoveryreadinessRecoveryGroupTags</a>>

---


### Route53RecoveryreadinessRecoveryGroupTagsOutputReference <a name="Route53RecoveryreadinessRecoveryGroupTagsOutputReference" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_recoveryreadiness_recovery_group.Route53RecoveryreadinessRecoveryGroupTagsOutputReference;

new Route53RecoveryreadinessRecoveryGroupTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTags">Route53RecoveryreadinessRecoveryGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53RecoveryreadinessRecoveryGroupTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTags">Route53RecoveryreadinessRecoveryGroupTags</a>

---



