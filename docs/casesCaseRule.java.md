# `casesCaseRule` Submodule <a name="`casesCaseRule` Submodule" id="@cdktn/provider-awscc.casesCaseRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CasesCaseRule <a name="CasesCaseRule" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule awscc_cases_case_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRule;

CasesCaseRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .rule(CasesCaseRuleRule)
//  .description(java.lang.String)
//  .domainId(java.lang.String)
//  .tags(IResolvable|java.util.List<CasesCaseRuleTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A descriptive name for the case rule. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule">CasesCaseRuleRule</a></code> | Defines the rule behavior and conditions. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description explaining the purpose and behavior of this case rule. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.domainId">domainId</a></code> | <code>java.lang.String</code> | The unique identifier of the Cases domain. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a>></code> | The tags that you attach to this case rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A descriptive name for the case rule.

Must be unique within the domain and should clearly indicate the rule's purpose (e.g., 'Priority Field Required for Urgent Cases').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#name CasesCaseRule#name}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.rule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule">CasesCaseRuleRule</a>

Defines the rule behavior and conditions.

Specifies the rule type and the conditions under which it applies. In the Amazon Connect admin website, this corresponds to case field conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#rule CasesCaseRule#rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description explaining the purpose and behavior of this case rule.

Helps administrators understand when and why this rule applies to case fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#description CasesCaseRule#description}

---

##### `domainId`<sup>Optional</sup> <a name="domainId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.domainId"></a>

- *Type:* java.lang.String

The unique identifier of the Cases domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#domain_id CasesCaseRule#domain_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a>>

The tags that you attach to this case rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#tags CasesCaseRule#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.resetDomainId">resetDomainId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRule` <a name="putRule" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.putRule"></a>

```java
public void putRule(CasesCaseRuleRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule">CasesCaseRuleRule</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CasesCaseRuleTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDomainId` <a name="resetDomainId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.resetDomainId"></a>

```java
public void resetDomainId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CasesCaseRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRule;

CasesCaseRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRule;

CasesCaseRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRule;

CasesCaseRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRule;

CasesCaseRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CasesCaseRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CasesCaseRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CasesCaseRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CasesCaseRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CasesCaseRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.caseRuleArn">caseRuleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.caseRuleId">caseRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference">CasesCaseRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList">CasesCaseRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.domainIdInput">domainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.ruleInput">ruleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule">CasesCaseRuleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `caseRuleArn`<sup>Required</sup> <a name="caseRuleArn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.caseRuleArn"></a>

```java
public java.lang.String getCaseRuleArn();
```

- *Type:* java.lang.String

---

##### `caseRuleId`<sup>Required</sup> <a name="caseRuleId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.caseRuleId"></a>

```java
public java.lang.String getCaseRuleId();
```

- *Type:* java.lang.String

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.lastModifiedTime"></a>

```java
public java.lang.String getLastModifiedTime();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.rule"></a>

```java
public CasesCaseRuleRuleOutputReference getRule();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference">CasesCaseRuleRuleOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.tags"></a>

```java
public CasesCaseRuleTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList">CasesCaseRuleTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.domainIdInput"></a>

```java
public java.lang.String getDomainIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.ruleInput"></a>

```java
public IResolvable|CasesCaseRuleRule getRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule">CasesCaseRuleRule</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CasesCaseRuleTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CasesCaseRuleConfig <a name="CasesCaseRuleConfig" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleConfig;

CasesCaseRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .rule(CasesCaseRuleRule)
//  .description(java.lang.String)
//  .domainId(java.lang.String)
//  .tags(IResolvable|java.util.List<CasesCaseRuleTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | A descriptive name for the case rule. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule">CasesCaseRuleRule</a></code> | Defines the rule behavior and conditions. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description explaining the purpose and behavior of this case rule. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.domainId">domainId</a></code> | <code>java.lang.String</code> | The unique identifier of the Cases domain. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a>></code> | The tags that you attach to this case rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A descriptive name for the case rule.

Must be unique within the domain and should clearly indicate the rule's purpose (e.g., 'Priority Field Required for Urgent Cases').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#name CasesCaseRule#name}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.rule"></a>

```java
public CasesCaseRuleRule getRule();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule">CasesCaseRuleRule</a>

Defines the rule behavior and conditions.

Specifies the rule type and the conditions under which it applies. In the Amazon Connect admin website, this corresponds to case field conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#rule CasesCaseRule#rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description explaining the purpose and behavior of this case rule.

Helps administrators understand when and why this rule applies to case fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#description CasesCaseRule#description}

---

##### `domainId`<sup>Optional</sup> <a name="domainId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

The unique identifier of the Cases domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#domain_id CasesCaseRule#domain_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CasesCaseRuleTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a>>

The tags that you attach to this case rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#tags CasesCaseRule#tags}

---

### CasesCaseRuleRule <a name="CasesCaseRuleRule" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRule;

CasesCaseRuleRule.builder()
//  .hidden(CasesCaseRuleRuleHidden)
//  .required(CasesCaseRuleRuleRequired)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule.property.hidden">hidden</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden">CasesCaseRuleRuleHidden</a></code> | Hidden rule type, used to indicate whether a field is hidden. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule.property.required">required</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired">CasesCaseRuleRuleRequired</a></code> | A required rule type, used to indicate whether a field is required. |

---

##### `hidden`<sup>Optional</sup> <a name="hidden" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule.property.hidden"></a>

```java
public CasesCaseRuleRuleHidden getHidden();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden">CasesCaseRuleRuleHidden</a>

Hidden rule type, used to indicate whether a field is hidden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#hidden CasesCaseRule#hidden}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule.property.required"></a>

```java
public CasesCaseRuleRuleRequired getRequired();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired">CasesCaseRuleRuleRequired</a>

A required rule type, used to indicate whether a field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#required CasesCaseRule#required}

---

### CasesCaseRuleRuleHidden <a name="CasesCaseRuleRuleHidden" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleHidden;

CasesCaseRuleRuleHidden.builder()
//  .conditions(IResolvable|java.util.List<CasesCaseRuleRuleHiddenConditions>)
//  .defaultValue(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden.property.conditions">conditions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions">CasesCaseRuleRuleHiddenConditions</a>></code> | List of conditions for the hidden rule; |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden.property.defaultValue">defaultValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The value of the rule (i.e. whether the field is hidden) should none of the conditions evaluate to true. |

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden.property.conditions"></a>

```java
public IResolvable|java.util.List<CasesCaseRuleRuleHiddenConditions> getConditions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions">CasesCaseRuleRuleHiddenConditions</a>>

List of conditions for the hidden rule;

the first condition to evaluate to true dictates the value of the rule

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#conditions CasesCaseRule#conditions}

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden.property.defaultValue"></a>

