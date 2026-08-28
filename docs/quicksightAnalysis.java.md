# `quicksightAnalysis` Submodule <a name="`quicksightAnalysis` Submodule" id="@cdktn/provider-awscc.quicksightAnalysis"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightAnalysis <a name="QuicksightAnalysis" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis awscc_quicksight_analysis}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysis;

QuicksightAnalysis.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .analysisId(java.lang.String)
    .awsAccountId(java.lang.String)
    .sourceEntity(QuicksightAnalysisSourceEntity)
//  .errors(IResolvable|java.util.List<QuicksightAnalysisErrors>)
//  .name(java.lang.String)
//  .parameters(QuicksightAnalysisParameters)
//  .permissions(IResolvable|java.util.List<QuicksightAnalysisPermissions>)
//  .tags(IResolvable|java.util.List<QuicksightAnalysisTags>)
//  .themeArn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.analysisId">analysisId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#analysis_id QuicksightAnalysis#analysis_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#aws_account_id QuicksightAnalysis#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.sourceEntity">sourceEntity</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntity">QuicksightAnalysisSourceEntity</a></code> | <p>The source entity of an analysis.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.errors">errors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrors">QuicksightAnalysisErrors</a>></code> | <p>Errors associated with the analysis.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | <p>The descriptive name of the analysis.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters">QuicksightAnalysisParameters</a></code> | <p>A list of QuickSight parameters and the list's override values.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.permissions">permissions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a>></code> | <p>A structure that describes the principals and the resource-level permissions on an             analysis. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTags">QuicksightAnalysisTags</a>></code> | <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the             analysis.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.themeArn">themeArn</a></code> | <code>java.lang.String</code> | <p>The ARN of the theme of the analysis.</p>. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `analysisId`<sup>Required</sup> <a name="analysisId" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.analysisId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#analysis_id QuicksightAnalysis#analysis_id}.

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.awsAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#aws_account_id QuicksightAnalysis#aws_account_id}.

---

##### `sourceEntity`<sup>Required</sup> <a name="sourceEntity" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.sourceEntity"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntity">QuicksightAnalysisSourceEntity</a>

<p>The source entity of an analysis.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#source_entity QuicksightAnalysis#source_entity}

---

##### `errors`<sup>Optional</sup> <a name="errors" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.errors"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrors">QuicksightAnalysisErrors</a>>

<p>Errors associated with the analysis.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#errors QuicksightAnalysis#errors}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.name"></a>

- *Type:* java.lang.String

<p>The descriptive name of the analysis.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.parameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters">QuicksightAnalysisParameters</a>

<p>A list of QuickSight parameters and the list's override values.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#parameters QuicksightAnalysis#parameters}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.permissions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a>>

<p>A structure that describes the principals and the resource-level permissions on an             analysis.

You can use the <code>Permissions</code> structure to grant permissions by
providing a list of AWS Identity and Access Management (IAM) action information for each
principal listed by Amazon Resource Name (ARN). </p>

```
    <p>To specify no permissions, omit <code>Permissions</code>.</p>
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#permissions QuicksightAnalysis#permissions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTags">QuicksightAnalysisTags</a>>

<p>Contains a map of the key-value pairs for the resource tag or tags assigned to the             analysis.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#tags QuicksightAnalysis#tags}

---

##### `themeArn`<sup>Optional</sup> <a name="themeArn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.themeArn"></a>

- *Type:* java.lang.String

<p>The ARN of the theme of the analysis.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#theme_arn QuicksightAnalysis#theme_arn}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putErrors">putErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putPermissions">putPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putSourceEntity">putSourceEntity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.resetErrors">resetErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.resetThemeArn">resetThemeArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putErrors` <a name="putErrors" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putErrors"></a>

