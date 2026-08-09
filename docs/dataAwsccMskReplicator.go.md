# `dataAwsccMskReplicator` Submodule <a name="`dataAwsccMskReplicator` Submodule" id="@cdktn/provider-awscc.dataAwsccMskReplicator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMskReplicator <a name="DataAwsccMskReplicator" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/msk_replicator awscc_msk_replicator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

dataawsccmskreplicator.NewDataAwsccMskReplicator(scope Construct, id *string, config DataAwsccMskReplicatorConfig) DataAwsccMskReplicator
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorConfig">DataAwsccMskReplicatorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorConfig">DataAwsccMskReplicatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMskReplicator resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

dataawsccmskreplicator.DataAwsccMskReplicator_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

dataawsccmskreplicator.DataAwsccMskReplicator_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

dataawsccmskreplicator.DataAwsccMskReplicator_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

dataawsccmskreplicator.DataAwsccMskReplicator_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccMskReplicator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccMskReplicator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccMskReplicator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/msk_replicator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMskReplicator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.currentVersion">CurrentVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.kafkaClusters">KafkaClusters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersList">DataAwsccMskReplicatorKafkaClustersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.logDelivery">LogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference">DataAwsccMskReplicatorLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.replicationInfoList">ReplicationInfoList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructList">DataAwsccMskReplicatorReplicationInfoListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.replicatorArn">ReplicatorArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.replicatorName">ReplicatorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.serviceExecutionRoleArn">ServiceExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsList">DataAwsccMskReplicatorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CurrentVersion`<sup>Required</sup> <a name="CurrentVersion" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.currentVersion"></a>

```go
func CurrentVersion() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `KafkaClusters`<sup>Required</sup> <a name="KafkaClusters" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.kafkaClusters"></a>

```go
func KafkaClusters() DataAwsccMskReplicatorKafkaClustersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersList">DataAwsccMskReplicatorKafkaClustersList</a>

---

##### `LogDelivery`<sup>Required</sup> <a name="LogDelivery" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.logDelivery"></a>

```go
func LogDelivery() DataAwsccMskReplicatorLogDeliveryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference">DataAwsccMskReplicatorLogDeliveryOutputReference</a>

---

##### `ReplicationInfoList`<sup>Required</sup> <a name="ReplicationInfoList" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.replicationInfoList"></a>

```go
func ReplicationInfoList() DataAwsccMskReplicatorReplicationInfoListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructList">DataAwsccMskReplicatorReplicationInfoListStructList</a>

---

##### `ReplicatorArn`<sup>Required</sup> <a name="ReplicatorArn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.replicatorArn"></a>

```go
func ReplicatorArn() *string
```

- *Type:* *string

---

##### `ReplicatorName`<sup>Required</sup> <a name="ReplicatorName" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.replicatorName"></a>

```go
func ReplicatorName() *string
```

- *Type:* *string

---

##### `ServiceExecutionRoleArn`<sup>Required</sup> <a name="ServiceExecutionRoleArn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.serviceExecutionRoleArn"></a>

```go
func ServiceExecutionRoleArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.tags"></a>

```go
func Tags() DataAwsccMskReplicatorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsList">DataAwsccMskReplicatorTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicator.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMskReplicatorConfig <a name="DataAwsccMskReplicatorConfig" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

&dataawsccmskreplicator.DataAwsccMskReplicatorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/msk_replicator#id DataAwsccMskReplicator#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMskReplicatorKafkaClusters <a name="DataAwsccMskReplicatorKafkaClusters" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClusters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClusters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

&dataawsccmskreplicator.DataAwsccMskReplicatorKafkaClusters {

}
```


### DataAwsccMskReplicatorKafkaClustersAmazonMskCluster <a name="DataAwsccMskReplicatorKafkaClustersAmazonMskCluster" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

&dataawsccmskreplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskCluster {

}
```


### DataAwsccMskReplicatorKafkaClustersApacheKafkaCluster <a name="DataAwsccMskReplicatorKafkaClustersApacheKafkaCluster" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

&dataawsccmskreplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaCluster {

}
```


### DataAwsccMskReplicatorKafkaClustersClientAuthentication <a name="DataAwsccMskReplicatorKafkaClustersClientAuthentication" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthentication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

&dataawsccmskreplicator.DataAwsccMskReplicatorKafkaClustersClientAuthentication {

}
```


### DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtls <a name="DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtls" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtls.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

&dataawsccmskreplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtls {

}
```


### DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScram <a name="DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScram" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScram"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScram.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

&dataawsccmskreplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScram {

}
```


### DataAwsccMskReplicatorKafkaClustersEncryptionInTransit <a name="DataAwsccMskReplicatorKafkaClustersEncryptionInTransit" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

&dataawsccmskreplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransit {

}
```


### DataAwsccMskReplicatorKafkaClustersVpcConfig <a name="DataAwsccMskReplicatorKafkaClustersVpcConfig" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

&dataawsccmskreplicator.DataAwsccMskReplicatorKafkaClustersVpcConfig {

}
```


### DataAwsccMskReplicatorLogDelivery <a name="DataAwsccMskReplicatorLogDelivery" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDelivery.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

&dataawsccmskreplicator.DataAwsccMskReplicatorLogDelivery {

}
```


### DataAwsccMskReplicatorLogDeliveryReplicatorLogDelivery <a name="DataAwsccMskReplicatorLogDeliveryReplicatorLogDelivery" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDelivery.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

&dataawsccmskreplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDelivery {

}
```


### DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs <a name="DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

&dataawsccmskreplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs {

}
```


### DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehose <a name="DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehose" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehose.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

&dataawsccmskreplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehose {

}
```


### DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3 <a name="DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

&dataawsccmskreplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3 {

}
```


### DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplication <a name="DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplication" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

&dataawsccmskreplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplication {

}
```


### DataAwsccMskReplicatorReplicationInfoListStruct <a name="DataAwsccMskReplicatorReplicationInfoListStruct" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

&dataawsccmskreplicator.DataAwsccMskReplicatorReplicationInfoListStruct {

}
```


### DataAwsccMskReplicatorReplicationInfoListTopicReplication <a name="DataAwsccMskReplicatorReplicationInfoListTopicReplication" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

&dataawsccmskreplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplication {

}
```


### DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPosition <a name="DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPosition" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPosition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPosition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

&dataawsccmskreplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPosition {

}
```


### DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration <a name="DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

&dataawsccmskreplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration {

}
```


### DataAwsccMskReplicatorTags <a name="DataAwsccMskReplicatorTags" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

&dataawsccmskreplicator.DataAwsccMskReplicatorTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference <a name="DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

dataawsccmskreplicator.NewDataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.mskClusterArn">MskClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskCluster">DataAwsccMskReplicatorKafkaClustersAmazonMskCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MskClusterArn`<sup>Required</sup> <a name="MskClusterArn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.mskClusterArn"></a>

```go
func MskClusterArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMskReplicatorKafkaClustersAmazonMskCluster
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskCluster">DataAwsccMskReplicatorKafkaClustersAmazonMskCluster</a>

---


### DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference <a name="DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

dataawsccmskreplicator.NewDataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.apacheKafkaClusterId">ApacheKafkaClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.bootstrapBrokerString">BootstrapBrokerString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaCluster">DataAwsccMskReplicatorKafkaClustersApacheKafkaCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApacheKafkaClusterId`<sup>Required</sup> <a name="ApacheKafkaClusterId" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.apacheKafkaClusterId"></a>

```go
func ApacheKafkaClusterId() *string
```

- *Type:* *string

---

##### `BootstrapBrokerString`<sup>Required</sup> <a name="BootstrapBrokerString" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.bootstrapBrokerString"></a>

```go
func BootstrapBrokerString() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMskReplicatorKafkaClustersApacheKafkaCluster
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaCluster">DataAwsccMskReplicatorKafkaClustersApacheKafkaCluster</a>

---


### DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference <a name="DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

dataawsccmskreplicator.NewDataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtls">DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtls
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtls">DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtls</a>

---


### DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference <a name="DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

dataawsccmskreplicator.NewDataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.property.mtls">Mtls</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference">DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.property.saslScram">SaslScram</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference">DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthentication">DataAwsccMskReplicatorKafkaClustersClientAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mtls`<sup>Required</sup> <a name="Mtls" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.property.mtls"></a>