```java
public java.lang.Boolean|IResolvable getDefaultValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The value of the rule (i.e. whether the field is hidden) should none of the conditions evaluate to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#default_value CasesCaseRule#default_value}

---

### CasesCaseRuleRuleHiddenConditions <a name="CasesCaseRuleRuleHiddenConditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleHiddenConditions;

CasesCaseRuleRuleHiddenConditions.builder()
//  .equalTo(CasesCaseRuleRuleHiddenConditionsEqualTo)
//  .notEqualTo(CasesCaseRuleRuleHiddenConditionsNotEqualTo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions.property.equalTo">equalTo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo">CasesCaseRuleRuleHiddenConditionsEqualTo</a></code> | Boolean operands for a condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions.property.notEqualTo">notEqualTo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo">CasesCaseRuleRuleHiddenConditionsNotEqualTo</a></code> | Boolean operands for a condition. |

---

##### `equalTo`<sup>Optional</sup> <a name="equalTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions.property.equalTo"></a>

```java
public CasesCaseRuleRuleHiddenConditionsEqualTo getEqualTo();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo">CasesCaseRuleRuleHiddenConditionsEqualTo</a>

Boolean operands for a condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#equal_to CasesCaseRule#equal_to}

---

##### `notEqualTo`<sup>Optional</sup> <a name="notEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions.property.notEqualTo"></a>

```java
public CasesCaseRuleRuleHiddenConditionsNotEqualTo getNotEqualTo();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo">CasesCaseRuleRuleHiddenConditionsNotEqualTo</a>

Boolean operands for a condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#not_equal_to CasesCaseRule#not_equal_to}

---

### CasesCaseRuleRuleHiddenConditionsEqualTo <a name="CasesCaseRuleRuleHiddenConditionsEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleHiddenConditionsEqualTo;

CasesCaseRuleRuleHiddenConditionsEqualTo.builder()
//  .operandOne(CasesCaseRuleRuleHiddenConditionsEqualToOperandOne)
//  .operandTwo(CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo)
//  .result(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo.property.operandOne">operandOne</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsEqualToOperandOne</a></code> | The left hand operand in the condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo.property.operandTwo">operandTwo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo</a></code> | The right hand operand in the condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo.property.result">result</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The value of the outer rule if the condition evaluates to true. |

---

##### `operandOne`<sup>Optional</sup> <a name="operandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo.property.operandOne"></a>

```java
public CasesCaseRuleRuleHiddenConditionsEqualToOperandOne getOperandOne();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsEqualToOperandOne</a>

The left hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#operand_one CasesCaseRule#operand_one}

---

##### `operandTwo`<sup>Optional</sup> <a name="operandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo.property.operandTwo"></a>

```java
public CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo getOperandTwo();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo</a>

The right hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#operand_two CasesCaseRule#operand_two}

---

##### `result`<sup>Optional</sup> <a name="result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo.property.result"></a>

```java
public java.lang.Boolean|IResolvable getResult();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The value of the outer rule if the condition evaluates to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#result CasesCaseRule#result}

---

### CasesCaseRuleRuleHiddenConditionsEqualToOperandOne <a name="CasesCaseRuleRuleHiddenConditionsEqualToOperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne;

CasesCaseRuleRuleHiddenConditionsEqualToOperandOne.builder()
//  .fieldId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne.property.fieldId">fieldId</a></code> | <code>java.lang.String</code> | The field ID this operand should take the value of. |

---

##### `fieldId`<sup>Optional</sup> <a name="fieldId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne.property.fieldId"></a>

```java
public java.lang.String getFieldId();
```

- *Type:* java.lang.String

The field ID this operand should take the value of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#field_id CasesCaseRule#field_id}

---

### CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo <a name="CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo;

CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.builder()
//  .booleanValue(java.lang.Boolean|IResolvable)
//  .doubleValue(java.lang.Number)
//  .emptyValue(java.lang.String)
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.property.booleanValue">booleanValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean value to compare against the field value in the condition evaluation. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.property.doubleValue">doubleValue</a></code> | <code>java.lang.Number</code> | A numeric value to compare against the field value in the condition evaluation. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.property.emptyValue">emptyValue</a></code> | <code>java.lang.String</code> | An empty operand value. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | A string value to compare against the field value in the condition evaluation. |

---

##### `booleanValue`<sup>Optional</sup> <a name="booleanValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.property.booleanValue"></a>

```java
public java.lang.Boolean|IResolvable getBooleanValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#boolean_value CasesCaseRule#boolean_value}

---

##### `doubleValue`<sup>Optional</sup> <a name="doubleValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.property.doubleValue"></a>

```java
public java.lang.Number getDoubleValue();
```

- *Type:* java.lang.Number

A numeric value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#double_value CasesCaseRule#double_value}

---

##### `emptyValue`<sup>Optional</sup> <a name="emptyValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.property.emptyValue"></a>

```java
public java.lang.String getEmptyValue();
```

- *Type:* java.lang.String

An empty operand value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#empty_value CasesCaseRule#empty_value}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

A string value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#string_value CasesCaseRule#string_value}

---

### CasesCaseRuleRuleHiddenConditionsNotEqualTo <a name="CasesCaseRuleRuleHiddenConditionsNotEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleHiddenConditionsNotEqualTo;

CasesCaseRuleRuleHiddenConditionsNotEqualTo.builder()
//  .operandOne(CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne)
//  .operandTwo(CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo)
//  .result(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo.property.operandOne">operandOne</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne</a></code> | The left hand operand in the condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo.property.operandTwo">operandTwo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo</a></code> | The right hand operand in the condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo.property.result">result</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The value of the outer rule if the condition evaluates to true. |

---

##### `operandOne`<sup>Optional</sup> <a name="operandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo.property.operandOne"></a>

```java
public CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne getOperandOne();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne</a>

The left hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#operand_one CasesCaseRule#operand_one}

---

##### `operandTwo`<sup>Optional</sup> <a name="operandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo.property.operandTwo"></a>

```java
public CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo getOperandTwo();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo</a>

The right hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#operand_two CasesCaseRule#operand_two}

---

##### `result`<sup>Optional</sup> <a name="result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo.property.result"></a>

```java
public java.lang.Boolean|IResolvable getResult();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The value of the outer rule if the condition evaluates to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#result CasesCaseRule#result}

---

### CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne <a name="CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne;

CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne.builder()
//  .fieldId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne.property.fieldId">fieldId</a></code> | <code>java.lang.String</code> | The field ID this operand should take the value of. |

---

##### `fieldId`<sup>Optional</sup> <a name="fieldId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne.property.fieldId"></a>

```java
public java.lang.String getFieldId();
```

- *Type:* java.lang.String

The field ID this operand should take the value of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#field_id CasesCaseRule#field_id}

---

### CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo <a name="CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo;

CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.builder()
//  .booleanValue(java.lang.Boolean|IResolvable)
//  .doubleValue(java.lang.Number)
//  .emptyValue(java.lang.String)
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.property.booleanValue">booleanValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean value to compare against the field value in the condition evaluation. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.property.doubleValue">doubleValue</a></code> | <code>java.lang.Number</code> | A numeric value to compare against the field value in the condition evaluation. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.property.emptyValue">emptyValue</a></code> | <code>java.lang.String</code> | An empty operand value. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | A string value to compare against the field value in the condition evaluation. |

