# `inspectorAssessmentTemplate` Submodule <a name="`inspectorAssessmentTemplate` Submodule" id="@cdktn/provider-awscc.inspectorAssessmentTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InspectorAssessmentTemplate <a name="InspectorAssessmentTemplate" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspector_assessment_template awscc_inspector_assessment_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspector_assessment_template.InspectorAssessmentTemplate;

InspectorAssessmentTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .assessmentTargetArn(java.lang.String)
    .durationInSeconds(java.lang.Number)
    .rulesPackageArns(java.util.List<java.lang.String>)
//  .assessmentTemplateName(java.lang.String)
//  .userAttributesForFindings(IResolvable|java.util.List<InspectorAssessmentTemplateUserAttributesForFindings>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.assessmentTargetArn">assessmentTargetArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspector_assessment_template#assessment_target_arn InspectorAssessmentTemplate#assessment_target_arn}. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.durationInSeconds">durationInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspector_assessment_template#duration_in_seconds InspectorAssessmentTemplate#duration_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.rulesPackageArns">rulesPackageArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspector_assessment_template#rules_package_arns InspectorAssessmentTemplate#rules_package_arns}. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.assessmentTemplateName">assessmentTemplateName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspector_assessment_template#assessment_template_name InspectorAssessmentTemplate#assessment_template_name}. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.userAttributesForFindings">userAttributesForFindings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspector_assessment_template#user_attributes_for_findings InspectorAssessmentTemplate#user_attributes_for_findings}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `assessmentTargetArn`<sup>Required</sup> <a name="assessmentTargetArn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.assessmentTargetArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspector_assessment_template#assessment_target_arn InspectorAssessmentTemplate#assessment_target_arn}.

---

##### `durationInSeconds`<sup>Required</sup> <a name="durationInSeconds" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.durationInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspector_assessment_template#duration_in_seconds InspectorAssessmentTemplate#duration_in_seconds}.

---

##### `rulesPackageArns`<sup>Required</sup> <a name="rulesPackageArns" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.rulesPackageArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspector_assessment_template#rules_package_arns InspectorAssessmentTemplate#rules_package_arns}.

---

##### `assessmentTemplateName`<sup>Optional</sup> <a name="assessmentTemplateName" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.assessmentTemplateName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspector_assessment_template#assessment_template_name InspectorAssessmentTemplate#assessment_template_name}.

---

##### `userAttributesForFindings`<sup>Optional</sup> <a name="userAttributesForFindings" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.userAttributesForFindings"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspector_assessment_template#user_attributes_for_findings InspectorAssessmentTemplate#user_attributes_for_findings}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.putUserAttributesForFindings">putUserAttributesForFindings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetAssessmentTemplateName">resetAssessmentTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetUserAttributesForFindings">resetUserAttributesForFindings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putUserAttributesForFindings` <a name="putUserAttributesForFindings" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.putUserAttributesForFindings"></a>

```java
public void putUserAttributesForFindings(IResolvable|java.util.List<InspectorAssessmentTemplateUserAttributesForFindings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.putUserAttributesForFindings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>>

---

##### `resetAssessmentTemplateName` <a name="resetAssessmentTemplateName" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetAssessmentTemplateName"></a>

```java
public void resetAssessmentTemplateName()
```

##### `resetUserAttributesForFindings` <a name="resetUserAttributesForFindings" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetUserAttributesForFindings"></a>

```java
public void resetUserAttributesForFindings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a InspectorAssessmentTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isConstruct"></a>

```java
import io.cdktn.providers.awscc.inspector_assessment_template.InspectorAssessmentTemplate;

InspectorAssessmentTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.inspector_assessment_template.InspectorAssessmentTemplate;

InspectorAssessmentTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.inspector_assessment_template.InspectorAssessmentTemplate;

InspectorAssessmentTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.inspector_assessment_template.InspectorAssessmentTemplate;

InspectorAssessmentTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),InspectorAssessmentTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a InspectorAssessmentTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the InspectorAssessmentTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing InspectorAssessmentTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspector_assessment_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the InspectorAssessmentTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.userAttributesForFindings">userAttributesForFindings</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList">InspectorAssessmentTemplateUserAttributesForFindingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTargetArnInput">assessmentTargetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTemplateNameInput">assessmentTemplateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.durationInSecondsInput">durationInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.rulesPackageArnsInput">rulesPackageArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.userAttributesForFindingsInput">userAttributesForFindingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTargetArn">assessmentTargetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTemplateName">assessmentTemplateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.durationInSeconds">durationInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.rulesPackageArns">rulesPackageArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `userAttributesForFindings`<sup>Required</sup> <a name="userAttributesForFindings" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.userAttributesForFindings"></a>

```java
public InspectorAssessmentTemplateUserAttributesForFindingsList getUserAttributesForFindings();
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList">InspectorAssessmentTemplateUserAttributesForFindingsList</a>

---

##### `assessmentTargetArnInput`<sup>Optional</sup> <a name="assessmentTargetArnInput" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTargetArnInput"></a>

```java
public java.lang.String getAssessmentTargetArnInput();
```

- *Type:* java.lang.String

---

##### `assessmentTemplateNameInput`<sup>Optional</sup> <a name="assessmentTemplateNameInput" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTemplateNameInput"></a>

```java
public java.lang.String getAssessmentTemplateNameInput();
```

- *Type:* java.lang.String

---

##### `durationInSecondsInput`<sup>Optional</sup> <a name="durationInSecondsInput" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.durationInSecondsInput"></a>

