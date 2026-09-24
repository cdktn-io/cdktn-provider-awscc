# `drsLaunchConfigurationTemplate` Submodule <a name="`drsLaunchConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DrsLaunchConfigurationTemplate <a name="DrsLaunchConfigurationTemplate" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template awscc_drs_launch_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer"></a>

```java
import io.cdktn.providers.awscc.drs_launch_configuration_template.DrsLaunchConfigurationTemplate;

DrsLaunchConfigurationTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .copyPrivateIp(java.lang.Boolean|IResolvable)
//  .copyTags(java.lang.Boolean|IResolvable)
//  .exportBucketArn(java.lang.String)
//  .launchDisposition(java.lang.String)
//  .launchIntoSourceInstance(java.lang.Boolean|IResolvable)
//  .licensing(DrsLaunchConfigurationTemplateLicensing)
//  .postLaunchEnabled(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<DrsLaunchConfigurationTemplateTags>)
//  .targetInstanceTypeRightSizingMethod(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.copyPrivateIp">copyPrivateIp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Copy private IP. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.copyTags">copyTags</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Copy tags. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.exportBucketArn">exportBucketArn</a></code> | <code>java.lang.String</code> | S3 bucket ARN to export Source Network templates. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.launchDisposition">launchDisposition</a></code> | <code>java.lang.String</code> | Launch disposition. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.launchIntoSourceInstance">launchIntoSourceInstance</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.licensing">licensing</a></code> | <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a></code> | Configuration of a machine's license. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.postLaunchEnabled">postLaunchEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether we want to activate post-launch actions. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>></code> | A set of tags associated with the Launch Configuration Template. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.targetInstanceTypeRightSizingMethod">targetInstanceTypeRightSizingMethod</a></code> | <code>java.lang.String</code> | Target instance type right-sizing method. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `copyPrivateIp`<sup>Optional</sup> <a name="copyPrivateIp" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.copyPrivateIp"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Copy private IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#copy_private_ip DrsLaunchConfigurationTemplate#copy_private_ip}

---

##### `copyTags`<sup>Optional</sup> <a name="copyTags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.copyTags"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Copy tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#copy_tags DrsLaunchConfigurationTemplate#copy_tags}

---

##### `exportBucketArn`<sup>Optional</sup> <a name="exportBucketArn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.exportBucketArn"></a>

- *Type:* java.lang.String

S3 bucket ARN to export Source Network templates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#export_bucket_arn DrsLaunchConfigurationTemplate#export_bucket_arn}

---

##### `launchDisposition`<sup>Optional</sup> <a name="launchDisposition" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.launchDisposition"></a>

- *Type:* java.lang.String

Launch disposition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#launch_disposition DrsLaunchConfigurationTemplate#launch_disposition}

---

##### `launchIntoSourceInstance`<sup>Optional</sup> <a name="launchIntoSourceInstance" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.launchIntoSourceInstance"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#launch_into_source_instance DrsLaunchConfigurationTemplate#launch_into_source_instance}

---

##### `licensing`<sup>Optional</sup> <a name="licensing" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.licensing"></a>

- *Type:* <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a>

Configuration of a machine's license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#licensing DrsLaunchConfigurationTemplate#licensing}

---

##### `postLaunchEnabled`<sup>Optional</sup> <a name="postLaunchEnabled" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.postLaunchEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether we want to activate post-launch actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#post_launch_enabled DrsLaunchConfigurationTemplate#post_launch_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>>

A set of tags associated with the Launch Configuration Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#tags DrsLaunchConfigurationTemplate#tags}

---

##### `targetInstanceTypeRightSizingMethod`<sup>Optional</sup> <a name="targetInstanceTypeRightSizingMethod" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.targetInstanceTypeRightSizingMethod"></a>

- *Type:* java.lang.String

Target instance type right-sizing method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#target_instance_type_right_sizing_method DrsLaunchConfigurationTemplate#target_instance_type_right_sizing_method}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putLicensing">putLicensing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetCopyPrivateIp">resetCopyPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetCopyTags">resetCopyTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetExportBucketArn">resetExportBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLaunchDisposition">resetLaunchDisposition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLaunchIntoSourceInstance">resetLaunchIntoSourceInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLicensing">resetLicensing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetPostLaunchEnabled">resetPostLaunchEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetTargetInstanceTypeRightSizingMethod">resetTargetInstanceTypeRightSizingMethod</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLicensing` <a name="putLicensing" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putLicensing"></a>

