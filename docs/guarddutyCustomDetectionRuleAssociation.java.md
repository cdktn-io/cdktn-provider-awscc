# `guarddutyCustomDetectionRuleAssociation` Submodule <a name="`guarddutyCustomDetectionRuleAssociation` Submodule" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyCustomDetectionRuleAssociation <a name="GuarddutyCustomDetectionRuleAssociation" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association awscc_guardduty_custom_detection_rule_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_custom_detection_rule_association.GuarddutyCustomDetectionRuleAssociation;

GuarddutyCustomDetectionRuleAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mode(java.lang.String)
    .ruleId(java.lang.String)
//  .tags(IResolvable|java.util.List<GuarddutyCustomDetectionRuleAssociationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.mode">mode</a></code> | <code>java.lang.String</code> | Whether the rule runs in LIVE mode (generates findings) or DRY_RUN mode (evaluates without generating findings). |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.ruleId">ruleId</a></code> | <code>java.lang.String</code> | The catalog identifier of the custom detection rule to associate. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a>></code> | The tags applied to the association. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.mode"></a>

- *Type:* java.lang.String

Whether the rule runs in LIVE mode (generates findings) or DRY_RUN mode (evaluates without generating findings).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#mode GuarddutyCustomDetectionRuleAssociation#mode}

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.ruleId"></a>

- *Type:* java.lang.String

The catalog identifier of the custom detection rule to associate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#rule_id GuarddutyCustomDetectionRuleAssociation#rule_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a>>

The tags applied to the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#tags GuarddutyCustomDetectionRuleAssociation#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<GuarddutyCustomDetectionRuleAssociationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GuarddutyCustomDetectionRuleAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isConstruct"></a>

```java
import io.cdktn.providers.awscc.guardduty_custom_detection_rule_association.GuarddutyCustomDetectionRuleAssociation;

GuarddutyCustomDetectionRuleAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.guardduty_custom_detection_rule_association.GuarddutyCustomDetectionRuleAssociation;

GuarddutyCustomDetectionRuleAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.guardduty_custom_detection_rule_association.GuarddutyCustomDetectionRuleAssociation;

GuarddutyCustomDetectionRuleAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.guardduty_custom_detection_rule_association.GuarddutyCustomDetectionRuleAssociation;

GuarddutyCustomDetectionRuleAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GuarddutyCustomDetectionRuleAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GuarddutyCustomDetectionRuleAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GuarddutyCustomDetectionRuleAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GuarddutyCustomDetectionRuleAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GuarddutyCustomDetectionRuleAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.associationId">associationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList">GuarddutyCustomDetectionRuleAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.ruleIdInput">ruleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.associationId"></a>

```java
public java.lang.String getAssociationId();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.tags"></a>

```java
public GuarddutyCustomDetectionRuleAssociationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList">GuarddutyCustomDetectionRuleAssociationTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.ruleIdInput"></a>

```java
public java.lang.String getRuleIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.tagsInput"></a>

```java
public IResolvable|java.util.List<GuarddutyCustomDetectionRuleAssociationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a>>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyCustomDetectionRuleAssociationConfig <a name="GuarddutyCustomDetectionRuleAssociationConfig" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_custom_detection_rule_association.GuarddutyCustomDetectionRuleAssociationConfig;

GuarddutyCustomDetectionRuleAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mode(java.lang.String)
    .ruleId(java.lang.String)
//  .tags(IResolvable|java.util.List<GuarddutyCustomDetectionRuleAssociationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | Whether the rule runs in LIVE mode (generates findings) or DRY_RUN mode (evaluates without generating findings). |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | The catalog identifier of the custom detection rule to associate. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a>></code> | The tags applied to the association. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Whether the rule runs in LIVE mode (generates findings) or DRY_RUN mode (evaluates without generating findings).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#mode GuarddutyCustomDetectionRuleAssociation#mode}

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

The catalog identifier of the custom detection rule to associate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#rule_id GuarddutyCustomDetectionRuleAssociation#rule_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<GuarddutyCustomDetectionRuleAssociationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a>>

The tags applied to the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#tags GuarddutyCustomDetectionRuleAssociation#tags}

---

### GuarddutyCustomDetectionRuleAssociationTags <a name="GuarddutyCustomDetectionRuleAssociationTags" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_custom_detection_rule_association.GuarddutyCustomDetectionRuleAssociationTags;

GuarddutyCustomDetectionRuleAssociationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#key GuarddutyCustomDetectionRuleAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#value GuarddutyCustomDetectionRuleAssociation#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#key GuarddutyCustomDetectionRuleAssociation#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#value GuarddutyCustomDetectionRuleAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyCustomDetectionRuleAssociationTagsList <a name="GuarddutyCustomDetectionRuleAssociationTagsList" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_custom_detection_rule_association.GuarddutyCustomDetectionRuleAssociationTagsList;

new GuarddutyCustomDetectionRuleAssociationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.get"></a>

```java
public GuarddutyCustomDetectionRuleAssociationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GuarddutyCustomDetectionRuleAssociationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a>>

---


### GuarddutyCustomDetectionRuleAssociationTagsOutputReference <a name="GuarddutyCustomDetectionRuleAssociationTagsOutputReference" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_custom_detection_rule_association.GuarddutyCustomDetectionRuleAssociationTagsOutputReference;

new GuarddutyCustomDetectionRuleAssociationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|GuarddutyCustomDetectionRuleAssociationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a>

---



