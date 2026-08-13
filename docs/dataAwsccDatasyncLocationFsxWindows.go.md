# `dataAwsccDatasyncLocationFsxWindows` Submodule <a name="`dataAwsccDatasyncLocationFsxWindows` Submodule" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatasyncLocationFsxWindows <a name="DataAwsccDatasyncLocationFsxWindows" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datasync_location_fsx_windows awscc_datasync_location_fsx_windows}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxwindows"

dataawsccdatasynclocationfsxwindows.NewDataAwsccDatasyncLocationFsxWindows(scope Construct, id *string, config DataAwsccDatasyncLocationFsxWindowsConfig) DataAwsccDatasyncLocationFsxWindows
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsConfig">DataAwsccDatasyncLocationFsxWindowsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsConfig">DataAwsccDatasyncLocationFsxWindowsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDatasyncLocationFsxWindows resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxwindows"

dataawsccdatasynclocationfsxwindows.DataAwsccDatasyncLocationFsxWindows_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxwindows"

dataawsccdatasynclocationfsxwindows.DataAwsccDatasyncLocationFsxWindows_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxwindows"

dataawsccdatasynclocationfsxwindows.DataAwsccDatasyncLocationFsxWindows_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxwindows"

dataawsccdatasynclocationfsxwindows.DataAwsccDatasyncLocationFsxWindows_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccDatasyncLocationFsxWindows resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccDatasyncLocationFsxWindows to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccDatasyncLocationFsxWindows that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datasync_location_fsx_windows#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatasyncLocationFsxWindows to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.cmkSecretConfig">CmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference">DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.customSecretConfig">CustomSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference">DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.fsxFilesystemArn">FsxFilesystemArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.locationArn">LocationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.locationUri">LocationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.managedSecretConfig">ManagedSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference">DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.securityGroupArns">SecurityGroupArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.subdirectory">Subdirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsList">DataAwsccDatasyncLocationFsxWindowsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.user">User</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CmkSecretConfig`<sup>Required</sup> <a name="CmkSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.cmkSecretConfig"></a>

```go
func CmkSecretConfig() DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference">DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference</a>

---

##### `CustomSecretConfig`<sup>Required</sup> <a name="CustomSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.customSecretConfig"></a>

```go
func CustomSecretConfig() DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference">DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference</a>

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `FsxFilesystemArn`<sup>Required</sup> <a name="FsxFilesystemArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.fsxFilesystemArn"></a>

```go
func FsxFilesystemArn() *string
```

- *Type:* *string

---

##### `LocationArn`<sup>Required</sup> <a name="LocationArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.locationArn"></a>

```go
func LocationArn() *string
```

- *Type:* *string

---

##### `LocationUri`<sup>Required</sup> <a name="LocationUri" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.locationUri"></a>

```go
func LocationUri() *string
```

- *Type:* *string

---

##### `ManagedSecretConfig`<sup>Required</sup> <a name="ManagedSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.managedSecretConfig"></a>

```go
func ManagedSecretConfig() DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference">DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference</a>

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `SecurityGroupArns`<sup>Required</sup> <a name="SecurityGroupArns" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.securityGroupArns"></a>

```go
func SecurityGroupArns() *[]*string
```

- *Type:* *[]*string

---

##### `Subdirectory`<sup>Required</sup> <a name="Subdirectory" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.subdirectory"></a>

```go
func Subdirectory() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.tags"></a>

```go
func Tags() DataAwsccDatasyncLocationFsxWindowsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsList">DataAwsccDatasyncLocationFsxWindowsTagsList</a>

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindows.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatasyncLocationFsxWindowsCmkSecretConfig <a name="DataAwsccDatasyncLocationFsxWindowsCmkSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxwindows"

&dataawsccdatasynclocationfsxwindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfig {

}
```


### DataAwsccDatasyncLocationFsxWindowsConfig <a name="DataAwsccDatasyncLocationFsxWindowsConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxwindows"

&dataawsccdatasynclocationfsxwindows.DataAwsccDatasyncLocationFsxWindowsConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datasync_location_fsx_windows#id DataAwsccDatasyncLocationFsxWindows#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatasyncLocationFsxWindowsCustomSecretConfig <a name="DataAwsccDatasyncLocationFsxWindowsCustomSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxwindows"

&dataawsccdatasynclocationfsxwindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfig {

}
```


### DataAwsccDatasyncLocationFsxWindowsManagedSecretConfig <a name="DataAwsccDatasyncLocationFsxWindowsManagedSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxwindows"

&dataawsccdatasynclocationfsxwindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfig {

}
```


### DataAwsccDatasyncLocationFsxWindowsTags <a name="DataAwsccDatasyncLocationFsxWindowsTags" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxwindows"

&dataawsccdatasynclocationfsxwindows.DataAwsccDatasyncLocationFsxWindowsTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference <a name="DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxwindows"

dataawsccdatasynclocationfsxwindows.NewDataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfig">DataAwsccDatasyncLocationFsxWindowsCmkSecretConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatasyncLocationFsxWindowsCmkSecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCmkSecretConfig">DataAwsccDatasyncLocationFsxWindowsCmkSecretConfig</a>

---


### DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference <a name="DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxwindows"

dataawsccdatasynclocationfsxwindows.NewDataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.property.secretAccessRoleArn">SecretAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfig">DataAwsccDatasyncLocationFsxWindowsCustomSecretConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretAccessRoleArn`<sup>Required</sup> <a name="SecretAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.property.secretAccessRoleArn"></a>

```go
func SecretAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatasyncLocationFsxWindowsCustomSecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsCustomSecretConfig">DataAwsccDatasyncLocationFsxWindowsCustomSecretConfig</a>

---


### DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference <a name="DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxwindows"

dataawsccdatasynclocationfsxwindows.NewDataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfig">DataAwsccDatasyncLocationFsxWindowsManagedSecretConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatasyncLocationFsxWindowsManagedSecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsManagedSecretConfig">DataAwsccDatasyncLocationFsxWindowsManagedSecretConfig</a>

---


### DataAwsccDatasyncLocationFsxWindowsTagsList <a name="DataAwsccDatasyncLocationFsxWindowsTagsList" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxwindows"

dataawsccdatasynclocationfsxwindows.NewDataAwsccDatasyncLocationFsxWindowsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatasyncLocationFsxWindowsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsList.get"></a>

```go
func Get(index *f64) DataAwsccDatasyncLocationFsxWindowsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatasyncLocationFsxWindowsTagsOutputReference <a name="DataAwsccDatasyncLocationFsxWindowsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationfsxwindows"

dataawsccdatasynclocationfsxwindows.NewDataAwsccDatasyncLocationFsxWindowsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatasyncLocationFsxWindowsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTags">DataAwsccDatasyncLocationFsxWindowsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatasyncLocationFsxWindowsTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxWindows.DataAwsccDatasyncLocationFsxWindowsTags">DataAwsccDatasyncLocationFsxWindowsTags</a>

---



