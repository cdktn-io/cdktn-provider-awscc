# `dataAwsccQuicksightCustomPermissions` Submodule <a name="`dataAwsccQuicksightCustomPermissions` Submodule" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQuicksightCustomPermissions <a name="DataAwsccQuicksightCustomPermissions" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/quicksight_custom_permissions awscc_quicksight_custom_permissions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightcustompermissions"

dataawsccquicksightcustompermissions.NewDataAwsccQuicksightCustomPermissions(scope Construct, id *string, config DataAwsccQuicksightCustomPermissionsConfig) DataAwsccQuicksightCustomPermissions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig">DataAwsccQuicksightCustomPermissionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig">DataAwsccQuicksightCustomPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccQuicksightCustomPermissions resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightcustompermissions"

dataawsccquicksightcustompermissions.DataAwsccQuicksightCustomPermissions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightcustompermissions"

dataawsccquicksightcustompermissions.DataAwsccQuicksightCustomPermissions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightcustompermissions"

dataawsccquicksightcustompermissions.DataAwsccQuicksightCustomPermissions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightcustompermissions"

dataawsccquicksightcustompermissions.DataAwsccQuicksightCustomPermissions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccQuicksightCustomPermissions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccQuicksightCustomPermissions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccQuicksightCustomPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/quicksight_custom_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQuicksightCustomPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.capabilities">Capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference">DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.customPermissionsName">CustomPermissionsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList">DataAwsccQuicksightCustomPermissionsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.capabilities"></a>

```go
func Capabilities() DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference">DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference</a>

---

##### `CustomPermissionsName`<sup>Required</sup> <a name="CustomPermissionsName" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.customPermissionsName"></a>

```go
func CustomPermissionsName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.tags"></a>

```go
func Tags() DataAwsccQuicksightCustomPermissionsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList">DataAwsccQuicksightCustomPermissionsTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQuicksightCustomPermissionsCapabilities <a name="DataAwsccQuicksightCustomPermissionsCapabilities" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightcustompermissions"

&dataawsccquicksightcustompermissions.DataAwsccQuicksightCustomPermissionsCapabilities {

}
```


### DataAwsccQuicksightCustomPermissionsConfig <a name="DataAwsccQuicksightCustomPermissionsConfig" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightcustompermissions"

&dataawsccquicksightcustompermissions.DataAwsccQuicksightCustomPermissionsConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/quicksight_custom_permissions#id DataAwsccQuicksightCustomPermissions#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQuicksightCustomPermissionsTags <a name="DataAwsccQuicksightCustomPermissionsTags" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightcustompermissions"

&dataawsccquicksightcustompermissions.DataAwsccQuicksightCustomPermissionsTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference <a name="DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightcustompermissions"

dataawsccquicksightcustompermissions.NewDataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStore">AccessAppsNativeDataStore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalyses">AddOrRunAnomalyDetectionForAnalyses</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.adobeAnalyticsDataSource">AdobeAnalyticsDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsAction">AmazonBedrockArsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsAction">AmazonBedrockFsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsAction">AmazonBedrockKrsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeAction">AmazonSThreeAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.analysis">Analysis</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequests">ApproveFlowShareRequests</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.apps">Apps</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaAction">AsanaAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.athenaDataSource">AthenaDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.auroraDataSource">AuroraDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.automate">Automate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrAction">BambooHrAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.bedrockManagedKnowledgeBase">BedrockManagedKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentAction">BoxAgentAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.boxKnowledgeBase">BoxKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQ">BuildCalculatedFieldWithQ</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentAction">CanvaAgentAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgent">ChatAgent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendAction">ComprehendAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalAction">ComprehendMedicalAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceAction">ConfluenceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceKnowledgeBase">ConfluenceKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAdobeAnalyticsDataSource">CreateAdobeAnalyticsDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsAction">CreateAndUpdateAmazonBedrockArsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsAction">CreateAndUpdateAmazonBedrockFsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsAction">CreateAndUpdateAmazonBedrockKrsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeAction">CreateAndUpdateAmazonSThreeAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateApps">CreateAndUpdateApps</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaAction">CreateAndUpdateAsanaAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrAction">CreateAndUpdateBambooHrAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBedrockManagedKnowledgeBase">CreateAndUpdateBedrockManagedKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentAction">CreateAndUpdateBoxAgentAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxKnowledgeBase">CreateAndUpdateBoxKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentAction">CreateAndUpdateCanvaAgentAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendAction">CreateAndUpdateComprehendAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalAction">CreateAndUpdateComprehendMedicalAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceAction">CreateAndUpdateConfluenceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceKnowledgeBase">CreateAndUpdateConfluenceKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReports">CreateAndUpdateDashboardEmailReports</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasets">CreateAndUpdateDatasets</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSources">CreateAndUpdateDataSources</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetAction">CreateAndUpdateFactSetAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpAction">CreateAndUpdateGenericHttpAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubAction">CreateAndUpdateGithubAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarAction">CreateAndUpdateGoogleCalendarAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleDriveKnowledgeBase">CreateAndUpdateGoogleDriveKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotAction">CreateAndUpdateHubspotAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceAction">CreateAndUpdateHuggingFaceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIdcKnowledgeBase">CreateAndUpdateIdcKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomAction">CreateAndUpdateIntercomAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraAction">CreateAndUpdateJiraAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBases">CreateAndUpdateKnowledgeBases</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearAction">CreateAndUpdateLinearAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpAction">CreateAndUpdateMcpAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayAction">CreateAndUpdateMondayAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeAction">CreateAndUpdateMsExchangeAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsAction">CreateAndUpdateMsTeamsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicAction">CreateAndUpdateNewRelicAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionAction">CreateAndUpdateNotionAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveAction">CreateAndUpdateOneDriveAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveKnowledgeBase">CreateAndUpdateOneDriveKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiAction">CreateAndUpdateOpenApiAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyAction">CreateAndUpdatePagerDutyAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateQBusinessKnowledgeBase">CreateAndUpdateQBusinessKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateS3KnowledgeBase">CreateAndUpdateS3KnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceAction">CreateAndUpdateSalesforceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyAction">CreateAndUpdateSandPGlobalEnergyAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiAction">CreateAndUpdateSandPgmiAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialAction">CreateAndUpdateSapBillOfMaterialAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerAction">CreateAndUpdateSapBusinessPartnerAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockAction">CreateAndUpdateSapMaterialStockAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryAction">CreateAndUpdateSapPhysicalInventoryAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataAction">CreateAndUpdateSapProductMasterDataAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowAction">CreateAndUpdateServiceNowAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointAction">CreateAndUpdateSharePointAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointKnowledgeBase">CreateAndUpdateSharePointKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackAction">CreateAndUpdateSlackAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetAction">CreateAndUpdateSmartsheetAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractAction">CreateAndUpdateTextractAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemes">CreateAndUpdateThemes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlerts">CreateAndUpdateThresholdAlerts</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateWebCrawlerKnowledgeBase">CreateAndUpdateWebCrawlerKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskAction">CreateAndUpdateZendeskAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAthenaDataSource">CreateAthenaDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAuroraDataSource">CreateAuroraDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgents">CreateChatAgents</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQ">CreateDashboardExecutiveSummaryWithQ</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDatabricksDataSource">CreateDatabricksDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDb2DataSource">CreateDb2DataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDenodoDataSource">CreateDenodoDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDocumentDbDataSource">CreateDocumentDbDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDremioDataSource">CreateDremioDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDynamoDbDataSource">CreateDynamoDbDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createExasolDataSource">CreateExasolDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createFileDataSource">CreateFileDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createGitHubDataSource">CreateGitHubDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createGoogleAnalyticsDataSource">CreateGoogleAnalyticsDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createGoogleBigQueryDataSource">CreateGoogleBigQueryDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createGoogleSheetsDataSource">CreateGoogleSheetsDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createImpalaDataSource">CreateImpalaDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createJiraDataSource">CreateJiraDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createMariaDbDataSource">CreateMariaDbDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createMongoAtlasDataSource">CreateMongoAtlasDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createMongoDbDataSource">CreateMongoDbDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createMySqlDataSource">CreateMySqlDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createOpenSearchDataSource">CreateOpenSearchDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createOracleDataSource">CreateOracleDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createPayPalDataSource">CreatePayPalDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createPostgreSqlDataSource">CreatePostgreSqlDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createPrestoDataSource">CreatePrestoDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createRadiantDataSource">CreateRadiantDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createRdsDataSource">CreateRdsDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createRedshiftAutoDiscoveredDataSource">CreateRedshiftAutoDiscoveredDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createRedshiftManualDataSource">CreateRedshiftManualDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createS3AnalyticsDataSource">CreateS3AnalyticsDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createS3DataSource">CreateS3DataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createS3TablesDataSource">CreateS3TablesDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSalesforceDataSource">CreateSalesforceDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSapHanaDataSource">CreateSapHanaDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createServiceNowDataSource">CreateServiceNowDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFolders">CreateSharedFolders</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSnowflakeDataSource">CreateSnowflakeDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpaces">CreateSpaces</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSparkDataSource">CreateSparkDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDataset">CreateSpiceDataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSqlServerDataSource">CreateSqlServerDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSquareDataSource">CreateSquareDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createStarburstDataSource">CreateStarburstDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createTeradataDataSource">CreateTeradataDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createTimestreamDataSource">CreateTimestreamDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createTrinoDataSource">CreateTrinoDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createTwitterDataSource">CreateTwitterDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboard">Dashboard</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.databricksDataSource">DatabricksDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.db2DataSource">Db2DataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.denodoDataSource">DenodoDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.documentDbDataSource">DocumentDbDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.dremioDataSource">DremioDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.dynamoDbDataSource">DynamoDbDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQ">EditVisualWithQ</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exasolDataSource">ExasolDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsv">ExportToCsv</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReports">ExportToCsvInScheduledReports</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcel">ExportToExcel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReports">ExportToExcelInScheduledReports</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdf">ExportToPdf</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReports">ExportToPdfInScheduledReports</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.extension">Extension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetAction">FactSetAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.fileDataSource">FileDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.flow">Flow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpAction">GenericHttpAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.githubAction">GithubAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.gitHubDataSource">GitHubDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleAnalyticsDataSource">GoogleAnalyticsDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleBigQueryDataSource">GoogleBigQueryDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarAction">GoogleCalendarAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleDriveKnowledgeBase">GoogleDriveKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleSheetsDataSource">GoogleSheetsDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotAction">HubspotAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceAction">HuggingFaceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.idcKnowledgeBase">IdcKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.impalaDataSource">ImpalaDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.inboundEmailTrigger">InboundEmailTrigger</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmail">IncludeContentInScheduledReportsEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomAction">IntercomAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInference">InvokeAppsAiInference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraAction">JiraAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraDataSource">JiraDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBase">KnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.linearAction">LinearAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFolders">ManageSharedFolders</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mariaDbDataSource">MariaDbDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpAction">McpAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayAction">MondayAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mongoAtlasDataSource">MongoAtlasDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mongoDbDataSource">MongoDbDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeAction">MsExchangeAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsAction">MsTeamsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mySqlDataSource">MySqlDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicAction">NewRelicAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.notionAction">NotionAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveAction">OneDriveAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveKnowledgeBase">OneDriveKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiAction">OpenApiAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.openSearchDataSource">OpenSearchDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.oracleDataSource">OracleDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyAction">PagerDutyAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.payPalDataSource">PayPalDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTask">PerformFlowUiTask</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.postgreSqlDataSource">PostgreSqlDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.prestoDataSource">PrestoDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.printReports">PrintReports</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApproval">PublishWithoutApproval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.qBusinessKnowledgeBase">QBusinessKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.quickEventTrigger">QuickEventTrigger</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.radiantDataSource">RadiantDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.rdsDataSource">RdsDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.redshiftAutoDiscoveredDataSource">RedshiftAutoDiscoveredDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.redshiftManualDataSource">RedshiftManualDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFolders">RenameSharedFolders</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.research">Research</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.s3AnalyticsDataSource">S3AnalyticsDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.s3DataSource">S3DataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.s3KnowledgeBase">S3KnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.s3TablesDataSource">S3TablesDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceAction">SalesforceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceDataSource">SalesforceDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyAction">SandPGlobalEnergyAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiAction">SandPgmiAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialAction">SapBillOfMaterialAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerAction">SapBusinessPartnerAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapHanaDataSource">SapHanaDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockAction">SapMaterialStockAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryAction">SapPhysicalInventoryAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataAction">SapProductMasterDataAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.scheduleTrigger">ScheduleTrigger</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowAction">ServiceNowAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowDataSource">ServiceNowDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAdobeAnalyticsDataSource">ShareAdobeAnalyticsDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsAction">ShareAmazonBedrockArsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsAction">ShareAmazonBedrockFsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsAction">ShareAmazonBedrockKrsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeAction">ShareAmazonSThreeAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalyses">ShareAnalyses</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareApps">ShareApps</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaAction">ShareAsanaAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAthenaDataSource">ShareAthenaDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAuroraDataSource">ShareAuroraDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrAction">ShareBambooHrAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBedrockManagedKnowledgeBase">ShareBedrockManagedKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentAction">ShareBoxAgentAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxKnowledgeBase">ShareBoxKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentAction">ShareCanvaAgentAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgents">ShareChatAgents</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendAction">ShareComprehendAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalAction">ShareComprehendMedicalAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceAction">ShareConfluenceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceKnowledgeBase">ShareConfluenceKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboards">ShareDashboards</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatabricksDataSource">ShareDatabricksDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasets">ShareDatasets</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSources">ShareDataSources</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDb2DataSource">ShareDb2DataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDenodoDataSource">ShareDenodoDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDocumentDbDataSource">ShareDocumentDbDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDremioDataSource">ShareDremioDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDynamoDbDataSource">ShareDynamoDbDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareExasolDataSource">ShareExasolDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetAction">ShareFactSetAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFileDataSource">ShareFileDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpAction">ShareGenericHttpAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubAction">ShareGithubAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGitHubDataSource">ShareGitHubDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleAnalyticsDataSource">ShareGoogleAnalyticsDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleBigQueryDataSource">ShareGoogleBigQueryDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarAction">ShareGoogleCalendarAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleDriveKnowledgeBase">ShareGoogleDriveKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleSheetsDataSource">ShareGoogleSheetsDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotAction">ShareHubspotAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceAction">ShareHuggingFaceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIdcKnowledgeBase">ShareIdcKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareImpalaDataSource">ShareImpalaDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomAction">ShareIntercomAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraAction">ShareJiraAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraDataSource">ShareJiraDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBases">ShareKnowledgeBases</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearAction">ShareLinearAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMariaDbDataSource">ShareMariaDbDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpAction">ShareMcpAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayAction">ShareMondayAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMongoAtlasDataSource">ShareMongoAtlasDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMongoDbDataSource">ShareMongoDbDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeAction">ShareMsExchangeAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsAction">ShareMsTeamsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMySqlDataSource">ShareMySqlDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicAction">ShareNewRelicAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionAction">ShareNotionAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveAction">ShareOneDriveAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveKnowledgeBase">ShareOneDriveKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiAction">ShareOpenApiAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenSearchDataSource">ShareOpenSearchDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOracleDataSource">ShareOracleDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyAction">SharePagerDutyAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePayPalDataSource">SharePayPalDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointAction">SharePointAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointKnowledgeBase">SharePointKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePostgreSqlDataSource">SharePostgreSqlDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePrestoDataSource">SharePrestoDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareQBusinessKnowledgeBase">ShareQBusinessKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareRadiantDataSource">ShareRadiantDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareRdsDataSource">ShareRdsDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareRedshiftAutoDiscoveredDataSource">ShareRedshiftAutoDiscoveredDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareRedshiftManualDataSource">ShareRedshiftManualDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareS3AnalyticsDataSource">ShareS3AnalyticsDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareS3DataSource">ShareS3DataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareS3KnowledgeBase">ShareS3KnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareS3TablesDataSource">ShareS3TablesDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceAction">ShareSalesforceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceDataSource">ShareSalesforceDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyAction">ShareSandPGlobalEnergyAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiAction">ShareSandPgmiAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialAction">ShareSapBillOfMaterialAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerAction">ShareSapBusinessPartnerAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapHanaDataSource">ShareSapHanaDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockAction">ShareSapMaterialStockAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryAction">ShareSapPhysicalInventoryAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataAction">ShareSapProductMasterDataAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowAction">ShareServiceNowAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowDataSource">ShareServiceNowDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointAction">ShareSharePointAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointKnowledgeBase">ShareSharePointKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackAction">ShareSlackAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetAction">ShareSmartsheetAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSnowflakeDataSource">ShareSnowflakeDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpaces">ShareSpaces</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSparkDataSource">ShareSparkDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSqlServerDataSource">ShareSqlServerDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSquareDataSource">ShareSquareDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareStarburstDataSource">ShareStarburstDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTeradataDataSource">ShareTeradataDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractAction">ShareTextractAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTimestreamDataSource">ShareTimestreamDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTrinoDataSource">ShareTrinoDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTwitterDataSource">ShareTwitterDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareWebCrawlerKnowledgeBase">ShareWebCrawlerKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskAction">ShareZendeskAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.slackAction">SlackAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetAction">SmartsheetAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.snowflakeDataSource">SnowflakeDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.space">Space</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sparkDataSource">SparkDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sqlServerDataSource">SqlServerDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.squareDataSource">SquareDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.starburstDataSource">StarburstDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReports">SubscribeDashboardEmailReports</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.teradataDataSource">TeradataDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.textractAction">TextractAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.timestreamDataSource">TimestreamDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.topic">Topic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.trigger">Trigger</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.trinoDataSource">TrinoDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.twitterDataSource">TwitterDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateAdobeAnalyticsDataSource">UpdateAdobeAnalyticsDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateAthenaDataSource">UpdateAthenaDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateAuroraDataSource">UpdateAuroraDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDatabricksDataSource">UpdateDatabricksDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDb2DataSource">UpdateDb2DataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDenodoDataSource">UpdateDenodoDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDocumentDbDataSource">UpdateDocumentDbDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDremioDataSource">UpdateDremioDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDynamoDbDataSource">UpdateDynamoDbDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateExasolDataSource">UpdateExasolDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateFileDataSource">UpdateFileDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateGitHubDataSource">UpdateGitHubDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateGoogleAnalyticsDataSource">UpdateGoogleAnalyticsDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateGoogleBigQueryDataSource">UpdateGoogleBigQueryDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateGoogleSheetsDataSource">UpdateGoogleSheetsDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateImpalaDataSource">UpdateImpalaDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateJiraDataSource">UpdateJiraDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateMariaDbDataSource">UpdateMariaDbDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateMongoAtlasDataSource">UpdateMongoAtlasDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateMongoDbDataSource">UpdateMongoDbDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateMySqlDataSource">UpdateMySqlDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateOpenSearchDataSource">UpdateOpenSearchDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateOracleDataSource">UpdateOracleDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updatePayPalDataSource">UpdatePayPalDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updatePostgreSqlDataSource">UpdatePostgreSqlDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updatePrestoDataSource">UpdatePrestoDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateRadiantDataSource">UpdateRadiantDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateRdsDataSource">UpdateRdsDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateRedshiftAutoDiscoveredDataSource">UpdateRedshiftAutoDiscoveredDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateRedshiftManualDataSource">UpdateRedshiftManualDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateS3AnalyticsDataSource">UpdateS3AnalyticsDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateS3DataSource">UpdateS3DataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateS3TablesDataSource">UpdateS3TablesDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSalesforceDataSource">UpdateSalesforceDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSapHanaDataSource">UpdateSapHanaDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateServiceNowDataSource">UpdateServiceNowDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSnowflakeDataSource">UpdateSnowflakeDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSparkDataSource">UpdateSparkDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSqlServerDataSource">UpdateSqlServerDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSquareDataSource">UpdateSquareDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateStarburstDataSource">UpdateStarburstDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateTeradataDataSource">UpdateTeradataDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateTimestreamDataSource">UpdateTimestreamDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateTrinoDataSource">UpdateTrinoDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateTwitterDataSource">UpdateTwitterDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearch">UseAgentWebSearch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsAction">UseAmazonBedrockArsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsAction">UseAmazonBedrockFsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsAction">UseAmazonBedrockKrsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeAction">UseAmazonSThreeAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaAction">UseAsanaAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrAction">UseBambooHrAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockManagedKnowledgeBase">UseBedrockManagedKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModels">UseBedrockModels</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentAction">UseBoxAgentAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxKnowledgeBase">UseBoxKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBrowserExtension">UseBrowserExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentAction">UseCanvaAgentAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendAction">UseComprehendAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalAction">UseComprehendMedicalAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceAction">UseConfluenceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceKnowledgeBase">UseConfluenceKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useExcelAddInExtension">UseExcelAddInExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetAction">UseFactSetAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpAction">UseGenericHttpAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubAction">UseGithubAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarAction">UseGoogleCalendarAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleDriveKnowledgeBase">UseGoogleDriveKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotAction">UseHubspotAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceAction">UseHuggingFaceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useIdcKnowledgeBase">UseIdcKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomAction">UseIntercomAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraAction">UseJiraAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearAction">UseLinearAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpAction">UseMcpAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayAction">UseMondayAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeAction">UseMsExchangeAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsAction">UseMsTeamsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicAction">UseNewRelicAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionAction">UseNotionAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveAction">UseOneDriveAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveKnowledgeBase">UseOneDriveKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiAction">UseOpenApiAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOutlookAddInExtension">UseOutlookAddInExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyAction">UsePagerDutyAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.usePowerpointAddInExtension">UsePowerpointAddInExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useQBusinessKnowledgeBase">UseQBusinessKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useS3KnowledgeBase">UseS3KnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceAction">UseSalesforceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyAction">UseSandPGlobalEnergyAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiAction">UseSandPgmiAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialAction">UseSapBillOfMaterialAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerAction">UseSapBusinessPartnerAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockAction">UseSapMaterialStockAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryAction">UseSapPhysicalInventoryAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataAction">UseSapProductMasterDataAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowAction">UseServiceNowAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointAction">UseSharePointAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointKnowledgeBase">UseSharePointKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackAction">UseSlackAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetAction">UseSmartsheetAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractAction">UseTextractAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useWebCrawlerKnowledgeBase">UseWebCrawlerKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useWordAddInExtension">UseWordAddInExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskAction">UseZendeskAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacity">ViewAccountSpiceCapacity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.webCrawlerKnowledgeBase">WebCrawlerKnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskAction">ZendeskAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilities">DataAwsccQuicksightCustomPermissionsCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessAppsNativeDataStore`<sup>Required</sup> <a name="AccessAppsNativeDataStore" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStore"></a>