```java
public void putLicensing(DrsLaunchConfigurationTemplateLicensing value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putLicensing.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DrsLaunchConfigurationTemplateTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>>

---

##### `resetCopyPrivateIp` <a name="resetCopyPrivateIp" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetCopyPrivateIp"></a>

```java
public void resetCopyPrivateIp()
```

##### `resetCopyTags` <a name="resetCopyTags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetCopyTags"></a>

```java
public void resetCopyTags()
```

##### `resetExportBucketArn` <a name="resetExportBucketArn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetExportBucketArn"></a>

```java
public void resetExportBucketArn()
```

##### `resetLaunchDisposition` <a name="resetLaunchDisposition" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLaunchDisposition"></a>

```java
public void resetLaunchDisposition()
```

##### `resetLaunchIntoSourceInstance` <a name="resetLaunchIntoSourceInstance" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLaunchIntoSourceInstance"></a>

```java
public void resetLaunchIntoSourceInstance()
```

##### `resetLicensing` <a name="resetLicensing" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLicensing"></a>

```java
public void resetLicensing()
```

##### `resetPostLaunchEnabled` <a name="resetPostLaunchEnabled" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetPostLaunchEnabled"></a>

```java
public void resetPostLaunchEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetTags"></a>

```java
public void resetTags()
```

##### `resetTargetInstanceTypeRightSizingMethod` <a name="resetTargetInstanceTypeRightSizingMethod" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetTargetInstanceTypeRightSizingMethod"></a>

```java
public void resetTargetInstanceTypeRightSizingMethod()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DrsLaunchConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isConstruct"></a>

```java
import io.cdktn.providers.awscc.drs_launch_configuration_template.DrsLaunchConfigurationTemplate;

DrsLaunchConfigurationTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.drs_launch_configuration_template.DrsLaunchConfigurationTemplate;

DrsLaunchConfigurationTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.drs_launch_configuration_template.DrsLaunchConfigurationTemplate;

DrsLaunchConfigurationTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.drs_launch_configuration_template.DrsLaunchConfigurationTemplate;

DrsLaunchConfigurationTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DrsLaunchConfigurationTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DrsLaunchConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DrsLaunchConfigurationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DrsLaunchConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DrsLaunchConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchConfigurationTemplateId">launchConfigurationTemplateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.licensing">licensing</a></code> | <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference">DrsLaunchConfigurationTemplateLicensingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList">DrsLaunchConfigurationTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyPrivateIpInput">copyPrivateIpInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyTagsInput">copyTagsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.exportBucketArnInput">exportBucketArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchDispositionInput">launchDispositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchIntoSourceInstanceInput">launchIntoSourceInstanceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.licensingInput">licensingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.postLaunchEnabledInput">postLaunchEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.targetInstanceTypeRightSizingMethodInput">targetInstanceTypeRightSizingMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyPrivateIp">copyPrivateIp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyTags">copyTags</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.exportBucketArn">exportBucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchDisposition">launchDisposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchIntoSourceInstance">launchIntoSourceInstance</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.postLaunchEnabled">postLaunchEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.targetInstanceTypeRightSizingMethod">targetInstanceTypeRightSizingMethod</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `launchConfigurationTemplateId`<sup>Required</sup> <a name="launchConfigurationTemplateId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchConfigurationTemplateId"></a>

```java
public java.lang.String getLaunchConfigurationTemplateId();
```

- *Type:* java.lang.String

---

##### `licensing`<sup>Required</sup> <a name="licensing" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.licensing"></a>

```java
public DrsLaunchConfigurationTemplateLicensingOutputReference getLicensing();
```

- *Type:* <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference">DrsLaunchConfigurationTemplateLicensingOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tags"></a>

```java
public DrsLaunchConfigurationTemplateTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList">DrsLaunchConfigurationTemplateTagsList</a>

---

##### `copyPrivateIpInput`<sup>Optional</sup> <a name="copyPrivateIpInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyPrivateIpInput"></a>

```java
public java.lang.Boolean|IResolvable getCopyPrivateIpInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `copyTagsInput`<sup>Optional</sup> <a name="copyTagsInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyTagsInput"></a>

```java
public java.lang.Boolean|IResolvable getCopyTagsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `exportBucketArnInput`<sup>Optional</sup> <a name="exportBucketArnInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.exportBucketArnInput"></a>

```java
public java.lang.String getExportBucketArnInput();
```

- *Type:* java.lang.String

---

##### `launchDispositionInput`<sup>Optional</sup> <a name="launchDispositionInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchDispositionInput"></a>

```java
public java.lang.String getLaunchDispositionInput();
```

- *Type:* java.lang.String

---

##### `launchIntoSourceInstanceInput`<sup>Optional</sup> <a name="launchIntoSourceInstanceInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchIntoSourceInstanceInput"></a>

```java
public java.lang.Boolean|IResolvable getLaunchIntoSourceInstanceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `licensingInput`<sup>Optional</sup> <a name="licensingInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.licensingInput"></a>