```go
func Mtls() DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference">DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference</a>

---

##### `SaslScram`<sup>Required</sup> <a name="SaslScram" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.property.saslScram"></a>

```go
func SaslScram() DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference">DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMskReplicatorKafkaClustersClientAuthentication
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthentication">DataAwsccMskReplicatorKafkaClustersClientAuthentication</a>

---


### DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference <a name="DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

dataawsccmskreplicator.NewDataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.mechanism">Mechanism</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScram">DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScram</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mechanism`<sup>Required</sup> <a name="Mechanism" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.mechanism"></a>

```go
func Mechanism() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScram
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScram">DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScram</a>

---


### DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference <a name="DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

dataawsccmskreplicator.NewDataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.rootCaCertificate">RootCaCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransit">DataAwsccMskReplicatorKafkaClustersEncryptionInTransit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `RootCaCertificate`<sup>Required</sup> <a name="RootCaCertificate" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.rootCaCertificate"></a>

```go
func RootCaCertificate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMskReplicatorKafkaClustersEncryptionInTransit
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransit">DataAwsccMskReplicatorKafkaClustersEncryptionInTransit</a>

---


### DataAwsccMskReplicatorKafkaClustersList <a name="DataAwsccMskReplicatorKafkaClustersList" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

dataawsccmskreplicator.NewDataAwsccMskReplicatorKafkaClustersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMskReplicatorKafkaClustersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersList.get"></a>

```go
func Get(index *f64) DataAwsccMskReplicatorKafkaClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMskReplicatorKafkaClustersOutputReference <a name="DataAwsccMskReplicatorKafkaClustersOutputReference" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

dataawsccmskreplicator.NewDataAwsccMskReplicatorKafkaClustersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMskReplicatorKafkaClustersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.property.amazonMskCluster">AmazonMskCluster</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference">DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.property.apacheKafkaCluster">ApacheKafkaCluster</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference">DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.property.clientAuthentication">ClientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference">DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.property.encryptionInTransit">EncryptionInTransit</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference">DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference">DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClusters">DataAwsccMskReplicatorKafkaClusters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AmazonMskCluster`<sup>Required</sup> <a name="AmazonMskCluster" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.property.amazonMskCluster"></a>

```go
func AmazonMskCluster() DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference">DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference</a>

---

##### `ApacheKafkaCluster`<sup>Required</sup> <a name="ApacheKafkaCluster" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.property.apacheKafkaCluster"></a>

```go
func ApacheKafkaCluster() DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference">DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference</a>

---

##### `ClientAuthentication`<sup>Required</sup> <a name="ClientAuthentication" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.property.clientAuthentication"></a>

```go
func ClientAuthentication() DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference">DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference</a>

---

##### `EncryptionInTransit`<sup>Required</sup> <a name="EncryptionInTransit" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.property.encryptionInTransit"></a>

```go
func EncryptionInTransit() DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference">DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.property.vpcConfig"></a>

```go
func VpcConfig() DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference">DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMskReplicatorKafkaClusters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClusters">DataAwsccMskReplicatorKafkaClusters</a>

---


### DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference <a name="DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

dataawsccmskreplicator.NewDataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfig">DataAwsccMskReplicatorKafkaClustersVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMskReplicatorKafkaClustersVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorKafkaClustersVpcConfig">DataAwsccMskReplicatorKafkaClustersVpcConfig</a>

---


### DataAwsccMskReplicatorLogDeliveryOutputReference <a name="DataAwsccMskReplicatorLogDeliveryOutputReference" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

dataawsccmskreplicator.NewDataAwsccMskReplicatorLogDeliveryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMskReplicatorLogDeliveryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.property.replicatorLogDelivery">ReplicatorLogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference">DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDelivery">DataAwsccMskReplicatorLogDelivery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReplicatorLogDelivery`<sup>Required</sup> <a name="ReplicatorLogDelivery" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.property.replicatorLogDelivery"></a>

```go
func ReplicatorLogDelivery() DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference">DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMskReplicatorLogDelivery
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDelivery">DataAwsccMskReplicatorLogDelivery</a>

---


### DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference <a name="DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

dataawsccmskreplicator.NewDataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.logGroup">LogGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.logGroup"></a>

```go
func LogGroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a>

