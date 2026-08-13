# `dataAwsccDatasyncLocationFsxOpenZfs` Submodule <a name="`dataAwsccDatasyncLocationFsxOpenZfs` Submodule" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatasyncLocationFsxOpenZfs <a name="DataAwsccDatasyncLocationFsxOpenZfs" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datasync_location_fsx_open_zfs awscc_datasync_location_fsx_open_zfs}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxopenzfs"

dataawsccdatasynclocationfsxopenzfs.NewDataAwsccDatasyncLocationFsxOpenZfs(scope Construct, id *string, config DataAwsccDatasyncLocationFsxOpenZfsConfig) DataAwsccDatasyncLocationFsxOpenZfs
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig">DataAwsccDatasyncLocationFsxOpenZfsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig">DataAwsccDatasyncLocationFsxOpenZfsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDatasyncLocationFsxOpenZfs resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxopenzfs"

dataawsccdatasynclocationfsxopenzfs.DataAwsccDatasyncLocationFsxOpenZfs_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxopenzfs"

dataawsccdatasynclocationfsxopenzfs.DataAwsccDatasyncLocationFsxOpenZfs_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxopenzfs"

dataawsccdatasynclocationfsxopenzfs.DataAwsccDatasyncLocationFsxOpenZfs_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxopenzfs"

dataawsccdatasynclocationfsxopenzfs.DataAwsccDatasyncLocationFsxOpenZfs_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccDatasyncLocationFsxOpenZfs resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccDatasyncLocationFsxOpenZfs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccDatasyncLocationFsxOpenZfs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datasync_location_fsx_open_zfs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatasyncLocationFsxOpenZfs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.fsxFilesystemArn">FsxFilesystemArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.locationArn">LocationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.locationUri">LocationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.protocol">Protocol</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference">DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.securityGroupArns">SecurityGroupArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.subdirectory">Subdirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList">DataAwsccDatasyncLocationFsxOpenZfsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `FsxFilesystemArn`<sup>Required</sup> <a name="FsxFilesystemArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.fsxFilesystemArn"></a>

```go
func FsxFilesystemArn() *string
```

- *Type:* *string

---

##### `LocationArn`<sup>Required</sup> <a name="LocationArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.locationArn"></a>

```go
func LocationArn() *string
```

- *Type:* *string

---

##### `LocationUri`<sup>Required</sup> <a name="LocationUri" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.locationUri"></a>

```go
func LocationUri() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.protocol"></a>

```go
func Protocol() DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference">DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference</a>

---

##### `SecurityGroupArns`<sup>Required</sup> <a name="SecurityGroupArns" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.securityGroupArns"></a>

```go
func SecurityGroupArns() *[]*string
```

- *Type:* *[]*string

---

##### `Subdirectory`<sup>Required</sup> <a name="Subdirectory" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.subdirectory"></a>

```go
func Subdirectory() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.tags"></a>

```go
func Tags() DataAwsccDatasyncLocationFsxOpenZfsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList">DataAwsccDatasyncLocationFsxOpenZfsTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatasyncLocationFsxOpenZfsConfig <a name="DataAwsccDatasyncLocationFsxOpenZfsConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxopenzfs"

&dataawsccdatasynclocationfsxopenzfs.DataAwsccDatasyncLocationFsxOpenZfsConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datasync_location_fsx_open_zfs#id DataAwsccDatasyncLocationFsxOpenZfs#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatasyncLocationFsxOpenZfsProtocol <a name="DataAwsccDatasyncLocationFsxOpenZfsProtocol" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocol"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocol.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxopenzfs"

&dataawsccdatasynclocationfsxopenzfs.DataAwsccDatasyncLocationFsxOpenZfsProtocol {

}
```


### DataAwsccDatasyncLocationFsxOpenZfsProtocolNfs <a name="DataAwsccDatasyncLocationFsxOpenZfsProtocolNfs" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxopenzfs"

&dataawsccdatasynclocationfsxopenzfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfs {

}
```


### DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptions <a name="DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptions" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxopenzfs"

&dataawsccdatasynclocationfsxopenzfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptions {

}
```


### DataAwsccDatasyncLocationFsxOpenZfsTags <a name="DataAwsccDatasyncLocationFsxOpenZfsTags" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxopenzfs"

&dataawsccdatasynclocationfsxopenzfs.DataAwsccDatasyncLocationFsxOpenZfsTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference <a name="DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxopenzfs"

dataawsccdatasynclocationfsxopenzfs.NewDataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptions">DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptions">DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptions</a>

---


### DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference <a name="DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxopenzfs"

dataawsccdatasynclocationfsxopenzfs.NewDataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.property.mountOptions">MountOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference">DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfs">DataAwsccDatasyncLocationFsxOpenZfsProtocolNfs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.property.mountOptions"></a>

```go
func MountOptions() DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference">DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatasyncLocationFsxOpenZfsProtocolNfs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfs">DataAwsccDatasyncLocationFsxOpenZfsProtocolNfs</a>

---


### DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference <a name="DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxopenzfs"

dataawsccdatasynclocationfsxopenzfs.NewDataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.property.nfs">Nfs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference">DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocol">DataAwsccDatasyncLocationFsxOpenZfsProtocol</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Nfs`<sup>Required</sup> <a name="Nfs" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.property.nfs"></a>

```go
func Nfs() DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference">DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatasyncLocationFsxOpenZfsProtocol
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocol">DataAwsccDatasyncLocationFsxOpenZfsProtocol</a>

---


### DataAwsccDatasyncLocationFsxOpenZfsTagsList <a name="DataAwsccDatasyncLocationFsxOpenZfsTagsList" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxopenzfs"

dataawsccdatasynclocationfsxopenzfs.NewDataAwsccDatasyncLocationFsxOpenZfsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatasyncLocationFsxOpenZfsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.get"></a>

```go
func Get(index *f64) DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference <a name="DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxopenzfs"

dataawsccdatasynclocationfsxopenzfs.NewDataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTags">DataAwsccDatasyncLocationFsxOpenZfsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatasyncLocationFsxOpenZfsTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTags">DataAwsccDatasyncLocationFsxOpenZfsTags</a>

---



