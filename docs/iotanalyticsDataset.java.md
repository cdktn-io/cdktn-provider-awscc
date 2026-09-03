# `iotanalyticsDataset` Submodule <a name="`iotanalyticsDataset` Submodule" id="@cdktn/provider-awscc.iotanalyticsDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotanalyticsDataset <a name="IotanalyticsDataset" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset awscc_iotanalytics_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDataset;

IotanalyticsDataset.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .actions(IResolvable|java.util.List<IotanalyticsDatasetActions>)
//  .contentDeliveryRules(IResolvable|java.util.List<IotanalyticsDatasetContentDeliveryRules>)
//  .datasetName(java.lang.String)
//  .lateDataRules(IResolvable|java.util.List<IotanalyticsDatasetLateDataRules>)
//  .retentionPeriod(IotanalyticsDatasetRetentionPeriod)
//  .tags(IResolvable|java.util.List<IotanalyticsDatasetTags>)
//  .triggers(IResolvable|java.util.List<IotanalyticsDatasetTriggers>)
//  .versioningConfiguration(IotanalyticsDatasetVersioningConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.actions">actions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions">IotanalyticsDatasetActions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#actions IotanalyticsDataset#actions}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.contentDeliveryRules">contentDeliveryRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules">IotanalyticsDatasetContentDeliveryRules</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#content_delivery_rules IotanalyticsDataset#content_delivery_rules}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.datasetName">datasetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#dataset_name IotanalyticsDataset#dataset_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.lateDataRules">lateDataRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules">IotanalyticsDatasetLateDataRules</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#late_data_rules IotanalyticsDataset#late_data_rules}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.retentionPeriod">retentionPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod">IotanalyticsDatasetRetentionPeriod</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#retention_period IotanalyticsDataset#retention_period}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags">IotanalyticsDatasetTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#tags IotanalyticsDataset#tags}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.triggers">triggers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers">IotanalyticsDatasetTriggers</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#triggers IotanalyticsDataset#triggers}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.versioningConfiguration">versioningConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration">IotanalyticsDatasetVersioningConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#versioning_configuration IotanalyticsDataset#versioning_configuration}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.actions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions">IotanalyticsDatasetActions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#actions IotanalyticsDataset#actions}.

---

##### `contentDeliveryRules`<sup>Optional</sup> <a name="contentDeliveryRules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.contentDeliveryRules"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules">IotanalyticsDatasetContentDeliveryRules</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#content_delivery_rules IotanalyticsDataset#content_delivery_rules}.

---

##### `datasetName`<sup>Optional</sup> <a name="datasetName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.datasetName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#dataset_name IotanalyticsDataset#dataset_name}.

---

##### `lateDataRules`<sup>Optional</sup> <a name="lateDataRules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.lateDataRules"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules">IotanalyticsDatasetLateDataRules</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#late_data_rules IotanalyticsDataset#late_data_rules}.

---

##### `retentionPeriod`<sup>Optional</sup> <a name="retentionPeriod" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.retentionPeriod"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod">IotanalyticsDatasetRetentionPeriod</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#retention_period IotanalyticsDataset#retention_period}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags">IotanalyticsDatasetTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#tags IotanalyticsDataset#tags}.

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.triggers"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers">IotanalyticsDatasetTriggers</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#triggers IotanalyticsDataset#triggers}.

---

##### `versioningConfiguration`<sup>Optional</sup> <a name="versioningConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.versioningConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration">IotanalyticsDatasetVersioningConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#versioning_configuration IotanalyticsDataset#versioning_configuration}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putContentDeliveryRules">putContentDeliveryRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putLateDataRules">putLateDataRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putRetentionPeriod">putRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putTriggers">putTriggers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putVersioningConfiguration">putVersioningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetContentDeliveryRules">resetContentDeliveryRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetDatasetName">resetDatasetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetLateDataRules">resetLateDataRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetRetentionPeriod">resetRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetTriggers">resetTriggers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetVersioningConfiguration">resetVersioningConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActions` <a name="putActions" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putActions"></a>