```java
public IResolvable|DrsLaunchConfigurationTemplateLicensing getLicensingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a>

---

##### `postLaunchEnabledInput`<sup>Optional</sup> <a name="postLaunchEnabledInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.postLaunchEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPostLaunchEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DrsLaunchConfigurationTemplateTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>>

---

##### `targetInstanceTypeRightSizingMethodInput`<sup>Optional</sup> <a name="targetInstanceTypeRightSizingMethodInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.targetInstanceTypeRightSizingMethodInput"></a>

```java
public java.lang.String getTargetInstanceTypeRightSizingMethodInput();
```

- *Type:* java.lang.String

---

##### `copyPrivateIp`<sup>Required</sup> <a name="copyPrivateIp" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyPrivateIp"></a>

```java
public java.lang.Boolean|IResolvable getCopyPrivateIp();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `copyTags`<sup>Required</sup> <a name="copyTags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyTags"></a>

```java
public java.lang.Boolean|IResolvable getCopyTags();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `exportBucketArn`<sup>Required</sup> <a name="exportBucketArn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.exportBucketArn"></a>

```java
public java.lang.String getExportBucketArn();
```

- *Type:* java.lang.String

---

##### `launchDisposition`<sup>Required</sup> <a name="launchDisposition" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchDisposition"></a>

```java
public java.lang.String getLaunchDisposition();
```

- *Type:* java.lang.String

---

##### `launchIntoSourceInstance`<sup>Required</sup> <a name="launchIntoSourceInstance" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchIntoSourceInstance"></a>

```java
public java.lang.Boolean|IResolvable getLaunchIntoSourceInstance();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `postLaunchEnabled`<sup>Required</sup> <a name="postLaunchEnabled" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.postLaunchEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPostLaunchEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `targetInstanceTypeRightSizingMethod`<sup>Required</sup> <a name="targetInstanceTypeRightSizingMethod" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.targetInstanceTypeRightSizingMethod"></a>

```java
public java.lang.String getTargetInstanceTypeRightSizingMethod();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DrsLaunchConfigurationTemplateConfig <a name="DrsLaunchConfigurationTemplateConfig" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.drs_launch_configuration_template.DrsLaunchConfigurationTemplateConfig;

DrsLaunchConfigurationTemplateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .copyPrivateIp(java.lang.Boolean|IResolvable)
//  .copyTags(java.lang.Boolean|IResolvable)
//  .exportBucketArn(java.lang.String)
//  .launchDisposition(java.lang.String)
//  .launchIntoSourceInstance(java.lang.Boolean|IResolvable)
//  .licensing(DrsLaunchConfigurationTemplateLicensing)
//  .postLaunchEnabled(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<DrsLaunchConfigurationTemplateTags>)
//  .targetInstanceTypeRightSizingMethod(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.copyPrivateIp">copyPrivateIp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Copy private IP. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.copyTags">copyTags</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Copy tags. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.exportBucketArn">exportBucketArn</a></code> | <code>java.lang.String</code> | S3 bucket ARN to export Source Network templates. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.launchDisposition">launchDisposition</a></code> | <code>java.lang.String</code> | Launch disposition. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.launchIntoSourceInstance">launchIntoSourceInstance</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.licensing">licensing</a></code> | <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a></code> | Configuration of a machine's license. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.postLaunchEnabled">postLaunchEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether we want to activate post-launch actions. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>></code> | A set of tags associated with the Launch Configuration Template. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.targetInstanceTypeRightSizingMethod">targetInstanceTypeRightSizingMethod</a></code> | <code>java.lang.String</code> | Target instance type right-sizing method. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `copyPrivateIp`<sup>Optional</sup> <a name="copyPrivateIp" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.copyPrivateIp"></a>

```java
public java.lang.Boolean|IResolvable getCopyPrivateIp();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Copy private IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#copy_private_ip DrsLaunchConfigurationTemplate#copy_private_ip}

---

##### `copyTags`<sup>Optional</sup> <a name="copyTags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.copyTags"></a>

