# `dataAwsccKinesisanalyticsv2Snapshot` Submodule <a name="`dataAwsccKinesisanalyticsv2Snapshot` Submodule" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccKinesisanalyticsv2Snapshot <a name="DataAwsccKinesisanalyticsv2Snapshot" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/kinesisanalyticsv2_snapshot awscc_kinesisanalyticsv2_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscckinesisanalyticsv2snapshot"

dataawscckinesisanalyticsv2snapshot.NewDataAwsccKinesisanalyticsv2Snapshot(scope Construct, id *string, config DataAwsccKinesisanalyticsv2SnapshotConfig) DataAwsccKinesisanalyticsv2Snapshot
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig">DataAwsccKinesisanalyticsv2SnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig">DataAwsccKinesisanalyticsv2SnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccKinesisanalyticsv2Snapshot resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscckinesisanalyticsv2snapshot"

dataawscckinesisanalyticsv2snapshot.DataAwsccKinesisanalyticsv2Snapshot_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscckinesisanalyticsv2snapshot"

dataawscckinesisanalyticsv2snapshot.DataAwsccKinesisanalyticsv2Snapshot_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscckinesisanalyticsv2snapshot"

dataawscckinesisanalyticsv2snapshot.DataAwsccKinesisanalyticsv2Snapshot_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscckinesisanalyticsv2snapshot"

dataawscckinesisanalyticsv2snapshot.DataAwsccKinesisanalyticsv2Snapshot_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccKinesisanalyticsv2Snapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccKinesisanalyticsv2Snapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccKinesisanalyticsv2Snapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/kinesisanalyticsv2_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccKinesisanalyticsv2Snapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.applicationName">ApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.importSourceConfiguration">ImportSourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference">DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.runtimeEnvironment">RuntimeEnvironment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotArn">SnapshotArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotCreationTimestamp">SnapshotCreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotDescription">SnapshotDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotEncryptionConfigurationDescription">SnapshotEncryptionConfigurationDescription</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference">DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotFormat">SnapshotFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotInitiator">SnapshotInitiator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotInitiatorOperation">SnapshotInitiatorOperation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotName">SnapshotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotSizeInBytes">SnapshotSizeInBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotSourceDescription">SnapshotSourceDescription</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference">DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotStatus">SnapshotStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList">DataAwsccKinesisanalyticsv2SnapshotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.applicationName"></a>

```go
func ApplicationName() *string
```

- *Type:* *string

---

##### `ImportSourceConfiguration`<sup>Required</sup> <a name="ImportSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.importSourceConfiguration"></a>

```go
func ImportSourceConfiguration() DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference">DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference</a>

---

##### `RuntimeEnvironment`<sup>Required</sup> <a name="RuntimeEnvironment" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.runtimeEnvironment"></a>

```go
func RuntimeEnvironment() *string
```

- *Type:* *string

---

##### `SnapshotArn`<sup>Required</sup> <a name="SnapshotArn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotArn"></a>

```go
func SnapshotArn() *string
```

- *Type:* *string

---

##### `SnapshotCreationTimestamp`<sup>Required</sup> <a name="SnapshotCreationTimestamp" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotCreationTimestamp"></a>

```go
func SnapshotCreationTimestamp() *string
```

- *Type:* *string

---

##### `SnapshotDescription`<sup>Required</sup> <a name="SnapshotDescription" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotDescription"></a>

```go
func SnapshotDescription() *string
```

- *Type:* *string

---

##### `SnapshotEncryptionConfigurationDescription`<sup>Required</sup> <a name="SnapshotEncryptionConfigurationDescription" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotEncryptionConfigurationDescription"></a>

```go
func SnapshotEncryptionConfigurationDescription() DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference">DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference</a>

---

##### `SnapshotFormat`<sup>Required</sup> <a name="SnapshotFormat" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotFormat"></a>

```go
func SnapshotFormat() *string
```

- *Type:* *string

---

##### `SnapshotInitiator`<sup>Required</sup> <a name="SnapshotInitiator" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotInitiator"></a>

```go
func SnapshotInitiator() *string
```

- *Type:* *string

---

##### `SnapshotInitiatorOperation`<sup>Required</sup> <a name="SnapshotInitiatorOperation" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotInitiatorOperation"></a>

```go
func SnapshotInitiatorOperation() *string
```

- *Type:* *string

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotName"></a>

```go
func SnapshotName() *string
```

- *Type:* *string

---

##### `SnapshotSizeInBytes`<sup>Required</sup> <a name="SnapshotSizeInBytes" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotSizeInBytes"></a>

```go
func SnapshotSizeInBytes() *f64
```

- *Type:* *f64

---

##### `SnapshotSourceDescription`<sup>Required</sup> <a name="SnapshotSourceDescription" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotSourceDescription"></a>

```go
func SnapshotSourceDescription() DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference">DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference</a>

---

##### `SnapshotStatus`<sup>Required</sup> <a name="SnapshotStatus" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotStatus"></a>

```go
func SnapshotStatus() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.tags"></a>

```go
func Tags() DataAwsccKinesisanalyticsv2SnapshotTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList">DataAwsccKinesisanalyticsv2SnapshotTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccKinesisanalyticsv2SnapshotConfig <a name="DataAwsccKinesisanalyticsv2SnapshotConfig" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscckinesisanalyticsv2snapshot"

&dataawscckinesisanalyticsv2snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/kinesisanalyticsv2_snapshot#id DataAwsccKinesisanalyticsv2Snapshot#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccKinesisanalyticsv2SnapshotImportSourceConfiguration <a name="DataAwsccKinesisanalyticsv2SnapshotImportSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscckinesisanalyticsv2snapshot"

&dataawscckinesisanalyticsv2snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfiguration {

}
```


### DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration <a name="DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscckinesisanalyticsv2snapshot"

&dataawscckinesisanalyticsv2snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration {

}
```


### DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation <a name="DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscckinesisanalyticsv2snapshot"

&dataawscckinesisanalyticsv2snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation {

}
```


### DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription <a name="DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscckinesisanalyticsv2snapshot"

&dataawscckinesisanalyticsv2snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription {

}
```


### DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescription <a name="DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescription" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescription.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscckinesisanalyticsv2snapshot"

&dataawscckinesisanalyticsv2snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescription {

}
```


### DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation <a name="DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscckinesisanalyticsv2snapshot"

&dataawscckinesisanalyticsv2snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation {

}
```


### DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription <a name="DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscckinesisanalyticsv2snapshot"

&dataawscckinesisanalyticsv2snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription {

}
```


### DataAwsccKinesisanalyticsv2SnapshotTags <a name="DataAwsccKinesisanalyticsv2SnapshotTags" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscckinesisanalyticsv2snapshot"

&dataawscckinesisanalyticsv2snapshot.DataAwsccKinesisanalyticsv2SnapshotTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscckinesisanalyticsv2snapshot"

dataawscckinesisanalyticsv2snapshot.NewDataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.importRoleArn">ImportRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceEncryptionConfiguration">SourceEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference">DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceS3PrefixLocation">SourceS3PrefixLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference">DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfiguration">DataAwsccKinesisanalyticsv2SnapshotImportSourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImportRoleArn`<sup>Required</sup> <a name="ImportRoleArn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.importRoleArn"></a>

```go
func ImportRoleArn() *string
```

- *Type:* *string

---

##### `SourceEncryptionConfiguration`<sup>Required</sup> <a name="SourceEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceEncryptionConfiguration"></a>

```go
func SourceEncryptionConfiguration() DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference">DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference</a>

---

##### `SourceS3PrefixLocation`<sup>Required</sup> <a name="SourceS3PrefixLocation" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceS3PrefixLocation"></a>

```go
func SourceS3PrefixLocation() DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference">DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference</a>

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2SnapshotImportSourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfiguration">DataAwsccKinesisanalyticsv2SnapshotImportSourceConfiguration</a>

---


### DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscckinesisanalyticsv2snapshot"

dataawscckinesisanalyticsv2snapshot.NewDataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration">DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration">DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration</a>

---


### DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference <a name="DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscckinesisanalyticsv2snapshot"

dataawscckinesisanalyticsv2snapshot.NewDataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.bucketArn">BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.keyPrefix">KeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation">DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.bucketArn"></a>

```go
func BucketArn() *string
```

- *Type:* *string

---

##### `KeyPrefix`<sup>Required</sup> <a name="KeyPrefix" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.keyPrefix"></a>

```go
func KeyPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation">DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation</a>

---


### DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference <a name="DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscckinesisanalyticsv2snapshot"

dataawscckinesisanalyticsv2snapshot.NewDataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription">DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription">DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription</a>

---


### DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference <a name="DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscckinesisanalyticsv2snapshot"

dataawscckinesisanalyticsv2snapshot.NewDataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.s3PrefixLocation">S3PrefixLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference">DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.sourceApplicationDescription">SourceApplicationDescription</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference">DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescription">DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3PrefixLocation`<sup>Required</sup> <a name="S3PrefixLocation" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.s3PrefixLocation"></a>

```go
func S3PrefixLocation() DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference">DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference</a>

---

##### `SourceApplicationDescription`<sup>Required</sup> <a name="SourceApplicationDescription" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.sourceApplicationDescription"></a>

```go
func SourceApplicationDescription() DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference">DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescription
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescription">DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescription</a>

---


### DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference <a name="DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscckinesisanalyticsv2snapshot"

dataawscckinesisanalyticsv2snapshot.NewDataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.bucketArn">BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.keyPrefix">KeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation">DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.bucketArn"></a>

```go
func BucketArn() *string
```

- *Type:* *string

---

##### `KeyPrefix`<sup>Required</sup> <a name="KeyPrefix" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.keyPrefix"></a>

```go
func KeyPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation">DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation</a>

---


### DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference <a name="DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscckinesisanalyticsv2snapshot"

dataawscckinesisanalyticsv2snapshot.NewDataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationCreationTimestamp">ApplicationCreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationName">ApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationVersionId">ApplicationVersionId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription">DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationCreationTimestamp`<sup>Required</sup> <a name="ApplicationCreationTimestamp" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationCreationTimestamp"></a>

```go
func ApplicationCreationTimestamp() *string
```

- *Type:* *string

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationName"></a>

```go
func ApplicationName() *string
```

- *Type:* *string

---

##### `ApplicationVersionId`<sup>Required</sup> <a name="ApplicationVersionId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationVersionId"></a>

```go
func ApplicationVersionId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription">DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription</a>

---


### DataAwsccKinesisanalyticsv2SnapshotTagsList <a name="DataAwsccKinesisanalyticsv2SnapshotTagsList" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscckinesisanalyticsv2snapshot"

dataawscckinesisanalyticsv2snapshot.NewDataAwsccKinesisanalyticsv2SnapshotTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccKinesisanalyticsv2SnapshotTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.get"></a>

```go
func Get(index *f64) DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference <a name="DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscckinesisanalyticsv2snapshot"

dataawscckinesisanalyticsv2snapshot.NewDataAwsccKinesisanalyticsv2SnapshotTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTags">DataAwsccKinesisanalyticsv2SnapshotTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2SnapshotTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTags">DataAwsccKinesisanalyticsv2SnapshotTags</a>

---