```java
public void putActions(IResolvable|java.util.List<IotanalyticsDatasetActions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putActions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions">IotanalyticsDatasetActions</a>>

---

##### `putContentDeliveryRules` <a name="putContentDeliveryRules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putContentDeliveryRules"></a>

```java
public void putContentDeliveryRules(IResolvable|java.util.List<IotanalyticsDatasetContentDeliveryRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putContentDeliveryRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules">IotanalyticsDatasetContentDeliveryRules</a>>

---

##### `putLateDataRules` <a name="putLateDataRules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putLateDataRules"></a>

```java
public void putLateDataRules(IResolvable|java.util.List<IotanalyticsDatasetLateDataRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putLateDataRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules">IotanalyticsDatasetLateDataRules</a>>

---

##### `putRetentionPeriod` <a name="putRetentionPeriod" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putRetentionPeriod"></a>

```java
public void putRetentionPeriod(IotanalyticsDatasetRetentionPeriod value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putRetentionPeriod.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod">IotanalyticsDatasetRetentionPeriod</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IotanalyticsDatasetTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags">IotanalyticsDatasetTags</a>>

---

##### `putTriggers` <a name="putTriggers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putTriggers"></a>

```java
public void putTriggers(IResolvable|java.util.List<IotanalyticsDatasetTriggers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putTriggers.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers">IotanalyticsDatasetTriggers</a>>

---

##### `putVersioningConfiguration` <a name="putVersioningConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putVersioningConfiguration"></a>

```java
public void putVersioningConfiguration(IotanalyticsDatasetVersioningConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putVersioningConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration">IotanalyticsDatasetVersioningConfiguration</a>

---

##### `resetContentDeliveryRules` <a name="resetContentDeliveryRules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetContentDeliveryRules"></a>

```java
public void resetContentDeliveryRules()
```

##### `resetDatasetName` <a name="resetDatasetName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetDatasetName"></a>

```java
public void resetDatasetName()
```

##### `resetLateDataRules` <a name="resetLateDataRules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetLateDataRules"></a>

```java
public void resetLateDataRules()
```

##### `resetRetentionPeriod` <a name="resetRetentionPeriod" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetRetentionPeriod"></a>

```java
public void resetRetentionPeriod()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetTags"></a>

```java
public void resetTags()
```

##### `resetTriggers` <a name="resetTriggers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetTriggers"></a>

```java
public void resetTriggers()
```

##### `resetVersioningConfiguration` <a name="resetVersioningConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetVersioningConfiguration"></a>

```java
public void resetVersioningConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotanalyticsDataset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDataset;

IotanalyticsDataset.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDataset;

IotanalyticsDataset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDataset;

IotanalyticsDataset.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDataset;

IotanalyticsDataset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotanalyticsDataset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotanalyticsDataset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotanalyticsDataset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotanalyticsDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotanalyticsDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList">IotanalyticsDatasetActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.contentDeliveryRules">contentDeliveryRules</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList">IotanalyticsDatasetContentDeliveryRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.lateDataRules">lateDataRules</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList">IotanalyticsDatasetLateDataRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.retentionPeriod">retentionPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference">IotanalyticsDatasetRetentionPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList">IotanalyticsDatasetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.triggers">triggers</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList">IotanalyticsDatasetTriggersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.versioningConfiguration">versioningConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference">IotanalyticsDatasetVersioningConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.actionsInput">actionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions">IotanalyticsDatasetActions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.contentDeliveryRulesInput">contentDeliveryRulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules">IotanalyticsDatasetContentDeliveryRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.datasetNameInput">datasetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.lateDataRulesInput">lateDataRulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules">IotanalyticsDatasetLateDataRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.retentionPeriodInput">retentionPeriodInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod">IotanalyticsDatasetRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags">IotanalyticsDatasetTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.triggersInput">triggersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers">IotanalyticsDatasetTriggers</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.versioningConfigurationInput">versioningConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration">IotanalyticsDatasetVersioningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.datasetName">datasetName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.actions"></a>

```java
public IotanalyticsDatasetActionsList getActions();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList">IotanalyticsDatasetActionsList</a>

---

##### `contentDeliveryRules`<sup>Required</sup> <a name="contentDeliveryRules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.contentDeliveryRules"></a>

```java
public IotanalyticsDatasetContentDeliveryRulesList getContentDeliveryRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList">IotanalyticsDatasetContentDeliveryRulesList</a>

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lateDataRules`<sup>Required</sup> <a name="lateDataRules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.lateDataRules"></a>

```java
public IotanalyticsDatasetLateDataRulesList getLateDataRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList">IotanalyticsDatasetLateDataRulesList</a>

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.retentionPeriod"></a>

```java
public IotanalyticsDatasetRetentionPeriodOutputReference getRetentionPeriod();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference">IotanalyticsDatasetRetentionPeriodOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.tags"></a>

```java
public IotanalyticsDatasetTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList">IotanalyticsDatasetTagsList</a>

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.triggers"></a>

```java
public IotanalyticsDatasetTriggersList getTriggers();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList">IotanalyticsDatasetTriggersList</a>

---

##### `versioningConfiguration`<sup>Required</sup> <a name="versioningConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.versioningConfiguration"></a>

```java
public IotanalyticsDatasetVersioningConfigurationOutputReference getVersioningConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference">IotanalyticsDatasetVersioningConfigurationOutputReference</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.actionsInput"></a>

```java
public IResolvable|java.util.List<IotanalyticsDatasetActions> getActionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions">IotanalyticsDatasetActions</a>>

---

##### `contentDeliveryRulesInput`<sup>Optional</sup> <a name="contentDeliveryRulesInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.contentDeliveryRulesInput"></a>

```java
public IResolvable|java.util.List<IotanalyticsDatasetContentDeliveryRules> getContentDeliveryRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules">IotanalyticsDatasetContentDeliveryRules</a>>

---

##### `datasetNameInput`<sup>Optional</sup> <a name="datasetNameInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.datasetNameInput"></a>

```java
public java.lang.String getDatasetNameInput();
```

- *Type:* java.lang.String

---

##### `lateDataRulesInput`<sup>Optional</sup> <a name="lateDataRulesInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.lateDataRulesInput"></a>

```java
public IResolvable|java.util.List<IotanalyticsDatasetLateDataRules> getLateDataRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules">IotanalyticsDatasetLateDataRules</a>>

---

##### `retentionPeriodInput`<sup>Optional</sup> <a name="retentionPeriodInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.retentionPeriodInput"></a>

```java
public IResolvable|IotanalyticsDatasetRetentionPeriod getRetentionPeriodInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod">IotanalyticsDatasetRetentionPeriod</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IotanalyticsDatasetTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags">IotanalyticsDatasetTags</a>>

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.triggersInput"></a>

```java
public IResolvable|java.util.List<IotanalyticsDatasetTriggers> getTriggersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers">IotanalyticsDatasetTriggers</a>>

---

##### `versioningConfigurationInput`<sup>Optional</sup> <a name="versioningConfigurationInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.versioningConfigurationInput"></a>

```java
public IResolvable|IotanalyticsDatasetVersioningConfiguration getVersioningConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration">IotanalyticsDatasetVersioningConfiguration</a>

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.datasetName"></a>

```java
public java.lang.String getDatasetName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotanalyticsDatasetActions <a name="IotanalyticsDatasetActions" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetActions;

IotanalyticsDatasetActions.builder()
    .actionName(java.lang.String)
//  .containerAction(IotanalyticsDatasetActionsContainerAction)
//  .queryAction(IotanalyticsDatasetActionsQueryAction)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions.property.actionName">actionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#action_name IotanalyticsDataset#action_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions.property.containerAction">containerAction</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction">IotanalyticsDatasetActionsContainerAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#container_action IotanalyticsDataset#container_action}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions.property.queryAction">queryAction</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction">IotanalyticsDatasetActionsQueryAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#query_action IotanalyticsDataset#query_action}. |

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions.property.actionName"></a>

```java
public java.lang.String getActionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#action_name IotanalyticsDataset#action_name}.

---

##### `containerAction`<sup>Optional</sup> <a name="containerAction" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions.property.containerAction"></a>

```java
public IotanalyticsDatasetActionsContainerAction getContainerAction();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction">IotanalyticsDatasetActionsContainerAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#container_action IotanalyticsDataset#container_action}.

---

##### `queryAction`<sup>Optional</sup> <a name="queryAction" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions.property.queryAction"></a>

```java
public IotanalyticsDatasetActionsQueryAction getQueryAction();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction">IotanalyticsDatasetActionsQueryAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#query_action IotanalyticsDataset#query_action}.

---

### IotanalyticsDatasetActionsContainerAction <a name="IotanalyticsDatasetActionsContainerAction" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetActionsContainerAction;

IotanalyticsDatasetActionsContainerAction.builder()
//  .executionRoleArn(java.lang.String)
//  .image(java.lang.String)
//  .resourceConfiguration(IotanalyticsDatasetActionsContainerActionResourceConfiguration)
//  .variables(IResolvable|java.util.List<IotanalyticsDatasetActionsContainerActionVariables>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#execution_role_arn IotanalyticsDataset#execution_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction.property.image">image</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#image IotanalyticsDataset#image}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction.property.resourceConfiguration">resourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration">IotanalyticsDatasetActionsContainerActionResourceConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#resource_configuration IotanalyticsDataset#resource_configuration}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction.property.variables">variables</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables">IotanalyticsDatasetActionsContainerActionVariables</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#variables IotanalyticsDataset#variables}. |

---

##### `executionRoleArn`<sup>Optional</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#execution_role_arn IotanalyticsDataset#execution_role_arn}.

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#image IotanalyticsDataset#image}.

---

##### `resourceConfiguration`<sup>Optional</sup> <a name="resourceConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction.property.resourceConfiguration"></a>

```java
public IotanalyticsDatasetActionsContainerActionResourceConfiguration getResourceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration">IotanalyticsDatasetActionsContainerActionResourceConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#resource_configuration IotanalyticsDataset#resource_configuration}.

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction.property.variables"></a>

```java
public IResolvable|java.util.List<IotanalyticsDatasetActionsContainerActionVariables> getVariables();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables">IotanalyticsDatasetActionsContainerActionVariables</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#variables IotanalyticsDataset#variables}.

---

### IotanalyticsDatasetActionsContainerActionResourceConfiguration <a name="IotanalyticsDatasetActionsContainerActionResourceConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration;

IotanalyticsDatasetActionsContainerActionResourceConfiguration.builder()
//  .computeType(java.lang.String)
//  .volumeSizeInGb(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration.property.computeType">computeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#compute_type IotanalyticsDataset#compute_type}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#volume_size_in_gb IotanalyticsDataset#volume_size_in_gb}. |

---

##### `computeType`<sup>Optional</sup> <a name="computeType" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration.property.computeType"></a>

```java
public java.lang.String getComputeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#compute_type IotanalyticsDataset#compute_type}.

---

##### `volumeSizeInGb`<sup>Optional</sup> <a name="volumeSizeInGb" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration.property.volumeSizeInGb"></a>

```java
public java.lang.Number getVolumeSizeInGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#volume_size_in_gb IotanalyticsDataset#volume_size_in_gb}.

---

### IotanalyticsDatasetActionsContainerActionVariables <a name="IotanalyticsDatasetActionsContainerActionVariables" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetActionsContainerActionVariables;

IotanalyticsDatasetActionsContainerActionVariables.builder()
//  .datasetContentVersionValue(IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue)
//  .doubleValue(java.lang.Number)
//  .outputFileUriValue(IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue)
//  .stringValue(java.lang.String)
//  .variableName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.datasetContentVersionValue">datasetContentVersionValue</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue">IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#dataset_content_version_value IotanalyticsDataset#dataset_content_version_value}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.doubleValue">doubleValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#double_value IotanalyticsDataset#double_value}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.outputFileUriValue">outputFileUriValue</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue">IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#output_file_uri_value IotanalyticsDataset#output_file_uri_value}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#string_value IotanalyticsDataset#string_value}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.variableName">variableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#variable_name IotanalyticsDataset#variable_name}. |

---

##### `datasetContentVersionValue`<sup>Optional</sup> <a name="datasetContentVersionValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.datasetContentVersionValue"></a>

```java
public IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue getDatasetContentVersionValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue">IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#dataset_content_version_value IotanalyticsDataset#dataset_content_version_value}.

---

##### `doubleValue`<sup>Optional</sup> <a name="doubleValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.doubleValue"></a>

```java
public java.lang.Number getDoubleValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#double_value IotanalyticsDataset#double_value}.

---

##### `outputFileUriValue`<sup>Optional</sup> <a name="outputFileUriValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.outputFileUriValue"></a>

```java
public IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue getOutputFileUriValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue">IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#output_file_uri_value IotanalyticsDataset#output_file_uri_value}.

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#string_value IotanalyticsDataset#string_value}.

---

##### `variableName`<sup>Optional</sup> <a name="variableName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.variableName"></a>

```java
public java.lang.String getVariableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#variable_name IotanalyticsDataset#variable_name}.

---

### IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue <a name="IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue;

IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue.builder()
//  .datasetName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue.property.datasetName">datasetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#dataset_name IotanalyticsDataset#dataset_name}. |

---

##### `datasetName`<sup>Optional</sup> <a name="datasetName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue.property.datasetName"></a>

```java
public java.lang.String getDatasetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#dataset_name IotanalyticsDataset#dataset_name}.

---

### IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue <a name="IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue;

IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue.builder()
//  .fileName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue.property.fileName">fileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#file_name IotanalyticsDataset#file_name}. |

---

##### `fileName`<sup>Optional</sup> <a name="fileName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#file_name IotanalyticsDataset#file_name}.

---

### IotanalyticsDatasetActionsQueryAction <a name="IotanalyticsDatasetActionsQueryAction" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetActionsQueryAction;

IotanalyticsDatasetActionsQueryAction.builder()
//  .filters(IResolvable|java.util.List<IotanalyticsDatasetActionsQueryActionFilters>)
//  .sqlQuery(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction.property.filters">filters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters">IotanalyticsDatasetActionsQueryActionFilters</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#filters IotanalyticsDataset#filters}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction.property.sqlQuery">sqlQuery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#sql_query IotanalyticsDataset#sql_query}. |

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction.property.filters"></a>

```java
public IResolvable|java.util.List<IotanalyticsDatasetActionsQueryActionFilters> getFilters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters">IotanalyticsDatasetActionsQueryActionFilters</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#filters IotanalyticsDataset#filters}.

---

##### `sqlQuery`<sup>Optional</sup> <a name="sqlQuery" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction.property.sqlQuery"></a>

```java
public java.lang.String getSqlQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#sql_query IotanalyticsDataset#sql_query}.

---

### IotanalyticsDatasetActionsQueryActionFilters <a name="IotanalyticsDatasetActionsQueryActionFilters" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetActionsQueryActionFilters;

IotanalyticsDatasetActionsQueryActionFilters.builder()
//  .deltaTime(IotanalyticsDatasetActionsQueryActionFiltersDeltaTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters.property.deltaTime">deltaTime</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime">IotanalyticsDatasetActionsQueryActionFiltersDeltaTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#delta_time IotanalyticsDataset#delta_time}. |

---

##### `deltaTime`<sup>Optional</sup> <a name="deltaTime" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters.property.deltaTime"></a>

```java
public IotanalyticsDatasetActionsQueryActionFiltersDeltaTime getDeltaTime();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime">IotanalyticsDatasetActionsQueryActionFiltersDeltaTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#delta_time IotanalyticsDataset#delta_time}.

---

### IotanalyticsDatasetActionsQueryActionFiltersDeltaTime <a name="IotanalyticsDatasetActionsQueryActionFiltersDeltaTime" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime;

IotanalyticsDatasetActionsQueryActionFiltersDeltaTime.builder()
//  .offsetSeconds(java.lang.Number)
//  .timeExpression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime.property.offsetSeconds">offsetSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#offset_seconds IotanalyticsDataset#offset_seconds}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime.property.timeExpression">timeExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#time_expression IotanalyticsDataset#time_expression}. |

---

##### `offsetSeconds`<sup>Optional</sup> <a name="offsetSeconds" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime.property.offsetSeconds"></a>

```java
public java.lang.Number getOffsetSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#offset_seconds IotanalyticsDataset#offset_seconds}.

---

##### `timeExpression`<sup>Optional</sup> <a name="timeExpression" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime.property.timeExpression"></a>

```java
public java.lang.String getTimeExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#time_expression IotanalyticsDataset#time_expression}.

---

### IotanalyticsDatasetConfig <a name="IotanalyticsDatasetConfig" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetConfig;

IotanalyticsDatasetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .actions(IResolvable|java.util.List<IotanalyticsDatasetActions>)
//  .contentDeliveryRules(IResolvable|java.util.List<IotanalyticsDatasetContentDeliveryRules>)
//  .datasetName(java.lang.String)
//  .lateDataRules(IResolvable|java.util.List<IotanalyticsDatasetLateDataRules>)
//  .retentionPeriod(IotanalyticsDatasetRetentionPeriod)
//  .tags(IResolvable|java.util.List<IotanalyticsDatasetTags>)
//  .triggers(IResolvable|java.util.List<IotanalyticsDatasetTriggers>)
//  .versioningConfiguration(IotanalyticsDatasetVersioningConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.actions">actions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions">IotanalyticsDatasetActions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#actions IotanalyticsDataset#actions}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.contentDeliveryRules">contentDeliveryRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules">IotanalyticsDatasetContentDeliveryRules</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#content_delivery_rules IotanalyticsDataset#content_delivery_rules}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.datasetName">datasetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#dataset_name IotanalyticsDataset#dataset_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.lateDataRules">lateDataRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules">IotanalyticsDatasetLateDataRules</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#late_data_rules IotanalyticsDataset#late_data_rules}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.retentionPeriod">retentionPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod">IotanalyticsDatasetRetentionPeriod</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#retention_period IotanalyticsDataset#retention_period}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags">IotanalyticsDatasetTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#tags IotanalyticsDataset#tags}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.triggers">triggers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers">IotanalyticsDatasetTriggers</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#triggers IotanalyticsDataset#triggers}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.versioningConfiguration">versioningConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration">IotanalyticsDatasetVersioningConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#versioning_configuration IotanalyticsDataset#versioning_configuration}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.actions"></a>

```java
public IResolvable|java.util.List<IotanalyticsDatasetActions> getActions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions">IotanalyticsDatasetActions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#actions IotanalyticsDataset#actions}.

---

##### `contentDeliveryRules`<sup>Optional</sup> <a name="contentDeliveryRules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.contentDeliveryRules"></a>

```java
public IResolvable|java.util.List<IotanalyticsDatasetContentDeliveryRules> getContentDeliveryRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules">IotanalyticsDatasetContentDeliveryRules</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#content_delivery_rules IotanalyticsDataset#content_delivery_rules}.

---

##### `datasetName`<sup>Optional</sup> <a name="datasetName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.datasetName"></a>

```java
public java.lang.String getDatasetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#dataset_name IotanalyticsDataset#dataset_name}.

---

##### `lateDataRules`<sup>Optional</sup> <a name="lateDataRules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.lateDataRules"></a>

```java
public IResolvable|java.util.List<IotanalyticsDatasetLateDataRules> getLateDataRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules">IotanalyticsDatasetLateDataRules</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#late_data_rules IotanalyticsDataset#late_data_rules}.

---

##### `retentionPeriod`<sup>Optional</sup> <a name="retentionPeriod" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.retentionPeriod"></a>

```java
public IotanalyticsDatasetRetentionPeriod getRetentionPeriod();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod">IotanalyticsDatasetRetentionPeriod</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#retention_period IotanalyticsDataset#retention_period}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IotanalyticsDatasetTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags">IotanalyticsDatasetTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#tags IotanalyticsDataset#tags}.

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.triggers"></a>

```java
public IResolvable|java.util.List<IotanalyticsDatasetTriggers> getTriggers();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers">IotanalyticsDatasetTriggers</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#triggers IotanalyticsDataset#triggers}.

---

##### `versioningConfiguration`<sup>Optional</sup> <a name="versioningConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.versioningConfiguration"></a>

```java
public IotanalyticsDatasetVersioningConfiguration getVersioningConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration">IotanalyticsDatasetVersioningConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#versioning_configuration IotanalyticsDataset#versioning_configuration}.

---

### IotanalyticsDatasetContentDeliveryRules <a name="IotanalyticsDatasetContentDeliveryRules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetContentDeliveryRules;

IotanalyticsDatasetContentDeliveryRules.builder()
//  .destination(IotanalyticsDatasetContentDeliveryRulesDestination)
//  .entryName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination">IotanalyticsDatasetContentDeliveryRulesDestination</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#destination IotanalyticsDataset#destination}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules.property.entryName">entryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#entry_name IotanalyticsDataset#entry_name}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules.property.destination"></a>

```java
public IotanalyticsDatasetContentDeliveryRulesDestination getDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination">IotanalyticsDatasetContentDeliveryRulesDestination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#destination IotanalyticsDataset#destination}.

---

##### `entryName`<sup>Optional</sup> <a name="entryName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules.property.entryName"></a>

```java
public java.lang.String getEntryName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#entry_name IotanalyticsDataset#entry_name}.

---

### IotanalyticsDatasetContentDeliveryRulesDestination <a name="IotanalyticsDatasetContentDeliveryRulesDestination" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetContentDeliveryRulesDestination;

IotanalyticsDatasetContentDeliveryRulesDestination.builder()
//  .iotEventsDestinationConfiguration(IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration)
//  .s3DestinationConfiguration(IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination.property.iotEventsDestinationConfiguration">iotEventsDestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#iot_events_destination_configuration IotanalyticsDataset#iot_events_destination_configuration}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination.property.s3DestinationConfiguration">s3DestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#s3_destination_configuration IotanalyticsDataset#s3_destination_configuration}. |

---

##### `iotEventsDestinationConfiguration`<sup>Optional</sup> <a name="iotEventsDestinationConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination.property.iotEventsDestinationConfiguration"></a>

```java
public IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration getIotEventsDestinationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#iot_events_destination_configuration IotanalyticsDataset#iot_events_destination_configuration}.

---

##### `s3DestinationConfiguration`<sup>Optional</sup> <a name="s3DestinationConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination.property.s3DestinationConfiguration"></a>

```java
public IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration getS3DestinationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#s3_destination_configuration IotanalyticsDataset#s3_destination_configuration}.

---

### IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration <a name="IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration;

IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration.builder()
//  .inputName(java.lang.String)
//  .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration.property.inputName">inputName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#input_name IotanalyticsDataset#input_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#role_arn IotanalyticsDataset#role_arn}. |

---

##### `inputName`<sup>Optional</sup> <a name="inputName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration.property.inputName"></a>

```java
public java.lang.String getInputName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#input_name IotanalyticsDataset#input_name}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#role_arn IotanalyticsDataset#role_arn}.

---

### IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration <a name="IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration;

IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.builder()
//  .bucket(java.lang.String)
//  .glueConfiguration(IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration)
//  .key(java.lang.String)
//  .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#bucket IotanalyticsDataset#bucket}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.property.glueConfiguration">glueConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#glue_configuration IotanalyticsDataset#glue_configuration}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#key IotanalyticsDataset#key}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#role_arn IotanalyticsDataset#role_arn}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#bucket IotanalyticsDataset#bucket}.

---

##### `glueConfiguration`<sup>Optional</sup> <a name="glueConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.property.glueConfiguration"></a>

```java
public IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration getGlueConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#glue_configuration IotanalyticsDataset#glue_configuration}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#key IotanalyticsDataset#key}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#role_arn IotanalyticsDataset#role_arn}.

---

### IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration <a name="IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration;

IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration.builder()
//  .databaseName(java.lang.String)
//  .tableName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#database_name IotanalyticsDataset#database_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#table_name IotanalyticsDataset#table_name}. |

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#database_name IotanalyticsDataset#database_name}.

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#table_name IotanalyticsDataset#table_name}.

---

### IotanalyticsDatasetLateDataRules <a name="IotanalyticsDatasetLateDataRules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetLateDataRules;

IotanalyticsDatasetLateDataRules.builder()
//  .ruleConfiguration(IotanalyticsDatasetLateDataRulesRuleConfiguration)
//  .ruleName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules.property.ruleConfiguration">ruleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration">IotanalyticsDatasetLateDataRulesRuleConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#rule_configuration IotanalyticsDataset#rule_configuration}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#rule_name IotanalyticsDataset#rule_name}. |

---

##### `ruleConfiguration`<sup>Optional</sup> <a name="ruleConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules.property.ruleConfiguration"></a>

```java
public IotanalyticsDatasetLateDataRulesRuleConfiguration getRuleConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration">IotanalyticsDatasetLateDataRulesRuleConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#rule_configuration IotanalyticsDataset#rule_configuration}.

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#rule_name IotanalyticsDataset#rule_name}.

---

### IotanalyticsDatasetLateDataRulesRuleConfiguration <a name="IotanalyticsDatasetLateDataRulesRuleConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetLateDataRulesRuleConfiguration;

IotanalyticsDatasetLateDataRulesRuleConfiguration.builder()
//  .deltaTimeSessionWindowConfiguration(IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration.property.deltaTimeSessionWindowConfiguration">deltaTimeSessionWindowConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration">IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#delta_time_session_window_configuration IotanalyticsDataset#delta_time_session_window_configuration}. |

---

##### `deltaTimeSessionWindowConfiguration`<sup>Optional</sup> <a name="deltaTimeSessionWindowConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration.property.deltaTimeSessionWindowConfiguration"></a>

```java
public IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration getDeltaTimeSessionWindowConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration">IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#delta_time_session_window_configuration IotanalyticsDataset#delta_time_session_window_configuration}.

---

### IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration <a name="IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration;

IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration.builder()
//  .timeoutInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#timeout_in_minutes IotanalyticsDataset#timeout_in_minutes}. |

---

##### `timeoutInMinutes`<sup>Optional</sup> <a name="timeoutInMinutes" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration.property.timeoutInMinutes"></a>

```java
public java.lang.Number getTimeoutInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#timeout_in_minutes IotanalyticsDataset#timeout_in_minutes}.

---

### IotanalyticsDatasetRetentionPeriod <a name="IotanalyticsDatasetRetentionPeriod" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetRetentionPeriod;

IotanalyticsDatasetRetentionPeriod.builder()
//  .numberOfDays(java.lang.Number)
//  .unlimited(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod.property.numberOfDays">numberOfDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#number_of_days IotanalyticsDataset#number_of_days}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod.property.unlimited">unlimited</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#unlimited IotanalyticsDataset#unlimited}. |

---

##### `numberOfDays`<sup>Optional</sup> <a name="numberOfDays" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod.property.numberOfDays"></a>

```java
public java.lang.Number getNumberOfDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#number_of_days IotanalyticsDataset#number_of_days}.

---

##### `unlimited`<sup>Optional</sup> <a name="unlimited" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod.property.unlimited"></a>

```java
public java.lang.Boolean|IResolvable getUnlimited();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#unlimited IotanalyticsDataset#unlimited}.

---

### IotanalyticsDatasetTags <a name="IotanalyticsDatasetTags" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetTags;

IotanalyticsDatasetTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#key IotanalyticsDataset#key}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#value IotanalyticsDataset#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#key IotanalyticsDataset#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#value IotanalyticsDataset#value}.

---

### IotanalyticsDatasetTriggers <a name="IotanalyticsDatasetTriggers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetTriggers;

IotanalyticsDatasetTriggers.builder()
//  .schedule(IotanalyticsDatasetTriggersSchedule)
//  .triggeringDataset(IotanalyticsDatasetTriggersTriggeringDataset)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule">IotanalyticsDatasetTriggersSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#schedule IotanalyticsDataset#schedule}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers.property.triggeringDataset">triggeringDataset</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset">IotanalyticsDatasetTriggersTriggeringDataset</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#triggering_dataset IotanalyticsDataset#triggering_dataset}. |

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers.property.schedule"></a>

```java
public IotanalyticsDatasetTriggersSchedule getSchedule();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule">IotanalyticsDatasetTriggersSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#schedule IotanalyticsDataset#schedule}.

---

##### `triggeringDataset`<sup>Optional</sup> <a name="triggeringDataset" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers.property.triggeringDataset"></a>

```java
public IotanalyticsDatasetTriggersTriggeringDataset getTriggeringDataset();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset">IotanalyticsDatasetTriggersTriggeringDataset</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#triggering_dataset IotanalyticsDataset#triggering_dataset}.

---

### IotanalyticsDatasetTriggersSchedule <a name="IotanalyticsDatasetTriggersSchedule" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetTriggersSchedule;

IotanalyticsDatasetTriggersSchedule.builder()
//  .scheduleExpression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#schedule_expression IotanalyticsDataset#schedule_expression}. |

---

##### `scheduleExpression`<sup>Optional</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#schedule_expression IotanalyticsDataset#schedule_expression}.

---

### IotanalyticsDatasetTriggersTriggeringDataset <a name="IotanalyticsDatasetTriggersTriggeringDataset" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetTriggersTriggeringDataset;

IotanalyticsDatasetTriggersTriggeringDataset.builder()
//  .datasetName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset.property.datasetName">datasetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#dataset_name IotanalyticsDataset#dataset_name}. |

---

##### `datasetName`<sup>Optional</sup> <a name="datasetName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset.property.datasetName"></a>

```java
public java.lang.String getDatasetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#dataset_name IotanalyticsDataset#dataset_name}.

---

### IotanalyticsDatasetVersioningConfiguration <a name="IotanalyticsDatasetVersioningConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetVersioningConfiguration;

IotanalyticsDatasetVersioningConfiguration.builder()
//  .maxVersions(java.lang.Number)
//  .unlimited(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration.property.maxVersions">maxVersions</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#max_versions IotanalyticsDataset#max_versions}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration.property.unlimited">unlimited</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#unlimited IotanalyticsDataset#unlimited}. |

---

##### `maxVersions`<sup>Optional</sup> <a name="maxVersions" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration.property.maxVersions"></a>

```java
public java.lang.Number getMaxVersions();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#max_versions IotanalyticsDataset#max_versions}.

---

##### `unlimited`<sup>Optional</sup> <a name="unlimited" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration.property.unlimited"></a>

```java
public java.lang.Boolean|IResolvable getUnlimited();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotanalytics_dataset#unlimited IotanalyticsDataset#unlimited}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotanalyticsDatasetActionsContainerActionOutputReference <a name="IotanalyticsDatasetActionsContainerActionOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetActionsContainerActionOutputReference;

new IotanalyticsDatasetActionsContainerActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.putResourceConfiguration">putResourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.putVariables">putVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resetExecutionRoleArn">resetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resetResourceConfiguration">resetResourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resetVariables">resetVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResourceConfiguration` <a name="putResourceConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.putResourceConfiguration"></a>

```java
public void putResourceConfiguration(IotanalyticsDatasetActionsContainerActionResourceConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.putResourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration">IotanalyticsDatasetActionsContainerActionResourceConfiguration</a>

---

##### `putVariables` <a name="putVariables" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.putVariables"></a>

```java
public void putVariables(IResolvable|java.util.List<IotanalyticsDatasetActionsContainerActionVariables> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.putVariables.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables">IotanalyticsDatasetActionsContainerActionVariables</a>>

---

##### `resetExecutionRoleArn` <a name="resetExecutionRoleArn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resetExecutionRoleArn"></a>

```java
public void resetExecutionRoleArn()
```

##### `resetImage` <a name="resetImage" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resetImage"></a>

```java
public void resetImage()
```

##### `resetResourceConfiguration` <a name="resetResourceConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resetResourceConfiguration"></a>

```java
public void resetResourceConfiguration()
```

##### `resetVariables` <a name="resetVariables" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resetVariables"></a>

```java
public void resetVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.resourceConfiguration">resourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference">IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.variables">variables</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList">IotanalyticsDatasetActionsContainerActionVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.imageInput">imageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.resourceConfigurationInput">resourceConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration">IotanalyticsDatasetActionsContainerActionResourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.variablesInput">variablesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables">IotanalyticsDatasetActionsContainerActionVariables</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction">IotanalyticsDatasetActionsContainerAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceConfiguration`<sup>Required</sup> <a name="resourceConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.resourceConfiguration"></a>

```java
public IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference getResourceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference">IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference</a>

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.variables"></a>

```java
public IotanalyticsDatasetActionsContainerActionVariablesList getVariables();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList">IotanalyticsDatasetActionsContainerActionVariablesList</a>

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.executionRoleArnInput"></a>

```java
public java.lang.String getExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.imageInput"></a>

```java
public java.lang.String getImageInput();
```

- *Type:* java.lang.String

---

##### `resourceConfigurationInput`<sup>Optional</sup> <a name="resourceConfigurationInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.resourceConfigurationInput"></a>

```java
public IResolvable|IotanalyticsDatasetActionsContainerActionResourceConfiguration getResourceConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration">IotanalyticsDatasetActionsContainerActionResourceConfiguration</a>

---

##### `variablesInput`<sup>Optional</sup> <a name="variablesInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.variablesInput"></a>

```java
public IResolvable|java.util.List<IotanalyticsDatasetActionsContainerActionVariables> getVariablesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables">IotanalyticsDatasetActionsContainerActionVariables</a>>

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsDatasetActionsContainerAction getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction">IotanalyticsDatasetActionsContainerAction</a>

---


### IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference <a name="IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference;

new IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.resetComputeType">resetComputeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.resetVolumeSizeInGb">resetVolumeSizeInGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComputeType` <a name="resetComputeType" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.resetComputeType"></a>

```java
public void resetComputeType()
```

##### `resetVolumeSizeInGb` <a name="resetVolumeSizeInGb" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.resetVolumeSizeInGb"></a>

```java
public void resetVolumeSizeInGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.computeTypeInput">computeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.volumeSizeInGbInput">volumeSizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.computeType">computeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration">IotanalyticsDatasetActionsContainerActionResourceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `computeTypeInput`<sup>Optional</sup> <a name="computeTypeInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.computeTypeInput"></a>

```java
public java.lang.String getComputeTypeInput();
```

- *Type:* java.lang.String

---

##### `volumeSizeInGbInput`<sup>Optional</sup> <a name="volumeSizeInGbInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.volumeSizeInGbInput"></a>

```java
public java.lang.Number getVolumeSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `computeType`<sup>Required</sup> <a name="computeType" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.computeType"></a>

```java
public java.lang.String getComputeType();
```

- *Type:* java.lang.String

---

##### `volumeSizeInGb`<sup>Required</sup> <a name="volumeSizeInGb" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.volumeSizeInGb"></a>

```java
public java.lang.Number getVolumeSizeInGb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsDatasetActionsContainerActionResourceConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration">IotanalyticsDatasetActionsContainerActionResourceConfiguration</a>

---


### IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference <a name="IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference;

new IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.resetDatasetName">resetDatasetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetName` <a name="resetDatasetName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.resetDatasetName"></a>

```java
public void resetDatasetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.datasetNameInput">datasetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.datasetName">datasetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue">IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetNameInput`<sup>Optional</sup> <a name="datasetNameInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.datasetNameInput"></a>

```java
public java.lang.String getDatasetNameInput();
```

- *Type:* java.lang.String

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.datasetName"></a>

```java
public java.lang.String getDatasetName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue">IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue</a>

---


### IotanalyticsDatasetActionsContainerActionVariablesList <a name="IotanalyticsDatasetActionsContainerActionVariablesList" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetActionsContainerActionVariablesList;

new IotanalyticsDatasetActionsContainerActionVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.get"></a>

```java
public IotanalyticsDatasetActionsContainerActionVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables">IotanalyticsDatasetActionsContainerActionVariables</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotanalyticsDatasetActionsContainerActionVariables> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables">IotanalyticsDatasetActionsContainerActionVariables</a>>

---


### IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference <a name="IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference;

new IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.resetFileName">resetFileName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileName` <a name="resetFileName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.resetFileName"></a>

```java
public void resetFileName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.fileNameInput">fileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.fileName">fileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue">IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileNameInput`<sup>Optional</sup> <a name="fileNameInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.fileNameInput"></a>

```java
public java.lang.String getFileNameInput();
```

- *Type:* java.lang.String

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue">IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue</a>

---


### IotanalyticsDatasetActionsContainerActionVariablesOutputReference <a name="IotanalyticsDatasetActionsContainerActionVariablesOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference;

new IotanalyticsDatasetActionsContainerActionVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.putDatasetContentVersionValue">putDatasetContentVersionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.putOutputFileUriValue">putOutputFileUriValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetDatasetContentVersionValue">resetDatasetContentVersionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetDoubleValue">resetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetOutputFileUriValue">resetOutputFileUriValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetVariableName">resetVariableName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatasetContentVersionValue` <a name="putDatasetContentVersionValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.putDatasetContentVersionValue"></a>

```java
public void putDatasetContentVersionValue(IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.putDatasetContentVersionValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue">IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue</a>

---

##### `putOutputFileUriValue` <a name="putOutputFileUriValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.putOutputFileUriValue"></a>

```java
public void putOutputFileUriValue(IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.putOutputFileUriValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue">IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue</a>

---

##### `resetDatasetContentVersionValue` <a name="resetDatasetContentVersionValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetDatasetContentVersionValue"></a>

```java
public void resetDatasetContentVersionValue()
```

##### `resetDoubleValue` <a name="resetDoubleValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetDoubleValue"></a>

```java
public void resetDoubleValue()
```

##### `resetOutputFileUriValue` <a name="resetOutputFileUriValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetOutputFileUriValue"></a>

```java
public void resetOutputFileUriValue()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```

##### `resetVariableName` <a name="resetVariableName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetVariableName"></a>

```java
public void resetVariableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.datasetContentVersionValue">datasetContentVersionValue</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference">IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.outputFileUriValue">outputFileUriValue</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference">IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.datasetContentVersionValueInput">datasetContentVersionValueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue">IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.doubleValueInput">doubleValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.outputFileUriValueInput">outputFileUriValueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue">IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.variableNameInput">variableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.doubleValue">doubleValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.variableName">variableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables">IotanalyticsDatasetActionsContainerActionVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetContentVersionValue`<sup>Required</sup> <a name="datasetContentVersionValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.datasetContentVersionValue"></a>

```java
public IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference getDatasetContentVersionValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference">IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference</a>

---

##### `outputFileUriValue`<sup>Required</sup> <a name="outputFileUriValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.outputFileUriValue"></a>

```java
public IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference getOutputFileUriValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference">IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference</a>

---

##### `datasetContentVersionValueInput`<sup>Optional</sup> <a name="datasetContentVersionValueInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.datasetContentVersionValueInput"></a>

```java
public IResolvable|IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue getDatasetContentVersionValueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue">IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue</a>

---

##### `doubleValueInput`<sup>Optional</sup> <a name="doubleValueInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.doubleValueInput"></a>

```java
public java.lang.Number getDoubleValueInput();
```

- *Type:* java.lang.Number

---

##### `outputFileUriValueInput`<sup>Optional</sup> <a name="outputFileUriValueInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.outputFileUriValueInput"></a>

```java
public IResolvable|IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue getOutputFileUriValueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue">IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue</a>

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `variableNameInput`<sup>Optional</sup> <a name="variableNameInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.variableNameInput"></a>

```java
public java.lang.String getVariableNameInput();
```

- *Type:* java.lang.String

---

##### `doubleValue`<sup>Required</sup> <a name="doubleValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.doubleValue"></a>

```java
public java.lang.Number getDoubleValue();
```

- *Type:* java.lang.Number

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `variableName`<sup>Required</sup> <a name="variableName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.variableName"></a>

```java
public java.lang.String getVariableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsDatasetActionsContainerActionVariables getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables">IotanalyticsDatasetActionsContainerActionVariables</a>

---


### IotanalyticsDatasetActionsList <a name="IotanalyticsDatasetActionsList" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetActionsList;

new IotanalyticsDatasetActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.get"></a>

```java
public IotanalyticsDatasetActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions">IotanalyticsDatasetActions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotanalyticsDatasetActions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions">IotanalyticsDatasetActions</a>>

---


### IotanalyticsDatasetActionsOutputReference <a name="IotanalyticsDatasetActionsOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetActionsOutputReference;

new IotanalyticsDatasetActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.putContainerAction">putContainerAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.putQueryAction">putQueryAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.resetContainerAction">resetContainerAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.resetQueryAction">resetQueryAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerAction` <a name="putContainerAction" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.putContainerAction"></a>

```java
public void putContainerAction(IotanalyticsDatasetActionsContainerAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.putContainerAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction">IotanalyticsDatasetActionsContainerAction</a>

---

##### `putQueryAction` <a name="putQueryAction" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.putQueryAction"></a>

```java
public void putQueryAction(IotanalyticsDatasetActionsQueryAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.putQueryAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction">IotanalyticsDatasetActionsQueryAction</a>

---

##### `resetContainerAction` <a name="resetContainerAction" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.resetContainerAction"></a>

```java
public void resetContainerAction()
```

##### `resetQueryAction` <a name="resetQueryAction" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.resetQueryAction"></a>

```java
public void resetQueryAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.containerAction">containerAction</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference">IotanalyticsDatasetActionsContainerActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.queryAction">queryAction</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference">IotanalyticsDatasetActionsQueryActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.actionNameInput">actionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.containerActionInput">containerActionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction">IotanalyticsDatasetActionsContainerAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.queryActionInput">queryActionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction">IotanalyticsDatasetActionsQueryAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.actionName">actionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions">IotanalyticsDatasetActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerAction`<sup>Required</sup> <a name="containerAction" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.containerAction"></a>

```java
public IotanalyticsDatasetActionsContainerActionOutputReference getContainerAction();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference">IotanalyticsDatasetActionsContainerActionOutputReference</a>

---

##### `queryAction`<sup>Required</sup> <a name="queryAction" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.queryAction"></a>

```java
public IotanalyticsDatasetActionsQueryActionOutputReference getQueryAction();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference">IotanalyticsDatasetActionsQueryActionOutputReference</a>

---

##### `actionNameInput`<sup>Optional</sup> <a name="actionNameInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.actionNameInput"></a>

```java
public java.lang.String getActionNameInput();
```

- *Type:* java.lang.String

---

##### `containerActionInput`<sup>Optional</sup> <a name="containerActionInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.containerActionInput"></a>

```java
public IResolvable|IotanalyticsDatasetActionsContainerAction getContainerActionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction">IotanalyticsDatasetActionsContainerAction</a>

---

##### `queryActionInput`<sup>Optional</sup> <a name="queryActionInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.queryActionInput"></a>

```java
public IResolvable|IotanalyticsDatasetActionsQueryAction getQueryActionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction">IotanalyticsDatasetActionsQueryAction</a>

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.actionName"></a>

```java
public java.lang.String getActionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsDatasetActions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions">IotanalyticsDatasetActions</a>

---


### IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference <a name="IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference;

new IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.resetOffsetSeconds">resetOffsetSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.resetTimeExpression">resetTimeExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOffsetSeconds` <a name="resetOffsetSeconds" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.resetOffsetSeconds"></a>

```java
public void resetOffsetSeconds()
```

##### `resetTimeExpression` <a name="resetTimeExpression" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.resetTimeExpression"></a>

```java
public void resetTimeExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.offsetSecondsInput">offsetSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.timeExpressionInput">timeExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.offsetSeconds">offsetSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.timeExpression">timeExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime">IotanalyticsDatasetActionsQueryActionFiltersDeltaTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `offsetSecondsInput`<sup>Optional</sup> <a name="offsetSecondsInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.offsetSecondsInput"></a>

```java
public java.lang.Number getOffsetSecondsInput();
```

- *Type:* java.lang.Number

---

##### `timeExpressionInput`<sup>Optional</sup> <a name="timeExpressionInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.timeExpressionInput"></a>

```java
public java.lang.String getTimeExpressionInput();
```

- *Type:* java.lang.String

---

##### `offsetSeconds`<sup>Required</sup> <a name="offsetSeconds" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.offsetSeconds"></a>

```java
public java.lang.Number getOffsetSeconds();
```

- *Type:* java.lang.Number

---

##### `timeExpression`<sup>Required</sup> <a name="timeExpression" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.timeExpression"></a>

```java
public java.lang.String getTimeExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsDatasetActionsQueryActionFiltersDeltaTime getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime">IotanalyticsDatasetActionsQueryActionFiltersDeltaTime</a>

---


### IotanalyticsDatasetActionsQueryActionFiltersList <a name="IotanalyticsDatasetActionsQueryActionFiltersList" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetActionsQueryActionFiltersList;

new IotanalyticsDatasetActionsQueryActionFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.get"></a>

```java
public IotanalyticsDatasetActionsQueryActionFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters">IotanalyticsDatasetActionsQueryActionFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotanalyticsDatasetActionsQueryActionFilters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters">IotanalyticsDatasetActionsQueryActionFilters</a>>

---


### IotanalyticsDatasetActionsQueryActionFiltersOutputReference <a name="IotanalyticsDatasetActionsQueryActionFiltersOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference;

new IotanalyticsDatasetActionsQueryActionFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.putDeltaTime">putDeltaTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.resetDeltaTime">resetDeltaTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeltaTime` <a name="putDeltaTime" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.putDeltaTime"></a>

```java
public void putDeltaTime(IotanalyticsDatasetActionsQueryActionFiltersDeltaTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.putDeltaTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime">IotanalyticsDatasetActionsQueryActionFiltersDeltaTime</a>

---

##### `resetDeltaTime` <a name="resetDeltaTime" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.resetDeltaTime"></a>

```java
public void resetDeltaTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.deltaTime">deltaTime</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference">IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.deltaTimeInput">deltaTimeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime">IotanalyticsDatasetActionsQueryActionFiltersDeltaTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters">IotanalyticsDatasetActionsQueryActionFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deltaTime`<sup>Required</sup> <a name="deltaTime" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.deltaTime"></a>

```java
public IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference getDeltaTime();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference">IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference</a>

---

##### `deltaTimeInput`<sup>Optional</sup> <a name="deltaTimeInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.deltaTimeInput"></a>

```java
public IResolvable|IotanalyticsDatasetActionsQueryActionFiltersDeltaTime getDeltaTimeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime">IotanalyticsDatasetActionsQueryActionFiltersDeltaTime</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsDatasetActionsQueryActionFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters">IotanalyticsDatasetActionsQueryActionFilters</a>

---


### IotanalyticsDatasetActionsQueryActionOutputReference <a name="IotanalyticsDatasetActionsQueryActionOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetActionsQueryActionOutputReference;

new IotanalyticsDatasetActionsQueryActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.resetSqlQuery">resetSqlQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilters` <a name="putFilters" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.putFilters"></a>

```java
public void putFilters(IResolvable|java.util.List<IotanalyticsDatasetActionsQueryActionFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.putFilters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters">IotanalyticsDatasetActionsQueryActionFilters</a>>

---

##### `resetFilters` <a name="resetFilters" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.resetFilters"></a>

```java
public void resetFilters()
```

##### `resetSqlQuery` <a name="resetSqlQuery" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.resetSqlQuery"></a>

```java
public void resetSqlQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList">IotanalyticsDatasetActionsQueryActionFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.filtersInput">filtersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters">IotanalyticsDatasetActionsQueryActionFilters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.sqlQueryInput">sqlQueryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.sqlQuery">sqlQuery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction">IotanalyticsDatasetActionsQueryAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.filters"></a>

```java
public IotanalyticsDatasetActionsQueryActionFiltersList getFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList">IotanalyticsDatasetActionsQueryActionFiltersList</a>

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.filtersInput"></a>

```java
public IResolvable|java.util.List<IotanalyticsDatasetActionsQueryActionFilters> getFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters">IotanalyticsDatasetActionsQueryActionFilters</a>>

---

##### `sqlQueryInput`<sup>Optional</sup> <a name="sqlQueryInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.sqlQueryInput"></a>

```java
public java.lang.String getSqlQueryInput();
```

- *Type:* java.lang.String

---

##### `sqlQuery`<sup>Required</sup> <a name="sqlQuery" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.sqlQuery"></a>

```java
public java.lang.String getSqlQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsDatasetActionsQueryAction getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction">IotanalyticsDatasetActionsQueryAction</a>

---


### IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference <a name="IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference;

new IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.resetInputName">resetInputName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInputName` <a name="resetInputName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.resetInputName"></a>

```java
public void resetInputName()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.inputNameInput">inputNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.inputName">inputName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputNameInput`<sup>Optional</sup> <a name="inputNameInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.inputNameInput"></a>

```java
public java.lang.String getInputNameInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `inputName`<sup>Required</sup> <a name="inputName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.inputName"></a>

```java
public java.lang.String getInputName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration</a>

---


### IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference <a name="IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference;

new IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.putIotEventsDestinationConfiguration">putIotEventsDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.putS3DestinationConfiguration">putS3DestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.resetIotEventsDestinationConfiguration">resetIotEventsDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.resetS3DestinationConfiguration">resetS3DestinationConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIotEventsDestinationConfiguration` <a name="putIotEventsDestinationConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.putIotEventsDestinationConfiguration"></a>

```java
public void putIotEventsDestinationConfiguration(IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.putIotEventsDestinationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration</a>

---

##### `putS3DestinationConfiguration` <a name="putS3DestinationConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.putS3DestinationConfiguration"></a>

```java
public void putS3DestinationConfiguration(IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.putS3DestinationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration</a>

---

##### `resetIotEventsDestinationConfiguration` <a name="resetIotEventsDestinationConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.resetIotEventsDestinationConfiguration"></a>

```java
public void resetIotEventsDestinationConfiguration()
```

##### `resetS3DestinationConfiguration` <a name="resetS3DestinationConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.resetS3DestinationConfiguration"></a>

```java
public void resetS3DestinationConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.iotEventsDestinationConfiguration">iotEventsDestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference">IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.s3DestinationConfiguration">s3DestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.iotEventsDestinationConfigurationInput">iotEventsDestinationConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.s3DestinationConfigurationInput">s3DestinationConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination">IotanalyticsDatasetContentDeliveryRulesDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `iotEventsDestinationConfiguration`<sup>Required</sup> <a name="iotEventsDestinationConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.iotEventsDestinationConfiguration"></a>

```java
public IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference getIotEventsDestinationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference">IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference</a>

---

##### `s3DestinationConfiguration`<sup>Required</sup> <a name="s3DestinationConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.s3DestinationConfiguration"></a>

```java
public IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference getS3DestinationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference</a>

---

##### `iotEventsDestinationConfigurationInput`<sup>Optional</sup> <a name="iotEventsDestinationConfigurationInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.iotEventsDestinationConfigurationInput"></a>

```java
public IResolvable|IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration getIotEventsDestinationConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration</a>

---

##### `s3DestinationConfigurationInput`<sup>Optional</sup> <a name="s3DestinationConfigurationInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.s3DestinationConfigurationInput"></a>

```java
public IResolvable|IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration getS3DestinationConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsDatasetContentDeliveryRulesDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination">IotanalyticsDatasetContentDeliveryRulesDestination</a>

---


### IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference <a name="IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference;

new IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.resetTableName">resetTableName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.resetTableName"></a>

```java
public void resetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration</a>

---


### IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference <a name="IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference;

new IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.putGlueConfiguration">putGlueConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resetGlueConfiguration">resetGlueConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGlueConfiguration` <a name="putGlueConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.putGlueConfiguration"></a>

```java
public void putGlueConfiguration(IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.putGlueConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration</a>

---

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetGlueConfiguration` <a name="resetGlueConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resetGlueConfiguration"></a>

```java
public void resetGlueConfiguration()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.glueConfiguration">glueConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.glueConfigurationInput">glueConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `glueConfiguration`<sup>Required</sup> <a name="glueConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.glueConfiguration"></a>

```java
public IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference getGlueConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `glueConfigurationInput`<sup>Optional</sup> <a name="glueConfigurationInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.glueConfigurationInput"></a>

```java
public IResolvable|IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration getGlueConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration</a>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration</a>

---


### IotanalyticsDatasetContentDeliveryRulesList <a name="IotanalyticsDatasetContentDeliveryRulesList" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetContentDeliveryRulesList;

new IotanalyticsDatasetContentDeliveryRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.get"></a>

```java
public IotanalyticsDatasetContentDeliveryRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules">IotanalyticsDatasetContentDeliveryRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotanalyticsDatasetContentDeliveryRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules">IotanalyticsDatasetContentDeliveryRules</a>>

---


### IotanalyticsDatasetContentDeliveryRulesOutputReference <a name="IotanalyticsDatasetContentDeliveryRulesOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetContentDeliveryRulesOutputReference;

new IotanalyticsDatasetContentDeliveryRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.resetEntryName">resetEntryName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestination` <a name="putDestination" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.putDestination"></a>

```java
public void putDestination(IotanalyticsDatasetContentDeliveryRulesDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination">IotanalyticsDatasetContentDeliveryRulesDestination</a>

---

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.resetDestination"></a>

```java
public void resetDestination()
```

##### `resetEntryName` <a name="resetEntryName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.resetEntryName"></a>

```java
public void resetEntryName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference">IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.destinationInput">destinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination">IotanalyticsDatasetContentDeliveryRulesDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.entryNameInput">entryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.entryName">entryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules">IotanalyticsDatasetContentDeliveryRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.destination"></a>

```java
public IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference getDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference">IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.destinationInput"></a>

```java
public IResolvable|IotanalyticsDatasetContentDeliveryRulesDestination getDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination">IotanalyticsDatasetContentDeliveryRulesDestination</a>

---

##### `entryNameInput`<sup>Optional</sup> <a name="entryNameInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.entryNameInput"></a>

```java
public java.lang.String getEntryNameInput();
```

- *Type:* java.lang.String

---

##### `entryName`<sup>Required</sup> <a name="entryName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.entryName"></a>

```java
public java.lang.String getEntryName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsDatasetContentDeliveryRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules">IotanalyticsDatasetContentDeliveryRules</a>

---


### IotanalyticsDatasetLateDataRulesList <a name="IotanalyticsDatasetLateDataRulesList" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetLateDataRulesList;

new IotanalyticsDatasetLateDataRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.get"></a>

```java
public IotanalyticsDatasetLateDataRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules">IotanalyticsDatasetLateDataRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotanalyticsDatasetLateDataRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules">IotanalyticsDatasetLateDataRules</a>>

---


### IotanalyticsDatasetLateDataRulesOutputReference <a name="IotanalyticsDatasetLateDataRulesOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetLateDataRulesOutputReference;

new IotanalyticsDatasetLateDataRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.putRuleConfiguration">putRuleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.resetRuleConfiguration">resetRuleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.resetRuleName">resetRuleName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRuleConfiguration` <a name="putRuleConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.putRuleConfiguration"></a>

```java
public void putRuleConfiguration(IotanalyticsDatasetLateDataRulesRuleConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.putRuleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration">IotanalyticsDatasetLateDataRulesRuleConfiguration</a>

---

##### `resetRuleConfiguration` <a name="resetRuleConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.resetRuleConfiguration"></a>

```java
public void resetRuleConfiguration()
```

##### `resetRuleName` <a name="resetRuleName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.resetRuleName"></a>

```java
public void resetRuleName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.ruleConfiguration">ruleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference">IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.ruleConfigurationInput">ruleConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration">IotanalyticsDatasetLateDataRulesRuleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.ruleNameInput">ruleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules">IotanalyticsDatasetLateDataRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ruleConfiguration`<sup>Required</sup> <a name="ruleConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.ruleConfiguration"></a>

```java
public IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference getRuleConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference">IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference</a>

---

##### `ruleConfigurationInput`<sup>Optional</sup> <a name="ruleConfigurationInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.ruleConfigurationInput"></a>

```java
public IResolvable|IotanalyticsDatasetLateDataRulesRuleConfiguration getRuleConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration">IotanalyticsDatasetLateDataRulesRuleConfiguration</a>

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.ruleNameInput"></a>

```java
public java.lang.String getRuleNameInput();
```

- *Type:* java.lang.String

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsDatasetLateDataRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules">IotanalyticsDatasetLateDataRules</a>

---


### IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference <a name="IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference;

new IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.resetTimeoutInMinutes">resetTimeoutInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeoutInMinutes` <a name="resetTimeoutInMinutes" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.resetTimeoutInMinutes"></a>

```java
public void resetTimeoutInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.timeoutInMinutesInput">timeoutInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration">IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeoutInMinutesInput`<sup>Optional</sup> <a name="timeoutInMinutesInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.timeoutInMinutesInput"></a>

```java
public java.lang.Number getTimeoutInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `timeoutInMinutes`<sup>Required</sup> <a name="timeoutInMinutes" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.timeoutInMinutes"></a>

```java
public java.lang.Number getTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration">IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration</a>

---


### IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference <a name="IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference;

new IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.putDeltaTimeSessionWindowConfiguration">putDeltaTimeSessionWindowConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.resetDeltaTimeSessionWindowConfiguration">resetDeltaTimeSessionWindowConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeltaTimeSessionWindowConfiguration` <a name="putDeltaTimeSessionWindowConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.putDeltaTimeSessionWindowConfiguration"></a>

```java
public void putDeltaTimeSessionWindowConfiguration(IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.putDeltaTimeSessionWindowConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration">IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration</a>

---

##### `resetDeltaTimeSessionWindowConfiguration` <a name="resetDeltaTimeSessionWindowConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.resetDeltaTimeSessionWindowConfiguration"></a>

```java
public void resetDeltaTimeSessionWindowConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.deltaTimeSessionWindowConfiguration">deltaTimeSessionWindowConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference">IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.deltaTimeSessionWindowConfigurationInput">deltaTimeSessionWindowConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration">IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration">IotanalyticsDatasetLateDataRulesRuleConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deltaTimeSessionWindowConfiguration`<sup>Required</sup> <a name="deltaTimeSessionWindowConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.deltaTimeSessionWindowConfiguration"></a>

```java
public IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference getDeltaTimeSessionWindowConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference">IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference</a>

---

##### `deltaTimeSessionWindowConfigurationInput`<sup>Optional</sup> <a name="deltaTimeSessionWindowConfigurationInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.deltaTimeSessionWindowConfigurationInput"></a>

```java
public IResolvable|IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration getDeltaTimeSessionWindowConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration">IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsDatasetLateDataRulesRuleConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration">IotanalyticsDatasetLateDataRulesRuleConfiguration</a>

---


### IotanalyticsDatasetRetentionPeriodOutputReference <a name="IotanalyticsDatasetRetentionPeriodOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetRetentionPeriodOutputReference;

new IotanalyticsDatasetRetentionPeriodOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.resetNumberOfDays">resetNumberOfDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.resetUnlimited">resetUnlimited</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNumberOfDays` <a name="resetNumberOfDays" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.resetNumberOfDays"></a>

```java
public void resetNumberOfDays()
```

##### `resetUnlimited` <a name="resetUnlimited" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.resetUnlimited"></a>

```java
public void resetUnlimited()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.numberOfDaysInput">numberOfDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.unlimitedInput">unlimitedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.numberOfDays">numberOfDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.unlimited">unlimited</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod">IotanalyticsDatasetRetentionPeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `numberOfDaysInput`<sup>Optional</sup> <a name="numberOfDaysInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.numberOfDaysInput"></a>

```java
public java.lang.Number getNumberOfDaysInput();
```

- *Type:* java.lang.Number

---

##### `unlimitedInput`<sup>Optional</sup> <a name="unlimitedInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.unlimitedInput"></a>

```java
public java.lang.Boolean|IResolvable getUnlimitedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `numberOfDays`<sup>Required</sup> <a name="numberOfDays" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.numberOfDays"></a>

```java
public java.lang.Number getNumberOfDays();
```

- *Type:* java.lang.Number

---

##### `unlimited`<sup>Required</sup> <a name="unlimited" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.unlimited"></a>

```java
public java.lang.Boolean|IResolvable getUnlimited();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsDatasetRetentionPeriod getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod">IotanalyticsDatasetRetentionPeriod</a>

---


### IotanalyticsDatasetTagsList <a name="IotanalyticsDatasetTagsList" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetTagsList;

new IotanalyticsDatasetTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.get"></a>

```java
public IotanalyticsDatasetTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags">IotanalyticsDatasetTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotanalyticsDatasetTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags">IotanalyticsDatasetTags</a>>

---


### IotanalyticsDatasetTagsOutputReference <a name="IotanalyticsDatasetTagsOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetTagsOutputReference;

new IotanalyticsDatasetTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags">IotanalyticsDatasetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsDatasetTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags">IotanalyticsDatasetTags</a>

---


### IotanalyticsDatasetTriggersList <a name="IotanalyticsDatasetTriggersList" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetTriggersList;

new IotanalyticsDatasetTriggersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.get"></a>

```java
public IotanalyticsDatasetTriggersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers">IotanalyticsDatasetTriggers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotanalyticsDatasetTriggers> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers">IotanalyticsDatasetTriggers</a>>

---


### IotanalyticsDatasetTriggersOutputReference <a name="IotanalyticsDatasetTriggersOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetTriggersOutputReference;

new IotanalyticsDatasetTriggersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.putTriggeringDataset">putTriggeringDataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.resetTriggeringDataset">resetTriggeringDataset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchedule` <a name="putSchedule" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.putSchedule"></a>

```java
public void putSchedule(IotanalyticsDatasetTriggersSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule">IotanalyticsDatasetTriggersSchedule</a>

---

##### `putTriggeringDataset` <a name="putTriggeringDataset" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.putTriggeringDataset"></a>

```java
public void putTriggeringDataset(IotanalyticsDatasetTriggersTriggeringDataset value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.putTriggeringDataset.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset">IotanalyticsDatasetTriggersTriggeringDataset</a>

---

##### `resetSchedule` <a name="resetSchedule" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.resetSchedule"></a>

```java
public void resetSchedule()
```

##### `resetTriggeringDataset` <a name="resetTriggeringDataset" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.resetTriggeringDataset"></a>

```java
public void resetTriggeringDataset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference">IotanalyticsDatasetTriggersScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.triggeringDataset">triggeringDataset</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference">IotanalyticsDatasetTriggersTriggeringDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule">IotanalyticsDatasetTriggersSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.triggeringDatasetInput">triggeringDatasetInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset">IotanalyticsDatasetTriggersTriggeringDataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers">IotanalyticsDatasetTriggers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.schedule"></a>

```java
public IotanalyticsDatasetTriggersScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference">IotanalyticsDatasetTriggersScheduleOutputReference</a>

---

##### `triggeringDataset`<sup>Required</sup> <a name="triggeringDataset" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.triggeringDataset"></a>

```java
public IotanalyticsDatasetTriggersTriggeringDatasetOutputReference getTriggeringDataset();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference">IotanalyticsDatasetTriggersTriggeringDatasetOutputReference</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.scheduleInput"></a>

```java
public IResolvable|IotanalyticsDatasetTriggersSchedule getScheduleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule">IotanalyticsDatasetTriggersSchedule</a>

---

##### `triggeringDatasetInput`<sup>Optional</sup> <a name="triggeringDatasetInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.triggeringDatasetInput"></a>

```java
public IResolvable|IotanalyticsDatasetTriggersTriggeringDataset getTriggeringDatasetInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset">IotanalyticsDatasetTriggersTriggeringDataset</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsDatasetTriggers getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers">IotanalyticsDatasetTriggers</a>

---


### IotanalyticsDatasetTriggersScheduleOutputReference <a name="IotanalyticsDatasetTriggersScheduleOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetTriggersScheduleOutputReference;

new IotanalyticsDatasetTriggersScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.resetScheduleExpression">resetScheduleExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScheduleExpression` <a name="resetScheduleExpression" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.resetScheduleExpression"></a>

```java
public void resetScheduleExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule">IotanalyticsDatasetTriggersSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.scheduleExpressionInput"></a>

```java
public java.lang.String getScheduleExpressionInput();
```

- *Type:* java.lang.String

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsDatasetTriggersSchedule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule">IotanalyticsDatasetTriggersSchedule</a>

---


### IotanalyticsDatasetTriggersTriggeringDatasetOutputReference <a name="IotanalyticsDatasetTriggersTriggeringDatasetOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference;

new IotanalyticsDatasetTriggersTriggeringDatasetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.resetDatasetName">resetDatasetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetName` <a name="resetDatasetName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.resetDatasetName"></a>

```java
public void resetDatasetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.datasetNameInput">datasetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.datasetName">datasetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset">IotanalyticsDatasetTriggersTriggeringDataset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetNameInput`<sup>Optional</sup> <a name="datasetNameInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.datasetNameInput"></a>

```java
public java.lang.String getDatasetNameInput();
```

- *Type:* java.lang.String

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.datasetName"></a>

```java
public java.lang.String getDatasetName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsDatasetTriggersTriggeringDataset getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset">IotanalyticsDatasetTriggersTriggeringDataset</a>

---


### IotanalyticsDatasetVersioningConfigurationOutputReference <a name="IotanalyticsDatasetVersioningConfigurationOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_dataset.IotanalyticsDatasetVersioningConfigurationOutputReference;

new IotanalyticsDatasetVersioningConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.resetMaxVersions">resetMaxVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.resetUnlimited">resetUnlimited</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxVersions` <a name="resetMaxVersions" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.resetMaxVersions"></a>

```java
public void resetMaxVersions()
```

##### `resetUnlimited` <a name="resetUnlimited" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.resetUnlimited"></a>

```java
public void resetUnlimited()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.maxVersionsInput">maxVersionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.unlimitedInput">unlimitedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.maxVersions">maxVersions</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.unlimited">unlimited</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration">IotanalyticsDatasetVersioningConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxVersionsInput`<sup>Optional</sup> <a name="maxVersionsInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.maxVersionsInput"></a>

```java
public java.lang.Number getMaxVersionsInput();
```

- *Type:* java.lang.Number

---

##### `unlimitedInput`<sup>Optional</sup> <a name="unlimitedInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.unlimitedInput"></a>

```java
public java.lang.Boolean|IResolvable getUnlimitedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxVersions`<sup>Required</sup> <a name="maxVersions" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.maxVersions"></a>

```java
public java.lang.Number getMaxVersions();
```

- *Type:* java.lang.Number

---

##### `unlimited`<sup>Required</sup> <a name="unlimited" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.unlimited"></a>

```java
public java.lang.Boolean|IResolvable getUnlimited();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsDatasetVersioningConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration">IotanalyticsDatasetVersioningConfiguration</a>

---