```java
public java.lang.Boolean|IResolvable getCopyTags();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Copy tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#copy_tags DrsLaunchConfigurationTemplate#copy_tags}

---

##### `exportBucketArn`<sup>Optional</sup> <a name="exportBucketArn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.exportBucketArn"></a>

```java
public java.lang.String getExportBucketArn();
```

- *Type:* java.lang.String

S3 bucket ARN to export Source Network templates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#export_bucket_arn DrsLaunchConfigurationTemplate#export_bucket_arn}

---

##### `launchDisposition`<sup>Optional</sup> <a name="launchDisposition" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.launchDisposition"></a>

```java
public java.lang.String getLaunchDisposition();
```

- *Type:* java.lang.String

Launch disposition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#launch_disposition DrsLaunchConfigurationTemplate#launch_disposition}

---

##### `launchIntoSourceInstance`<sup>Optional</sup> <a name="launchIntoSourceInstance" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.launchIntoSourceInstance"></a>

```java
public java.lang.Boolean|IResolvable getLaunchIntoSourceInstance();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#launch_into_source_instance DrsLaunchConfigurationTemplate#launch_into_source_instance}

---

##### `licensing`<sup>Optional</sup> <a name="licensing" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.licensing"></a>

```java
public DrsLaunchConfigurationTemplateLicensing getLicensing();
```

- *Type:* <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a>

Configuration of a machine's license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#licensing DrsLaunchConfigurationTemplate#licensing}

---

##### `postLaunchEnabled`<sup>Optional</sup> <a name="postLaunchEnabled" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.postLaunchEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPostLaunchEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether we want to activate post-launch actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#post_launch_enabled DrsLaunchConfigurationTemplate#post_launch_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.tags"></a>

```java
public IResolvable|java.util.List<DrsLaunchConfigurationTemplateTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>>

A set of tags associated with the Launch Configuration Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#tags DrsLaunchConfigurationTemplate#tags}

---

##### `targetInstanceTypeRightSizingMethod`<sup>Optional</sup> <a name="targetInstanceTypeRightSizingMethod" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.targetInstanceTypeRightSizingMethod"></a>

```java
public java.lang.String getTargetInstanceTypeRightSizingMethod();
```

- *Type:* java.lang.String

Target instance type right-sizing method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#target_instance_type_right_sizing_method DrsLaunchConfigurationTemplate#target_instance_type_right_sizing_method}

---

### DrsLaunchConfigurationTemplateLicensing <a name="DrsLaunchConfigurationTemplateLicensing" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing.Initializer"></a>

```java
import io.cdktn.providers.awscc.drs_launch_configuration_template.DrsLaunchConfigurationTemplateLicensing;

DrsLaunchConfigurationTemplateLicensing.builder()
//  .osByol(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing.property.osByol">osByol</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable Bring your own license or not. |

---

##### `osByol`<sup>Optional</sup> <a name="osByol" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing.property.osByol"></a>

```java
public java.lang.Boolean|IResolvable getOsByol();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable Bring your own license or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#os_byol DrsLaunchConfigurationTemplate#os_byol}

---

### DrsLaunchConfigurationTemplateTags <a name="DrsLaunchConfigurationTemplateTags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.drs_launch_configuration_template.DrsLaunchConfigurationTemplateTags;

DrsLaunchConfigurationTemplateTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#key DrsLaunchConfigurationTemplate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#value DrsLaunchConfigurationTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DrsLaunchConfigurationTemplateLicensingOutputReference <a name="DrsLaunchConfigurationTemplateLicensingOutputReference" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.drs_launch_configuration_template.DrsLaunchConfigurationTemplateLicensingOutputReference;

new DrsLaunchConfigurationTemplateLicensingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.resetOsByol">resetOsByol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOsByol` <a name="resetOsByol" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.resetOsByol"></a>

```java
public void resetOsByol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.osByolInput">osByolInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.osByol">osByol</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `osByolInput`<sup>Optional</sup> <a name="osByolInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.osByolInput"></a>

```java
public java.lang.Boolean|IResolvable getOsByolInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `osByol`<sup>Required</sup> <a name="osByol" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.osByol"></a>

```java
public java.lang.Boolean|IResolvable getOsByol();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.internalValue"></a>

```java
public IResolvable|DrsLaunchConfigurationTemplateLicensing getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a>

---


### DrsLaunchConfigurationTemplateTagsList <a name="DrsLaunchConfigurationTemplateTagsList" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.drs_launch_configuration_template.DrsLaunchConfigurationTemplateTagsList;

new DrsLaunchConfigurationTemplateTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.get"></a>

```java
public DrsLaunchConfigurationTemplateTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DrsLaunchConfigurationTemplateTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>>

---


### DrsLaunchConfigurationTemplateTagsOutputReference <a name="DrsLaunchConfigurationTemplateTagsOutputReference" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.drs_launch_configuration_template.DrsLaunchConfigurationTemplateTagsOutputReference;

new DrsLaunchConfigurationTemplateTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DrsLaunchConfigurationTemplateTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>

---



