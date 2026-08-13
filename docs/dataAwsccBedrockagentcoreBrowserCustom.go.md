# `dataAwsccBedrockagentcoreBrowserCustom` Submodule <a name="`dataAwsccBedrockagentcoreBrowserCustom` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockagentcoreBrowserCustom <a name="DataAwsccBedrockagentcoreBrowserCustom" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrockagentcore_browser_custom awscc_bedrockagentcore_browser_custom}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorebrowsercustom"

dataawsccbedrockagentcorebrowsercustom.NewDataAwsccBedrockagentcoreBrowserCustom(scope Construct, id *string, config DataAwsccBedrockagentcoreBrowserCustomConfig) DataAwsccBedrockagentcoreBrowserCustom
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig">DataAwsccBedrockagentcoreBrowserCustomConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig">DataAwsccBedrockagentcoreBrowserCustomConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockagentcoreBrowserCustom resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorebrowsercustom"

dataawsccbedrockagentcorebrowsercustom.DataAwsccBedrockagentcoreBrowserCustom_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorebrowsercustom"

dataawsccbedrockagentcorebrowsercustom.DataAwsccBedrockagentcoreBrowserCustom_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorebrowsercustom"

dataawsccbedrockagentcorebrowsercustom.DataAwsccBedrockagentcoreBrowserCustom_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorebrowsercustom"

dataawsccbedrockagentcorebrowsercustom.DataAwsccBedrockagentcoreBrowserCustom_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccBedrockagentcoreBrowserCustom resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccBedrockagentcoreBrowserCustom to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccBedrockagentcoreBrowserCustom that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrockagentcore_browser_custom#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockagentcoreBrowserCustom to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.browserArn">BrowserArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.browserId">BrowserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.browserSigning">BrowserSigning</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference">DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.certificates">Certificates</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList">DataAwsccBedrockagentcoreBrowserCustomCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.enterprisePolicies">EnterprisePolicies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList">DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.failureReason">FailureReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference">DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.recordingConfig">RecordingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference">DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `BrowserArn`<sup>Required</sup> <a name="BrowserArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.browserArn"></a>

```go
func BrowserArn() *string
```

- *Type:* *string

---

##### `BrowserId`<sup>Required</sup> <a name="BrowserId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.browserId"></a>

```go
func BrowserId() *string
```

- *Type:* *string

---

##### `BrowserSigning`<sup>Required</sup> <a name="BrowserSigning" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.browserSigning"></a>

```go
func BrowserSigning() DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference">DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference</a>

---

##### `Certificates`<sup>Required</sup> <a name="Certificates" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.certificates"></a>

```go
func Certificates() DataAwsccBedrockagentcoreBrowserCustomCertificatesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList">DataAwsccBedrockagentcoreBrowserCustomCertificatesList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnterprisePolicies`<sup>Required</sup> <a name="EnterprisePolicies" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.enterprisePolicies"></a>

```go
func EnterprisePolicies() DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList">DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList</a>

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.executionRoleArn"></a>

```go
func ExecutionRoleArn() *string
```

- *Type:* *string

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.failureReason"></a>

```go
func FailureReason() *string
```

- *Type:* *string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.lastUpdatedAt"></a>

```go
func LastUpdatedAt() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.networkConfiguration"></a>

```go
func NetworkConfiguration() DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference">DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference</a>

---

##### `RecordingConfig`<sup>Required</sup> <a name="RecordingConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.recordingConfig"></a>

```go
func RecordingConfig() DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference">DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockagentcoreBrowserCustomBrowserSigning <a name="DataAwsccBedrockagentcoreBrowserCustomBrowserSigning" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigning.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorebrowsercustom"

&dataawsccbedrockagentcorebrowsercustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigning {

}
```


### DataAwsccBedrockagentcoreBrowserCustomCertificates <a name="DataAwsccBedrockagentcoreBrowserCustomCertificates" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificates.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorebrowsercustom"

&dataawsccbedrockagentcorebrowsercustom.DataAwsccBedrockagentcoreBrowserCustomCertificates {

}
```


### DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocation <a name="DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocation" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorebrowsercustom"

&dataawsccbedrockagentcorebrowsercustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocation {

}
```


### DataAwsccBedrockagentcoreBrowserCustomConfig <a name="DataAwsccBedrockagentcoreBrowserCustomConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorebrowsercustom"

&dataawsccbedrockagentcorebrowsercustom.DataAwsccBedrockagentcoreBrowserCustomConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrockagentcore_browser_custom#id DataAwsccBedrockagentcoreBrowserCustom#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockagentcoreBrowserCustomEnterprisePolicies <a name="DataAwsccBedrockagentcoreBrowserCustomEnterprisePolicies" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePolicies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorebrowsercustom"

&dataawsccbedrockagentcorebrowsercustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePolicies {

}
```


### DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocation <a name="DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocation" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorebrowsercustom"

&dataawsccbedrockagentcorebrowsercustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocation {

}
```


### DataAwsccBedrockagentcoreBrowserCustomNetworkConfiguration <a name="DataAwsccBedrockagentcoreBrowserCustomNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorebrowsercustom"

&dataawsccbedrockagentcorebrowsercustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfiguration {

}
```


### DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig <a name="DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorebrowsercustom"

&dataawsccbedrockagentcorebrowsercustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig {

}
```


### DataAwsccBedrockagentcoreBrowserCustomRecordingConfig <a name="DataAwsccBedrockagentcoreBrowserCustomRecordingConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorebrowsercustom"

&dataawsccbedrockagentcorebrowsercustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfig {

}
```


### DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3Location <a name="DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3Location" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3Location.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorebrowsercustom"

&dataawsccbedrockagentcorebrowsercustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3Location {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference <a name="DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorebrowsercustom"

dataawsccbedrockagentcorebrowsercustom.NewDataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigning">DataAwsccBedrockagentcoreBrowserCustomBrowserSigning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcoreBrowserCustomBrowserSigning
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigning">DataAwsccBedrockagentcoreBrowserCustomBrowserSigning</a>

---


### DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference <a name="DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorebrowsercustom"

dataawsccbedrockagentcorebrowsercustom.NewDataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocation">DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocation">DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocation</a>

---


### DataAwsccBedrockagentcoreBrowserCustomCertificatesList <a name="DataAwsccBedrockagentcoreBrowserCustomCertificatesList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorebrowsercustom"

dataawsccbedrockagentcorebrowsercustom.NewDataAwsccBedrockagentcoreBrowserCustomCertificatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockagentcoreBrowserCustomCertificatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference <a name="DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorebrowsercustom"

dataawsccbedrockagentcorebrowsercustom.NewDataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.property.certificateLocation">CertificateLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference">DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificates">DataAwsccBedrockagentcoreBrowserCustomCertificates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateLocation`<sup>Required</sup> <a name="CertificateLocation" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.property.certificateLocation"></a>

```go
func CertificateLocation() DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference">DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcoreBrowserCustomCertificates
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificates">DataAwsccBedrockagentcoreBrowserCustomCertificates</a>

---


### DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList <a name="DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorebrowsercustom"

dataawsccbedrockagentcorebrowsercustom.NewDataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference <a name="DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorebrowsercustom"

dataawsccbedrockagentcorebrowsercustom.NewDataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocation">DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocation">DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocation</a>

---


### DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference <a name="DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorebrowsercustom"

dataawsccbedrockagentcorebrowsercustom.NewDataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference">DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePolicies">DataAwsccBedrockagentcoreBrowserCustomEnterprisePolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.location"></a>

```go
func Location() DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference">DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcoreBrowserCustomEnterprisePolicies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePolicies">DataAwsccBedrockagentcoreBrowserCustomEnterprisePolicies</a>

---


### DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference <a name="DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorebrowsercustom"

dataawsccbedrockagentcorebrowsercustom.NewDataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.networkMode">NetworkMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference">DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfiguration">DataAwsccBedrockagentcoreBrowserCustomNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkMode`<sup>Required</sup> <a name="NetworkMode" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.networkMode"></a>

```go
func NetworkMode() *string
```

- *Type:* *string

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.vpcConfig"></a>

```go
func VpcConfig() DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference">DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcoreBrowserCustomNetworkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfiguration">DataAwsccBedrockagentcoreBrowserCustomNetworkConfiguration</a>

---


### DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference <a name="DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorebrowsercustom"

dataawsccbedrockagentcorebrowsercustom.NewDataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig">DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig">DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig</a>

---


### DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference <a name="DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorebrowsercustom"

dataawsccbedrockagentcorebrowsercustom.NewDataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.s3Location">S3Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference">DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfig">DataAwsccBedrockagentcoreBrowserCustomRecordingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `S3Location`<sup>Required</sup> <a name="S3Location" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.s3Location"></a>

```go
func S3Location() DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference">DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcoreBrowserCustomRecordingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfig">DataAwsccBedrockagentcoreBrowserCustomRecordingConfig</a>

---


### DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference <a name="DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorebrowsercustom"

dataawsccbedrockagentcorebrowsercustom.NewDataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3Location">DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3Location">DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3Location</a>

---