---

##### `booleanValue`<sup>Optional</sup> <a name="booleanValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.property.booleanValue"></a>

```java
public java.lang.Boolean|IResolvable getBooleanValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#boolean_value CasesCaseRule#boolean_value}

---

##### `doubleValue`<sup>Optional</sup> <a name="doubleValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.property.doubleValue"></a>

```java
public java.lang.Number getDoubleValue();
```

- *Type:* java.lang.Number

A numeric value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#double_value CasesCaseRule#double_value}

---

##### `emptyValue`<sup>Optional</sup> <a name="emptyValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.property.emptyValue"></a>

```java
public java.lang.String getEmptyValue();
```

- *Type:* java.lang.String

An empty operand value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#empty_value CasesCaseRule#empty_value}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

A string value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#string_value CasesCaseRule#string_value}

---

### CasesCaseRuleRuleRequired <a name="CasesCaseRuleRuleRequired" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleRequired;

CasesCaseRuleRuleRequired.builder()
//  .conditions(IResolvable|java.util.List<CasesCaseRuleRuleRequiredConditions>)
//  .defaultValue(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired.property.conditions">conditions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions">CasesCaseRuleRuleRequiredConditions</a>></code> | An ordered list of boolean conditions that determine when the field should be required. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired.property.defaultValue">defaultValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The default required state for the field when none of the specified conditions are met. |

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired.property.conditions"></a>

```java
public IResolvable|java.util.List<CasesCaseRuleRuleRequiredConditions> getConditions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions">CasesCaseRuleRuleRequiredConditions</a>>

An ordered list of boolean conditions that determine when the field should be required.

Conditions are evaluated in order, and the first condition that evaluates to true determines whether the field is required, overriding the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#conditions CasesCaseRule#conditions}

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired.property.defaultValue"></a>

```java
public java.lang.Boolean|IResolvable getDefaultValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The default required state for the field when none of the specified conditions are met.

If true, the field is required by default; if false, the field is optional by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#default_value CasesCaseRule#default_value}

---

### CasesCaseRuleRuleRequiredConditions <a name="CasesCaseRuleRuleRequiredConditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleRequiredConditions;

CasesCaseRuleRuleRequiredConditions.builder()
//  .equalTo(CasesCaseRuleRuleRequiredConditionsEqualTo)
//  .notEqualTo(CasesCaseRuleRuleRequiredConditionsNotEqualTo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions.property.equalTo">equalTo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo">CasesCaseRuleRuleRequiredConditionsEqualTo</a></code> | Boolean operands for a condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions.property.notEqualTo">notEqualTo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo">CasesCaseRuleRuleRequiredConditionsNotEqualTo</a></code> | Boolean operands for a condition. |

---

##### `equalTo`<sup>Optional</sup> <a name="equalTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions.property.equalTo"></a>

```java
public CasesCaseRuleRuleRequiredConditionsEqualTo getEqualTo();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo">CasesCaseRuleRuleRequiredConditionsEqualTo</a>

Boolean operands for a condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#equal_to CasesCaseRule#equal_to}

---

##### `notEqualTo`<sup>Optional</sup> <a name="notEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions.property.notEqualTo"></a>

```java
public CasesCaseRuleRuleRequiredConditionsNotEqualTo getNotEqualTo();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo">CasesCaseRuleRuleRequiredConditionsNotEqualTo</a>

Boolean operands for a condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#not_equal_to CasesCaseRule#not_equal_to}

---

### CasesCaseRuleRuleRequiredConditionsEqualTo <a name="CasesCaseRuleRuleRequiredConditionsEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleRequiredConditionsEqualTo;

CasesCaseRuleRuleRequiredConditionsEqualTo.builder()
//  .operandOne(CasesCaseRuleRuleRequiredConditionsEqualToOperandOne)
//  .operandTwo(CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo)
//  .result(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo.property.operandOne">operandOne</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsEqualToOperandOne</a></code> | The left hand operand in the condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo.property.operandTwo">operandTwo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo</a></code> | The right hand operand in the condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo.property.result">result</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The value of the outer rule if the condition evaluates to true. |

---

##### `operandOne`<sup>Optional</sup> <a name="operandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo.property.operandOne"></a>

```java
public CasesCaseRuleRuleRequiredConditionsEqualToOperandOne getOperandOne();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsEqualToOperandOne</a>

The left hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#operand_one CasesCaseRule#operand_one}

---

##### `operandTwo`<sup>Optional</sup> <a name="operandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo.property.operandTwo"></a>

```java
public CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo getOperandTwo();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo</a>

The right hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#operand_two CasesCaseRule#operand_two}

---

##### `result`<sup>Optional</sup> <a name="result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo.property.result"></a>

```java
public java.lang.Boolean|IResolvable getResult();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The value of the outer rule if the condition evaluates to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#result CasesCaseRule#result}

---

### CasesCaseRuleRuleRequiredConditionsEqualToOperandOne <a name="CasesCaseRuleRuleRequiredConditionsEqualToOperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne;

CasesCaseRuleRuleRequiredConditionsEqualToOperandOne.builder()
//  .fieldId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne.property.fieldId">fieldId</a></code> | <code>java.lang.String</code> | The field ID this operand should take the value of. |

---

##### `fieldId`<sup>Optional</sup> <a name="fieldId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne.property.fieldId"></a>

```java
public java.lang.String getFieldId();
```

- *Type:* java.lang.String

The field ID this operand should take the value of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#field_id CasesCaseRule#field_id}

---

### CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo <a name="CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo;

CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.builder()
//  .booleanValue(java.lang.Boolean|IResolvable)
//  .doubleValue(java.lang.Number)
//  .emptyValue(java.lang.String)
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.property.booleanValue">booleanValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean value to compare against the field value in the condition evaluation. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.property.doubleValue">doubleValue</a></code> | <code>java.lang.Number</code> | A numeric value to compare against the field value in the condition evaluation. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.property.emptyValue">emptyValue</a></code> | <code>java.lang.String</code> | An empty operand value. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | A string value to compare against the field value in the condition evaluation. |

---

##### `booleanValue`<sup>Optional</sup> <a name="booleanValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.property.booleanValue"></a>