```java
public void putErrors(IResolvable|java.util.List<QuicksightAnalysisErrors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putErrors.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrors">QuicksightAnalysisErrors</a>>

---

##### `putParameters` <a name="putParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putParameters"></a>

```java
public void putParameters(QuicksightAnalysisParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters">QuicksightAnalysisParameters</a>

---

##### `putPermissions` <a name="putPermissions" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putPermissions"></a>

```java
public void putPermissions(IResolvable|java.util.List<QuicksightAnalysisPermissions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putPermissions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a>>

---

##### `putSourceEntity` <a name="putSourceEntity" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putSourceEntity"></a>

```java
public void putSourceEntity(QuicksightAnalysisSourceEntity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putSourceEntity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntity">QuicksightAnalysisSourceEntity</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<QuicksightAnalysisTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTags">QuicksightAnalysisTags</a>>

---

##### `resetErrors` <a name="resetErrors" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.resetErrors"></a>

```java
public void resetErrors()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.resetName"></a>

```java
public void resetName()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.resetPermissions"></a>

```java
public void resetPermissions()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.resetTags"></a>

```java
public void resetTags()
```

##### `resetThemeArn` <a name="resetThemeArn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.resetThemeArn"></a>

```java
public void resetThemeArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightAnalysis resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.isConstruct"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysis;

QuicksightAnalysis.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysis;

QuicksightAnalysis.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysis;

QuicksightAnalysis.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysis;

QuicksightAnalysis.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),QuicksightAnalysis.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a QuicksightAnalysis resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the QuicksightAnalysis to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing QuicksightAnalysis that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightAnalysis to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.dataSetArns">dataSetArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.errors">errors</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList">QuicksightAnalysisErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference">QuicksightAnalysisParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.permissions">permissions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList">QuicksightAnalysisPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.sheets">sheets</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList">QuicksightAnalysisSheetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.sourceEntity">sourceEntity</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference">QuicksightAnalysisSourceEntityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList">QuicksightAnalysisTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.analysisIdInput">analysisIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.errorsInput">errorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrors">QuicksightAnalysisErrors</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.parametersInput">parametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters">QuicksightAnalysisParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.permissionsInput">permissionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.sourceEntityInput">sourceEntityInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntity">QuicksightAnalysisSourceEntity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTags">QuicksightAnalysisTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.themeArnInput">themeArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.analysisId">analysisId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.themeArn">themeArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `dataSetArns`<sup>Required</sup> <a name="dataSetArns" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.dataSetArns"></a>

```java
public java.util.List<java.lang.String> getDataSetArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.errors"></a>

```java
public QuicksightAnalysisErrorsList getErrors();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList">QuicksightAnalysisErrorsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.parameters"></a>

```java
public QuicksightAnalysisParametersOutputReference getParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference">QuicksightAnalysisParametersOutputReference</a>

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.permissions"></a>

```java
public QuicksightAnalysisPermissionsList getPermissions();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList">QuicksightAnalysisPermissionsList</a>

---

##### `sheets`<sup>Required</sup> <a name="sheets" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.sheets"></a>

```java
public QuicksightAnalysisSheetsList getSheets();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList">QuicksightAnalysisSheetsList</a>

---

##### `sourceEntity`<sup>Required</sup> <a name="sourceEntity" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.sourceEntity"></a>

```java
public QuicksightAnalysisSourceEntityOutputReference getSourceEntity();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference">QuicksightAnalysisSourceEntityOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.tags"></a>

```java
public QuicksightAnalysisTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList">QuicksightAnalysisTagsList</a>

---

##### `analysisIdInput`<sup>Optional</sup> <a name="analysisIdInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.analysisIdInput"></a>

```java
public java.lang.String getAnalysisIdInput();
```

- *Type:* java.lang.String

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.awsAccountIdInput"></a>

```java
public java.lang.String getAwsAccountIdInput();
```

- *Type:* java.lang.String

---

##### `errorsInput`<sup>Optional</sup> <a name="errorsInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.errorsInput"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisErrors> getErrorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrors">QuicksightAnalysisErrors</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.parametersInput"></a>

```java
public IResolvable|QuicksightAnalysisParameters getParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters">QuicksightAnalysisParameters</a>

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.permissionsInput"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisPermissions> getPermissionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a>>

---

##### `sourceEntityInput`<sup>Optional</sup> <a name="sourceEntityInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.sourceEntityInput"></a>

```java
public IResolvable|QuicksightAnalysisSourceEntity getSourceEntityInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntity">QuicksightAnalysisSourceEntity</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.tagsInput"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTags">QuicksightAnalysisTags</a>>

---

##### `themeArnInput`<sup>Optional</sup> <a name="themeArnInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.themeArnInput"></a>

```java
public java.lang.String getThemeArnInput();
```

- *Type:* java.lang.String

---

##### `analysisId`<sup>Required</sup> <a name="analysisId" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.analysisId"></a>

```java
public java.lang.String getAnalysisId();
```

- *Type:* java.lang.String

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `themeArn`<sup>Required</sup> <a name="themeArn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.themeArn"></a>

```java
public java.lang.String getThemeArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightAnalysisConfig <a name="QuicksightAnalysisConfig" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisConfig;

QuicksightAnalysisConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .analysisId(java.lang.String)
    .awsAccountId(java.lang.String)
    .sourceEntity(QuicksightAnalysisSourceEntity)
//  .errors(IResolvable|java.util.List<QuicksightAnalysisErrors>)
//  .name(java.lang.String)
//  .parameters(QuicksightAnalysisParameters)
//  .permissions(IResolvable|java.util.List<QuicksightAnalysisPermissions>)
//  .tags(IResolvable|java.util.List<QuicksightAnalysisTags>)
//  .themeArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.analysisId">analysisId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#analysis_id QuicksightAnalysis#analysis_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#aws_account_id QuicksightAnalysis#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.sourceEntity">sourceEntity</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntity">QuicksightAnalysisSourceEntity</a></code> | <p>The source entity of an analysis.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.errors">errors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrors">QuicksightAnalysisErrors</a>></code> | <p>Errors associated with the analysis.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.name">name</a></code> | <code>java.lang.String</code> | <p>The descriptive name of the analysis.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters">QuicksightAnalysisParameters</a></code> | <p>A list of QuickSight parameters and the list's override values.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.permissions">permissions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a>></code> | <p>A structure that describes the principals and the resource-level permissions on an             analysis. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTags">QuicksightAnalysisTags</a>></code> | <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the             analysis.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.themeArn">themeArn</a></code> | <code>java.lang.String</code> | <p>The ARN of the theme of the analysis.</p>. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `analysisId`<sup>Required</sup> <a name="analysisId" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.analysisId"></a>

```java
public java.lang.String getAnalysisId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#analysis_id QuicksightAnalysis#analysis_id}.

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#aws_account_id QuicksightAnalysis#aws_account_id}.

---

##### `sourceEntity`<sup>Required</sup> <a name="sourceEntity" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.sourceEntity"></a>

```java
public QuicksightAnalysisSourceEntity getSourceEntity();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntity">QuicksightAnalysisSourceEntity</a>

<p>The source entity of an analysis.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#source_entity QuicksightAnalysis#source_entity}

---

##### `errors`<sup>Optional</sup> <a name="errors" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.errors"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisErrors> getErrors();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrors">QuicksightAnalysisErrors</a>>

<p>Errors associated with the analysis.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#errors QuicksightAnalysis#errors}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

<p>The descriptive name of the analysis.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.parameters"></a>

```java
public QuicksightAnalysisParameters getParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters">QuicksightAnalysisParameters</a>

<p>A list of QuickSight parameters and the list's override values.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#parameters QuicksightAnalysis#parameters}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.permissions"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisPermissions> getPermissions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a>>

<p>A structure that describes the principals and the resource-level permissions on an             analysis.

You can use the <code>Permissions</code> structure to grant permissions by
providing a list of AWS Identity and Access Management (IAM) action information for each
principal listed by Amazon Resource Name (ARN). </p>

```
    <p>To specify no permissions, omit <code>Permissions</code>.</p>
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#permissions QuicksightAnalysis#permissions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.tags"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTags">QuicksightAnalysisTags</a>>

<p>Contains a map of the key-value pairs for the resource tag or tags assigned to the             analysis.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#tags QuicksightAnalysis#tags}

---

##### `themeArn`<sup>Optional</sup> <a name="themeArn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.themeArn"></a>

```java
public java.lang.String getThemeArn();
```

- *Type:* java.lang.String

<p>The ARN of the theme of the analysis.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#theme_arn QuicksightAnalysis#theme_arn}

---

### QuicksightAnalysisErrors <a name="QuicksightAnalysisErrors" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrors.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisErrors;

QuicksightAnalysisErrors.builder()
//  .message(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrors.property.message">message</a></code> | <code>java.lang.String</code> | <p>The message associated with the analysis error.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrors.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#type QuicksightAnalysis#type}. |

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrors.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

<p>The message associated with the analysis error.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#message QuicksightAnalysis#message}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrors.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#type QuicksightAnalysis#type}.

---

### QuicksightAnalysisParameters <a name="QuicksightAnalysisParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisParameters;

QuicksightAnalysisParameters.builder()
//  .dateTimeParameters(IResolvable|java.util.List<QuicksightAnalysisParametersDateTimeParameters>)
//  .decimalParameters(IResolvable|java.util.List<QuicksightAnalysisParametersDecimalParameters>)
//  .integerParameters(IResolvable|java.util.List<QuicksightAnalysisParametersIntegerParameters>)
//  .stringParameters(IResolvable|java.util.List<QuicksightAnalysisParametersStringParameters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters.property.dateTimeParameters">dateTimeParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters">QuicksightAnalysisParametersDateTimeParameters</a>></code> | <p>Date-time parameters.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters.property.decimalParameters">decimalParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters">QuicksightAnalysisParametersDecimalParameters</a>></code> | <p>Decimal parameters.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters.property.integerParameters">integerParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters">QuicksightAnalysisParametersIntegerParameters</a>></code> | <p>Integer parameters.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters.property.stringParameters">stringParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParameters">QuicksightAnalysisParametersStringParameters</a>></code> | <p>String parameters.</p>. |

---

##### `dateTimeParameters`<sup>Optional</sup> <a name="dateTimeParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters.property.dateTimeParameters"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisParametersDateTimeParameters> getDateTimeParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters">QuicksightAnalysisParametersDateTimeParameters</a>>

<p>Date-time parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#date_time_parameters QuicksightAnalysis#date_time_parameters}

---

##### `decimalParameters`<sup>Optional</sup> <a name="decimalParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters.property.decimalParameters"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisParametersDecimalParameters> getDecimalParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters">QuicksightAnalysisParametersDecimalParameters</a>>

<p>Decimal parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#decimal_parameters QuicksightAnalysis#decimal_parameters}

---

##### `integerParameters`<sup>Optional</sup> <a name="integerParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters.property.integerParameters"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisParametersIntegerParameters> getIntegerParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters">QuicksightAnalysisParametersIntegerParameters</a>>

<p>Integer parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#integer_parameters QuicksightAnalysis#integer_parameters}

---

##### `stringParameters`<sup>Optional</sup> <a name="stringParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters.property.stringParameters"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisParametersStringParameters> getStringParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParameters">QuicksightAnalysisParametersStringParameters</a>>

<p>String parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#string_parameters QuicksightAnalysis#string_parameters}

---

### QuicksightAnalysisParametersDateTimeParameters <a name="QuicksightAnalysisParametersDateTimeParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisParametersDateTimeParameters;

QuicksightAnalysisParametersDateTimeParameters.builder()
//  .name(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters.property.name">name</a></code> | <code>java.lang.String</code> | <p>A display name for the date-time parameter.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | <p>The values for the date-time parameter.</p>. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

<p>A display name for the date-time parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

<p>The values for the date-time parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}