---


### DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference <a name="DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

dataawsccmskreplicator.NewDataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.deliveryStream">DeliveryStream</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeliveryStream`<sup>Required</sup> <a name="DeliveryStream" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.deliveryStream"></a>

```go
func DeliveryStream() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehose
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a>

---


### DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference <a name="DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

dataawsccmskreplicator.NewDataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference">DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.firehose">Firehose</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference">DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference">DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDelivery">DataAwsccMskReplicatorLogDeliveryReplicatorLogDelivery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.cloudwatchLogs"></a>

```go
func CloudwatchLogs() DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference">DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference</a>

---

##### `Firehose`<sup>Required</sup> <a name="Firehose" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.firehose"></a>

```go
func Firehose() DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference">DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.s3"></a>

```go
func S3() DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference">DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMskReplicatorLogDeliveryReplicatorLogDelivery
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDelivery">DataAwsccMskReplicatorLogDeliveryReplicatorLogDelivery</a>

---


### DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference <a name="DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

dataawsccmskreplicator.NewDataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3">DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3">DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3</a>

---


### DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference <a name="DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

dataawsccmskreplicator.NewDataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupOffsetSyncMode">ConsumerGroupOffsetSyncMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToExclude">ConsumerGroupsToExclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToReplicate">ConsumerGroupsToReplicate</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.detectAndCopyNewConsumerGroups">DetectAndCopyNewConsumerGroups</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.synchroniseConsumerGroupOffsets">SynchroniseConsumerGroupOffsets</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplication">DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConsumerGroupOffsetSyncMode`<sup>Required</sup> <a name="ConsumerGroupOffsetSyncMode" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupOffsetSyncMode"></a>

```go
func ConsumerGroupOffsetSyncMode() *string
```

- *Type:* *string

---

##### `ConsumerGroupsToExclude`<sup>Required</sup> <a name="ConsumerGroupsToExclude" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToExclude"></a>

```go
func ConsumerGroupsToExclude() *[]*string
```

- *Type:* *[]*string

---

##### `ConsumerGroupsToReplicate`<sup>Required</sup> <a name="ConsumerGroupsToReplicate" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToReplicate"></a>

```go
func ConsumerGroupsToReplicate() *[]*string
```

- *Type:* *[]*string

---

##### `DetectAndCopyNewConsumerGroups`<sup>Required</sup> <a name="DetectAndCopyNewConsumerGroups" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.detectAndCopyNewConsumerGroups"></a>

```go
func DetectAndCopyNewConsumerGroups() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SynchroniseConsumerGroupOffsets`<sup>Required</sup> <a name="SynchroniseConsumerGroupOffsets" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.synchroniseConsumerGroupOffsets"></a>

```go
func SynchroniseConsumerGroupOffsets() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplication
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplication">DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplication</a>

---


### DataAwsccMskReplicatorReplicationInfoListStructList <a name="DataAwsccMskReplicatorReplicationInfoListStructList" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

dataawsccmskreplicator.NewDataAwsccMskReplicatorReplicationInfoListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMskReplicatorReplicationInfoListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructList.get"></a>

```go
func Get(index *f64) DataAwsccMskReplicatorReplicationInfoListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMskReplicatorReplicationInfoListStructOutputReference <a name="DataAwsccMskReplicatorReplicationInfoListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

dataawsccmskreplicator.NewDataAwsccMskReplicatorReplicationInfoListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMskReplicatorReplicationInfoListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.property.consumerGroupReplication">ConsumerGroupReplication</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference">DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterArn">SourceKafkaClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterId">SourceKafkaClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.property.targetCompressionType">TargetCompressionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterArn">TargetKafkaClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterId">TargetKafkaClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.property.topicReplication">TopicReplication</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference">DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStruct">DataAwsccMskReplicatorReplicationInfoListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConsumerGroupReplication`<sup>Required</sup> <a name="ConsumerGroupReplication" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.property.consumerGroupReplication"></a>