```java
public java.lang.Boolean|IResolvable getBooleanValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#boolean_value CasesCaseRule#boolean_value}

---

##### `doubleValue`<sup>Optional</sup> <a name="doubleValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.property.doubleValue"></a>

```java
public java.lang.Number getDoubleValue();
```

- *Type:* java.lang.Number

A numeric value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#double_value CasesCaseRule#double_value}

---

##### `emptyValue`<sup>Optional</sup> <a name="emptyValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.property.emptyValue"></a>

```java
public java.lang.String getEmptyValue();
```

- *Type:* java.lang.String

An empty operand value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#empty_value CasesCaseRule#empty_value}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

A string value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#string_value CasesCaseRule#string_value}

---

### CasesCaseRuleRuleRequiredConditionsNotEqualTo <a name="CasesCaseRuleRuleRequiredConditionsNotEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleRequiredConditionsNotEqualTo;

CasesCaseRuleRuleRequiredConditionsNotEqualTo.builder()
//  .operandOne(CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne)
//  .operandTwo(CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo)
//  .result(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo.property.operandOne">operandOne</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne</a></code> | The left hand operand in the condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo.property.operandTwo">operandTwo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo</a></code> | The right hand operand in the condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo.property.result">result</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The value of the outer rule if the condition evaluates to true. |

---

##### `operandOne`<sup>Optional</sup> <a name="operandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo.property.operandOne"></a>

```java
public CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne getOperandOne();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne</a>

The left hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#operand_one CasesCaseRule#operand_one}

---

##### `operandTwo`<sup>Optional</sup> <a name="operandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo.property.operandTwo"></a>

```java
public CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo getOperandTwo();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo</a>

The right hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#operand_two CasesCaseRule#operand_two}

---

##### `result`<sup>Optional</sup> <a name="result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo.property.result"></a>

```java
public java.lang.Boolean|IResolvable getResult();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The value of the outer rule if the condition evaluates to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#result CasesCaseRule#result}

---

### CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne <a name="CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne;

CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne.builder()
//  .fieldId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne.property.fieldId">fieldId</a></code> | <code>java.lang.String</code> | The field ID this operand should take the value of. |

---

##### `fieldId`<sup>Optional</sup> <a name="fieldId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne.property.fieldId"></a>

```java
public java.lang.String getFieldId();
```

- *Type:* java.lang.String

The field ID this operand should take the value of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#field_id CasesCaseRule#field_id}

---

### CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo <a name="CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo;

CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.builder()
//  .booleanValue(java.lang.Boolean|IResolvable)
//  .doubleValue(java.lang.Number)
//  .emptyValue(java.lang.String)
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.property.booleanValue">booleanValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean value to compare against the field value in the condition evaluation. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.property.doubleValue">doubleValue</a></code> | <code>java.lang.Number</code> | A numeric value to compare against the field value in the condition evaluation. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.property.emptyValue">emptyValue</a></code> | <code>java.lang.String</code> | An empty operand value. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | A string value to compare against the field value in the condition evaluation. |

---

##### `booleanValue`<sup>Optional</sup> <a name="booleanValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.property.booleanValue"></a>

```java
public java.lang.Boolean|IResolvable getBooleanValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#boolean_value CasesCaseRule#boolean_value}

---

##### `doubleValue`<sup>Optional</sup> <a name="doubleValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.property.doubleValue"></a>

```java
public java.lang.Number getDoubleValue();
```

- *Type:* java.lang.Number

A numeric value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#double_value CasesCaseRule#double_value}

---

##### `emptyValue`<sup>Optional</sup> <a name="emptyValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.property.emptyValue"></a>

```java
public java.lang.String getEmptyValue();
```

- *Type:* java.lang.String

An empty operand value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#empty_value CasesCaseRule#empty_value}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

A string value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#string_value CasesCaseRule#string_value}

---

### CasesCaseRuleTags <a name="CasesCaseRuleTags" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleTags;

CasesCaseRuleTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#key CasesCaseRule#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_case_rule#value CasesCaseRule#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference <a name="CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference;

new CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.resetFieldId">resetFieldId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFieldId` <a name="resetFieldId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.resetFieldId"></a>

```java
public void resetFieldId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.fieldIdInput">fieldIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.fieldId">fieldId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsEqualToOperandOne</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldIdInput`<sup>Optional</sup> <a name="fieldIdInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.fieldIdInput"></a>

```java
public java.lang.String getFieldIdInput();
```

- *Type:* java.lang.String

---

##### `fieldId`<sup>Required</sup> <a name="fieldId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.fieldId"></a>

```java
public java.lang.String getFieldId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesCaseRuleRuleHiddenConditionsEqualToOperandOne getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsEqualToOperandOne</a>

---


### CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference <a name="CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference;

new CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resetBooleanValue">resetBooleanValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resetDoubleValue">resetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resetEmptyValue">resetEmptyValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBooleanValue` <a name="resetBooleanValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resetBooleanValue"></a>

```java
public void resetBooleanValue()
```

##### `resetDoubleValue` <a name="resetDoubleValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resetDoubleValue"></a>

```java
public void resetDoubleValue()
```

##### `resetEmptyValue` <a name="resetEmptyValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resetEmptyValue"></a>

```java
public void resetEmptyValue()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.booleanValueInput">booleanValueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.doubleValueInput">doubleValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.emptyValueInput">emptyValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.booleanValue">booleanValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.doubleValue">doubleValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.emptyValue">emptyValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `booleanValueInput`<sup>Optional</sup> <a name="booleanValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.booleanValueInput"></a>

```java
public java.lang.Boolean|IResolvable getBooleanValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `doubleValueInput`<sup>Optional</sup> <a name="doubleValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.doubleValueInput"></a>

```java
public java.lang.Number getDoubleValueInput();
```

- *Type:* java.lang.Number

---

##### `emptyValueInput`<sup>Optional</sup> <a name="emptyValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.emptyValueInput"></a>

```java
public java.lang.String getEmptyValueInput();
```

- *Type:* java.lang.String

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `booleanValue`<sup>Required</sup> <a name="booleanValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.booleanValue"></a>

```java
public java.lang.Boolean|IResolvable getBooleanValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `doubleValue`<sup>Required</sup> <a name="doubleValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.doubleValue"></a>

```java
public java.lang.Number getDoubleValue();
```

- *Type:* java.lang.Number

---

##### `emptyValue`<sup>Required</sup> <a name="emptyValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.emptyValue"></a>

```java
public java.lang.String getEmptyValue();
```

- *Type:* java.lang.String

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo</a>

---


### CasesCaseRuleRuleHiddenConditionsEqualToOutputReference <a name="CasesCaseRuleRuleHiddenConditionsEqualToOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference;

new CasesCaseRuleRuleHiddenConditionsEqualToOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.putOperandOne">putOperandOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.putOperandTwo">putOperandTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resetOperandOne">resetOperandOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resetOperandTwo">resetOperandTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resetResult">resetResult</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperandOne` <a name="putOperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.putOperandOne"></a>