---

### QuicksightAnalysisParametersDecimalParameters <a name="QuicksightAnalysisParametersDecimalParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisParametersDecimalParameters;

QuicksightAnalysisParametersDecimalParameters.builder()
//  .name(java.lang.String)
//  .values(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters.property.name">name</a></code> | <code>java.lang.String</code> | <p>A display name for the decimal parameter.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | <p>The values for the decimal parameter.</p>. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

<p>A display name for the decimal parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

<p>The values for the decimal parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}

---

### QuicksightAnalysisParametersIntegerParameters <a name="QuicksightAnalysisParametersIntegerParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisParametersIntegerParameters;

QuicksightAnalysisParametersIntegerParameters.builder()
//  .name(java.lang.String)
//  .values(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters.property.name">name</a></code> | <code>java.lang.String</code> | <p>The name of the integer parameter.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | <p>The values for the integer parameter.</p>. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

<p>The name of the integer parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

<p>The values for the integer parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}

---

### QuicksightAnalysisParametersStringParameters <a name="QuicksightAnalysisParametersStringParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisParametersStringParameters;

QuicksightAnalysisParametersStringParameters.builder()
//  .name(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParameters.property.name">name</a></code> | <code>java.lang.String</code> | <p>A display name for a string parameter.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParameters.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | <p>The values of a string parameter.</p>. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

