# `entityresolutionPolicyStatement` Submodule <a name="`entityresolutionPolicyStatement` Submodule" id="@cdktn/provider-awscc.entityresolutionPolicyStatement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EntityresolutionPolicyStatement <a name="EntityresolutionPolicyStatement" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement awscc_entityresolution_policy_statement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_policy_statement.EntityresolutionPolicyStatement;

EntityresolutionPolicyStatement.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .arn(java.lang.String)
    .statementId(java.lang.String)
//  .action(java.util.List<java.lang.String>)
//  .condition(java.lang.String)
//  .effect(java.lang.String)
//  .principal(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.arn">arn</a></code> | <code>java.lang.String</code> | Arn of the resource to which the policy statement is being attached. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.statementId">statementId</a></code> | <code>java.lang.String</code> | The Statement Id of the policy statement that is being attached. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.action">action</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#action EntityresolutionPolicyStatement#action}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.condition">condition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#condition EntityresolutionPolicyStatement#condition}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.effect">effect</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#effect EntityresolutionPolicyStatement#effect}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.principal">principal</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#principal EntityresolutionPolicyStatement#principal}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.arn"></a>

- *Type:* java.lang.String

Arn of the resource to which the policy statement is being attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#arn EntityresolutionPolicyStatement#arn}

---

##### `statementId`<sup>Required</sup> <a name="statementId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.statementId"></a>

- *Type:* java.lang.String

The Statement Id of the policy statement that is being attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#statement_id EntityresolutionPolicyStatement#statement_id}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.action"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#action EntityresolutionPolicyStatement#action}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.condition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#condition EntityresolutionPolicyStatement#condition}.

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.effect"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#effect EntityresolutionPolicyStatement#effect}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.principal"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#principal EntityresolutionPolicyStatement#principal}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetEffect">resetEffect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetPrincipal">resetPrincipal</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetAction"></a>

```java
public void resetAction()
```

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetEffect` <a name="resetEffect" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetEffect"></a>

```java
public void resetEffect()
```

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetPrincipal"></a>

```java
public void resetPrincipal()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EntityresolutionPolicyStatement resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isConstruct"></a>

```java
import io.cdktn.providers.awscc.entityresolution_policy_statement.EntityresolutionPolicyStatement;

EntityresolutionPolicyStatement.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.entityresolution_policy_statement.EntityresolutionPolicyStatement;

EntityresolutionPolicyStatement.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.entityresolution_policy_statement.EntityresolutionPolicyStatement;

EntityresolutionPolicyStatement.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.entityresolution_policy_statement.EntityresolutionPolicyStatement;

EntityresolutionPolicyStatement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EntityresolutionPolicyStatement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EntityresolutionPolicyStatement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EntityresolutionPolicyStatement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EntityresolutionPolicyStatement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EntityresolutionPolicyStatement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.actionInput">actionInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.conditionInput">conditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.effectInput">effectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.principalInput">principalInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.statementIdInput">statementIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.action">action</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.effect">effect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.principal">principal</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.statementId">statementId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.actionInput"></a>

```java
public java.util.List<java.lang.String> getActionInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.conditionInput"></a>

```java
public java.lang.String getConditionInput();
```

- *Type:* java.lang.String

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.effectInput"></a>

```java
public java.lang.String getEffectInput();
```

- *Type:* java.lang.String

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.principalInput"></a>

```java
public java.util.List<java.lang.String> getPrincipalInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `statementIdInput`<sup>Optional</sup> <a name="statementIdInput" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.statementIdInput"></a>

```java
public java.lang.String getStatementIdInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.action"></a>

```java
public java.util.List<java.lang.String> getAction();
```

- *Type:* java.util.List<java.lang.String>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.principal"></a>

```java
public java.util.List<java.lang.String> getPrincipal();
```

- *Type:* java.util.List<java.lang.String>

---

##### `statementId`<sup>Required</sup> <a name="statementId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.statementId"></a>

```java
public java.lang.String getStatementId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EntityresolutionPolicyStatementConfig <a name="EntityresolutionPolicyStatementConfig" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_policy_statement.EntityresolutionPolicyStatementConfig;

EntityresolutionPolicyStatementConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .arn(java.lang.String)
    .statementId(java.lang.String)
//  .action(java.util.List<java.lang.String>)
//  .condition(java.lang.String)
//  .effect(java.lang.String)
//  .principal(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.arn">arn</a></code> | <code>java.lang.String</code> | Arn of the resource to which the policy statement is being attached. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.statementId">statementId</a></code> | <code>java.lang.String</code> | The Statement Id of the policy statement that is being attached. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.action">action</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#action EntityresolutionPolicyStatement#action}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.condition">condition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#condition EntityresolutionPolicyStatement#condition}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.effect">effect</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#effect EntityresolutionPolicyStatement#effect}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.principal">principal</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#principal EntityresolutionPolicyStatement#principal}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Arn of the resource to which the policy statement is being attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#arn EntityresolutionPolicyStatement#arn}

---

##### `statementId`<sup>Required</sup> <a name="statementId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.statementId"></a>

```java
public java.lang.String getStatementId();
```

- *Type:* java.lang.String

The Statement Id of the policy statement that is being attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#statement_id EntityresolutionPolicyStatement#statement_id}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.action"></a>

```java
public java.util.List<java.lang.String> getAction();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#action EntityresolutionPolicyStatement#action}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#condition EntityresolutionPolicyStatement#condition}.

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#effect EntityresolutionPolicyStatement#effect}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.principal"></a>

```java
public java.util.List<java.lang.String> getPrincipal();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#principal EntityresolutionPolicyStatement#principal}.

---



