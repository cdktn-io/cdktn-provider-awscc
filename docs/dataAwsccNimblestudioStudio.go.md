# `dataAwsccNimblestudioStudio` Submodule <a name="`dataAwsccNimblestudioStudio` Submodule" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNimblestudioStudio <a name="DataAwsccNimblestudioStudio" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/nimblestudio_studio awscc_nimblestudio_studio}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudio"

dataawsccnimblestudiostudio.NewDataAwsccNimblestudioStudio(scope Construct, id *string, config DataAwsccNimblestudioStudioConfig) DataAwsccNimblestudioStudio
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig">DataAwsccNimblestudioStudioConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig">DataAwsccNimblestudioStudioConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNimblestudioStudio resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudio"

dataawsccnimblestudiostudio.DataAwsccNimblestudioStudio_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudio"

dataawsccnimblestudiostudio.DataAwsccNimblestudioStudio_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudio"

dataawsccnimblestudiostudio.DataAwsccNimblestudioStudio_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudio"

dataawsccnimblestudiostudio.DataAwsccNimblestudioStudio_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccNimblestudioStudio resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccNimblestudioStudio to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccNimblestudioStudio that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/nimblestudio_studio#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNimblestudioStudio to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.adminRoleArn">AdminRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.homeRegion">HomeRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.ssoClientId">SsoClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.studioEncryptionConfiguration">StudioEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference">DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.studioId">StudioId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.studioName">StudioName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.studioUrl">StudioUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.userRoleArn">UserRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AdminRoleArn`<sup>Required</sup> <a name="AdminRoleArn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.adminRoleArn"></a>

```go
func AdminRoleArn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `HomeRegion`<sup>Required</sup> <a name="HomeRegion" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.homeRegion"></a>

```go
func HomeRegion() *string
```

- *Type:* *string

---

##### `SsoClientId`<sup>Required</sup> <a name="SsoClientId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.ssoClientId"></a>

```go
func SsoClientId() *string
```

- *Type:* *string

---

##### `StudioEncryptionConfiguration`<sup>Required</sup> <a name="StudioEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.studioEncryptionConfiguration"></a>

```go
func StudioEncryptionConfiguration() DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference">DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference</a>

---

##### `StudioId`<sup>Required</sup> <a name="StudioId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.studioId"></a>

```go
func StudioId() *string
```

- *Type:* *string

---

##### `StudioName`<sup>Required</sup> <a name="StudioName" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.studioName"></a>

```go
func StudioName() *string
```

- *Type:* *string

---

##### `StudioUrl`<sup>Required</sup> <a name="StudioUrl" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.studioUrl"></a>

```go
func StudioUrl() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `UserRoleArn`<sup>Required</sup> <a name="UserRoleArn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.userRoleArn"></a>

```go
func UserRoleArn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNimblestudioStudioConfig <a name="DataAwsccNimblestudioStudioConfig" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudio"

&dataawsccnimblestudiostudio.DataAwsccNimblestudioStudioConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/nimblestudio_studio#id DataAwsccNimblestudioStudio#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNimblestudioStudioStudioEncryptionConfiguration <a name="DataAwsccNimblestudioStudioStudioEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudio"

&dataawsccnimblestudiostudio.DataAwsccNimblestudioStudioStudioEncryptionConfiguration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference <a name="DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudio"

dataawsccnimblestudiostudio.NewDataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.keyArn">KeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfiguration">DataAwsccNimblestudioStudioStudioEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyArn`<sup>Required</sup> <a name="KeyArn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.keyArn"></a>

```go
func KeyArn() *string
```

- *Type:* *string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNimblestudioStudioStudioEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfiguration">DataAwsccNimblestudioStudioStudioEncryptionConfiguration</a>

---