<p>A display name for a string parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParameters.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

<p>The values of a string parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}

---

### QuicksightAnalysisPermissions <a name="QuicksightAnalysisPermissions" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissions.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisPermissions;

QuicksightAnalysisPermissions.builder()
//  .actions(java.util.List<java.lang.String>)
//  .principal(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissions.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | <p>The IAM action to grant or revoke permissions on.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissions.property.principal">principal</a></code> | <code>java.lang.String</code> | <p>The Amazon Resource Name (ARN) of the principal. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissions.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

<p>The IAM action to grant or revoke permissions on.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#actions QuicksightAnalysis#actions}

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissions.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

<p>The Amazon Resource Name (ARN) of the principal.

This can be one of the
following:</p>
<ul>
<li>
<p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
</li>
<li>
<p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
</li>
<li>
<p>The ARN of an AWS account root: This is an IAM ARN rather than a QuickSight
ARN. Use this option only to share resources (templates) across AWS accounts.
(This is less common.) </p>
</li>
</ul>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#principal QuicksightAnalysis#principal}

---

### QuicksightAnalysisSheets <a name="QuicksightAnalysisSheets" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheets.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisSheets;

QuicksightAnalysisSheets.builder()
    .build();
```


### QuicksightAnalysisSourceEntity <a name="QuicksightAnalysisSourceEntity" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntity.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisSourceEntity;

QuicksightAnalysisSourceEntity.builder()
//  .sourceTemplate(QuicksightAnalysisSourceEntitySourceTemplate)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntity.property.sourceTemplate">sourceTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate">QuicksightAnalysisSourceEntitySourceTemplate</a></code> | <p>The source template of an analysis.</p>. |

---

##### `sourceTemplate`<sup>Optional</sup> <a name="sourceTemplate" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntity.property.sourceTemplate"></a>

```java
public QuicksightAnalysisSourceEntitySourceTemplate getSourceTemplate();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate">QuicksightAnalysisSourceEntitySourceTemplate</a>