```go
func ConsumerGroupReplication() DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference">DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference</a>

---

##### `SourceKafkaClusterArn`<sup>Required</sup> <a name="SourceKafkaClusterArn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterArn"></a>

```go
func SourceKafkaClusterArn() *string
```

- *Type:* *string

---

##### `SourceKafkaClusterId`<sup>Required</sup> <a name="SourceKafkaClusterId" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterId"></a>

```go
func SourceKafkaClusterId() *string
```

- *Type:* *string

---

##### `TargetCompressionType`<sup>Required</sup> <a name="TargetCompressionType" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.property.targetCompressionType"></a>

```go
func TargetCompressionType() *string
```

- *Type:* *string

---

##### `TargetKafkaClusterArn`<sup>Required</sup> <a name="TargetKafkaClusterArn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterArn"></a>

```go
func TargetKafkaClusterArn() *string
```

- *Type:* *string

---

##### `TargetKafkaClusterId`<sup>Required</sup> <a name="TargetKafkaClusterId" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterId"></a>

```go
func TargetKafkaClusterId() *string
```

- *Type:* *string

---

##### `TopicReplication`<sup>Required</sup> <a name="TopicReplication" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.property.topicReplication"></a>

```go
func TopicReplication() DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference">DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMskReplicatorReplicationInfoListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListStruct">DataAwsccMskReplicatorReplicationInfoListStruct</a>

---


### DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference <a name="DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

dataawsccmskreplicator.NewDataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyAccessControlListsForTopics">CopyAccessControlListsForTopics</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyTopicConfigurations">CopyTopicConfigurations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.property.detectAndCopyNewTopics">DetectAndCopyNewTopics</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.property.startingPosition">StartingPosition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference">DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicNameConfiguration">TopicNameConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference">DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToExclude">TopicsToExclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToReplicate">TopicsToReplicate</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplication">DataAwsccMskReplicatorReplicationInfoListTopicReplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CopyAccessControlListsForTopics`<sup>Required</sup> <a name="CopyAccessControlListsForTopics" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyAccessControlListsForTopics"></a>

```go
func CopyAccessControlListsForTopics() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CopyTopicConfigurations`<sup>Required</sup> <a name="CopyTopicConfigurations" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyTopicConfigurations"></a>

```go
func CopyTopicConfigurations() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DetectAndCopyNewTopics`<sup>Required</sup> <a name="DetectAndCopyNewTopics" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.property.detectAndCopyNewTopics"></a>

```go
func DetectAndCopyNewTopics() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `StartingPosition`<sup>Required</sup> <a name="StartingPosition" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.property.startingPosition"></a>

```go
func StartingPosition() DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference">DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference</a>

---

##### `TopicNameConfiguration`<sup>Required</sup> <a name="TopicNameConfiguration" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicNameConfiguration"></a>

```go
func TopicNameConfiguration() DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference">DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference</a>

---

##### `TopicsToExclude`<sup>Required</sup> <a name="TopicsToExclude" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToExclude"></a>

```go
func TopicsToExclude() *[]*string
```

- *Type:* *[]*string

---

##### `TopicsToReplicate`<sup>Required</sup> <a name="TopicsToReplicate" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToReplicate"></a>

```go
func TopicsToReplicate() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMskReplicatorReplicationInfoListTopicReplication
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplication">DataAwsccMskReplicatorReplicationInfoListTopicReplication</a>

---


### DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference <a name="DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

dataawsccmskreplicator.NewDataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPosition">DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPosition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPosition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPosition">DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPosition</a>

---


### DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference <a name="DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

dataawsccmskreplicator.NewDataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a>

---


### DataAwsccMskReplicatorTagsList <a name="DataAwsccMskReplicatorTagsList" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

dataawsccmskreplicator.NewDataAwsccMskReplicatorTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMskReplicatorTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsList.get"></a>

```go
func Get(index *f64) DataAwsccMskReplicatorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMskReplicatorTagsOutputReference <a name="DataAwsccMskReplicatorTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmskreplicator"

dataawsccmskreplicator.NewDataAwsccMskReplicatorTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMskReplicatorTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTags">DataAwsccMskReplicatorTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMskReplicatorTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskReplicator.DataAwsccMskReplicatorTags">DataAwsccMskReplicatorTags</a>

---