```go
func AccessAppsNativeDataStore() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `AddOrRunAnomalyDetectionForAnalyses`<sup>Required</sup> <a name="AddOrRunAnomalyDetectionForAnalyses" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalyses"></a>

```go
func AddOrRunAnomalyDetectionForAnalyses() *string
```

- *Type:* *string

---

##### `AdobeAnalyticsDataSource`<sup>Required</sup> <a name="AdobeAnalyticsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.adobeAnalyticsDataSource"></a>

```go
func AdobeAnalyticsDataSource() *string
```

- *Type:* *string

---

##### `AmazonBedrockArsAction`<sup>Required</sup> <a name="AmazonBedrockArsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsAction"></a>

```go
func AmazonBedrockArsAction() *string
```

- *Type:* *string

---

##### `AmazonBedrockFsAction`<sup>Required</sup> <a name="AmazonBedrockFsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsAction"></a>

```go
func AmazonBedrockFsAction() *string
```

- *Type:* *string

---

##### `AmazonBedrockKrsAction`<sup>Required</sup> <a name="AmazonBedrockKrsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsAction"></a>

```go
func AmazonBedrockKrsAction() *string
```

- *Type:* *string

---

##### `AmazonSThreeAction`<sup>Required</sup> <a name="AmazonSThreeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeAction"></a>

```go
func AmazonSThreeAction() *string
```

- *Type:* *string

---

##### `Analysis`<sup>Required</sup> <a name="Analysis" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.analysis"></a>

```go
func Analysis() *string
```

- *Type:* *string

---

##### `ApproveFlowShareRequests`<sup>Required</sup> <a name="ApproveFlowShareRequests" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequests"></a>

```go
func ApproveFlowShareRequests() *string
```

- *Type:* *string

---

##### `Apps`<sup>Required</sup> <a name="Apps" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.apps"></a>

```go
func Apps() *string
```

- *Type:* *string

---

##### `AsanaAction`<sup>Required</sup> <a name="AsanaAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaAction"></a>

```go
func AsanaAction() *string
```

- *Type:* *string

---

##### `AthenaDataSource`<sup>Required</sup> <a name="AthenaDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.athenaDataSource"></a>

```go
func AthenaDataSource() *string
```

- *Type:* *string

---

##### `AuroraDataSource`<sup>Required</sup> <a name="AuroraDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.auroraDataSource"></a>

```go
func AuroraDataSource() *string
```

- *Type:* *string

---

##### `Automate`<sup>Required</sup> <a name="Automate" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.automate"></a>

```go
func Automate() *string
```

- *Type:* *string

---

##### `BambooHrAction`<sup>Required</sup> <a name="BambooHrAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrAction"></a>

```go
func BambooHrAction() *string
```

- *Type:* *string

---

##### `BedrockManagedKnowledgeBase`<sup>Required</sup> <a name="BedrockManagedKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.bedrockManagedKnowledgeBase"></a>

```go
func BedrockManagedKnowledgeBase() *string
```

- *Type:* *string

---

##### `BoxAgentAction`<sup>Required</sup> <a name="BoxAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentAction"></a>

```go
func BoxAgentAction() *string
```

- *Type:* *string

---

##### `BoxKnowledgeBase`<sup>Required</sup> <a name="BoxKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.boxKnowledgeBase"></a>

```go
func BoxKnowledgeBase() *string
```

- *Type:* *string

---

##### `BuildCalculatedFieldWithQ`<sup>Required</sup> <a name="BuildCalculatedFieldWithQ" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQ"></a>

```go
func BuildCalculatedFieldWithQ() *string
```

- *Type:* *string

---

##### `CanvaAgentAction`<sup>Required</sup> <a name="CanvaAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentAction"></a>

```go
func CanvaAgentAction() *string
```

- *Type:* *string

---

##### `ChatAgent`<sup>Required</sup> <a name="ChatAgent" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgent"></a>

```go
func ChatAgent() *string
```

- *Type:* *string

---

##### `ComprehendAction`<sup>Required</sup> <a name="ComprehendAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendAction"></a>

```go
func ComprehendAction() *string
```

- *Type:* *string

---

##### `ComprehendMedicalAction`<sup>Required</sup> <a name="ComprehendMedicalAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalAction"></a>

```go
func ComprehendMedicalAction() *string
```

- *Type:* *string

---

##### `ConfluenceAction`<sup>Required</sup> <a name="ConfluenceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceAction"></a>

```go
func ConfluenceAction() *string
```

- *Type:* *string

---

##### `ConfluenceKnowledgeBase`<sup>Required</sup> <a name="ConfluenceKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceKnowledgeBase"></a>

```go
func ConfluenceKnowledgeBase() *string
```

- *Type:* *string

---

##### `CreateAdobeAnalyticsDataSource`<sup>Required</sup> <a name="CreateAdobeAnalyticsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAdobeAnalyticsDataSource"></a>

```go
func CreateAdobeAnalyticsDataSource() *string
```

- *Type:* *string

---

##### `CreateAndUpdateAmazonBedrockArsAction`<sup>Required</sup> <a name="CreateAndUpdateAmazonBedrockArsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsAction"></a>

```go
func CreateAndUpdateAmazonBedrockArsAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateAmazonBedrockFsAction`<sup>Required</sup> <a name="CreateAndUpdateAmazonBedrockFsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsAction"></a>

```go
func CreateAndUpdateAmazonBedrockFsAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateAmazonBedrockKrsAction`<sup>Required</sup> <a name="CreateAndUpdateAmazonBedrockKrsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsAction"></a>

```go
func CreateAndUpdateAmazonBedrockKrsAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateAmazonSThreeAction`<sup>Required</sup> <a name="CreateAndUpdateAmazonSThreeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeAction"></a>

```go
func CreateAndUpdateAmazonSThreeAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateApps`<sup>Required</sup> <a name="CreateAndUpdateApps" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateApps"></a>

```go
func CreateAndUpdateApps() *string
```

- *Type:* *string

---

##### `CreateAndUpdateAsanaAction`<sup>Required</sup> <a name="CreateAndUpdateAsanaAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaAction"></a>

```go
func CreateAndUpdateAsanaAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateBambooHrAction`<sup>Required</sup> <a name="CreateAndUpdateBambooHrAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrAction"></a>

```go
func CreateAndUpdateBambooHrAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateBedrockManagedKnowledgeBase`<sup>Required</sup> <a name="CreateAndUpdateBedrockManagedKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBedrockManagedKnowledgeBase"></a>

```go
func CreateAndUpdateBedrockManagedKnowledgeBase() *string
```

- *Type:* *string

---

##### `CreateAndUpdateBoxAgentAction`<sup>Required</sup> <a name="CreateAndUpdateBoxAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentAction"></a>

```go
func CreateAndUpdateBoxAgentAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateBoxKnowledgeBase`<sup>Required</sup> <a name="CreateAndUpdateBoxKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxKnowledgeBase"></a>

```go
func CreateAndUpdateBoxKnowledgeBase() *string
```

- *Type:* *string

---

##### `CreateAndUpdateCanvaAgentAction`<sup>Required</sup> <a name="CreateAndUpdateCanvaAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentAction"></a>

```go
func CreateAndUpdateCanvaAgentAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateComprehendAction`<sup>Required</sup> <a name="CreateAndUpdateComprehendAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendAction"></a>

```go
func CreateAndUpdateComprehendAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateComprehendMedicalAction`<sup>Required</sup> <a name="CreateAndUpdateComprehendMedicalAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalAction"></a>

```go
func CreateAndUpdateComprehendMedicalAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateConfluenceAction`<sup>Required</sup> <a name="CreateAndUpdateConfluenceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceAction"></a>

```go
func CreateAndUpdateConfluenceAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateConfluenceKnowledgeBase`<sup>Required</sup> <a name="CreateAndUpdateConfluenceKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceKnowledgeBase"></a>

```go
func CreateAndUpdateConfluenceKnowledgeBase() *string
```

- *Type:* *string

---

##### `CreateAndUpdateDashboardEmailReports`<sup>Required</sup> <a name="CreateAndUpdateDashboardEmailReports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReports"></a>

```go
func CreateAndUpdateDashboardEmailReports() *string
```

- *Type:* *string

---

##### `CreateAndUpdateDatasets`<sup>Required</sup> <a name="CreateAndUpdateDatasets" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasets"></a>

```go
func CreateAndUpdateDatasets() *string
```

- *Type:* *string

---

##### `CreateAndUpdateDataSources`<sup>Required</sup> <a name="CreateAndUpdateDataSources" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSources"></a>

```go
func CreateAndUpdateDataSources() *string
```

- *Type:* *string

---

##### `CreateAndUpdateFactSetAction`<sup>Required</sup> <a name="CreateAndUpdateFactSetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetAction"></a>

```go
func CreateAndUpdateFactSetAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateGenericHttpAction`<sup>Required</sup> <a name="CreateAndUpdateGenericHttpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpAction"></a>

```go
func CreateAndUpdateGenericHttpAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateGithubAction`<sup>Required</sup> <a name="CreateAndUpdateGithubAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubAction"></a>

```go
func CreateAndUpdateGithubAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateGoogleCalendarAction`<sup>Required</sup> <a name="CreateAndUpdateGoogleCalendarAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarAction"></a>

```go
func CreateAndUpdateGoogleCalendarAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateGoogleDriveKnowledgeBase`<sup>Required</sup> <a name="CreateAndUpdateGoogleDriveKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleDriveKnowledgeBase"></a>

```go
func CreateAndUpdateGoogleDriveKnowledgeBase() *string
```

- *Type:* *string

---

##### `CreateAndUpdateHubspotAction`<sup>Required</sup> <a name="CreateAndUpdateHubspotAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotAction"></a>

```go
func CreateAndUpdateHubspotAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateHuggingFaceAction`<sup>Required</sup> <a name="CreateAndUpdateHuggingFaceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceAction"></a>

```go
func CreateAndUpdateHuggingFaceAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateIdcKnowledgeBase`<sup>Required</sup> <a name="CreateAndUpdateIdcKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIdcKnowledgeBase"></a>

```go
func CreateAndUpdateIdcKnowledgeBase() *string
```

- *Type:* *string

---

##### `CreateAndUpdateIntercomAction`<sup>Required</sup> <a name="CreateAndUpdateIntercomAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomAction"></a>

```go
func CreateAndUpdateIntercomAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateJiraAction`<sup>Required</sup> <a name="CreateAndUpdateJiraAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraAction"></a>

```go
func CreateAndUpdateJiraAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateKnowledgeBases`<sup>Required</sup> <a name="CreateAndUpdateKnowledgeBases" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBases"></a>

```go
func CreateAndUpdateKnowledgeBases() *string
```

- *Type:* *string

---

##### `CreateAndUpdateLinearAction`<sup>Required</sup> <a name="CreateAndUpdateLinearAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearAction"></a>

```go
func CreateAndUpdateLinearAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateMcpAction`<sup>Required</sup> <a name="CreateAndUpdateMcpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpAction"></a>

```go
func CreateAndUpdateMcpAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateMondayAction`<sup>Required</sup> <a name="CreateAndUpdateMondayAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayAction"></a>

```go
func CreateAndUpdateMondayAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateMsExchangeAction`<sup>Required</sup> <a name="CreateAndUpdateMsExchangeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeAction"></a>

```go
func CreateAndUpdateMsExchangeAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateMsTeamsAction`<sup>Required</sup> <a name="CreateAndUpdateMsTeamsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsAction"></a>

```go
func CreateAndUpdateMsTeamsAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateNewRelicAction`<sup>Required</sup> <a name="CreateAndUpdateNewRelicAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicAction"></a>

```go
func CreateAndUpdateNewRelicAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateNotionAction`<sup>Required</sup> <a name="CreateAndUpdateNotionAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionAction"></a>

```go
func CreateAndUpdateNotionAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateOneDriveAction`<sup>Required</sup> <a name="CreateAndUpdateOneDriveAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveAction"></a>

```go
func CreateAndUpdateOneDriveAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateOneDriveKnowledgeBase`<sup>Required</sup> <a name="CreateAndUpdateOneDriveKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveKnowledgeBase"></a>

```go
func CreateAndUpdateOneDriveKnowledgeBase() *string
```

- *Type:* *string

---

##### `CreateAndUpdateOpenApiAction`<sup>Required</sup> <a name="CreateAndUpdateOpenApiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiAction"></a>

```go
func CreateAndUpdateOpenApiAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdatePagerDutyAction`<sup>Required</sup> <a name="CreateAndUpdatePagerDutyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyAction"></a>

```go
func CreateAndUpdatePagerDutyAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateQBusinessKnowledgeBase`<sup>Required</sup> <a name="CreateAndUpdateQBusinessKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateQBusinessKnowledgeBase"></a>

```go
func CreateAndUpdateQBusinessKnowledgeBase() *string
```

- *Type:* *string

---

##### `CreateAndUpdateS3KnowledgeBase`<sup>Required</sup> <a name="CreateAndUpdateS3KnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateS3KnowledgeBase"></a>

```go
func CreateAndUpdateS3KnowledgeBase() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSalesforceAction`<sup>Required</sup> <a name="CreateAndUpdateSalesforceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceAction"></a>

```go
func CreateAndUpdateSalesforceAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSandPGlobalEnergyAction`<sup>Required</sup> <a name="CreateAndUpdateSandPGlobalEnergyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyAction"></a>

```go
func CreateAndUpdateSandPGlobalEnergyAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSandPgmiAction`<sup>Required</sup> <a name="CreateAndUpdateSandPgmiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiAction"></a>

```go
func CreateAndUpdateSandPgmiAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSapBillOfMaterialAction`<sup>Required</sup> <a name="CreateAndUpdateSapBillOfMaterialAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialAction"></a>

```go
func CreateAndUpdateSapBillOfMaterialAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSapBusinessPartnerAction`<sup>Required</sup> <a name="CreateAndUpdateSapBusinessPartnerAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerAction"></a>

```go
func CreateAndUpdateSapBusinessPartnerAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSapMaterialStockAction`<sup>Required</sup> <a name="CreateAndUpdateSapMaterialStockAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockAction"></a>

```go
func CreateAndUpdateSapMaterialStockAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSapPhysicalInventoryAction`<sup>Required</sup> <a name="CreateAndUpdateSapPhysicalInventoryAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryAction"></a>

```go
func CreateAndUpdateSapPhysicalInventoryAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSapProductMasterDataAction`<sup>Required</sup> <a name="CreateAndUpdateSapProductMasterDataAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataAction"></a>

```go
func CreateAndUpdateSapProductMasterDataAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateServiceNowAction`<sup>Required</sup> <a name="CreateAndUpdateServiceNowAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowAction"></a>

```go
func CreateAndUpdateServiceNowAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSharePointAction`<sup>Required</sup> <a name="CreateAndUpdateSharePointAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointAction"></a>

```go
func CreateAndUpdateSharePointAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSharePointKnowledgeBase`<sup>Required</sup> <a name="CreateAndUpdateSharePointKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointKnowledgeBase"></a>

```go
func CreateAndUpdateSharePointKnowledgeBase() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSlackAction`<sup>Required</sup> <a name="CreateAndUpdateSlackAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackAction"></a>

```go
func CreateAndUpdateSlackAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSmartsheetAction`<sup>Required</sup> <a name="CreateAndUpdateSmartsheetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetAction"></a>

```go
func CreateAndUpdateSmartsheetAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateTextractAction`<sup>Required</sup> <a name="CreateAndUpdateTextractAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractAction"></a>

```go
func CreateAndUpdateTextractAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateThemes`<sup>Required</sup> <a name="CreateAndUpdateThemes" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemes"></a>

```go
func CreateAndUpdateThemes() *string
```

- *Type:* *string

---

##### `CreateAndUpdateThresholdAlerts`<sup>Required</sup> <a name="CreateAndUpdateThresholdAlerts" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlerts"></a>

```go
func CreateAndUpdateThresholdAlerts() *string
```

- *Type:* *string

---

##### `CreateAndUpdateWebCrawlerKnowledgeBase`<sup>Required</sup> <a name="CreateAndUpdateWebCrawlerKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateWebCrawlerKnowledgeBase"></a>

```go
func CreateAndUpdateWebCrawlerKnowledgeBase() *string
```

- *Type:* *string

---

##### `CreateAndUpdateZendeskAction`<sup>Required</sup> <a name="CreateAndUpdateZendeskAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskAction"></a>

```go
func CreateAndUpdateZendeskAction() *string
```

- *Type:* *string

---

##### `CreateAthenaDataSource`<sup>Required</sup> <a name="CreateAthenaDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAthenaDataSource"></a>

```go
func CreateAthenaDataSource() *string
```

- *Type:* *string

---

##### `CreateAuroraDataSource`<sup>Required</sup> <a name="CreateAuroraDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAuroraDataSource"></a>

```go
func CreateAuroraDataSource() *string
```

- *Type:* *string

---

##### `CreateChatAgents`<sup>Required</sup> <a name="CreateChatAgents" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgents"></a>

```go
func CreateChatAgents() *string
```

- *Type:* *string

---

##### `CreateDashboardExecutiveSummaryWithQ`<sup>Required</sup> <a name="CreateDashboardExecutiveSummaryWithQ" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQ"></a>

```go
func CreateDashboardExecutiveSummaryWithQ() *string
```

- *Type:* *string

---

##### `CreateDatabricksDataSource`<sup>Required</sup> <a name="CreateDatabricksDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDatabricksDataSource"></a>

```go
func CreateDatabricksDataSource() *string
```

- *Type:* *string

---

##### `CreateDb2DataSource`<sup>Required</sup> <a name="CreateDb2DataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDb2DataSource"></a>

```go
func CreateDb2DataSource() *string
```

- *Type:* *string

---

##### `CreateDenodoDataSource`<sup>Required</sup> <a name="CreateDenodoDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDenodoDataSource"></a>

```go
func CreateDenodoDataSource() *string
```

- *Type:* *string

---

##### `CreateDocumentDbDataSource`<sup>Required</sup> <a name="CreateDocumentDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDocumentDbDataSource"></a>

```go
func CreateDocumentDbDataSource() *string
```

- *Type:* *string

---

##### `CreateDremioDataSource`<sup>Required</sup> <a name="CreateDremioDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDremioDataSource"></a>

```go
func CreateDremioDataSource() *string
```

- *Type:* *string

---

##### `CreateDynamoDbDataSource`<sup>Required</sup> <a name="CreateDynamoDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDynamoDbDataSource"></a>

```go
func CreateDynamoDbDataSource() *string
```

- *Type:* *string

---

##### `CreateExasolDataSource`<sup>Required</sup> <a name="CreateExasolDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createExasolDataSource"></a>

```go
func CreateExasolDataSource() *string
```

- *Type:* *string

---

##### `CreateFileDataSource`<sup>Required</sup> <a name="CreateFileDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createFileDataSource"></a>

```go
func CreateFileDataSource() *string
```

- *Type:* *string

---

##### `CreateGitHubDataSource`<sup>Required</sup> <a name="CreateGitHubDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createGitHubDataSource"></a>

```go
func CreateGitHubDataSource() *string
```

- *Type:* *string

---

##### `CreateGoogleAnalyticsDataSource`<sup>Required</sup> <a name="CreateGoogleAnalyticsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createGoogleAnalyticsDataSource"></a>

```go
func CreateGoogleAnalyticsDataSource() *string
```

- *Type:* *string

---

##### `CreateGoogleBigQueryDataSource`<sup>Required</sup> <a name="CreateGoogleBigQueryDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createGoogleBigQueryDataSource"></a>

```go
func CreateGoogleBigQueryDataSource() *string
```

- *Type:* *string

---

##### `CreateGoogleSheetsDataSource`<sup>Required</sup> <a name="CreateGoogleSheetsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createGoogleSheetsDataSource"></a>

```go
func CreateGoogleSheetsDataSource() *string
```

- *Type:* *string

---

##### `CreateImpalaDataSource`<sup>Required</sup> <a name="CreateImpalaDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createImpalaDataSource"></a>

```go
func CreateImpalaDataSource() *string
```

- *Type:* *string

---

##### `CreateJiraDataSource`<sup>Required</sup> <a name="CreateJiraDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createJiraDataSource"></a>

```go
func CreateJiraDataSource() *string
```

- *Type:* *string

---

##### `CreateMariaDbDataSource`<sup>Required</sup> <a name="CreateMariaDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createMariaDbDataSource"></a>

```go
func CreateMariaDbDataSource() *string
```

- *Type:* *string

---

##### `CreateMongoAtlasDataSource`<sup>Required</sup> <a name="CreateMongoAtlasDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createMongoAtlasDataSource"></a>

```go
func CreateMongoAtlasDataSource() *string
```

- *Type:* *string

---

##### `CreateMongoDbDataSource`<sup>Required</sup> <a name="CreateMongoDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createMongoDbDataSource"></a>

```go
func CreateMongoDbDataSource() *string
```

- *Type:* *string

---

##### `CreateMySqlDataSource`<sup>Required</sup> <a name="CreateMySqlDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createMySqlDataSource"></a>

```go
func CreateMySqlDataSource() *string
```

- *Type:* *string

---

##### `CreateOpenSearchDataSource`<sup>Required</sup> <a name="CreateOpenSearchDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createOpenSearchDataSource"></a>

```go
func CreateOpenSearchDataSource() *string
```

- *Type:* *string

---

##### `CreateOracleDataSource`<sup>Required</sup> <a name="CreateOracleDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createOracleDataSource"></a>

```go
func CreateOracleDataSource() *string
```

- *Type:* *string

---

##### `CreatePayPalDataSource`<sup>Required</sup> <a name="CreatePayPalDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createPayPalDataSource"></a>

```go
func CreatePayPalDataSource() *string
```

- *Type:* *string

---

##### `CreatePostgreSqlDataSource`<sup>Required</sup> <a name="CreatePostgreSqlDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createPostgreSqlDataSource"></a>

```go
func CreatePostgreSqlDataSource() *string
```

- *Type:* *string

---

##### `CreatePrestoDataSource`<sup>Required</sup> <a name="CreatePrestoDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createPrestoDataSource"></a>

```go
func CreatePrestoDataSource() *string
```

- *Type:* *string

---

##### `CreateRadiantDataSource`<sup>Required</sup> <a name="CreateRadiantDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createRadiantDataSource"></a>

```go
func CreateRadiantDataSource() *string
```

- *Type:* *string

---

##### `CreateRdsDataSource`<sup>Required</sup> <a name="CreateRdsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createRdsDataSource"></a>

```go
func CreateRdsDataSource() *string
```

- *Type:* *string

---

##### `CreateRedshiftAutoDiscoveredDataSource`<sup>Required</sup> <a name="CreateRedshiftAutoDiscoveredDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createRedshiftAutoDiscoveredDataSource"></a>

```go
func CreateRedshiftAutoDiscoveredDataSource() *string
```

- *Type:* *string

---

##### `CreateRedshiftManualDataSource`<sup>Required</sup> <a name="CreateRedshiftManualDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createRedshiftManualDataSource"></a>

```go
func CreateRedshiftManualDataSource() *string
```

- *Type:* *string

---

##### `CreateS3AnalyticsDataSource`<sup>Required</sup> <a name="CreateS3AnalyticsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createS3AnalyticsDataSource"></a>

```go
func CreateS3AnalyticsDataSource() *string
```

- *Type:* *string

---

##### `CreateS3DataSource`<sup>Required</sup> <a name="CreateS3DataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createS3DataSource"></a>

```go
func CreateS3DataSource() *string
```

- *Type:* *string

---

##### `CreateS3TablesDataSource`<sup>Required</sup> <a name="CreateS3TablesDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createS3TablesDataSource"></a>

```go
func CreateS3TablesDataSource() *string
```

- *Type:* *string

---

##### `CreateSalesforceDataSource`<sup>Required</sup> <a name="CreateSalesforceDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSalesforceDataSource"></a>

```go
func CreateSalesforceDataSource() *string
```

- *Type:* *string

---

##### `CreateSapHanaDataSource`<sup>Required</sup> <a name="CreateSapHanaDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSapHanaDataSource"></a>

```go
func CreateSapHanaDataSource() *string
```

- *Type:* *string

---

##### `CreateServiceNowDataSource`<sup>Required</sup> <a name="CreateServiceNowDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createServiceNowDataSource"></a>

```go
func CreateServiceNowDataSource() *string
```

- *Type:* *string

---

##### `CreateSharedFolders`<sup>Required</sup> <a name="CreateSharedFolders" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFolders"></a>

```go
func CreateSharedFolders() *string
```

- *Type:* *string

---

##### `CreateSnowflakeDataSource`<sup>Required</sup> <a name="CreateSnowflakeDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSnowflakeDataSource"></a>

```go
func CreateSnowflakeDataSource() *string
```

- *Type:* *string

---

##### `CreateSpaces`<sup>Required</sup> <a name="CreateSpaces" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpaces"></a>

```go
func CreateSpaces() *string
```

- *Type:* *string

---

##### `CreateSparkDataSource`<sup>Required</sup> <a name="CreateSparkDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSparkDataSource"></a>

```go
func CreateSparkDataSource() *string
```

- *Type:* *string

---

##### `CreateSpiceDataset`<sup>Required</sup> <a name="CreateSpiceDataset" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDataset"></a>

```go
func CreateSpiceDataset() *string
```

- *Type:* *string

---

##### `CreateSqlServerDataSource`<sup>Required</sup> <a name="CreateSqlServerDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSqlServerDataSource"></a>

```go
func CreateSqlServerDataSource() *string
```

- *Type:* *string

---

##### `CreateSquareDataSource`<sup>Required</sup> <a name="CreateSquareDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSquareDataSource"></a>

```go
func CreateSquareDataSource() *string
```

- *Type:* *string

---

##### `CreateStarburstDataSource`<sup>Required</sup> <a name="CreateStarburstDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createStarburstDataSource"></a>

```go
func CreateStarburstDataSource() *string
```

- *Type:* *string

---

##### `CreateTeradataDataSource`<sup>Required</sup> <a name="CreateTeradataDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createTeradataDataSource"></a>

```go
func CreateTeradataDataSource() *string
```

- *Type:* *string

---

##### `CreateTimestreamDataSource`<sup>Required</sup> <a name="CreateTimestreamDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createTimestreamDataSource"></a>

```go
func CreateTimestreamDataSource() *string
```

- *Type:* *string

---

##### `CreateTrinoDataSource`<sup>Required</sup> <a name="CreateTrinoDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createTrinoDataSource"></a>

```go
func CreateTrinoDataSource() *string
```

- *Type:* *string

---

##### `CreateTwitterDataSource`<sup>Required</sup> <a name="CreateTwitterDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createTwitterDataSource"></a>

```go
func CreateTwitterDataSource() *string
```

- *Type:* *string

---

##### `Dashboard`<sup>Required</sup> <a name="Dashboard" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboard"></a>

```go
func Dashboard() *string
```

- *Type:* *string

---

##### `DatabricksDataSource`<sup>Required</sup> <a name="DatabricksDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.databricksDataSource"></a>

```go
func DatabricksDataSource() *string
```

- *Type:* *string

---

##### `Db2DataSource`<sup>Required</sup> <a name="Db2DataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.db2DataSource"></a>

```go
func Db2DataSource() *string
```

- *Type:* *string

---

##### `DenodoDataSource`<sup>Required</sup> <a name="DenodoDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.denodoDataSource"></a>

```go
func DenodoDataSource() *string
```

- *Type:* *string

---

##### `DocumentDbDataSource`<sup>Required</sup> <a name="DocumentDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.documentDbDataSource"></a>

```go
func DocumentDbDataSource() *string
```

- *Type:* *string

---

##### `DremioDataSource`<sup>Required</sup> <a name="DremioDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.dremioDataSource"></a>

```go
func DremioDataSource() *string
```

- *Type:* *string

---

##### `DynamoDbDataSource`<sup>Required</sup> <a name="DynamoDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.dynamoDbDataSource"></a>

```go
func DynamoDbDataSource() *string
```

- *Type:* *string

---

##### `EditVisualWithQ`<sup>Required</sup> <a name="EditVisualWithQ" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQ"></a>

```go
func EditVisualWithQ() *string
```

- *Type:* *string

---

##### `ExasolDataSource`<sup>Required</sup> <a name="ExasolDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exasolDataSource"></a>

```go
func ExasolDataSource() *string
```

- *Type:* *string

---

##### `ExportToCsv`<sup>Required</sup> <a name="ExportToCsv" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsv"></a>

```go
func ExportToCsv() *string
```

- *Type:* *string

---

##### `ExportToCsvInScheduledReports`<sup>Required</sup> <a name="ExportToCsvInScheduledReports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReports"></a>

```go
func ExportToCsvInScheduledReports() *string
```

- *Type:* *string

---

##### `ExportToExcel`<sup>Required</sup> <a name="ExportToExcel" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcel"></a>

```go
func ExportToExcel() *string
```

- *Type:* *string

---

##### `ExportToExcelInScheduledReports`<sup>Required</sup> <a name="ExportToExcelInScheduledReports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReports"></a>

```go
func ExportToExcelInScheduledReports() *string
```

- *Type:* *string

---

##### `ExportToPdf`<sup>Required</sup> <a name="ExportToPdf" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdf"></a>

```go
func ExportToPdf() *string
```

- *Type:* *string

---

##### `ExportToPdfInScheduledReports`<sup>Required</sup> <a name="ExportToPdfInScheduledReports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReports"></a>

```go
func ExportToPdfInScheduledReports() *string
```

- *Type:* *string

---

##### `Extension`<sup>Required</sup> <a name="Extension" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.extension"></a>

```go
func Extension() *string
```

- *Type:* *string

---

##### `FactSetAction`<sup>Required</sup> <a name="FactSetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetAction"></a>

```go
func FactSetAction() *string
```

- *Type:* *string

---

##### `FileDataSource`<sup>Required</sup> <a name="FileDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.fileDataSource"></a>

```go
func FileDataSource() *string
```

- *Type:* *string

---

##### `Flow`<sup>Required</sup> <a name="Flow" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.flow"></a>

```go
func Flow() *string
```

- *Type:* *string

---

##### `GenericHttpAction`<sup>Required</sup> <a name="GenericHttpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpAction"></a>

```go
func GenericHttpAction() *string
```

- *Type:* *string

---

##### `GithubAction`<sup>Required</sup> <a name="GithubAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.githubAction"></a>

```go
func GithubAction() *string
```

- *Type:* *string

---

##### `GitHubDataSource`<sup>Required</sup> <a name="GitHubDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.gitHubDataSource"></a>

```go
func GitHubDataSource() *string
```

- *Type:* *string

---

##### `GoogleAnalyticsDataSource`<sup>Required</sup> <a name="GoogleAnalyticsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleAnalyticsDataSource"></a>

```go
func GoogleAnalyticsDataSource() *string
```

- *Type:* *string

---

##### `GoogleBigQueryDataSource`<sup>Required</sup> <a name="GoogleBigQueryDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleBigQueryDataSource"></a>

```go
func GoogleBigQueryDataSource() *string
```

- *Type:* *string

---

##### `GoogleCalendarAction`<sup>Required</sup> <a name="GoogleCalendarAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarAction"></a>

```go
func GoogleCalendarAction() *string
```

- *Type:* *string

---

##### `GoogleDriveKnowledgeBase`<sup>Required</sup> <a name="GoogleDriveKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleDriveKnowledgeBase"></a>

```go
func GoogleDriveKnowledgeBase() *string
```

- *Type:* *string

---

##### `GoogleSheetsDataSource`<sup>Required</sup> <a name="GoogleSheetsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleSheetsDataSource"></a>

```go
func GoogleSheetsDataSource() *string
```

- *Type:* *string

---

##### `HubspotAction`<sup>Required</sup> <a name="HubspotAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotAction"></a>

```go
func HubspotAction() *string
```

- *Type:* *string

---

##### `HuggingFaceAction`<sup>Required</sup> <a name="HuggingFaceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceAction"></a>

```go
func HuggingFaceAction() *string
```

- *Type:* *string

---

##### `IdcKnowledgeBase`<sup>Required</sup> <a name="IdcKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.idcKnowledgeBase"></a>

```go
func IdcKnowledgeBase() *string
```

- *Type:* *string

---

##### `ImpalaDataSource`<sup>Required</sup> <a name="ImpalaDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.impalaDataSource"></a>

```go
func ImpalaDataSource() *string
```

- *Type:* *string

---

##### `InboundEmailTrigger`<sup>Required</sup> <a name="InboundEmailTrigger" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.inboundEmailTrigger"></a>

```go
func InboundEmailTrigger() *string
```

- *Type:* *string

---

##### `IncludeContentInScheduledReportsEmail`<sup>Required</sup> <a name="IncludeContentInScheduledReportsEmail" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmail"></a>

```go
func IncludeContentInScheduledReportsEmail() *string
```

- *Type:* *string

---

##### `IntercomAction`<sup>Required</sup> <a name="IntercomAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomAction"></a>

```go
func IntercomAction() *string
```

- *Type:* *string

---

##### `InvokeAppsAiInference`<sup>Required</sup> <a name="InvokeAppsAiInference" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInference"></a>

```go
func InvokeAppsAiInference() *string
```

- *Type:* *string

---

##### `JiraAction`<sup>Required</sup> <a name="JiraAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraAction"></a>

```go
func JiraAction() *string
```

- *Type:* *string

---

##### `JiraDataSource`<sup>Required</sup> <a name="JiraDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraDataSource"></a>

```go
func JiraDataSource() *string
```

- *Type:* *string

---

##### `KnowledgeBase`<sup>Required</sup> <a name="KnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBase"></a>

```go
func KnowledgeBase() *string
```

- *Type:* *string

---

##### `LinearAction`<sup>Required</sup> <a name="LinearAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.linearAction"></a>

```go
func LinearAction() *string
```

- *Type:* *string

---

##### `ManageSharedFolders`<sup>Required</sup> <a name="ManageSharedFolders" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFolders"></a>

```go
func ManageSharedFolders() *string
```

- *Type:* *string

---

##### `MariaDbDataSource`<sup>Required</sup> <a name="MariaDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mariaDbDataSource"></a>

```go
func MariaDbDataSource() *string
```

- *Type:* *string

---

##### `McpAction`<sup>Required</sup> <a name="McpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpAction"></a>

```go
func McpAction() *string
```

- *Type:* *string

---

##### `MondayAction`<sup>Required</sup> <a name="MondayAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayAction"></a>

```go
func MondayAction() *string
```

- *Type:* *string

---

##### `MongoAtlasDataSource`<sup>Required</sup> <a name="MongoAtlasDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mongoAtlasDataSource"></a>

```go
func MongoAtlasDataSource() *string
```

- *Type:* *string

---

##### `MongoDbDataSource`<sup>Required</sup> <a name="MongoDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mongoDbDataSource"></a>

```go
func MongoDbDataSource() *string
```

- *Type:* *string

---

##### `MsExchangeAction`<sup>Required</sup> <a name="MsExchangeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeAction"></a>

```go
func MsExchangeAction() *string
```

- *Type:* *string

---

##### `MsTeamsAction`<sup>Required</sup> <a name="MsTeamsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsAction"></a>

```go
func MsTeamsAction() *string
```

- *Type:* *string

---

##### `MySqlDataSource`<sup>Required</sup> <a name="MySqlDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mySqlDataSource"></a>

```go
func MySqlDataSource() *string
```

- *Type:* *string

---

##### `NewRelicAction`<sup>Required</sup> <a name="NewRelicAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicAction"></a>

```go
func NewRelicAction() *string
```

- *Type:* *string

---

##### `NotionAction`<sup>Required</sup> <a name="NotionAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.notionAction"></a>

```go
func NotionAction() *string
```

- *Type:* *string

---

##### `OneDriveAction`<sup>Required</sup> <a name="OneDriveAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveAction"></a>

```go
func OneDriveAction() *string
```

- *Type:* *string

---

##### `OneDriveKnowledgeBase`<sup>Required</sup> <a name="OneDriveKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveKnowledgeBase"></a>

```go
func OneDriveKnowledgeBase() *string
```

- *Type:* *string

---

##### `OpenApiAction`<sup>Required</sup> <a name="OpenApiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiAction"></a>

```go
func OpenApiAction() *string
```

- *Type:* *string

---

##### `OpenSearchDataSource`<sup>Required</sup> <a name="OpenSearchDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.openSearchDataSource"></a>

```go
func OpenSearchDataSource() *string
```

- *Type:* *string

---

##### `OracleDataSource`<sup>Required</sup> <a name="OracleDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.oracleDataSource"></a>

```go
func OracleDataSource() *string
```

- *Type:* *string

---

##### `PagerDutyAction`<sup>Required</sup> <a name="PagerDutyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyAction"></a>

```go
func PagerDutyAction() *string
```

- *Type:* *string

---

##### `PayPalDataSource`<sup>Required</sup> <a name="PayPalDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.payPalDataSource"></a>

```go
func PayPalDataSource() *string
```

- *Type:* *string

---

##### `PerformFlowUiTask`<sup>Required</sup> <a name="PerformFlowUiTask" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTask"></a>

```go
func PerformFlowUiTask() *string
```

- *Type:* *string

---

##### `PostgreSqlDataSource`<sup>Required</sup> <a name="PostgreSqlDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.postgreSqlDataSource"></a>

```go
func PostgreSqlDataSource() *string
```

- *Type:* *string

---

##### `PrestoDataSource`<sup>Required</sup> <a name="PrestoDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.prestoDataSource"></a>

```go
func PrestoDataSource() *string
```

- *Type:* *string

---

##### `PrintReports`<sup>Required</sup> <a name="PrintReports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.printReports"></a>

```go
func PrintReports() *string
```

- *Type:* *string

---

##### `PublishWithoutApproval`<sup>Required</sup> <a name="PublishWithoutApproval" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApproval"></a>

```go
func PublishWithoutApproval() *string
```

- *Type:* *string

---

##### `QBusinessKnowledgeBase`<sup>Required</sup> <a name="QBusinessKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.qBusinessKnowledgeBase"></a>

```go
func QBusinessKnowledgeBase() *string
```

- *Type:* *string

---

##### `QuickEventTrigger`<sup>Required</sup> <a name="QuickEventTrigger" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.quickEventTrigger"></a>

```go
func QuickEventTrigger() *string
```

- *Type:* *string

---

##### `RadiantDataSource`<sup>Required</sup> <a name="RadiantDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.radiantDataSource"></a>

```go
func RadiantDataSource() *string
```

- *Type:* *string

---

##### `RdsDataSource`<sup>Required</sup> <a name="RdsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.rdsDataSource"></a>

```go
func RdsDataSource() *string
```

- *Type:* *string

---

##### `RedshiftAutoDiscoveredDataSource`<sup>Required</sup> <a name="RedshiftAutoDiscoveredDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.redshiftAutoDiscoveredDataSource"></a>

```go
func RedshiftAutoDiscoveredDataSource() *string
```

- *Type:* *string

---

##### `RedshiftManualDataSource`<sup>Required</sup> <a name="RedshiftManualDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.redshiftManualDataSource"></a>

```go
func RedshiftManualDataSource() *string
```

- *Type:* *string

---

##### `RenameSharedFolders`<sup>Required</sup> <a name="RenameSharedFolders" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFolders"></a>

```go
func RenameSharedFolders() *string
```

- *Type:* *string

---

##### `Research`<sup>Required</sup> <a name="Research" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.research"></a>

```go
func Research() *string
```

- *Type:* *string

---

##### `S3AnalyticsDataSource`<sup>Required</sup> <a name="S3AnalyticsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.s3AnalyticsDataSource"></a>

```go
func S3AnalyticsDataSource() *string
```

- *Type:* *string

---

##### `S3DataSource`<sup>Required</sup> <a name="S3DataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.s3DataSource"></a>

```go
func S3DataSource() *string
```

- *Type:* *string

---

##### `S3KnowledgeBase`<sup>Required</sup> <a name="S3KnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.s3KnowledgeBase"></a>

```go
func S3KnowledgeBase() *string
```

- *Type:* *string

---

##### `S3TablesDataSource`<sup>Required</sup> <a name="S3TablesDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.s3TablesDataSource"></a>

```go
func S3TablesDataSource() *string
```

- *Type:* *string

---

##### `SalesforceAction`<sup>Required</sup> <a name="SalesforceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceAction"></a>

```go
func SalesforceAction() *string
```

- *Type:* *string

---

##### `SalesforceDataSource`<sup>Required</sup> <a name="SalesforceDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceDataSource"></a>

```go
func SalesforceDataSource() *string
```

- *Type:* *string

---

##### `SandPGlobalEnergyAction`<sup>Required</sup> <a name="SandPGlobalEnergyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyAction"></a>

```go
func SandPGlobalEnergyAction() *string
```

- *Type:* *string

---

##### `SandPgmiAction`<sup>Required</sup> <a name="SandPgmiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiAction"></a>

```go
func SandPgmiAction() *string
```

- *Type:* *string

---

##### `SapBillOfMaterialAction`<sup>Required</sup> <a name="SapBillOfMaterialAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialAction"></a>

```go
func SapBillOfMaterialAction() *string
```

- *Type:* *string

---

##### `SapBusinessPartnerAction`<sup>Required</sup> <a name="SapBusinessPartnerAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerAction"></a>

```go
func SapBusinessPartnerAction() *string
```

- *Type:* *string

---

##### `SapHanaDataSource`<sup>Required</sup> <a name="SapHanaDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapHanaDataSource"></a>

```go
func SapHanaDataSource() *string
```

- *Type:* *string

---

##### `SapMaterialStockAction`<sup>Required</sup> <a name="SapMaterialStockAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockAction"></a>

```go
func SapMaterialStockAction() *string
```

- *Type:* *string

---

##### `SapPhysicalInventoryAction`<sup>Required</sup> <a name="SapPhysicalInventoryAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryAction"></a>

```go
func SapPhysicalInventoryAction() *string
```

- *Type:* *string

---

##### `SapProductMasterDataAction`<sup>Required</sup> <a name="SapProductMasterDataAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataAction"></a>

```go
func SapProductMasterDataAction() *string
```

- *Type:* *string

---

##### `ScheduleTrigger`<sup>Required</sup> <a name="ScheduleTrigger" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.scheduleTrigger"></a>

```go
func ScheduleTrigger() *string
```

- *Type:* *string

---

##### `ServiceNowAction`<sup>Required</sup> <a name="ServiceNowAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowAction"></a>

```go
func ServiceNowAction() *string
```

- *Type:* *string

---

##### `ServiceNowDataSource`<sup>Required</sup> <a name="ServiceNowDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowDataSource"></a>

```go
func ServiceNowDataSource() *string
```

- *Type:* *string

---

##### `ShareAdobeAnalyticsDataSource`<sup>Required</sup> <a name="ShareAdobeAnalyticsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAdobeAnalyticsDataSource"></a>

```go
func ShareAdobeAnalyticsDataSource() *string
```

- *Type:* *string

---

##### `ShareAmazonBedrockArsAction`<sup>Required</sup> <a name="ShareAmazonBedrockArsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsAction"></a>

```go
func ShareAmazonBedrockArsAction() *string
```

- *Type:* *string

---

##### `ShareAmazonBedrockFsAction`<sup>Required</sup> <a name="ShareAmazonBedrockFsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsAction"></a>

```go
func ShareAmazonBedrockFsAction() *string
```

- *Type:* *string

---

##### `ShareAmazonBedrockKrsAction`<sup>Required</sup> <a name="ShareAmazonBedrockKrsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsAction"></a>

```go
func ShareAmazonBedrockKrsAction() *string
```

- *Type:* *string

---

##### `ShareAmazonSThreeAction`<sup>Required</sup> <a name="ShareAmazonSThreeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeAction"></a>

```go
func ShareAmazonSThreeAction() *string
```

- *Type:* *string

---

##### `ShareAnalyses`<sup>Required</sup> <a name="ShareAnalyses" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalyses"></a>

```go
func ShareAnalyses() *string
```

- *Type:* *string

---

##### `ShareApps`<sup>Required</sup> <a name="ShareApps" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareApps"></a>

```go
func ShareApps() *string
```

- *Type:* *string

---

##### `ShareAsanaAction`<sup>Required</sup> <a name="ShareAsanaAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaAction"></a>

```go
func ShareAsanaAction() *string
```

- *Type:* *string

---

##### `ShareAthenaDataSource`<sup>Required</sup> <a name="ShareAthenaDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAthenaDataSource"></a>

```go
func ShareAthenaDataSource() *string
```

- *Type:* *string

---

##### `ShareAuroraDataSource`<sup>Required</sup> <a name="ShareAuroraDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAuroraDataSource"></a>

```go
func ShareAuroraDataSource() *string
```

- *Type:* *string

---

##### `ShareBambooHrAction`<sup>Required</sup> <a name="ShareBambooHrAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrAction"></a>

```go
func ShareBambooHrAction() *string
```

- *Type:* *string

---

##### `ShareBedrockManagedKnowledgeBase`<sup>Required</sup> <a name="ShareBedrockManagedKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBedrockManagedKnowledgeBase"></a>

```go
func ShareBedrockManagedKnowledgeBase() *string
```

- *Type:* *string

---

##### `ShareBoxAgentAction`<sup>Required</sup> <a name="ShareBoxAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentAction"></a>

```go
func ShareBoxAgentAction() *string
```

- *Type:* *string

---

##### `ShareBoxKnowledgeBase`<sup>Required</sup> <a name="ShareBoxKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxKnowledgeBase"></a>

```go
func ShareBoxKnowledgeBase() *string
```

- *Type:* *string

---

##### `ShareCanvaAgentAction`<sup>Required</sup> <a name="ShareCanvaAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentAction"></a>

```go
func ShareCanvaAgentAction() *string
```

- *Type:* *string

---

##### `ShareChatAgents`<sup>Required</sup> <a name="ShareChatAgents" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgents"></a>

```go
func ShareChatAgents() *string
```

- *Type:* *string

---

##### `ShareComprehendAction`<sup>Required</sup> <a name="ShareComprehendAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendAction"></a>

```go
func ShareComprehendAction() *string
```

- *Type:* *string

---

##### `ShareComprehendMedicalAction`<sup>Required</sup> <a name="ShareComprehendMedicalAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalAction"></a>

```go
func ShareComprehendMedicalAction() *string
```

- *Type:* *string

---

##### `ShareConfluenceAction`<sup>Required</sup> <a name="ShareConfluenceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceAction"></a>

```go
func ShareConfluenceAction() *string
```

- *Type:* *string

---

##### `ShareConfluenceKnowledgeBase`<sup>Required</sup> <a name="ShareConfluenceKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceKnowledgeBase"></a>

```go
func ShareConfluenceKnowledgeBase() *string
```

- *Type:* *string

---

##### `ShareDashboards`<sup>Required</sup> <a name="ShareDashboards" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboards"></a>

```go
func ShareDashboards() *string
```

- *Type:* *string

---

##### `ShareDatabricksDataSource`<sup>Required</sup> <a name="ShareDatabricksDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatabricksDataSource"></a>

```go
func ShareDatabricksDataSource() *string
```

- *Type:* *string

---

##### `ShareDatasets`<sup>Required</sup> <a name="ShareDatasets" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasets"></a>

```go
func ShareDatasets() *string
```

- *Type:* *string

---

##### `ShareDataSources`<sup>Required</sup> <a name="ShareDataSources" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSources"></a>

```go
func ShareDataSources() *string
```

- *Type:* *string

---

##### `ShareDb2DataSource`<sup>Required</sup> <a name="ShareDb2DataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDb2DataSource"></a>

```go
func ShareDb2DataSource() *string
```

- *Type:* *string

---

##### `ShareDenodoDataSource`<sup>Required</sup> <a name="ShareDenodoDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDenodoDataSource"></a>

```go
func ShareDenodoDataSource() *string
```

- *Type:* *string

---

##### `ShareDocumentDbDataSource`<sup>Required</sup> <a name="ShareDocumentDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDocumentDbDataSource"></a>

```go
func ShareDocumentDbDataSource() *string
```

- *Type:* *string

---

##### `ShareDremioDataSource`<sup>Required</sup> <a name="ShareDremioDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDremioDataSource"></a>

```go
func ShareDremioDataSource() *string
```

- *Type:* *string

---

##### `ShareDynamoDbDataSource`<sup>Required</sup> <a name="ShareDynamoDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDynamoDbDataSource"></a>

```go
func ShareDynamoDbDataSource() *string
```

- *Type:* *string

---

##### `ShareExasolDataSource`<sup>Required</sup> <a name="ShareExasolDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareExasolDataSource"></a>

```go
func ShareExasolDataSource() *string
```

- *Type:* *string

---

##### `ShareFactSetAction`<sup>Required</sup> <a name="ShareFactSetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetAction"></a>

```go
func ShareFactSetAction() *string
```

- *Type:* *string

---

##### `ShareFileDataSource`<sup>Required</sup> <a name="ShareFileDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFileDataSource"></a>

```go
func ShareFileDataSource() *string
```

- *Type:* *string

---

##### `ShareGenericHttpAction`<sup>Required</sup> <a name="ShareGenericHttpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpAction"></a>

```go
func ShareGenericHttpAction() *string
```

- *Type:* *string

---

##### `ShareGithubAction`<sup>Required</sup> <a name="ShareGithubAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubAction"></a>

```go
func ShareGithubAction() *string
```

- *Type:* *string

---

##### `ShareGitHubDataSource`<sup>Required</sup> <a name="ShareGitHubDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGitHubDataSource"></a>

```go
func ShareGitHubDataSource() *string
```

- *Type:* *string

---

##### `ShareGoogleAnalyticsDataSource`<sup>Required</sup> <a name="ShareGoogleAnalyticsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleAnalyticsDataSource"></a>

```go
func ShareGoogleAnalyticsDataSource() *string
```

- *Type:* *string

---

##### `ShareGoogleBigQueryDataSource`<sup>Required</sup> <a name="ShareGoogleBigQueryDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleBigQueryDataSource"></a>

```go
func ShareGoogleBigQueryDataSource() *string
```

- *Type:* *string

---

##### `ShareGoogleCalendarAction`<sup>Required</sup> <a name="ShareGoogleCalendarAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarAction"></a>

```go
func ShareGoogleCalendarAction() *string
```

- *Type:* *string

---

##### `ShareGoogleDriveKnowledgeBase`<sup>Required</sup> <a name="ShareGoogleDriveKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleDriveKnowledgeBase"></a>

```go
func ShareGoogleDriveKnowledgeBase() *string
```

- *Type:* *string

---

##### `ShareGoogleSheetsDataSource`<sup>Required</sup> <a name="ShareGoogleSheetsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleSheetsDataSource"></a>

```go
func ShareGoogleSheetsDataSource() *string
```

- *Type:* *string

---

##### `ShareHubspotAction`<sup>Required</sup> <a name="ShareHubspotAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotAction"></a>

```go
func ShareHubspotAction() *string
```

- *Type:* *string

---

##### `ShareHuggingFaceAction`<sup>Required</sup> <a name="ShareHuggingFaceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceAction"></a>

```go
func ShareHuggingFaceAction() *string
```

- *Type:* *string

---

##### `ShareIdcKnowledgeBase`<sup>Required</sup> <a name="ShareIdcKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIdcKnowledgeBase"></a>

```go
func ShareIdcKnowledgeBase() *string
```

- *Type:* *string

---

##### `ShareImpalaDataSource`<sup>Required</sup> <a name="ShareImpalaDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareImpalaDataSource"></a>

```go
func ShareImpalaDataSource() *string
```

- *Type:* *string

---

##### `ShareIntercomAction`<sup>Required</sup> <a name="ShareIntercomAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomAction"></a>

```go
func ShareIntercomAction() *string
```

- *Type:* *string

---

##### `ShareJiraAction`<sup>Required</sup> <a name="ShareJiraAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraAction"></a>

```go
func ShareJiraAction() *string
```

- *Type:* *string

---

##### `ShareJiraDataSource`<sup>Required</sup> <a name="ShareJiraDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraDataSource"></a>

```go
func ShareJiraDataSource() *string
```

- *Type:* *string

---

##### `ShareKnowledgeBases`<sup>Required</sup> <a name="ShareKnowledgeBases" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBases"></a>

```go
func ShareKnowledgeBases() *string
```

- *Type:* *string

---

##### `ShareLinearAction`<sup>Required</sup> <a name="ShareLinearAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearAction"></a>

```go
func ShareLinearAction() *string
```

- *Type:* *string

---

##### `ShareMariaDbDataSource`<sup>Required</sup> <a name="ShareMariaDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMariaDbDataSource"></a>

```go
func ShareMariaDbDataSource() *string
```

- *Type:* *string

---

##### `ShareMcpAction`<sup>Required</sup> <a name="ShareMcpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpAction"></a>

```go
func ShareMcpAction() *string
```

- *Type:* *string

---

##### `ShareMondayAction`<sup>Required</sup> <a name="ShareMondayAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayAction"></a>

```go
func ShareMondayAction() *string
```

- *Type:* *string

---

##### `ShareMongoAtlasDataSource`<sup>Required</sup> <a name="ShareMongoAtlasDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMongoAtlasDataSource"></a>

```go
func ShareMongoAtlasDataSource() *string
```

- *Type:* *string

---

##### `ShareMongoDbDataSource`<sup>Required</sup> <a name="ShareMongoDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMongoDbDataSource"></a>

```go
func ShareMongoDbDataSource() *string
```

- *Type:* *string

---

##### `ShareMsExchangeAction`<sup>Required</sup> <a name="ShareMsExchangeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeAction"></a>

```go
func ShareMsExchangeAction() *string
```

- *Type:* *string

---

##### `ShareMsTeamsAction`<sup>Required</sup> <a name="ShareMsTeamsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsAction"></a>

```go
func ShareMsTeamsAction() *string
```

- *Type:* *string

---

##### `ShareMySqlDataSource`<sup>Required</sup> <a name="ShareMySqlDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMySqlDataSource"></a>

```go
func ShareMySqlDataSource() *string
```

- *Type:* *string

---

##### `ShareNewRelicAction`<sup>Required</sup> <a name="ShareNewRelicAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicAction"></a>

```go
func ShareNewRelicAction() *string
```

- *Type:* *string

---

##### `ShareNotionAction`<sup>Required</sup> <a name="ShareNotionAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionAction"></a>

```go
func ShareNotionAction() *string
```

- *Type:* *string

---

##### `ShareOneDriveAction`<sup>Required</sup> <a name="ShareOneDriveAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveAction"></a>

```go
func ShareOneDriveAction() *string
```

- *Type:* *string

---

##### `ShareOneDriveKnowledgeBase`<sup>Required</sup> <a name="ShareOneDriveKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveKnowledgeBase"></a>

```go
func ShareOneDriveKnowledgeBase() *string
```

- *Type:* *string

---

##### `ShareOpenApiAction`<sup>Required</sup> <a name="ShareOpenApiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiAction"></a>

```go
func ShareOpenApiAction() *string
```

- *Type:* *string

---

##### `ShareOpenSearchDataSource`<sup>Required</sup> <a name="ShareOpenSearchDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenSearchDataSource"></a>

```go
func ShareOpenSearchDataSource() *string
```

- *Type:* *string

---

##### `ShareOracleDataSource`<sup>Required</sup> <a name="ShareOracleDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOracleDataSource"></a>

```go
func ShareOracleDataSource() *string
```

- *Type:* *string

---

##### `SharePagerDutyAction`<sup>Required</sup> <a name="SharePagerDutyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyAction"></a>

```go
func SharePagerDutyAction() *string
```

- *Type:* *string

---

##### `SharePayPalDataSource`<sup>Required</sup> <a name="SharePayPalDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePayPalDataSource"></a>

```go
func SharePayPalDataSource() *string
```

- *Type:* *string

---

##### `SharePointAction`<sup>Required</sup> <a name="SharePointAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointAction"></a>

```go
func SharePointAction() *string
```

- *Type:* *string

---

##### `SharePointKnowledgeBase`<sup>Required</sup> <a name="SharePointKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointKnowledgeBase"></a>

```go
func SharePointKnowledgeBase() *string
```

- *Type:* *string

---

##### `SharePostgreSqlDataSource`<sup>Required</sup> <a name="SharePostgreSqlDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePostgreSqlDataSource"></a>

```go
func SharePostgreSqlDataSource() *string
```

- *Type:* *string

---

##### `SharePrestoDataSource`<sup>Required</sup> <a name="SharePrestoDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePrestoDataSource"></a>

```go
func SharePrestoDataSource() *string
```

- *Type:* *string

---

##### `ShareQBusinessKnowledgeBase`<sup>Required</sup> <a name="ShareQBusinessKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareQBusinessKnowledgeBase"></a>

```go
func ShareQBusinessKnowledgeBase() *string
```

- *Type:* *string

---

##### `ShareRadiantDataSource`<sup>Required</sup> <a name="ShareRadiantDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareRadiantDataSource"></a>

```go
func ShareRadiantDataSource() *string
```

- *Type:* *string

---

##### `ShareRdsDataSource`<sup>Required</sup> <a name="ShareRdsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareRdsDataSource"></a>

```go
func ShareRdsDataSource() *string
```

- *Type:* *string

---

##### `ShareRedshiftAutoDiscoveredDataSource`<sup>Required</sup> <a name="ShareRedshiftAutoDiscoveredDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareRedshiftAutoDiscoveredDataSource"></a>

```go
func ShareRedshiftAutoDiscoveredDataSource() *string
```

- *Type:* *string

---

##### `ShareRedshiftManualDataSource`<sup>Required</sup> <a name="ShareRedshiftManualDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareRedshiftManualDataSource"></a>

```go
func ShareRedshiftManualDataSource() *string
```

- *Type:* *string

---

##### `ShareS3AnalyticsDataSource`<sup>Required</sup> <a name="ShareS3AnalyticsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareS3AnalyticsDataSource"></a>

```go
func ShareS3AnalyticsDataSource() *string
```

- *Type:* *string

---

##### `ShareS3DataSource`<sup>Required</sup> <a name="ShareS3DataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareS3DataSource"></a>

```go
func ShareS3DataSource() *string
```

- *Type:* *string

---

##### `ShareS3KnowledgeBase`<sup>Required</sup> <a name="ShareS3KnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareS3KnowledgeBase"></a>

```go
func ShareS3KnowledgeBase() *string
```

- *Type:* *string

---

##### `ShareS3TablesDataSource`<sup>Required</sup> <a name="ShareS3TablesDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareS3TablesDataSource"></a>

```go
func ShareS3TablesDataSource() *string
```

- *Type:* *string

---

##### `ShareSalesforceAction`<sup>Required</sup> <a name="ShareSalesforceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceAction"></a>

```go
func ShareSalesforceAction() *string
```

- *Type:* *string

---

##### `ShareSalesforceDataSource`<sup>Required</sup> <a name="ShareSalesforceDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceDataSource"></a>

```go
func ShareSalesforceDataSource() *string
```

- *Type:* *string

---

##### `ShareSandPGlobalEnergyAction`<sup>Required</sup> <a name="ShareSandPGlobalEnergyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyAction"></a>

```go
func ShareSandPGlobalEnergyAction() *string
```

- *Type:* *string

---

##### `ShareSandPgmiAction`<sup>Required</sup> <a name="ShareSandPgmiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiAction"></a>

```go
func ShareSandPgmiAction() *string
```

- *Type:* *string

---

##### `ShareSapBillOfMaterialAction`<sup>Required</sup> <a name="ShareSapBillOfMaterialAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialAction"></a>

```go
func ShareSapBillOfMaterialAction() *string
```

- *Type:* *string

---

##### `ShareSapBusinessPartnerAction`<sup>Required</sup> <a name="ShareSapBusinessPartnerAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerAction"></a>

```go
func ShareSapBusinessPartnerAction() *string
```

- *Type:* *string

---

##### `ShareSapHanaDataSource`<sup>Required</sup> <a name="ShareSapHanaDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapHanaDataSource"></a>

```go
func ShareSapHanaDataSource() *string
```

- *Type:* *string

---

##### `ShareSapMaterialStockAction`<sup>Required</sup> <a name="ShareSapMaterialStockAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockAction"></a>

```go
func ShareSapMaterialStockAction() *string
```

- *Type:* *string

---

##### `ShareSapPhysicalInventoryAction`<sup>Required</sup> <a name="ShareSapPhysicalInventoryAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryAction"></a>

```go
func ShareSapPhysicalInventoryAction() *string
```

- *Type:* *string

---

##### `ShareSapProductMasterDataAction`<sup>Required</sup> <a name="ShareSapProductMasterDataAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataAction"></a>

```go
func ShareSapProductMasterDataAction() *string
```

- *Type:* *string

---

##### `ShareServiceNowAction`<sup>Required</sup> <a name="ShareServiceNowAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowAction"></a>

```go
func ShareServiceNowAction() *string
```

- *Type:* *string

---

##### `ShareServiceNowDataSource`<sup>Required</sup> <a name="ShareServiceNowDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowDataSource"></a>

```go
func ShareServiceNowDataSource() *string
```

- *Type:* *string

---

##### `ShareSharePointAction`<sup>Required</sup> <a name="ShareSharePointAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointAction"></a>

```go
func ShareSharePointAction() *string
```

- *Type:* *string

---

##### `ShareSharePointKnowledgeBase`<sup>Required</sup> <a name="ShareSharePointKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointKnowledgeBase"></a>

```go
func ShareSharePointKnowledgeBase() *string
```

- *Type:* *string

---

##### `ShareSlackAction`<sup>Required</sup> <a name="ShareSlackAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackAction"></a>

```go
func ShareSlackAction() *string
```

- *Type:* *string

---

##### `ShareSmartsheetAction`<sup>Required</sup> <a name="ShareSmartsheetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetAction"></a>

```go
func ShareSmartsheetAction() *string
```

- *Type:* *string

---

##### `ShareSnowflakeDataSource`<sup>Required</sup> <a name="ShareSnowflakeDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSnowflakeDataSource"></a>

```go
func ShareSnowflakeDataSource() *string
```

- *Type:* *string

---

##### `ShareSpaces`<sup>Required</sup> <a name="ShareSpaces" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpaces"></a>

```go
func ShareSpaces() *string
```

- *Type:* *string

---

##### `ShareSparkDataSource`<sup>Required</sup> <a name="ShareSparkDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSparkDataSource"></a>

```go
func ShareSparkDataSource() *string
```

- *Type:* *string

---

##### `ShareSqlServerDataSource`<sup>Required</sup> <a name="ShareSqlServerDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSqlServerDataSource"></a>

```go
func ShareSqlServerDataSource() *string
```

- *Type:* *string

---

##### `ShareSquareDataSource`<sup>Required</sup> <a name="ShareSquareDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSquareDataSource"></a>

```go
func ShareSquareDataSource() *string
```

- *Type:* *string

---

##### `ShareStarburstDataSource`<sup>Required</sup> <a name="ShareStarburstDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareStarburstDataSource"></a>

```go
func ShareStarburstDataSource() *string
```

- *Type:* *string

---

##### `ShareTeradataDataSource`<sup>Required</sup> <a name="ShareTeradataDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTeradataDataSource"></a>

```go
func ShareTeradataDataSource() *string
```

- *Type:* *string

---

##### `ShareTextractAction`<sup>Required</sup> <a name="ShareTextractAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractAction"></a>

```go
func ShareTextractAction() *string
```

- *Type:* *string

---

##### `ShareTimestreamDataSource`<sup>Required</sup> <a name="ShareTimestreamDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTimestreamDataSource"></a>

```go
func ShareTimestreamDataSource() *string
```

- *Type:* *string

---

##### `ShareTrinoDataSource`<sup>Required</sup> <a name="ShareTrinoDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTrinoDataSource"></a>

```go
func ShareTrinoDataSource() *string
```

- *Type:* *string

---

##### `ShareTwitterDataSource`<sup>Required</sup> <a name="ShareTwitterDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTwitterDataSource"></a>

```go
func ShareTwitterDataSource() *string
```

- *Type:* *string

---

##### `ShareWebCrawlerKnowledgeBase`<sup>Required</sup> <a name="ShareWebCrawlerKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareWebCrawlerKnowledgeBase"></a>

```go
func ShareWebCrawlerKnowledgeBase() *string
```

- *Type:* *string

---

##### `ShareZendeskAction`<sup>Required</sup> <a name="ShareZendeskAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskAction"></a>

```go
func ShareZendeskAction() *string
```

- *Type:* *string

---

##### `SlackAction`<sup>Required</sup> <a name="SlackAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.slackAction"></a>

```go
func SlackAction() *string
```

- *Type:* *string

---

##### `SmartsheetAction`<sup>Required</sup> <a name="SmartsheetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetAction"></a>

```go
func SmartsheetAction() *string
```

- *Type:* *string

---

##### `SnowflakeDataSource`<sup>Required</sup> <a name="SnowflakeDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.snowflakeDataSource"></a>

```go
func SnowflakeDataSource() *string
```

- *Type:* *string

---

##### `Space`<sup>Required</sup> <a name="Space" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.space"></a>

```go
func Space() *string
```

- *Type:* *string

---

##### `SparkDataSource`<sup>Required</sup> <a name="SparkDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sparkDataSource"></a>

```go
func SparkDataSource() *string
```

- *Type:* *string

---

##### `SqlServerDataSource`<sup>Required</sup> <a name="SqlServerDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sqlServerDataSource"></a>

```go
func SqlServerDataSource() *string
```

- *Type:* *string

---

##### `SquareDataSource`<sup>Required</sup> <a name="SquareDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.squareDataSource"></a>

```go
func SquareDataSource() *string
```

- *Type:* *string

---

##### `StarburstDataSource`<sup>Required</sup> <a name="StarburstDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.starburstDataSource"></a>

```go
func StarburstDataSource() *string
```

- *Type:* *string

---

##### `SubscribeDashboardEmailReports`<sup>Required</sup> <a name="SubscribeDashboardEmailReports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReports"></a>

```go
func SubscribeDashboardEmailReports() *string
```

- *Type:* *string

---

##### `TeradataDataSource`<sup>Required</sup> <a name="TeradataDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.teradataDataSource"></a>

```go
func TeradataDataSource() *string
```

- *Type:* *string

---

##### `TextractAction`<sup>Required</sup> <a name="TextractAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.textractAction"></a>

```go
func TextractAction() *string
```

- *Type:* *string

---

##### `TimestreamDataSource`<sup>Required</sup> <a name="TimestreamDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.timestreamDataSource"></a>

```go
func TimestreamDataSource() *string
```

- *Type:* *string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.topic"></a>

```go
func Topic() *string
```

- *Type:* *string

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.trigger"></a>

```go
func Trigger() *string
```

- *Type:* *string

---

##### `TrinoDataSource`<sup>Required</sup> <a name="TrinoDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.trinoDataSource"></a>

```go
func TrinoDataSource() *string
```

- *Type:* *string

---

##### `TwitterDataSource`<sup>Required</sup> <a name="TwitterDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.twitterDataSource"></a>

```go
func TwitterDataSource() *string
```

- *Type:* *string

---

##### `UpdateAdobeAnalyticsDataSource`<sup>Required</sup> <a name="UpdateAdobeAnalyticsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateAdobeAnalyticsDataSource"></a>

```go
func UpdateAdobeAnalyticsDataSource() *string
```

- *Type:* *string

---

##### `UpdateAthenaDataSource`<sup>Required</sup> <a name="UpdateAthenaDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateAthenaDataSource"></a>

```go
func UpdateAthenaDataSource() *string
```

- *Type:* *string

---

##### `UpdateAuroraDataSource`<sup>Required</sup> <a name="UpdateAuroraDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateAuroraDataSource"></a>

```go
func UpdateAuroraDataSource() *string
```

- *Type:* *string

---

##### `UpdateDatabricksDataSource`<sup>Required</sup> <a name="UpdateDatabricksDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDatabricksDataSource"></a>

```go
func UpdateDatabricksDataSource() *string
```

- *Type:* *string

---

##### `UpdateDb2DataSource`<sup>Required</sup> <a name="UpdateDb2DataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDb2DataSource"></a>

```go
func UpdateDb2DataSource() *string
```

- *Type:* *string

---

##### `UpdateDenodoDataSource`<sup>Required</sup> <a name="UpdateDenodoDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDenodoDataSource"></a>

```go
func UpdateDenodoDataSource() *string
```

- *Type:* *string

---

##### `UpdateDocumentDbDataSource`<sup>Required</sup> <a name="UpdateDocumentDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDocumentDbDataSource"></a>

```go
func UpdateDocumentDbDataSource() *string
```

- *Type:* *string

---

##### `UpdateDremioDataSource`<sup>Required</sup> <a name="UpdateDremioDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDremioDataSource"></a>

```go
func UpdateDremioDataSource() *string
```

- *Type:* *string

---

##### `UpdateDynamoDbDataSource`<sup>Required</sup> <a name="UpdateDynamoDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDynamoDbDataSource"></a>

```go
func UpdateDynamoDbDataSource() *string
```

- *Type:* *string

---

##### `UpdateExasolDataSource`<sup>Required</sup> <a name="UpdateExasolDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateExasolDataSource"></a>

```go
func UpdateExasolDataSource() *string
```

- *Type:* *string

---

##### `UpdateFileDataSource`<sup>Required</sup> <a name="UpdateFileDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateFileDataSource"></a>

```go
func UpdateFileDataSource() *string
```

- *Type:* *string

---

##### `UpdateGitHubDataSource`<sup>Required</sup> <a name="UpdateGitHubDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateGitHubDataSource"></a>

```go
func UpdateGitHubDataSource() *string
```

- *Type:* *string

---

##### `UpdateGoogleAnalyticsDataSource`<sup>Required</sup> <a name="UpdateGoogleAnalyticsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateGoogleAnalyticsDataSource"></a>

```go
func UpdateGoogleAnalyticsDataSource() *string
```

- *Type:* *string

---

##### `UpdateGoogleBigQueryDataSource`<sup>Required</sup> <a name="UpdateGoogleBigQueryDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateGoogleBigQueryDataSource"></a>

```go
func UpdateGoogleBigQueryDataSource() *string
```

- *Type:* *string

---

##### `UpdateGoogleSheetsDataSource`<sup>Required</sup> <a name="UpdateGoogleSheetsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateGoogleSheetsDataSource"></a>

```go
func UpdateGoogleSheetsDataSource() *string
```

- *Type:* *string

---

##### `UpdateImpalaDataSource`<sup>Required</sup> <a name="UpdateImpalaDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateImpalaDataSource"></a>

```go
func UpdateImpalaDataSource() *string
```

- *Type:* *string

---

##### `UpdateJiraDataSource`<sup>Required</sup> <a name="UpdateJiraDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateJiraDataSource"></a>

```go
func UpdateJiraDataSource() *string
```

- *Type:* *string

---

##### `UpdateMariaDbDataSource`<sup>Required</sup> <a name="UpdateMariaDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateMariaDbDataSource"></a>

```go
func UpdateMariaDbDataSource() *string
```

- *Type:* *string

---

##### `UpdateMongoAtlasDataSource`<sup>Required</sup> <a name="UpdateMongoAtlasDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateMongoAtlasDataSource"></a>

```go
func UpdateMongoAtlasDataSource() *string
```

- *Type:* *string

---

##### `UpdateMongoDbDataSource`<sup>Required</sup> <a name="UpdateMongoDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateMongoDbDataSource"></a>

```go
func UpdateMongoDbDataSource() *string
```

- *Type:* *string

---

##### `UpdateMySqlDataSource`<sup>Required</sup> <a name="UpdateMySqlDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateMySqlDataSource"></a>

```go
func UpdateMySqlDataSource() *string
```

- *Type:* *string

---

##### `UpdateOpenSearchDataSource`<sup>Required</sup> <a name="UpdateOpenSearchDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateOpenSearchDataSource"></a>

```go
func UpdateOpenSearchDataSource() *string
```

- *Type:* *string

---

##### `UpdateOracleDataSource`<sup>Required</sup> <a name="UpdateOracleDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateOracleDataSource"></a>

```go
func UpdateOracleDataSource() *string
```

- *Type:* *string

---

##### `UpdatePayPalDataSource`<sup>Required</sup> <a name="UpdatePayPalDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updatePayPalDataSource"></a>

```go
func UpdatePayPalDataSource() *string
```

- *Type:* *string

---

##### `UpdatePostgreSqlDataSource`<sup>Required</sup> <a name="UpdatePostgreSqlDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updatePostgreSqlDataSource"></a>

```go
func UpdatePostgreSqlDataSource() *string
```

- *Type:* *string

---

##### `UpdatePrestoDataSource`<sup>Required</sup> <a name="UpdatePrestoDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updatePrestoDataSource"></a>

```go
func UpdatePrestoDataSource() *string
```

- *Type:* *string

---

##### `UpdateRadiantDataSource`<sup>Required</sup> <a name="UpdateRadiantDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateRadiantDataSource"></a>

```go
func UpdateRadiantDataSource() *string
```

- *Type:* *string

---

##### `UpdateRdsDataSource`<sup>Required</sup> <a name="UpdateRdsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateRdsDataSource"></a>

```go
func UpdateRdsDataSource() *string
```

- *Type:* *string

---

##### `UpdateRedshiftAutoDiscoveredDataSource`<sup>Required</sup> <a name="UpdateRedshiftAutoDiscoveredDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateRedshiftAutoDiscoveredDataSource"></a>

```go
func UpdateRedshiftAutoDiscoveredDataSource() *string
```

- *Type:* *string

---

##### `UpdateRedshiftManualDataSource`<sup>Required</sup> <a name="UpdateRedshiftManualDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateRedshiftManualDataSource"></a>

```go
func UpdateRedshiftManualDataSource() *string
```

- *Type:* *string

---

##### `UpdateS3AnalyticsDataSource`<sup>Required</sup> <a name="UpdateS3AnalyticsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateS3AnalyticsDataSource"></a>

```go
func UpdateS3AnalyticsDataSource() *string
```

- *Type:* *string

---

##### `UpdateS3DataSource`<sup>Required</sup> <a name="UpdateS3DataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateS3DataSource"></a>

```go
func UpdateS3DataSource() *string
```

- *Type:* *string

---

##### `UpdateS3TablesDataSource`<sup>Required</sup> <a name="UpdateS3TablesDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateS3TablesDataSource"></a>

```go
func UpdateS3TablesDataSource() *string
```

- *Type:* *string

---

##### `UpdateSalesforceDataSource`<sup>Required</sup> <a name="UpdateSalesforceDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSalesforceDataSource"></a>

```go
func UpdateSalesforceDataSource() *string
```

- *Type:* *string

---

##### `UpdateSapHanaDataSource`<sup>Required</sup> <a name="UpdateSapHanaDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSapHanaDataSource"></a>

```go
func UpdateSapHanaDataSource() *string
```

- *Type:* *string

---

##### `UpdateServiceNowDataSource`<sup>Required</sup> <a name="UpdateServiceNowDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateServiceNowDataSource"></a>

```go
func UpdateServiceNowDataSource() *string
```

- *Type:* *string

---

##### `UpdateSnowflakeDataSource`<sup>Required</sup> <a name="UpdateSnowflakeDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSnowflakeDataSource"></a>

```go
func UpdateSnowflakeDataSource() *string
```

- *Type:* *string

---

##### `UpdateSparkDataSource`<sup>Required</sup> <a name="UpdateSparkDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSparkDataSource"></a>

```go
func UpdateSparkDataSource() *string
```

- *Type:* *string

---

##### `UpdateSqlServerDataSource`<sup>Required</sup> <a name="UpdateSqlServerDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSqlServerDataSource"></a>

```go
func UpdateSqlServerDataSource() *string
```

- *Type:* *string

---

##### `UpdateSquareDataSource`<sup>Required</sup> <a name="UpdateSquareDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSquareDataSource"></a>

```go
func UpdateSquareDataSource() *string
```

- *Type:* *string

---

##### `UpdateStarburstDataSource`<sup>Required</sup> <a name="UpdateStarburstDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateStarburstDataSource"></a>

```go
func UpdateStarburstDataSource() *string
```

- *Type:* *string

---

##### `UpdateTeradataDataSource`<sup>Required</sup> <a name="UpdateTeradataDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateTeradataDataSource"></a>

```go
func UpdateTeradataDataSource() *string
```

- *Type:* *string

---

##### `UpdateTimestreamDataSource`<sup>Required</sup> <a name="UpdateTimestreamDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateTimestreamDataSource"></a>

```go
func UpdateTimestreamDataSource() *string
```

- *Type:* *string

---

##### `UpdateTrinoDataSource`<sup>Required</sup> <a name="UpdateTrinoDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateTrinoDataSource"></a>

```go
func UpdateTrinoDataSource() *string
```

- *Type:* *string

---

##### `UpdateTwitterDataSource`<sup>Required</sup> <a name="UpdateTwitterDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateTwitterDataSource"></a>

```go
func UpdateTwitterDataSource() *string
```

- *Type:* *string

---

##### `UseAgentWebSearch`<sup>Required</sup> <a name="UseAgentWebSearch" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearch"></a>

```go
func UseAgentWebSearch() *string
```

- *Type:* *string

---

##### `UseAmazonBedrockArsAction`<sup>Required</sup> <a name="UseAmazonBedrockArsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsAction"></a>

```go
func UseAmazonBedrockArsAction() *string
```

- *Type:* *string

---

##### `UseAmazonBedrockFsAction`<sup>Required</sup> <a name="UseAmazonBedrockFsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsAction"></a>

```go
func UseAmazonBedrockFsAction() *string
```

- *Type:* *string

---

##### `UseAmazonBedrockKrsAction`<sup>Required</sup> <a name="UseAmazonBedrockKrsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsAction"></a>

```go
func UseAmazonBedrockKrsAction() *string
```

- *Type:* *string

---

##### `UseAmazonSThreeAction`<sup>Required</sup> <a name="UseAmazonSThreeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeAction"></a>

```go
func UseAmazonSThreeAction() *string
```

- *Type:* *string

---

##### `UseAsanaAction`<sup>Required</sup> <a name="UseAsanaAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaAction"></a>

```go
func UseAsanaAction() *string
```

- *Type:* *string

---

##### `UseBambooHrAction`<sup>Required</sup> <a name="UseBambooHrAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrAction"></a>

```go
func UseBambooHrAction() *string
```

- *Type:* *string

---

##### `UseBedrockManagedKnowledgeBase`<sup>Required</sup> <a name="UseBedrockManagedKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockManagedKnowledgeBase"></a>

```go
func UseBedrockManagedKnowledgeBase() *string
```

- *Type:* *string

---

##### `UseBedrockModels`<sup>Required</sup> <a name="UseBedrockModels" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModels"></a>

```go
func UseBedrockModels() *string
```

- *Type:* *string

---

##### `UseBoxAgentAction`<sup>Required</sup> <a name="UseBoxAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentAction"></a>

```go
func UseBoxAgentAction() *string
```

- *Type:* *string

---

##### `UseBoxKnowledgeBase`<sup>Required</sup> <a name="UseBoxKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxKnowledgeBase"></a>

```go
func UseBoxKnowledgeBase() *string
```

- *Type:* *string

---

##### `UseBrowserExtension`<sup>Required</sup> <a name="UseBrowserExtension" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBrowserExtension"></a>

```go
func UseBrowserExtension() *string
```

- *Type:* *string

---

##### `UseCanvaAgentAction`<sup>Required</sup> <a name="UseCanvaAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentAction"></a>

```go
func UseCanvaAgentAction() *string
```

- *Type:* *string

---

##### `UseComprehendAction`<sup>Required</sup> <a name="UseComprehendAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendAction"></a>

```go
func UseComprehendAction() *string
```

- *Type:* *string

---

##### `UseComprehendMedicalAction`<sup>Required</sup> <a name="UseComprehendMedicalAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalAction"></a>

```go
func UseComprehendMedicalAction() *string
```

- *Type:* *string

---

##### `UseConfluenceAction`<sup>Required</sup> <a name="UseConfluenceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceAction"></a>

```go
func UseConfluenceAction() *string
```

- *Type:* *string

---

##### `UseConfluenceKnowledgeBase`<sup>Required</sup> <a name="UseConfluenceKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceKnowledgeBase"></a>

```go
func UseConfluenceKnowledgeBase() *string
```

- *Type:* *string

---

##### `UseExcelAddInExtension`<sup>Required</sup> <a name="UseExcelAddInExtension" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useExcelAddInExtension"></a>

```go
func UseExcelAddInExtension() *string
```

- *Type:* *string

---

##### `UseFactSetAction`<sup>Required</sup> <a name="UseFactSetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetAction"></a>

```go
func UseFactSetAction() *string
```

- *Type:* *string

---

##### `UseGenericHttpAction`<sup>Required</sup> <a name="UseGenericHttpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpAction"></a>

```go
func UseGenericHttpAction() *string
```

- *Type:* *string

---

##### `UseGithubAction`<sup>Required</sup> <a name="UseGithubAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubAction"></a>

```go
func UseGithubAction() *string
```

- *Type:* *string

---

##### `UseGoogleCalendarAction`<sup>Required</sup> <a name="UseGoogleCalendarAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarAction"></a>

```go
func UseGoogleCalendarAction() *string
```

- *Type:* *string

---

##### `UseGoogleDriveKnowledgeBase`<sup>Required</sup> <a name="UseGoogleDriveKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleDriveKnowledgeBase"></a>

```go
func UseGoogleDriveKnowledgeBase() *string
```

- *Type:* *string

---

##### `UseHubspotAction`<sup>Required</sup> <a name="UseHubspotAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotAction"></a>

```go
func UseHubspotAction() *string
```

- *Type:* *string

---

##### `UseHuggingFaceAction`<sup>Required</sup> <a name="UseHuggingFaceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceAction"></a>

```go
func UseHuggingFaceAction() *string
```

- *Type:* *string

---

##### `UseIdcKnowledgeBase`<sup>Required</sup> <a name="UseIdcKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useIdcKnowledgeBase"></a>

```go
func UseIdcKnowledgeBase() *string
```

- *Type:* *string

---

##### `UseIntercomAction`<sup>Required</sup> <a name="UseIntercomAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomAction"></a>

```go
func UseIntercomAction() *string
```

- *Type:* *string

---

##### `UseJiraAction`<sup>Required</sup> <a name="UseJiraAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraAction"></a>

```go
func UseJiraAction() *string
```

- *Type:* *string

---

##### `UseLinearAction`<sup>Required</sup> <a name="UseLinearAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearAction"></a>

```go
func UseLinearAction() *string
```

- *Type:* *string

---

##### `UseMcpAction`<sup>Required</sup> <a name="UseMcpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpAction"></a>

```go
func UseMcpAction() *string
```

- *Type:* *string

---

##### `UseMondayAction`<sup>Required</sup> <a name="UseMondayAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayAction"></a>

```go
func UseMondayAction() *string
```

- *Type:* *string

---

##### `UseMsExchangeAction`<sup>Required</sup> <a name="UseMsExchangeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeAction"></a>

```go
func UseMsExchangeAction() *string
```

- *Type:* *string

---

##### `UseMsTeamsAction`<sup>Required</sup> <a name="UseMsTeamsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsAction"></a>

```go
func UseMsTeamsAction() *string
```

- *Type:* *string

---

##### `UseNewRelicAction`<sup>Required</sup> <a name="UseNewRelicAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicAction"></a>

```go
func UseNewRelicAction() *string
```

- *Type:* *string

---

##### `UseNotionAction`<sup>Required</sup> <a name="UseNotionAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionAction"></a>

```go
func UseNotionAction() *string
```

- *Type:* *string

---

##### `UseOneDriveAction`<sup>Required</sup> <a name="UseOneDriveAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveAction"></a>

```go
func UseOneDriveAction() *string
```

- *Type:* *string

---

##### `UseOneDriveKnowledgeBase`<sup>Required</sup> <a name="UseOneDriveKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveKnowledgeBase"></a>

```go
func UseOneDriveKnowledgeBase() *string
```

- *Type:* *string

---

##### `UseOpenApiAction`<sup>Required</sup> <a name="UseOpenApiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiAction"></a>

```go
func UseOpenApiAction() *string
```

- *Type:* *string

---

##### `UseOutlookAddInExtension`<sup>Required</sup> <a name="UseOutlookAddInExtension" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOutlookAddInExtension"></a>

```go
func UseOutlookAddInExtension() *string
```

- *Type:* *string

---

##### `UsePagerDutyAction`<sup>Required</sup> <a name="UsePagerDutyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyAction"></a>

```go
func UsePagerDutyAction() *string
```

- *Type:* *string

---

##### `UsePowerpointAddInExtension`<sup>Required</sup> <a name="UsePowerpointAddInExtension" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.usePowerpointAddInExtension"></a>

```go
func UsePowerpointAddInExtension() *string
```

- *Type:* *string

---

##### `UseQBusinessKnowledgeBase`<sup>Required</sup> <a name="UseQBusinessKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useQBusinessKnowledgeBase"></a>

```go
func UseQBusinessKnowledgeBase() *string
```

- *Type:* *string

---

##### `UseS3KnowledgeBase`<sup>Required</sup> <a name="UseS3KnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useS3KnowledgeBase"></a>

```go
func UseS3KnowledgeBase() *string
```

- *Type:* *string

---

##### `UseSalesforceAction`<sup>Required</sup> <a name="UseSalesforceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceAction"></a>

```go
func UseSalesforceAction() *string
```

- *Type:* *string

---

##### `UseSandPGlobalEnergyAction`<sup>Required</sup> <a name="UseSandPGlobalEnergyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyAction"></a>

```go
func UseSandPGlobalEnergyAction() *string
```

- *Type:* *string

---

##### `UseSandPgmiAction`<sup>Required</sup> <a name="UseSandPgmiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiAction"></a>

```go
func UseSandPgmiAction() *string
```

- *Type:* *string

---

##### `UseSapBillOfMaterialAction`<sup>Required</sup> <a name="UseSapBillOfMaterialAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialAction"></a>

```go
func UseSapBillOfMaterialAction() *string
```

- *Type:* *string

---

##### `UseSapBusinessPartnerAction`<sup>Required</sup> <a name="UseSapBusinessPartnerAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerAction"></a>

```go
func UseSapBusinessPartnerAction() *string
```

- *Type:* *string

---

##### `UseSapMaterialStockAction`<sup>Required</sup> <a name="UseSapMaterialStockAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockAction"></a>

```go
func UseSapMaterialStockAction() *string
```

- *Type:* *string

---

##### `UseSapPhysicalInventoryAction`<sup>Required</sup> <a name="UseSapPhysicalInventoryAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryAction"></a>

```go
func UseSapPhysicalInventoryAction() *string
```

- *Type:* *string

---

##### `UseSapProductMasterDataAction`<sup>Required</sup> <a name="UseSapProductMasterDataAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataAction"></a>

```go
func UseSapProductMasterDataAction() *string
```

- *Type:* *string

---

##### `UseServiceNowAction`<sup>Required</sup> <a name="UseServiceNowAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowAction"></a>

```go
func UseServiceNowAction() *string
```

- *Type:* *string

---

##### `UseSharePointAction`<sup>Required</sup> <a name="UseSharePointAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointAction"></a>

```go
func UseSharePointAction() *string
```

- *Type:* *string

---

##### `UseSharePointKnowledgeBase`<sup>Required</sup> <a name="UseSharePointKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointKnowledgeBase"></a>

```go
func UseSharePointKnowledgeBase() *string
```

- *Type:* *string

---

##### `UseSlackAction`<sup>Required</sup> <a name="UseSlackAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackAction"></a>

```go
func UseSlackAction() *string
```

- *Type:* *string

---

##### `UseSmartsheetAction`<sup>Required</sup> <a name="UseSmartsheetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetAction"></a>

```go
func UseSmartsheetAction() *string
```

- *Type:* *string

---

##### `UseTextractAction`<sup>Required</sup> <a name="UseTextractAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractAction"></a>

```go
func UseTextractAction() *string
```

- *Type:* *string

---

##### `UseWebCrawlerKnowledgeBase`<sup>Required</sup> <a name="UseWebCrawlerKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useWebCrawlerKnowledgeBase"></a>

```go
func UseWebCrawlerKnowledgeBase() *string
```

- *Type:* *string

---

##### `UseWordAddInExtension`<sup>Required</sup> <a name="UseWordAddInExtension" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useWordAddInExtension"></a>

```go
func UseWordAddInExtension() *string
```

- *Type:* *string

---

##### `UseZendeskAction`<sup>Required</sup> <a name="UseZendeskAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskAction"></a>

```go
func UseZendeskAction() *string
```

- *Type:* *string

---

##### `ViewAccountSpiceCapacity`<sup>Required</sup> <a name="ViewAccountSpiceCapacity" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacity"></a>

```go
func ViewAccountSpiceCapacity() *string
```

- *Type:* *string

---

##### `WebCrawlerKnowledgeBase`<sup>Required</sup> <a name="WebCrawlerKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.webCrawlerKnowledgeBase"></a>

```go
func WebCrawlerKnowledgeBase() *string
```

- *Type:* *string

---

##### `ZendeskAction`<sup>Required</sup> <a name="ZendeskAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskAction"></a>

```go
func ZendeskAction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightCustomPermissionsCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilities">DataAwsccQuicksightCustomPermissionsCapabilities</a>

---


### DataAwsccQuicksightCustomPermissionsTagsList <a name="DataAwsccQuicksightCustomPermissionsTagsList" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightcustompermissions"

dataawsccquicksightcustompermissions.NewDataAwsccQuicksightCustomPermissionsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccQuicksightCustomPermissionsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.get"></a>

```go
func Get(index *f64) DataAwsccQuicksightCustomPermissionsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccQuicksightCustomPermissionsTagsOutputReference <a name="DataAwsccQuicksightCustomPermissionsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightcustompermissions"

dataawsccquicksightcustompermissions.NewDataAwsccQuicksightCustomPermissionsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccQuicksightCustomPermissionsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTags">DataAwsccQuicksightCustomPermissionsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightCustomPermissionsTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTags">DataAwsccQuicksightCustomPermissionsTags</a>

---