<p>The source template of an analysis.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#source_template QuicksightAnalysis#source_template}

---

### QuicksightAnalysisSourceEntitySourceTemplate <a name="QuicksightAnalysisSourceEntitySourceTemplate" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisSourceEntitySourceTemplate;

QuicksightAnalysisSourceEntitySourceTemplate.builder()
//  .arn(java.lang.String)
//  .dataSetReferences(IResolvable|java.util.List<QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate.property.arn">arn</a></code> | <code>java.lang.String</code> | <p>The Amazon Resource Name (ARN) of the source template of an analysis.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate.property.dataSetReferences">dataSetReferences</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a>></code> | <p>The dataset references of the source template of an analysis.</p>. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

<p>The Amazon Resource Name (ARN) of the source template of an analysis.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#arn QuicksightAnalysis#arn}

---

##### `dataSetReferences`<sup>Optional</sup> <a name="dataSetReferences" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate.property.dataSetReferences"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences> getDataSetReferences();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a>>

<p>The dataset references of the source template of an analysis.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#data_set_references QuicksightAnalysis#data_set_references}

---

### QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences <a name="QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences;

QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences.builder()
//  .dataSetArn(java.lang.String)
//  .dataSetPlaceholder(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences.property.dataSetArn">dataSetArn</a></code> | <code>java.lang.String</code> | <p>Dataset Amazon Resource Name (ARN).</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences.property.dataSetPlaceholder">dataSetPlaceholder</a></code> | <code>java.lang.String</code> | <p>Dataset placeholder.</p>. |

---

##### `dataSetArn`<sup>Optional</sup> <a name="dataSetArn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences.property.dataSetArn"></a>

```java
public java.lang.String getDataSetArn();
```

- *Type:* java.lang.String

<p>Dataset Amazon Resource Name (ARN).</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#data_set_arn QuicksightAnalysis#data_set_arn}

---

##### `dataSetPlaceholder`<sup>Optional</sup> <a name="dataSetPlaceholder" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences.property.dataSetPlaceholder"></a>

```java
public java.lang.String getDataSetPlaceholder();
```

- *Type:* java.lang.String

<p>Dataset placeholder.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#data_set_placeholder QuicksightAnalysis#data_set_placeholder}

---

### QuicksightAnalysisTags <a name="QuicksightAnalysisTags" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisTags;

QuicksightAnalysisTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTags.property.key">key</a></code> | <code>java.lang.String</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTags.property.value">value</a></code> | <code>java.lang.String</code> | <p>Tag value.</p>. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#key QuicksightAnalysis#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_analysis#value QuicksightAnalysis#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightAnalysisErrorsList <a name="QuicksightAnalysisErrorsList" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisErrorsList;

new QuicksightAnalysisErrorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.get"></a>

```java
public QuicksightAnalysisErrorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrors">QuicksightAnalysisErrors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisErrors> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrors">QuicksightAnalysisErrors</a>>

---


### QuicksightAnalysisErrorsOutputReference <a name="QuicksightAnalysisErrorsOutputReference" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisErrorsOutputReference;

new QuicksightAnalysisErrorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.resetMessage"></a>

```java
public void resetMessage()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrors">QuicksightAnalysisErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightAnalysisErrors getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrors">QuicksightAnalysisErrors</a>

---


### QuicksightAnalysisParametersDateTimeParametersList <a name="QuicksightAnalysisParametersDateTimeParametersList" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisParametersDateTimeParametersList;

new QuicksightAnalysisParametersDateTimeParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.get"></a>

```java
public QuicksightAnalysisParametersDateTimeParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters">QuicksightAnalysisParametersDateTimeParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisParametersDateTimeParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters">QuicksightAnalysisParametersDateTimeParameters</a>>

---


### QuicksightAnalysisParametersDateTimeParametersOutputReference <a name="QuicksightAnalysisParametersDateTimeParametersOutputReference" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisParametersDateTimeParametersOutputReference;

new QuicksightAnalysisParametersDateTimeParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters">QuicksightAnalysisParametersDateTimeParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightAnalysisParametersDateTimeParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters">QuicksightAnalysisParametersDateTimeParameters</a>

---


### QuicksightAnalysisParametersDecimalParametersList <a name="QuicksightAnalysisParametersDecimalParametersList" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisParametersDecimalParametersList;

new QuicksightAnalysisParametersDecimalParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.get"></a>

```java
public QuicksightAnalysisParametersDecimalParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters">QuicksightAnalysisParametersDecimalParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisParametersDecimalParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters">QuicksightAnalysisParametersDecimalParameters</a>>