```java
public java.lang.Number getDurationInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `rulesPackageArnsInput`<sup>Optional</sup> <a name="rulesPackageArnsInput" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.rulesPackageArnsInput"></a>

```java
public java.util.List<java.lang.String> getRulesPackageArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userAttributesForFindingsInput`<sup>Optional</sup> <a name="userAttributesForFindingsInput" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.userAttributesForFindingsInput"></a>

```java
public IResolvable|java.util.List<InspectorAssessmentTemplateUserAttributesForFindings> getUserAttributesForFindingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>>

---

##### `assessmentTargetArn`<sup>Required</sup> <a name="assessmentTargetArn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTargetArn"></a>

```java
public java.lang.String getAssessmentTargetArn();
```

- *Type:* java.lang.String

---

##### `assessmentTemplateName`<sup>Required</sup> <a name="assessmentTemplateName" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTemplateName"></a>

```java
public java.lang.String getAssessmentTemplateName();
```

- *Type:* java.lang.String

---

##### `durationInSeconds`<sup>Required</sup> <a name="durationInSeconds" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.durationInSeconds"></a>

```java
public java.lang.Number getDurationInSeconds();
```

- *Type:* java.lang.Number

---

##### `rulesPackageArns`<sup>Required</sup> <a name="rulesPackageArns" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.rulesPackageArns"></a>

```java
public java.util.List<java.lang.String> getRulesPackageArns();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### InspectorAssessmentTemplateConfig <a name="InspectorAssessmentTemplateConfig" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspector_assessment_template.InspectorAssessmentTemplateConfig;

InspectorAssessmentTemplateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .assessmentTargetArn(java.lang.String)
    .durationInSeconds(java.lang.Number)
    .rulesPackageArns(java.util.List<java.lang.String>)
//  .assessmentTemplateName(java.lang.String)
//  .userAttributesForFindings(IResolvable|java.util.List<InspectorAssessmentTemplateUserAttributesForFindings>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.assessmentTargetArn">assessmentTargetArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspector_assessment_template#assessment_target_arn InspectorAssessmentTemplate#assessment_target_arn}. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.durationInSeconds">durationInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspector_assessment_template#duration_in_seconds InspectorAssessmentTemplate#duration_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.rulesPackageArns">rulesPackageArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspector_assessment_template#rules_package_arns InspectorAssessmentTemplate#rules_package_arns}. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.assessmentTemplateName">assessmentTemplateName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspector_assessment_template#assessment_template_name InspectorAssessmentTemplate#assessment_template_name}. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.userAttributesForFindings">userAttributesForFindings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspector_assessment_template#user_attributes_for_findings InspectorAssessmentTemplate#user_attributes_for_findings}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `assessmentTargetArn`<sup>Required</sup> <a name="assessmentTargetArn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.assessmentTargetArn"></a>

```java
public java.lang.String getAssessmentTargetArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspector_assessment_template#assessment_target_arn InspectorAssessmentTemplate#assessment_target_arn}.

---

##### `durationInSeconds`<sup>Required</sup> <a name="durationInSeconds" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.durationInSeconds"></a>

```java
public java.lang.Number getDurationInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspector_assessment_template#duration_in_seconds InspectorAssessmentTemplate#duration_in_seconds}.

---

##### `rulesPackageArns`<sup>Required</sup> <a name="rulesPackageArns" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.rulesPackageArns"></a>

```java
public java.util.List<java.lang.String> getRulesPackageArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspector_assessment_template#rules_package_arns InspectorAssessmentTemplate#rules_package_arns}.

---

##### `assessmentTemplateName`<sup>Optional</sup> <a name="assessmentTemplateName" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.assessmentTemplateName"></a>

```java
public java.lang.String getAssessmentTemplateName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspector_assessment_template#assessment_template_name InspectorAssessmentTemplate#assessment_template_name}.

---

##### `userAttributesForFindings`<sup>Optional</sup> <a name="userAttributesForFindings" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.userAttributesForFindings"></a>

```java
public IResolvable|java.util.List<InspectorAssessmentTemplateUserAttributesForFindings> getUserAttributesForFindings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspector_assessment_template#user_attributes_for_findings InspectorAssessmentTemplate#user_attributes_for_findings}.

---

### InspectorAssessmentTemplateUserAttributesForFindings <a name="InspectorAssessmentTemplateUserAttributesForFindings" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspector_assessment_template.InspectorAssessmentTemplateUserAttributesForFindings;

InspectorAssessmentTemplateUserAttributesForFindings.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspector_assessment_template#key InspectorAssessmentTemplate#key}. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspector_assessment_template#value InspectorAssessmentTemplate#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspector_assessment_template#key InspectorAssessmentTemplate#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspector_assessment_template#value InspectorAssessmentTemplate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### InspectorAssessmentTemplateUserAttributesForFindingsList <a name="InspectorAssessmentTemplateUserAttributesForFindingsList" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspector_assessment_template.InspectorAssessmentTemplateUserAttributesForFindingsList;

new InspectorAssessmentTemplateUserAttributesForFindingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.get"></a>

```java
public InspectorAssessmentTemplateUserAttributesForFindingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<InspectorAssessmentTemplateUserAttributesForFindings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>>

---


### InspectorAssessmentTemplateUserAttributesForFindingsOutputReference <a name="InspectorAssessmentTemplateUserAttributesForFindingsOutputReference" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspector_assessment_template.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference;

new InspectorAssessmentTemplateUserAttributesForFindingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.internalValue"></a>

```java
public IResolvable|InspectorAssessmentTemplateUserAttributesForFindings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>

---



