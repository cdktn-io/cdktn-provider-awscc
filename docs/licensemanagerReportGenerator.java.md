# `licensemanagerReportGenerator` Submodule <a name="`licensemanagerReportGenerator` Submodule" id="@cdktn/provider-awscc.licensemanagerReportGenerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerReportGenerator <a name="LicensemanagerReportGenerator" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator awscc_licensemanager_report_generator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_report_generator.LicensemanagerReportGenerator;

LicensemanagerReportGenerator.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .reportContext(LicensemanagerReportGeneratorReportContext)
    .reportFrequency(LicensemanagerReportGeneratorReportFrequency)
    .reportGeneratorName(java.lang.String)
    .reportType(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<LicensemanagerReportGeneratorTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.reportContext">reportContext</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a></code> | Details of the license configurations and asset groups that this generator reports on. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.reportFrequency">reportFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a></code> | Details about how frequently reports are generated. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.reportGeneratorName">reportGeneratorName</a></code> | <code>java.lang.String</code> | Name of the report generator. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.reportType">reportType</a></code> | <code>java.util.List<java.lang.String></code> | Type of reports to generate. The report type determines the data reported on. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the report generator. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `reportContext`<sup>Required</sup> <a name="reportContext" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.reportContext"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a>

Details of the license configurations and asset groups that this generator reports on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_context LicensemanagerReportGenerator#report_context}

---

##### `reportFrequency`<sup>Required</sup> <a name="reportFrequency" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.reportFrequency"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a>

Details about how frequently reports are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_frequency LicensemanagerReportGenerator#report_frequency}

---

##### `reportGeneratorName`<sup>Required</sup> <a name="reportGeneratorName" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.reportGeneratorName"></a>

- *Type:* java.lang.String

Name of the report generator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_generator_name LicensemanagerReportGenerator#report_generator_name}

---

##### `reportType`<sup>Required</sup> <a name="reportType" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.reportType"></a>

- *Type:* java.util.List<java.lang.String>

Type of reports to generate. The report type determines the data reported on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_type LicensemanagerReportGenerator#report_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the report generator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#description LicensemanagerReportGenerator#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#tags LicensemanagerReportGenerator#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportContext">putReportContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportFrequency">putReportFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReportContext` <a name="putReportContext" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportContext"></a>

```java
public void putReportContext(LicensemanagerReportGeneratorReportContext value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportContext.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a>

---

##### `putReportFrequency` <a name="putReportFrequency" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportFrequency"></a>

```java
public void putReportFrequency(LicensemanagerReportGeneratorReportFrequency value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportFrequency.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<LicensemanagerReportGeneratorTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LicensemanagerReportGenerator resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isConstruct"></a>

```java
import io.cdktn.providers.awscc.licensemanager_report_generator.LicensemanagerReportGenerator;

LicensemanagerReportGenerator.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.licensemanager_report_generator.LicensemanagerReportGenerator;

LicensemanagerReportGenerator.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.licensemanager_report_generator.LicensemanagerReportGenerator;

LicensemanagerReportGenerator.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.licensemanager_report_generator.LicensemanagerReportGenerator;

LicensemanagerReportGenerator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LicensemanagerReportGenerator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LicensemanagerReportGenerator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LicensemanagerReportGenerator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LicensemanagerReportGenerator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LicensemanagerReportGenerator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportContext">reportContext</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference">LicensemanagerReportGeneratorReportContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportCreatorAccount">reportCreatorAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportFrequency">reportFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference">LicensemanagerReportGeneratorReportFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.s3Location">s3Location</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference">LicensemanagerReportGeneratorS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList">LicensemanagerReportGeneratorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportContextInput">reportContextInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportFrequencyInput">reportFrequencyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportGeneratorNameInput">reportGeneratorNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportTypeInput">reportTypeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportGeneratorName">reportGeneratorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportType">reportType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `reportContext`<sup>Required</sup> <a name="reportContext" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportContext"></a>

```java
public LicensemanagerReportGeneratorReportContextOutputReference getReportContext();
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference">LicensemanagerReportGeneratorReportContextOutputReference</a>

---

##### `reportCreatorAccount`<sup>Required</sup> <a name="reportCreatorAccount" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportCreatorAccount"></a>

```java
public java.lang.String getReportCreatorAccount();
```

- *Type:* java.lang.String

---

##### `reportFrequency`<sup>Required</sup> <a name="reportFrequency" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportFrequency"></a>

```java
public LicensemanagerReportGeneratorReportFrequencyOutputReference getReportFrequency();
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference">LicensemanagerReportGeneratorReportFrequencyOutputReference</a>

---

##### `s3Location`<sup>Required</sup> <a name="s3Location" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.s3Location"></a>

```java
public LicensemanagerReportGeneratorS3LocationOutputReference getS3Location();
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference">LicensemanagerReportGeneratorS3LocationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tags"></a>

```java
public LicensemanagerReportGeneratorTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList">LicensemanagerReportGeneratorTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `reportContextInput`<sup>Optional</sup> <a name="reportContextInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportContextInput"></a>

```java
public IResolvable|LicensemanagerReportGeneratorReportContext getReportContextInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a>

---

##### `reportFrequencyInput`<sup>Optional</sup> <a name="reportFrequencyInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportFrequencyInput"></a>

```java
public IResolvable|LicensemanagerReportGeneratorReportFrequency getReportFrequencyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a>

---

##### `reportGeneratorNameInput`<sup>Optional</sup> <a name="reportGeneratorNameInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportGeneratorNameInput"></a>

```java
public java.lang.String getReportGeneratorNameInput();
```

- *Type:* java.lang.String

---

##### `reportTypeInput`<sup>Optional</sup> <a name="reportTypeInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportTypeInput"></a>

```java
public java.util.List<java.lang.String> getReportTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tagsInput"></a>

```java
public IResolvable|java.util.List<LicensemanagerReportGeneratorTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `reportGeneratorName`<sup>Required</sup> <a name="reportGeneratorName" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportGeneratorName"></a>

```java
public java.lang.String getReportGeneratorName();
```

- *Type:* java.lang.String

---

##### `reportType`<sup>Required</sup> <a name="reportType" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportType"></a>

```java
public java.util.List<java.lang.String> getReportType();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerReportGeneratorConfig <a name="LicensemanagerReportGeneratorConfig" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_report_generator.LicensemanagerReportGeneratorConfig;

LicensemanagerReportGeneratorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .reportContext(LicensemanagerReportGeneratorReportContext)
    .reportFrequency(LicensemanagerReportGeneratorReportFrequency)
    .reportGeneratorName(java.lang.String)
    .reportType(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<LicensemanagerReportGeneratorTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportContext">reportContext</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a></code> | Details of the license configurations and asset groups that this generator reports on. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportFrequency">reportFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a></code> | Details about how frequently reports are generated. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportGeneratorName">reportGeneratorName</a></code> | <code>java.lang.String</code> | Name of the report generator. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportType">reportType</a></code> | <code>java.util.List<java.lang.String></code> | Type of reports to generate. The report type determines the data reported on. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the report generator. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `reportContext`<sup>Required</sup> <a name="reportContext" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportContext"></a>

```java
public LicensemanagerReportGeneratorReportContext getReportContext();
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a>

Details of the license configurations and asset groups that this generator reports on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_context LicensemanagerReportGenerator#report_context}

---

##### `reportFrequency`<sup>Required</sup> <a name="reportFrequency" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportFrequency"></a>

```java
public LicensemanagerReportGeneratorReportFrequency getReportFrequency();
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a>

Details about how frequently reports are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_frequency LicensemanagerReportGenerator#report_frequency}

---

##### `reportGeneratorName`<sup>Required</sup> <a name="reportGeneratorName" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportGeneratorName"></a>

```java
public java.lang.String getReportGeneratorName();
```

- *Type:* java.lang.String

Name of the report generator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_generator_name LicensemanagerReportGenerator#report_generator_name}

---

##### `reportType`<sup>Required</sup> <a name="reportType" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportType"></a>

```java
public java.util.List<java.lang.String> getReportType();
```

- *Type:* java.util.List<java.lang.String>

Type of reports to generate. The report type determines the data reported on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_type LicensemanagerReportGenerator#report_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the report generator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#description LicensemanagerReportGenerator#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.tags"></a>

```java
public IResolvable|java.util.List<LicensemanagerReportGeneratorTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#tags LicensemanagerReportGenerator#tags}

---

### LicensemanagerReportGeneratorReportContext <a name="LicensemanagerReportGeneratorReportContext" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_report_generator.LicensemanagerReportGeneratorReportContext;

LicensemanagerReportGeneratorReportContext.builder()
//  .licenseAssetGroupArns(java.util.List<java.lang.String>)
//  .licenseConfigurationArns(java.util.List<java.lang.String>)
//  .reportEndDate(java.lang.String)
//  .reportStartDate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.licenseAssetGroupArns">licenseAssetGroupArns</a></code> | <code>java.util.List<java.lang.String></code> | Amazon Resource Names (ARNs) of the license asset groups to include in the report. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.licenseConfigurationArns">licenseConfigurationArns</a></code> | <code>java.util.List<java.lang.String></code> | Amazon Resource Names (ARNs) of the license configurations that this generator reports on. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.reportEndDate">reportEndDate</a></code> | <code>java.lang.String</code> | End date for the report data collection period. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.reportStartDate">reportStartDate</a></code> | <code>java.lang.String</code> | Start date for the report data collection period. |

---

##### `licenseAssetGroupArns`<sup>Optional</sup> <a name="licenseAssetGroupArns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.licenseAssetGroupArns"></a>

```java
public java.util.List<java.lang.String> getLicenseAssetGroupArns();
```

- *Type:* java.util.List<java.lang.String>

Amazon Resource Names (ARNs) of the license asset groups to include in the report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#license_asset_group_arns LicensemanagerReportGenerator#license_asset_group_arns}

---

##### `licenseConfigurationArns`<sup>Optional</sup> <a name="licenseConfigurationArns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.licenseConfigurationArns"></a>

```java
public java.util.List<java.lang.String> getLicenseConfigurationArns();
```

- *Type:* java.util.List<java.lang.String>

Amazon Resource Names (ARNs) of the license configurations that this generator reports on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#license_configuration_arns LicensemanagerReportGenerator#license_configuration_arns}

---

##### `reportEndDate`<sup>Optional</sup> <a name="reportEndDate" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.reportEndDate"></a>

```java
public java.lang.String getReportEndDate();
```

- *Type:* java.lang.String

End date for the report data collection period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_end_date LicensemanagerReportGenerator#report_end_date}

---

##### `reportStartDate`<sup>Optional</sup> <a name="reportStartDate" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.reportStartDate"></a>

```java
public java.lang.String getReportStartDate();
```

- *Type:* java.lang.String

Start date for the report data collection period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_start_date LicensemanagerReportGenerator#report_start_date}

---

### LicensemanagerReportGeneratorReportFrequency <a name="LicensemanagerReportGeneratorReportFrequency" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_report_generator.LicensemanagerReportGeneratorReportFrequency;

LicensemanagerReportGeneratorReportFrequency.builder()
//  .period(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency.property.period">period</a></code> | <code>java.lang.String</code> | Time period between each report. The period can be daily, weekly, or monthly. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency.property.value">value</a></code> | <code>java.lang.Number</code> | Number of times within the frequency period that a report is generated. The only supported value is 1. |

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

Time period between each report. The period can be daily, weekly, or monthly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#period LicensemanagerReportGenerator#period}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Number of times within the frequency period that a report is generated. The only supported value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#value LicensemanagerReportGenerator#value}

---

### LicensemanagerReportGeneratorS3Location <a name="LicensemanagerReportGeneratorS3Location" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3Location.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_report_generator.LicensemanagerReportGeneratorS3Location;

LicensemanagerReportGeneratorS3Location.builder()
    .build();
```


### LicensemanagerReportGeneratorTags <a name="LicensemanagerReportGeneratorTags" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_report_generator.LicensemanagerReportGeneratorTags;

LicensemanagerReportGeneratorTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#key LicensemanagerReportGenerator#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#value LicensemanagerReportGenerator#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LicensemanagerReportGeneratorReportContextOutputReference <a name="LicensemanagerReportGeneratorReportContextOutputReference" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_report_generator.LicensemanagerReportGeneratorReportContextOutputReference;

new LicensemanagerReportGeneratorReportContextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetLicenseAssetGroupArns">resetLicenseAssetGroupArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetLicenseConfigurationArns">resetLicenseConfigurationArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetReportEndDate">resetReportEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetReportStartDate">resetReportStartDate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLicenseAssetGroupArns` <a name="resetLicenseAssetGroupArns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetLicenseAssetGroupArns"></a>

```java
public void resetLicenseAssetGroupArns()
```

##### `resetLicenseConfigurationArns` <a name="resetLicenseConfigurationArns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetLicenseConfigurationArns"></a>

```java
public void resetLicenseConfigurationArns()
```

##### `resetReportEndDate` <a name="resetReportEndDate" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetReportEndDate"></a>

```java
public void resetReportEndDate()
```

##### `resetReportStartDate` <a name="resetReportStartDate" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetReportStartDate"></a>

```java
public void resetReportStartDate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseAssetGroupArnsInput">licenseAssetGroupArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseConfigurationArnsInput">licenseConfigurationArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportEndDateInput">reportEndDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportStartDateInput">reportStartDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseAssetGroupArns">licenseAssetGroupArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseConfigurationArns">licenseConfigurationArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportEndDate">reportEndDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportStartDate">reportStartDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `licenseAssetGroupArnsInput`<sup>Optional</sup> <a name="licenseAssetGroupArnsInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseAssetGroupArnsInput"></a>

```java
public java.util.List<java.lang.String> getLicenseAssetGroupArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `licenseConfigurationArnsInput`<sup>Optional</sup> <a name="licenseConfigurationArnsInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseConfigurationArnsInput"></a>

```java
public java.util.List<java.lang.String> getLicenseConfigurationArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `reportEndDateInput`<sup>Optional</sup> <a name="reportEndDateInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportEndDateInput"></a>

```java
public java.lang.String getReportEndDateInput();
```

- *Type:* java.lang.String

---

##### `reportStartDateInput`<sup>Optional</sup> <a name="reportStartDateInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportStartDateInput"></a>

```java
public java.lang.String getReportStartDateInput();
```

- *Type:* java.lang.String

---

##### `licenseAssetGroupArns`<sup>Required</sup> <a name="licenseAssetGroupArns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseAssetGroupArns"></a>

```java
public java.util.List<java.lang.String> getLicenseAssetGroupArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `licenseConfigurationArns`<sup>Required</sup> <a name="licenseConfigurationArns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseConfigurationArns"></a>

```java
public java.util.List<java.lang.String> getLicenseConfigurationArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `reportEndDate`<sup>Required</sup> <a name="reportEndDate" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportEndDate"></a>

```java
public java.lang.String getReportEndDate();
```

- *Type:* java.lang.String

---

##### `reportStartDate`<sup>Required</sup> <a name="reportStartDate" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportStartDate"></a>

```java
public java.lang.String getReportStartDate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.internalValue"></a>

```java
public IResolvable|LicensemanagerReportGeneratorReportContext getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a>

---


### LicensemanagerReportGeneratorReportFrequencyOutputReference <a name="LicensemanagerReportGeneratorReportFrequencyOutputReference" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_report_generator.LicensemanagerReportGeneratorReportFrequencyOutputReference;

new LicensemanagerReportGeneratorReportFrequencyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeriod` <a name="resetPeriod" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.periodInput">periodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.period">period</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.periodInput"></a>

```java
public java.lang.String getPeriodInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.internalValue"></a>

```java
public IResolvable|LicensemanagerReportGeneratorReportFrequency getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a>

---


### LicensemanagerReportGeneratorS3LocationOutputReference <a name="LicensemanagerReportGeneratorS3LocationOutputReference" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_report_generator.LicensemanagerReportGeneratorS3LocationOutputReference;

new LicensemanagerReportGeneratorS3LocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.keyPrefix">keyPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3Location">LicensemanagerReportGeneratorS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.keyPrefix"></a>

```java
public java.lang.String getKeyPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.internalValue"></a>

```java
public LicensemanagerReportGeneratorS3Location getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3Location">LicensemanagerReportGeneratorS3Location</a>

---


### LicensemanagerReportGeneratorTagsList <a name="LicensemanagerReportGeneratorTagsList" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_report_generator.LicensemanagerReportGeneratorTagsList;

new LicensemanagerReportGeneratorTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.get"></a>

```java
public LicensemanagerReportGeneratorTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LicensemanagerReportGeneratorTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>>

---


### LicensemanagerReportGeneratorTagsOutputReference <a name="LicensemanagerReportGeneratorTagsOutputReference" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanager_report_generator.LicensemanagerReportGeneratorTagsOutputReference;

new LicensemanagerReportGeneratorTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|LicensemanagerReportGeneratorTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>

---