---


### QuicksightAnalysisParametersDecimalParametersOutputReference <a name="QuicksightAnalysisParametersDecimalParametersOutputReference" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisParametersDecimalParametersOutputReference;

new QuicksightAnalysisParametersDecimalParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters">QuicksightAnalysisParametersDecimalParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.Number> getValuesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightAnalysisParametersDecimalParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters">QuicksightAnalysisParametersDecimalParameters</a>

---


### QuicksightAnalysisParametersIntegerParametersList <a name="QuicksightAnalysisParametersIntegerParametersList" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisParametersIntegerParametersList;

new QuicksightAnalysisParametersIntegerParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.get"></a>

```java
public QuicksightAnalysisParametersIntegerParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters">QuicksightAnalysisParametersIntegerParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisParametersIntegerParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters">QuicksightAnalysisParametersIntegerParameters</a>>

---


### QuicksightAnalysisParametersIntegerParametersOutputReference <a name="QuicksightAnalysisParametersIntegerParametersOutputReference" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisParametersIntegerParametersOutputReference;

new QuicksightAnalysisParametersIntegerParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters">QuicksightAnalysisParametersIntegerParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.Number> getValuesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightAnalysisParametersIntegerParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters">QuicksightAnalysisParametersIntegerParameters</a>

---


### QuicksightAnalysisParametersOutputReference <a name="QuicksightAnalysisParametersOutputReference" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisParametersOutputReference;

new QuicksightAnalysisParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putDateTimeParameters">putDateTimeParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putDecimalParameters">putDecimalParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putIntegerParameters">putIntegerParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putStringParameters">putStringParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetDateTimeParameters">resetDateTimeParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetDecimalParameters">resetDecimalParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetIntegerParameters">resetIntegerParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetStringParameters">resetStringParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDateTimeParameters` <a name="putDateTimeParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putDateTimeParameters"></a>

