# `dataAwsccNimblestudioStudioComponent` Submodule <a name="`dataAwsccNimblestudioStudioComponent` Submodule" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNimblestudioStudioComponent <a name="DataAwsccNimblestudioStudioComponent" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/nimblestudio_studio_component awscc_nimblestudio_studio_component}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudiocomponent"

dataawsccnimblestudiostudiocomponent.NewDataAwsccNimblestudioStudioComponent(scope Construct, id *string, config DataAwsccNimblestudioStudioComponentConfig) DataAwsccNimblestudioStudioComponent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig">DataAwsccNimblestudioStudioComponentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig">DataAwsccNimblestudioStudioComponentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNimblestudioStudioComponent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudiocomponent"

dataawsccnimblestudiostudiocomponent.DataAwsccNimblestudioStudioComponent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudiocomponent"

dataawsccnimblestudiostudiocomponent.DataAwsccNimblestudioStudioComponent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudiocomponent"

dataawsccnimblestudiostudiocomponent.DataAwsccNimblestudioStudioComponent_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudiocomponent"

dataawsccnimblestudiostudiocomponent.DataAwsccNimblestudioStudioComponent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccNimblestudioStudioComponent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccNimblestudioStudioComponent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccNimblestudioStudioComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/nimblestudio_studio_component#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNimblestudioStudioComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.ec2SecurityGroupIds">Ec2SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.initializationScripts">InitializationScripts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList">DataAwsccNimblestudioStudioComponentInitializationScriptsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.scriptParameters">ScriptParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList">DataAwsccNimblestudioStudioComponentScriptParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.studioComponentId">StudioComponentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.studioId">StudioId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.subtype">Subtype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.configuration"></a>

```go
func Configuration() DataAwsccNimblestudioStudioComponentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Ec2SecurityGroupIds`<sup>Required</sup> <a name="Ec2SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.ec2SecurityGroupIds"></a>

```go
func Ec2SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `InitializationScripts`<sup>Required</sup> <a name="InitializationScripts" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.initializationScripts"></a>

```go
func InitializationScripts() DataAwsccNimblestudioStudioComponentInitializationScriptsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList">DataAwsccNimblestudioStudioComponentInitializationScriptsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ScriptParameters`<sup>Required</sup> <a name="ScriptParameters" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.scriptParameters"></a>

```go
func ScriptParameters() DataAwsccNimblestudioStudioComponentScriptParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList">DataAwsccNimblestudioStudioComponentScriptParametersList</a>

---

##### `StudioComponentId`<sup>Required</sup> <a name="StudioComponentId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.studioComponentId"></a>

```go
func StudioComponentId() *string
```

- *Type:* *string

---

##### `StudioId`<sup>Required</sup> <a name="StudioId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.studioId"></a>

```go
func StudioId() *string
```

- *Type:* *string

---

##### `Subtype`<sup>Required</sup> <a name="Subtype" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.subtype"></a>

```go
func Subtype() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNimblestudioStudioComponentConfig <a name="DataAwsccNimblestudioStudioComponentConfig" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudiocomponent"

&dataawsccnimblestudiostudiocomponent.DataAwsccNimblestudioStudioComponentConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/nimblestudio_studio_component#id DataAwsccNimblestudioStudioComponent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNimblestudioStudioComponentConfiguration <a name="DataAwsccNimblestudioStudioComponentConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudiocomponent"

&dataawsccnimblestudiostudiocomponent.DataAwsccNimblestudioStudioComponentConfiguration {

}
```


### DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration <a name="DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudiocomponent"

&dataawsccnimblestudiostudiocomponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration {

}
```


### DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes <a name="DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudiocomponent"

&dataawsccnimblestudiostudiocomponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes {

}
```


### DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration <a name="DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudiocomponent"

&dataawsccnimblestudiostudiocomponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration {

}
```


### DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration <a name="DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudiocomponent"

&dataawsccnimblestudiostudiocomponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration {

}
```


### DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration <a name="DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudiocomponent"

&dataawsccnimblestudiostudiocomponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration {

}
```


### DataAwsccNimblestudioStudioComponentInitializationScripts <a name="DataAwsccNimblestudioStudioComponentInitializationScripts" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScripts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScripts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudiocomponent"

&dataawsccnimblestudiostudiocomponent.DataAwsccNimblestudioStudioComponentInitializationScripts {

}
```


### DataAwsccNimblestudioStudioComponentScriptParameters <a name="DataAwsccNimblestudioStudioComponentScriptParameters" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudiocomponent"

&dataawsccnimblestudiostudiocomponent.DataAwsccNimblestudioStudioComponentScriptParameters {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList <a name="DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudiocomponent"

dataawsccnimblestudiostudiocomponent.NewDataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.get"></a>

```go
func Get(index *f64) DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference <a name="DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudiocomponent"

dataawsccnimblestudiostudiocomponent.NewDataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>

---


### DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference <a name="DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudiocomponent"

dataawsccnimblestudiostudiocomponent.NewDataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.computerAttributes">ComputerAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList">DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.directoryId">DirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedName">OrganizationalUnitDistinguishedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputerAttributes`<sup>Required</sup> <a name="ComputerAttributes" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.computerAttributes"></a>

```go
func ComputerAttributes() DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList">DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList</a>

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.directoryId"></a>

```go
func DirectoryId() *string
```