```java
public void putOperandOne(CasesCaseRuleRuleHiddenConditionsEqualToOperandOne value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.putOperandOne.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsEqualToOperandOne</a>

---

##### `putOperandTwo` <a name="putOperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.putOperandTwo"></a>

```java
public void putOperandTwo(CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.putOperandTwo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo</a>

---

##### `resetOperandOne` <a name="resetOperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resetOperandOne"></a>

```java
public void resetOperandOne()
```

##### `resetOperandTwo` <a name="resetOperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resetOperandTwo"></a>

```java
public void resetOperandTwo()
```

##### `resetResult` <a name="resetResult" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resetResult"></a>

```java
public void resetResult()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandOne">operandOne</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference">CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandTwo">operandTwo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference">CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandOneInput">operandOneInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsEqualToOperandOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandTwoInput">operandTwoInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.resultInput">resultInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.result">result</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo">CasesCaseRuleRuleHiddenConditionsEqualTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operandOne`<sup>Required</sup> <a name="operandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandOne"></a>

```java
public CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference getOperandOne();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference">CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference</a>

---

##### `operandTwo`<sup>Required</sup> <a name="operandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandTwo"></a>

```java
public CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference getOperandTwo();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference">CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference</a>

---

##### `operandOneInput`<sup>Optional</sup> <a name="operandOneInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandOneInput"></a>

```java
public IResolvable|CasesCaseRuleRuleHiddenConditionsEqualToOperandOne getOperandOneInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsEqualToOperandOne</a>

---

##### `operandTwoInput`<sup>Optional</sup> <a name="operandTwoInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandTwoInput"></a>

```java
public IResolvable|CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo getOperandTwoInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo</a>

---

##### `resultInput`<sup>Optional</sup> <a name="resultInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.resultInput"></a>

```java
public java.lang.Boolean|IResolvable getResultInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.result"></a>

```java
public java.lang.Boolean|IResolvable getResult();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesCaseRuleRuleHiddenConditionsEqualTo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo">CasesCaseRuleRuleHiddenConditionsEqualTo</a>

---


### CasesCaseRuleRuleHiddenConditionsList <a name="CasesCaseRuleRuleHiddenConditionsList" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleHiddenConditionsList;

new CasesCaseRuleRuleHiddenConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.get"></a>

```java
public CasesCaseRuleRuleHiddenConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions">CasesCaseRuleRuleHiddenConditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CasesCaseRuleRuleHiddenConditions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions">CasesCaseRuleRuleHiddenConditions</a>>

---


### CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference <a name="CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference;

new CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.resetFieldId">resetFieldId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFieldId` <a name="resetFieldId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.resetFieldId"></a>

```java
public void resetFieldId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.fieldIdInput">fieldIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.fieldId">fieldId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldIdInput`<sup>Optional</sup> <a name="fieldIdInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.fieldIdInput"></a>

```java
public java.lang.String getFieldIdInput();
```

- *Type:* java.lang.String

---

##### `fieldId`<sup>Required</sup> <a name="fieldId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.fieldId"></a>

```java
public java.lang.String getFieldId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne</a>

---


### CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference <a name="CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference;

new CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resetBooleanValue">resetBooleanValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resetDoubleValue">resetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resetEmptyValue">resetEmptyValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBooleanValue` <a name="resetBooleanValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resetBooleanValue"></a>

```java
public void resetBooleanValue()
```

##### `resetDoubleValue` <a name="resetDoubleValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resetDoubleValue"></a>

```java
public void resetDoubleValue()
```

##### `resetEmptyValue` <a name="resetEmptyValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resetEmptyValue"></a>

```java
public void resetEmptyValue()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.booleanValueInput">booleanValueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.doubleValueInput">doubleValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.emptyValueInput">emptyValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.booleanValue">booleanValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.doubleValue">doubleValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.emptyValue">emptyValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `booleanValueInput`<sup>Optional</sup> <a name="booleanValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.booleanValueInput"></a>

```java
public java.lang.Boolean|IResolvable getBooleanValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `doubleValueInput`<sup>Optional</sup> <a name="doubleValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.doubleValueInput"></a>

```java
public java.lang.Number getDoubleValueInput();
```

- *Type:* java.lang.Number

---

##### `emptyValueInput`<sup>Optional</sup> <a name="emptyValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.emptyValueInput"></a>

```java
public java.lang.String getEmptyValueInput();
```

- *Type:* java.lang.String

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `booleanValue`<sup>Required</sup> <a name="booleanValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.booleanValue"></a>

```java
public java.lang.Boolean|IResolvable getBooleanValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `doubleValue`<sup>Required</sup> <a name="doubleValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.doubleValue"></a>

```java
public java.lang.Number getDoubleValue();
```

- *Type:* java.lang.Number

---

##### `emptyValue`<sup>Required</sup> <a name="emptyValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.emptyValue"></a>

```java
public java.lang.String getEmptyValue();
```

- *Type:* java.lang.String

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo</a>

---


### CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference <a name="CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference;

new CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.putOperandOne">putOperandOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.putOperandTwo">putOperandTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resetOperandOne">resetOperandOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resetOperandTwo">resetOperandTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resetResult">resetResult</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperandOne` <a name="putOperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.putOperandOne"></a>

```java
public void putOperandOne(CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.putOperandOne.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne</a>

---

##### `putOperandTwo` <a name="putOperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.putOperandTwo"></a>

```java
public void putOperandTwo(CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.putOperandTwo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo</a>

---

##### `resetOperandOne` <a name="resetOperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resetOperandOne"></a>

```java
public void resetOperandOne()
```

##### `resetOperandTwo` <a name="resetOperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resetOperandTwo"></a>

```java
public void resetOperandTwo()
```

##### `resetResult` <a name="resetResult" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resetResult"></a>

```java
public void resetResult()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandOne">operandOne</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandTwo">operandTwo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandOneInput">operandOneInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandTwoInput">operandTwoInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.resultInput">resultInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.result">result</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo">CasesCaseRuleRuleHiddenConditionsNotEqualTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operandOne`<sup>Required</sup> <a name="operandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandOne"></a>

```java
public CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference getOperandOne();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference</a>

---

##### `operandTwo`<sup>Required</sup> <a name="operandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandTwo"></a>

```java
public CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference getOperandTwo();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference</a>

---

##### `operandOneInput`<sup>Optional</sup> <a name="operandOneInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandOneInput"></a>

```java
public IResolvable|CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne getOperandOneInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne</a>

---

##### `operandTwoInput`<sup>Optional</sup> <a name="operandTwoInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandTwoInput"></a>

```java
public IResolvable|CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo getOperandTwoInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo</a>

---

##### `resultInput`<sup>Optional</sup> <a name="resultInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.resultInput"></a>

```java
public java.lang.Boolean|IResolvable getResultInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.result"></a>

```java
public java.lang.Boolean|IResolvable getResult();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesCaseRuleRuleHiddenConditionsNotEqualTo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo">CasesCaseRuleRuleHiddenConditionsNotEqualTo</a>

---


### CasesCaseRuleRuleHiddenConditionsOutputReference <a name="CasesCaseRuleRuleHiddenConditionsOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleHiddenConditionsOutputReference;

new CasesCaseRuleRuleHiddenConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.putEqualTo">putEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.putNotEqualTo">putNotEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.resetEqualTo">resetEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.resetNotEqualTo">resetNotEqualTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEqualTo` <a name="putEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.putEqualTo"></a>

```java
public void putEqualTo(CasesCaseRuleRuleHiddenConditionsEqualTo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.putEqualTo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo">CasesCaseRuleRuleHiddenConditionsEqualTo</a>

---

##### `putNotEqualTo` <a name="putNotEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.putNotEqualTo"></a>

```java
public void putNotEqualTo(CasesCaseRuleRuleHiddenConditionsNotEqualTo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.putNotEqualTo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo">CasesCaseRuleRuleHiddenConditionsNotEqualTo</a>

---

##### `resetEqualTo` <a name="resetEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.resetEqualTo"></a>

```java
public void resetEqualTo()
```

##### `resetNotEqualTo` <a name="resetNotEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.resetNotEqualTo"></a>

```java
public void resetNotEqualTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.equalTo">equalTo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference">CasesCaseRuleRuleHiddenConditionsEqualToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.notEqualTo">notEqualTo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference">CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.equalToInput">equalToInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo">CasesCaseRuleRuleHiddenConditionsEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.notEqualToInput">notEqualToInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo">CasesCaseRuleRuleHiddenConditionsNotEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions">CasesCaseRuleRuleHiddenConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `equalTo`<sup>Required</sup> <a name="equalTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.equalTo"></a>

```java
public CasesCaseRuleRuleHiddenConditionsEqualToOutputReference getEqualTo();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference">CasesCaseRuleRuleHiddenConditionsEqualToOutputReference</a>

---

##### `notEqualTo`<sup>Required</sup> <a name="notEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.notEqualTo"></a>

```java
public CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference getNotEqualTo();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference">CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference</a>

---

##### `equalToInput`<sup>Optional</sup> <a name="equalToInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.equalToInput"></a>

```java
public IResolvable|CasesCaseRuleRuleHiddenConditionsEqualTo getEqualToInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo">CasesCaseRuleRuleHiddenConditionsEqualTo</a>

---

##### `notEqualToInput`<sup>Optional</sup> <a name="notEqualToInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.notEqualToInput"></a>

```java
public IResolvable|CasesCaseRuleRuleHiddenConditionsNotEqualTo getNotEqualToInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo">CasesCaseRuleRuleHiddenConditionsNotEqualTo</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesCaseRuleRuleHiddenConditions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions">CasesCaseRuleRuleHiddenConditions</a>

---


### CasesCaseRuleRuleHiddenOutputReference <a name="CasesCaseRuleRuleHiddenOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleHiddenOutputReference;

new CasesCaseRuleRuleHiddenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditions` <a name="putConditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.putConditions"></a>

```java
public void putConditions(IResolvable|java.util.List<CasesCaseRuleRuleHiddenConditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.putConditions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions">CasesCaseRuleRuleHiddenConditions</a>>

---

##### `resetConditions` <a name="resetConditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.resetConditions"></a>

```java
public void resetConditions()
```

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.resetDefaultValue"></a>

```java
public void resetDefaultValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList">CasesCaseRuleRuleHiddenConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions">CasesCaseRuleRuleHiddenConditions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.defaultValue">defaultValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden">CasesCaseRuleRuleHidden</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.conditions"></a>

```java
public CasesCaseRuleRuleHiddenConditionsList getConditions();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList">CasesCaseRuleRuleHiddenConditionsList</a>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.conditionsInput"></a>

```java
public IResolvable|java.util.List<CasesCaseRuleRuleHiddenConditions> getConditionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions">CasesCaseRuleRuleHiddenConditions</a>>

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.defaultValueInput"></a>

```java
public java.lang.Boolean|IResolvable getDefaultValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.defaultValue"></a>

```java
public java.lang.Boolean|IResolvable getDefaultValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesCaseRuleRuleHidden getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden">CasesCaseRuleRuleHidden</a>

---


### CasesCaseRuleRuleOutputReference <a name="CasesCaseRuleRuleOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleOutputReference;

new CasesCaseRuleRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.putHidden">putHidden</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.putRequired">putRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.resetHidden">resetHidden</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.resetRequired">resetRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHidden` <a name="putHidden" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.putHidden"></a>

```java
public void putHidden(CasesCaseRuleRuleHidden value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.putHidden.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden">CasesCaseRuleRuleHidden</a>

---

##### `putRequired` <a name="putRequired" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.putRequired"></a>

```java
public void putRequired(CasesCaseRuleRuleRequired value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.putRequired.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired">CasesCaseRuleRuleRequired</a>

---

##### `resetHidden` <a name="resetHidden" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.resetHidden"></a>

```java
public void resetHidden()
```

##### `resetRequired` <a name="resetRequired" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.resetRequired"></a>

```java
public void resetRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.hidden">hidden</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference">CasesCaseRuleRuleHiddenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.required">required</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference">CasesCaseRuleRuleRequiredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.hiddenInput">hiddenInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden">CasesCaseRuleRuleHidden</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.requiredInput">requiredInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired">CasesCaseRuleRuleRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule">CasesCaseRuleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hidden`<sup>Required</sup> <a name="hidden" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.hidden"></a>

```java
public CasesCaseRuleRuleHiddenOutputReference getHidden();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference">CasesCaseRuleRuleHiddenOutputReference</a>

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.required"></a>

```java
public CasesCaseRuleRuleRequiredOutputReference getRequired();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference">CasesCaseRuleRuleRequiredOutputReference</a>

---

##### `hiddenInput`<sup>Optional</sup> <a name="hiddenInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.hiddenInput"></a>

```java
public IResolvable|CasesCaseRuleRuleHidden getHiddenInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden">CasesCaseRuleRuleHidden</a>

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.requiredInput"></a>

```java
public IResolvable|CasesCaseRuleRuleRequired getRequiredInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired">CasesCaseRuleRuleRequired</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesCaseRuleRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule">CasesCaseRuleRule</a>

---


### CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference <a name="CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference;

new CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.resetFieldId">resetFieldId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFieldId` <a name="resetFieldId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.resetFieldId"></a>

```java
public void resetFieldId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.fieldIdInput">fieldIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.fieldId">fieldId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsEqualToOperandOne</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldIdInput`<sup>Optional</sup> <a name="fieldIdInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.fieldIdInput"></a>

```java
public java.lang.String getFieldIdInput();
```

- *Type:* java.lang.String

---

##### `fieldId`<sup>Required</sup> <a name="fieldId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.fieldId"></a>

```java
public java.lang.String getFieldId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesCaseRuleRuleRequiredConditionsEqualToOperandOne getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsEqualToOperandOne</a>

---


### CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference <a name="CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference;

new CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resetBooleanValue">resetBooleanValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resetDoubleValue">resetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resetEmptyValue">resetEmptyValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBooleanValue` <a name="resetBooleanValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resetBooleanValue"></a>

```java
public void resetBooleanValue()
```

##### `resetDoubleValue` <a name="resetDoubleValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resetDoubleValue"></a>

```java
public void resetDoubleValue()
```

##### `resetEmptyValue` <a name="resetEmptyValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resetEmptyValue"></a>

```java
public void resetEmptyValue()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.booleanValueInput">booleanValueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.doubleValueInput">doubleValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.emptyValueInput">emptyValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.booleanValue">booleanValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.doubleValue">doubleValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.emptyValue">emptyValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `booleanValueInput`<sup>Optional</sup> <a name="booleanValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.booleanValueInput"></a>

```java
public java.lang.Boolean|IResolvable getBooleanValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `doubleValueInput`<sup>Optional</sup> <a name="doubleValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.doubleValueInput"></a>

```java
public java.lang.Number getDoubleValueInput();
```

- *Type:* java.lang.Number

---

##### `emptyValueInput`<sup>Optional</sup> <a name="emptyValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.emptyValueInput"></a>

```java
public java.lang.String getEmptyValueInput();
```

- *Type:* java.lang.String

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `booleanValue`<sup>Required</sup> <a name="booleanValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.booleanValue"></a>

```java
public java.lang.Boolean|IResolvable getBooleanValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `doubleValue`<sup>Required</sup> <a name="doubleValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.doubleValue"></a>

```java
public java.lang.Number getDoubleValue();
```

- *Type:* java.lang.Number

---

##### `emptyValue`<sup>Required</sup> <a name="emptyValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.emptyValue"></a>

```java
public java.lang.String getEmptyValue();
```

- *Type:* java.lang.String

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo</a>

---


### CasesCaseRuleRuleRequiredConditionsEqualToOutputReference <a name="CasesCaseRuleRuleRequiredConditionsEqualToOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference;

new CasesCaseRuleRuleRequiredConditionsEqualToOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.putOperandOne">putOperandOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.putOperandTwo">putOperandTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resetOperandOne">resetOperandOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resetOperandTwo">resetOperandTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resetResult">resetResult</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperandOne` <a name="putOperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.putOperandOne"></a>

```java
public void putOperandOne(CasesCaseRuleRuleRequiredConditionsEqualToOperandOne value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.putOperandOne.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsEqualToOperandOne</a>

---

##### `putOperandTwo` <a name="putOperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.putOperandTwo"></a>

```java
public void putOperandTwo(CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.putOperandTwo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo</a>

---

##### `resetOperandOne` <a name="resetOperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resetOperandOne"></a>

```java
public void resetOperandOne()
```

##### `resetOperandTwo` <a name="resetOperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resetOperandTwo"></a>

```java
public void resetOperandTwo()
```

##### `resetResult` <a name="resetResult" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resetResult"></a>

```java
public void resetResult()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandOne">operandOne</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference">CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandTwo">operandTwo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference">CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandOneInput">operandOneInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsEqualToOperandOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandTwoInput">operandTwoInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.resultInput">resultInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.result">result</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo">CasesCaseRuleRuleRequiredConditionsEqualTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operandOne`<sup>Required</sup> <a name="operandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandOne"></a>

```java
public CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference getOperandOne();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference">CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference</a>

---

##### `operandTwo`<sup>Required</sup> <a name="operandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandTwo"></a>

```java
public CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference getOperandTwo();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference">CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference</a>

---

##### `operandOneInput`<sup>Optional</sup> <a name="operandOneInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandOneInput"></a>

```java
public IResolvable|CasesCaseRuleRuleRequiredConditionsEqualToOperandOne getOperandOneInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsEqualToOperandOne</a>

---

##### `operandTwoInput`<sup>Optional</sup> <a name="operandTwoInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandTwoInput"></a>

```java
public IResolvable|CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo getOperandTwoInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo</a>

---

##### `resultInput`<sup>Optional</sup> <a name="resultInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.resultInput"></a>

```java
public java.lang.Boolean|IResolvable getResultInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.result"></a>

```java
public java.lang.Boolean|IResolvable getResult();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesCaseRuleRuleRequiredConditionsEqualTo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo">CasesCaseRuleRuleRequiredConditionsEqualTo</a>

---


### CasesCaseRuleRuleRequiredConditionsList <a name="CasesCaseRuleRuleRequiredConditionsList" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleRequiredConditionsList;

new CasesCaseRuleRuleRequiredConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.get"></a>

```java
public CasesCaseRuleRuleRequiredConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions">CasesCaseRuleRuleRequiredConditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CasesCaseRuleRuleRequiredConditions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions">CasesCaseRuleRuleRequiredConditions</a>>

---


### CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference <a name="CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference;

new CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.resetFieldId">resetFieldId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFieldId` <a name="resetFieldId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.resetFieldId"></a>

```java
public void resetFieldId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.fieldIdInput">fieldIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.fieldId">fieldId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldIdInput`<sup>Optional</sup> <a name="fieldIdInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.fieldIdInput"></a>

```java
public java.lang.String getFieldIdInput();
```

- *Type:* java.lang.String

---

##### `fieldId`<sup>Required</sup> <a name="fieldId" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.fieldId"></a>

```java
public java.lang.String getFieldId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne</a>

---


### CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference <a name="CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference;

new CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resetBooleanValue">resetBooleanValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resetDoubleValue">resetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resetEmptyValue">resetEmptyValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBooleanValue` <a name="resetBooleanValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resetBooleanValue"></a>

```java
public void resetBooleanValue()
```

##### `resetDoubleValue` <a name="resetDoubleValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resetDoubleValue"></a>

```java
public void resetDoubleValue()
```

##### `resetEmptyValue` <a name="resetEmptyValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resetEmptyValue"></a>

```java
public void resetEmptyValue()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.booleanValueInput">booleanValueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.doubleValueInput">doubleValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.emptyValueInput">emptyValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.booleanValue">booleanValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.doubleValue">doubleValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.emptyValue">emptyValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `booleanValueInput`<sup>Optional</sup> <a name="booleanValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.booleanValueInput"></a>

```java
public java.lang.Boolean|IResolvable getBooleanValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `doubleValueInput`<sup>Optional</sup> <a name="doubleValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.doubleValueInput"></a>

```java
public java.lang.Number getDoubleValueInput();
```

- *Type:* java.lang.Number

---

##### `emptyValueInput`<sup>Optional</sup> <a name="emptyValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.emptyValueInput"></a>

```java
public java.lang.String getEmptyValueInput();
```

- *Type:* java.lang.String

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `booleanValue`<sup>Required</sup> <a name="booleanValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.booleanValue"></a>

```java
public java.lang.Boolean|IResolvable getBooleanValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `doubleValue`<sup>Required</sup> <a name="doubleValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.doubleValue"></a>

```java
public java.lang.Number getDoubleValue();
```

- *Type:* java.lang.Number

---

##### `emptyValue`<sup>Required</sup> <a name="emptyValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.emptyValue"></a>

```java
public java.lang.String getEmptyValue();
```

- *Type:* java.lang.String

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo</a>

---


### CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference <a name="CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference;

new CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.putOperandOne">putOperandOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.putOperandTwo">putOperandTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resetOperandOne">resetOperandOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resetOperandTwo">resetOperandTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resetResult">resetResult</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperandOne` <a name="putOperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.putOperandOne"></a>

```java
public void putOperandOne(CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.putOperandOne.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne</a>

---

##### `putOperandTwo` <a name="putOperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.putOperandTwo"></a>

```java
public void putOperandTwo(CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.putOperandTwo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo</a>

---

##### `resetOperandOne` <a name="resetOperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resetOperandOne"></a>

```java
public void resetOperandOne()
```

##### `resetOperandTwo` <a name="resetOperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resetOperandTwo"></a>

```java
public void resetOperandTwo()
```

##### `resetResult` <a name="resetResult" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resetResult"></a>

```java
public void resetResult()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandOne">operandOne</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandTwo">operandTwo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandOneInput">operandOneInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandTwoInput">operandTwoInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.resultInput">resultInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.result">result</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo">CasesCaseRuleRuleRequiredConditionsNotEqualTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operandOne`<sup>Required</sup> <a name="operandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandOne"></a>

```java
public CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference getOperandOne();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference</a>

---

##### `operandTwo`<sup>Required</sup> <a name="operandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandTwo"></a>

```java
public CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference getOperandTwo();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference</a>

---

##### `operandOneInput`<sup>Optional</sup> <a name="operandOneInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandOneInput"></a>

```java
public IResolvable|CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne getOperandOneInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne</a>

---

##### `operandTwoInput`<sup>Optional</sup> <a name="operandTwoInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandTwoInput"></a>

```java
public IResolvable|CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo getOperandTwoInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo</a>

---

##### `resultInput`<sup>Optional</sup> <a name="resultInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.resultInput"></a>

```java
public java.lang.Boolean|IResolvable getResultInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.result"></a>

```java
public java.lang.Boolean|IResolvable getResult();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesCaseRuleRuleRequiredConditionsNotEqualTo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo">CasesCaseRuleRuleRequiredConditionsNotEqualTo</a>

---


### CasesCaseRuleRuleRequiredConditionsOutputReference <a name="CasesCaseRuleRuleRequiredConditionsOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleRequiredConditionsOutputReference;

new CasesCaseRuleRuleRequiredConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.putEqualTo">putEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.putNotEqualTo">putNotEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.resetEqualTo">resetEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.resetNotEqualTo">resetNotEqualTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEqualTo` <a name="putEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.putEqualTo"></a>

```java
public void putEqualTo(CasesCaseRuleRuleRequiredConditionsEqualTo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.putEqualTo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo">CasesCaseRuleRuleRequiredConditionsEqualTo</a>

---

##### `putNotEqualTo` <a name="putNotEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.putNotEqualTo"></a>

```java
public void putNotEqualTo(CasesCaseRuleRuleRequiredConditionsNotEqualTo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.putNotEqualTo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo">CasesCaseRuleRuleRequiredConditionsNotEqualTo</a>

---

##### `resetEqualTo` <a name="resetEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.resetEqualTo"></a>

```java
public void resetEqualTo()
```

##### `resetNotEqualTo` <a name="resetNotEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.resetNotEqualTo"></a>

```java
public void resetNotEqualTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.equalTo">equalTo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference">CasesCaseRuleRuleRequiredConditionsEqualToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.notEqualTo">notEqualTo</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference">CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.equalToInput">equalToInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo">CasesCaseRuleRuleRequiredConditionsEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.notEqualToInput">notEqualToInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo">CasesCaseRuleRuleRequiredConditionsNotEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions">CasesCaseRuleRuleRequiredConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `equalTo`<sup>Required</sup> <a name="equalTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.equalTo"></a>

```java
public CasesCaseRuleRuleRequiredConditionsEqualToOutputReference getEqualTo();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference">CasesCaseRuleRuleRequiredConditionsEqualToOutputReference</a>

---

##### `notEqualTo`<sup>Required</sup> <a name="notEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.notEqualTo"></a>

```java
public CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference getNotEqualTo();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference">CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference</a>

---

##### `equalToInput`<sup>Optional</sup> <a name="equalToInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.equalToInput"></a>

```java
public IResolvable|CasesCaseRuleRuleRequiredConditionsEqualTo getEqualToInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo">CasesCaseRuleRuleRequiredConditionsEqualTo</a>

---

##### `notEqualToInput`<sup>Optional</sup> <a name="notEqualToInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.notEqualToInput"></a>

```java
public IResolvable|CasesCaseRuleRuleRequiredConditionsNotEqualTo getNotEqualToInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo">CasesCaseRuleRuleRequiredConditionsNotEqualTo</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesCaseRuleRuleRequiredConditions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions">CasesCaseRuleRuleRequiredConditions</a>

---


### CasesCaseRuleRuleRequiredOutputReference <a name="CasesCaseRuleRuleRequiredOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleRuleRequiredOutputReference;

new CasesCaseRuleRuleRequiredOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditions` <a name="putConditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.putConditions"></a>

```java
public void putConditions(IResolvable|java.util.List<CasesCaseRuleRuleRequiredConditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.putConditions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions">CasesCaseRuleRuleRequiredConditions</a>>

---

##### `resetConditions` <a name="resetConditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.resetConditions"></a>

```java
public void resetConditions()
```

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.resetDefaultValue"></a>

```java
public void resetDefaultValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList">CasesCaseRuleRuleRequiredConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions">CasesCaseRuleRuleRequiredConditions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.defaultValue">defaultValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired">CasesCaseRuleRuleRequired</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.conditions"></a>

```java
public CasesCaseRuleRuleRequiredConditionsList getConditions();
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList">CasesCaseRuleRuleRequiredConditionsList</a>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.conditionsInput"></a>

```java
public IResolvable|java.util.List<CasesCaseRuleRuleRequiredConditions> getConditionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions">CasesCaseRuleRuleRequiredConditions</a>>

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.defaultValueInput"></a>

```java
public java.lang.Boolean|IResolvable getDefaultValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.defaultValue"></a>

```java
public java.lang.Boolean|IResolvable getDefaultValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesCaseRuleRuleRequired getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired">CasesCaseRuleRuleRequired</a>

---


### CasesCaseRuleTagsList <a name="CasesCaseRuleTagsList" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleTagsList;

new CasesCaseRuleTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.get"></a>

```java
public CasesCaseRuleTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CasesCaseRuleTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a>>

---


### CasesCaseRuleTagsOutputReference <a name="CasesCaseRuleTagsOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cases_case_rule.CasesCaseRuleTagsOutputReference;

new CasesCaseRuleTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CasesCaseRuleTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a>

---