```java
public void putDateTimeParameters(IResolvable|java.util.List<QuicksightAnalysisParametersDateTimeParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putDateTimeParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters">QuicksightAnalysisParametersDateTimeParameters</a>>

---

##### `putDecimalParameters` <a name="putDecimalParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putDecimalParameters"></a>

```java
public void putDecimalParameters(IResolvable|java.util.List<QuicksightAnalysisParametersDecimalParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putDecimalParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters">QuicksightAnalysisParametersDecimalParameters</a>>

---

##### `putIntegerParameters` <a name="putIntegerParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putIntegerParameters"></a>

```java
public void putIntegerParameters(IResolvable|java.util.List<QuicksightAnalysisParametersIntegerParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putIntegerParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters">QuicksightAnalysisParametersIntegerParameters</a>>

---

##### `putStringParameters` <a name="putStringParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putStringParameters"></a>

```java
public void putStringParameters(IResolvable|java.util.List<QuicksightAnalysisParametersStringParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putStringParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParameters">QuicksightAnalysisParametersStringParameters</a>>

---

##### `resetDateTimeParameters` <a name="resetDateTimeParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetDateTimeParameters"></a>

```java
public void resetDateTimeParameters()
```

##### `resetDecimalParameters` <a name="resetDecimalParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetDecimalParameters"></a>

```java
public void resetDecimalParameters()
```

##### `resetIntegerParameters` <a name="resetIntegerParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetIntegerParameters"></a>

```java
public void resetIntegerParameters()
```

##### `resetStringParameters` <a name="resetStringParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetStringParameters"></a>

```java
public void resetStringParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.dateTimeParameters">dateTimeParameters</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList">QuicksightAnalysisParametersDateTimeParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.decimalParameters">decimalParameters</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList">QuicksightAnalysisParametersDecimalParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.integerParameters">integerParameters</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList">QuicksightAnalysisParametersIntegerParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.stringParameters">stringParameters</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList">QuicksightAnalysisParametersStringParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.dateTimeParametersInput">dateTimeParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters">QuicksightAnalysisParametersDateTimeParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.decimalParametersInput">decimalParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters">QuicksightAnalysisParametersDecimalParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.integerParametersInput">integerParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters">QuicksightAnalysisParametersIntegerParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.stringParametersInput">stringParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParameters">QuicksightAnalysisParametersStringParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters">QuicksightAnalysisParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dateTimeParameters`<sup>Required</sup> <a name="dateTimeParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.dateTimeParameters"></a>

```java
public QuicksightAnalysisParametersDateTimeParametersList getDateTimeParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList">QuicksightAnalysisParametersDateTimeParametersList</a>

---

##### `decimalParameters`<sup>Required</sup> <a name="decimalParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.decimalParameters"></a>

```java
public QuicksightAnalysisParametersDecimalParametersList getDecimalParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList">QuicksightAnalysisParametersDecimalParametersList</a>

---

##### `integerParameters`<sup>Required</sup> <a name="integerParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.integerParameters"></a>

```java
public QuicksightAnalysisParametersIntegerParametersList getIntegerParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList">QuicksightAnalysisParametersIntegerParametersList</a>

---

##### `stringParameters`<sup>Required</sup> <a name="stringParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.stringParameters"></a>

```java
public QuicksightAnalysisParametersStringParametersList getStringParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList">QuicksightAnalysisParametersStringParametersList</a>

---

##### `dateTimeParametersInput`<sup>Optional</sup> <a name="dateTimeParametersInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.dateTimeParametersInput"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisParametersDateTimeParameters> getDateTimeParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters">QuicksightAnalysisParametersDateTimeParameters</a>>

---

##### `decimalParametersInput`<sup>Optional</sup> <a name="decimalParametersInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.decimalParametersInput"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisParametersDecimalParameters> getDecimalParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters">QuicksightAnalysisParametersDecimalParameters</a>>

---

##### `integerParametersInput`<sup>Optional</sup> <a name="integerParametersInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.integerParametersInput"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisParametersIntegerParameters> getIntegerParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters">QuicksightAnalysisParametersIntegerParameters</a>>

---

##### `stringParametersInput`<sup>Optional</sup> <a name="stringParametersInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.stringParametersInput"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisParametersStringParameters> getStringParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParameters">QuicksightAnalysisParametersStringParameters</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightAnalysisParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters">QuicksightAnalysisParameters</a>

---


### QuicksightAnalysisParametersStringParametersList <a name="QuicksightAnalysisParametersStringParametersList" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisParametersStringParametersList;

new QuicksightAnalysisParametersStringParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.get"></a>

```java
public QuicksightAnalysisParametersStringParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParameters">QuicksightAnalysisParametersStringParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisParametersStringParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParameters">QuicksightAnalysisParametersStringParameters</a>>

---


### QuicksightAnalysisParametersStringParametersOutputReference <a name="QuicksightAnalysisParametersStringParametersOutputReference" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisParametersStringParametersOutputReference;

new QuicksightAnalysisParametersStringParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParameters">QuicksightAnalysisParametersStringParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightAnalysisParametersStringParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParameters">QuicksightAnalysisParametersStringParameters</a>

---


### QuicksightAnalysisPermissionsList <a name="QuicksightAnalysisPermissionsList" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisPermissionsList;

new QuicksightAnalysisPermissionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.get"></a>

```java
public QuicksightAnalysisPermissionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisPermissions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a>>

---


### QuicksightAnalysisPermissionsOutputReference <a name="QuicksightAnalysisPermissionsOutputReference" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisPermissionsOutputReference;

new QuicksightAnalysisPermissionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActions` <a name="resetActions" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.resetActions"></a>

```java
public void resetActions()
```

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.resetPrincipal"></a>

```java
public void resetPrincipal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.actionsInput">actionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.principalInput">principalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.actionsInput"></a>

```java
public java.util.List<java.lang.String> getActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.principalInput"></a>

```java
public java.lang.String getPrincipalInput();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightAnalysisPermissions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a>

---


### QuicksightAnalysisSheetsList <a name="QuicksightAnalysisSheetsList" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisSheetsList;

new QuicksightAnalysisSheetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.get"></a>

```java
public QuicksightAnalysisSheetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### QuicksightAnalysisSheetsOutputReference <a name="QuicksightAnalysisSheetsOutputReference" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisSheetsOutputReference;

new QuicksightAnalysisSheetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.property.sheetId">sheetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheets">QuicksightAnalysisSheets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sheetId`<sup>Required</sup> <a name="sheetId" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.property.sheetId"></a>

```java
public java.lang.String getSheetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.property.internalValue"></a>

```java
public QuicksightAnalysisSheets getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheets">QuicksightAnalysisSheets</a>

---


### QuicksightAnalysisSourceEntityOutputReference <a name="QuicksightAnalysisSourceEntityOutputReference" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisSourceEntityOutputReference;

new QuicksightAnalysisSourceEntityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.putSourceTemplate">putSourceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.resetSourceTemplate">resetSourceTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourceTemplate` <a name="putSourceTemplate" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.putSourceTemplate"></a>

```java
public void putSourceTemplate(QuicksightAnalysisSourceEntitySourceTemplate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.putSourceTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate">QuicksightAnalysisSourceEntitySourceTemplate</a>

---

##### `resetSourceTemplate` <a name="resetSourceTemplate" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.resetSourceTemplate"></a>

```java
public void resetSourceTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.sourceTemplate">sourceTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference">QuicksightAnalysisSourceEntitySourceTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.sourceTemplateInput">sourceTemplateInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate">QuicksightAnalysisSourceEntitySourceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntity">QuicksightAnalysisSourceEntity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceTemplate`<sup>Required</sup> <a name="sourceTemplate" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.sourceTemplate"></a>

```java
public QuicksightAnalysisSourceEntitySourceTemplateOutputReference getSourceTemplate();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference">QuicksightAnalysisSourceEntitySourceTemplateOutputReference</a>

---

##### `sourceTemplateInput`<sup>Optional</sup> <a name="sourceTemplateInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.sourceTemplateInput"></a>

```java
public IResolvable|QuicksightAnalysisSourceEntitySourceTemplate getSourceTemplateInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate">QuicksightAnalysisSourceEntitySourceTemplate</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightAnalysisSourceEntity getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntity">QuicksightAnalysisSourceEntity</a>

---


### QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList <a name="QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList;

new QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.get"></a>

```java
public QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a>>

---


### QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference <a name="QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference;

new QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.resetDataSetArn">resetDataSetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.resetDataSetPlaceholder">resetDataSetPlaceholder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataSetArn` <a name="resetDataSetArn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.resetDataSetArn"></a>

```java
public void resetDataSetArn()
```

##### `resetDataSetPlaceholder` <a name="resetDataSetPlaceholder" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.resetDataSetPlaceholder"></a>

```java
public void resetDataSetPlaceholder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArnInput">dataSetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholderInput">dataSetPlaceholderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArn">dataSetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholder">dataSetPlaceholder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataSetArnInput`<sup>Optional</sup> <a name="dataSetArnInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArnInput"></a>

```java
public java.lang.String getDataSetArnInput();
```

- *Type:* java.lang.String

---

##### `dataSetPlaceholderInput`<sup>Optional</sup> <a name="dataSetPlaceholderInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholderInput"></a>

```java
public java.lang.String getDataSetPlaceholderInput();
```

- *Type:* java.lang.String

---

##### `dataSetArn`<sup>Required</sup> <a name="dataSetArn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArn"></a>

```java
public java.lang.String getDataSetArn();
```

- *Type:* java.lang.String

---

##### `dataSetPlaceholder`<sup>Required</sup> <a name="dataSetPlaceholder" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholder"></a>

```java
public java.lang.String getDataSetPlaceholder();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a>

---


### QuicksightAnalysisSourceEntitySourceTemplateOutputReference <a name="QuicksightAnalysisSourceEntitySourceTemplateOutputReference" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference;

new QuicksightAnalysisSourceEntitySourceTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.putDataSetReferences">putDataSetReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.resetDataSetReferences">resetDataSetReferences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataSetReferences` <a name="putDataSetReferences" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.putDataSetReferences"></a>

```java
public void putDataSetReferences(IResolvable|java.util.List<QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.putDataSetReferences.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a>>

---

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.resetArn"></a>

```java
public void resetArn()
```

##### `resetDataSetReferences` <a name="resetDataSetReferences" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.resetDataSetReferences"></a>

```java
public void resetDataSetReferences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.dataSetReferences">dataSetReferences</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.dataSetReferencesInput">dataSetReferencesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate">QuicksightAnalysisSourceEntitySourceTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataSetReferences`<sup>Required</sup> <a name="dataSetReferences" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.dataSetReferences"></a>

```java
public QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList getDataSetReferences();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `dataSetReferencesInput`<sup>Optional</sup> <a name="dataSetReferencesInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.dataSetReferencesInput"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences> getDataSetReferencesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a>>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightAnalysisSourceEntitySourceTemplate getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate">QuicksightAnalysisSourceEntitySourceTemplate</a>

---


### QuicksightAnalysisTagsList <a name="QuicksightAnalysisTagsList" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisTagsList;

new QuicksightAnalysisTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.get"></a>

```java
public QuicksightAnalysisTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTags">QuicksightAnalysisTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightAnalysisTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTags">QuicksightAnalysisTags</a>>

---


### QuicksightAnalysisTagsOutputReference <a name="QuicksightAnalysisTagsOutputReference" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_analysis.QuicksightAnalysisTagsOutputReference;

new QuicksightAnalysisTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTags">QuicksightAnalysisTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightAnalysisTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTags">QuicksightAnalysisTags</a>

---