- *Type:* *string

---

##### `OrganizationalUnitDistinguishedName`<sup>Required</sup> <a name="OrganizationalUnitDistinguishedName" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedName"></a>

```go
func OrganizationalUnitDistinguishedName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a>

---


### DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference <a name="DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudiocomponent"

dataawsccnimblestudiostudiocomponent.NewDataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.activeDirectoryUser">ActiveDirectoryUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration">DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveDirectoryUser`<sup>Required</sup> <a name="ActiveDirectoryUser" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.activeDirectoryUser"></a>

```go
func ActiveDirectoryUser() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration">DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration</a>

---


### DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference <a name="DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudiocomponent"

dataawsccnimblestudiostudiocomponent.NewDataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration">DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration">DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a>

---


### DataAwsccNimblestudioStudioComponentConfigurationOutputReference <a name="DataAwsccNimblestudioStudioComponentConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudiocomponent"

dataawsccnimblestudiostudiocomponent.NewDataAwsccNimblestudioStudioComponentConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccNimblestudioStudioComponentConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.activeDirectoryConfiguration">ActiveDirectoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.computeFarmConfiguration">ComputeFarmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.licenseServiceConfiguration">LicenseServiceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.sharedFileSystemConfiguration">SharedFileSystemConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfiguration">DataAwsccNimblestudioStudioComponentConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveDirectoryConfiguration`<sup>Required</sup> <a name="ActiveDirectoryConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.activeDirectoryConfiguration"></a>

```go
func ActiveDirectoryConfiguration() DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference</a>

---

##### `ComputeFarmConfiguration`<sup>Required</sup> <a name="ComputeFarmConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.computeFarmConfiguration"></a>

```go
func ComputeFarmConfiguration() DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference</a>

---

##### `LicenseServiceConfiguration`<sup>Required</sup> <a name="LicenseServiceConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.licenseServiceConfiguration"></a>

```go
func LicenseServiceConfiguration() DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference</a>

---

##### `SharedFileSystemConfiguration`<sup>Required</sup> <a name="SharedFileSystemConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.sharedFileSystemConfiguration"></a>

```go
func SharedFileSystemConfiguration() DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNimblestudioStudioComponentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfiguration">DataAwsccNimblestudioStudioComponentConfiguration</a>

---


### DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference <a name="DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudiocomponent"

dataawsccnimblestudiostudiocomponent.NewDataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.linuxMountPoint">LinuxMountPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.shareName">ShareName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.windowsMountDrive">WindowsMountDrive</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fileSystemId"></a>

```go
func FileSystemId() *string
```

- *Type:* *string

---

##### `LinuxMountPoint`<sup>Required</sup> <a name="LinuxMountPoint" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.linuxMountPoint"></a>

```go
func LinuxMountPoint() *string
```

- *Type:* *string

---

##### `ShareName`<sup>Required</sup> <a name="ShareName" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.shareName"></a>

```go
func ShareName() *string
```

- *Type:* *string

---

##### `WindowsMountDrive`<sup>Required</sup> <a name="WindowsMountDrive" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.windowsMountDrive"></a>

```go
func WindowsMountDrive() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a>

---


### DataAwsccNimblestudioStudioComponentInitializationScriptsList <a name="DataAwsccNimblestudioStudioComponentInitializationScriptsList" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudiocomponent"

dataawsccnimblestudiostudiocomponent.NewDataAwsccNimblestudioStudioComponentInitializationScriptsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccNimblestudioStudioComponentInitializationScriptsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.get"></a>

```go
func Get(index *f64) DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference <a name="DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudiocomponent"

dataawsccnimblestudiostudiocomponent.NewDataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.launchProfileProtocolVersion">LaunchProfileProtocolVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.runContext">RunContext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.script">Script</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScripts">DataAwsccNimblestudioStudioComponentInitializationScripts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LaunchProfileProtocolVersion`<sup>Required</sup> <a name="LaunchProfileProtocolVersion" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.launchProfileProtocolVersion"></a>

```go
func LaunchProfileProtocolVersion() *string
```

- *Type:* *string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `RunContext`<sup>Required</sup> <a name="RunContext" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.runContext"></a>

```go
func RunContext() *string
```

- *Type:* *string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.script"></a>

```go
func Script() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNimblestudioStudioComponentInitializationScripts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScripts">DataAwsccNimblestudioStudioComponentInitializationScripts</a>

---


### DataAwsccNimblestudioStudioComponentScriptParametersList <a name="DataAwsccNimblestudioStudioComponentScriptParametersList" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudiocomponent"

dataawsccnimblestudiostudiocomponent.NewDataAwsccNimblestudioStudioComponentScriptParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccNimblestudioStudioComponentScriptParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.get"></a>

```go
func Get(index *f64) DataAwsccNimblestudioStudioComponentScriptParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccNimblestudioStudioComponentScriptParametersOutputReference <a name="DataAwsccNimblestudioStudioComponentScriptParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnimblestudiostudiocomponent"

dataawsccnimblestudiostudiocomponent.NewDataAwsccNimblestudioStudioComponentScriptParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccNimblestudioStudioComponentScriptParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParameters">DataAwsccNimblestudioStudioComponentScriptParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNimblestudioStudioComponentScriptParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParameters">DataAwsccNimblestudioStudioComponentScriptParameters</a>

---



