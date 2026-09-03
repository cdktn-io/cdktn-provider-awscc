# `dataAwsccPinpointInAppTemplate` Submodule <a name="`dataAwsccPinpointInAppTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccPinpointInAppTemplate <a name="DataAwsccPinpointInAppTemplate" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/pinpoint_in_app_template awscc_pinpoint_in_app_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

dataawsccpinpointinapptemplate.NewDataAwsccPinpointInAppTemplate(scope Construct, id *string, config DataAwsccPinpointInAppTemplateConfig) DataAwsccPinpointInAppTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig">DataAwsccPinpointInAppTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig">DataAwsccPinpointInAppTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccPinpointInAppTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

dataawsccpinpointinapptemplate.DataAwsccPinpointInAppTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

dataawsccpinpointinapptemplate.DataAwsccPinpointInAppTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

dataawsccpinpointinapptemplate.DataAwsccPinpointInAppTemplate_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

dataawsccpinpointinapptemplate.DataAwsccPinpointInAppTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccPinpointInAppTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccPinpointInAppTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccPinpointInAppTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/pinpoint_in_app_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccPinpointInAppTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.content">Content</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList">DataAwsccPinpointInAppTemplateContentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.customConfig">CustomConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.layout">Layout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.tags">Tags</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.templateDescription">TemplateDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.templateName">TemplateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.content"></a>

```go
func Content() DataAwsccPinpointInAppTemplateContentList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList">DataAwsccPinpointInAppTemplateContentList</a>

---

##### `CustomConfig`<sup>Required</sup> <a name="CustomConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.customConfig"></a>

```go
func CustomConfig() *string
```

- *Type:* *string

---

##### `Layout`<sup>Required</sup> <a name="Layout" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.layout"></a>

```go
func Layout() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.tags"></a>

```go
func Tags() *string
```

- *Type:* *string

---

##### `TemplateDescription`<sup>Required</sup> <a name="TemplateDescription" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.templateDescription"></a>

```go
func TemplateDescription() *string
```

- *Type:* *string

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.templateName"></a>

```go
func TemplateName() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccPinpointInAppTemplateConfig <a name="DataAwsccPinpointInAppTemplateConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

&dataawsccpinpointinapptemplate.DataAwsccPinpointInAppTemplateConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/pinpoint_in_app_template#id DataAwsccPinpointInAppTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccPinpointInAppTemplateContent <a name="DataAwsccPinpointInAppTemplateContent" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

&dataawsccpinpointinapptemplate.DataAwsccPinpointInAppTemplateContent {

}
```


### DataAwsccPinpointInAppTemplateContentBodyConfig <a name="DataAwsccPinpointInAppTemplateContentBodyConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

&dataawsccpinpointinapptemplate.DataAwsccPinpointInAppTemplateContentBodyConfig {

}
```


### DataAwsccPinpointInAppTemplateContentHeaderConfig <a name="DataAwsccPinpointInAppTemplateContentHeaderConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

&dataawsccpinpointinapptemplate.DataAwsccPinpointInAppTemplateContentHeaderConfig {

}
```


### DataAwsccPinpointInAppTemplateContentPrimaryBtn <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

&dataawsccpinpointinapptemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtn {

}
```


### DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

&dataawsccpinpointinapptemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid {

}
```


### DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

&dataawsccpinpointinapptemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig {

}
```


### DataAwsccPinpointInAppTemplateContentPrimaryBtnIos <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnIos" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIos.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

&dataawsccpinpointinapptemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIos {

}
```


### DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

&dataawsccpinpointinapptemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb {

}
```


### DataAwsccPinpointInAppTemplateContentSecondaryBtn <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

&dataawsccpinpointinapptemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtn {

}
```


### DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

&dataawsccpinpointinapptemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid {

}
```


### DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

&dataawsccpinpointinapptemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig {

}
```


### DataAwsccPinpointInAppTemplateContentSecondaryBtnIos <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnIos" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIos.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

&dataawsccpinpointinapptemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIos {

}
```


### DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

&dataawsccpinpointinapptemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference <a name="DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

dataawsccpinpointinapptemplate.NewDataAwsccPinpointInAppTemplateContentBodyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.alignment">Alignment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.textColor">TextColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfig">DataAwsccPinpointInAppTemplateContentBodyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Alignment`<sup>Required</sup> <a name="Alignment" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.alignment"></a>

```go
func Alignment() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `TextColor`<sup>Required</sup> <a name="TextColor" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.textColor"></a>

```go
func TextColor() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPinpointInAppTemplateContentBodyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfig">DataAwsccPinpointInAppTemplateContentBodyConfig</a>

---


### DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference <a name="DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

dataawsccpinpointinapptemplate.NewDataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.alignment">Alignment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.header">Header</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.textColor">TextColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfig">DataAwsccPinpointInAppTemplateContentHeaderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Alignment`<sup>Required</sup> <a name="Alignment" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.alignment"></a>

```go
func Alignment() *string
```

- *Type:* *string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.header"></a>

```go
func Header() *string
```

- *Type:* *string

---

##### `TextColor`<sup>Required</sup> <a name="TextColor" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.textColor"></a>

```go
func TextColor() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPinpointInAppTemplateContentHeaderConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfig">DataAwsccPinpointInAppTemplateContentHeaderConfig</a>

---


### DataAwsccPinpointInAppTemplateContentList <a name="DataAwsccPinpointInAppTemplateContentList" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

dataawsccpinpointinapptemplate.NewDataAwsccPinpointInAppTemplateContentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccPinpointInAppTemplateContentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.get"></a>

```go
func Get(index *f64) DataAwsccPinpointInAppTemplateContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccPinpointInAppTemplateContentOutputReference <a name="DataAwsccPinpointInAppTemplateContentOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

dataawsccpinpointinapptemplate.NewDataAwsccPinpointInAppTemplateContentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccPinpointInAppTemplateContentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.backgroundColor">BackgroundColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.bodyConfig">BodyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference">DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.headerConfig">HeaderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference">DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.imageUrl">ImageUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.primaryBtn">PrimaryBtn</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.secondaryBtn">SecondaryBtn</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContent">DataAwsccPinpointInAppTemplateContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackgroundColor`<sup>Required</sup> <a name="BackgroundColor" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.backgroundColor"></a>

```go
func BackgroundColor() *string
```

- *Type:* *string

---

##### `BodyConfig`<sup>Required</sup> <a name="BodyConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.bodyConfig"></a>

```go
func BodyConfig() DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference">DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference</a>

---

##### `HeaderConfig`<sup>Required</sup> <a name="HeaderConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.headerConfig"></a>

```go
func HeaderConfig() DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference">DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference</a>

---

##### `ImageUrl`<sup>Required</sup> <a name="ImageUrl" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.imageUrl"></a>

```go
func ImageUrl() *string
```

- *Type:* *string

---

##### `PrimaryBtn`<sup>Required</sup> <a name="PrimaryBtn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.primaryBtn"></a>

```go
func PrimaryBtn() DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference</a>

---

##### `SecondaryBtn`<sup>Required</sup> <a name="SecondaryBtn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.secondaryBtn"></a>

```go
func SecondaryBtn() DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPinpointInAppTemplateContent
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContent">DataAwsccPinpointInAppTemplateContent</a>

---


### DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

dataawsccpinpointinapptemplate.NewDataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.buttonAction">ButtonAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.link">Link</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid">DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.buttonAction"></a>

```go
func ButtonAction() *string
```

- *Type:* *string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.link"></a>

```go
func Link() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid">DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid</a>

---


### DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

dataawsccpinpointinapptemplate.NewDataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.backgroundColor">BackgroundColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.borderRadius">BorderRadius</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.buttonAction">ButtonAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.link">Link</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textColor">TextColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig">DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackgroundColor`<sup>Required</sup> <a name="BackgroundColor" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.backgroundColor"></a>

```go
func BackgroundColor() *string
```

- *Type:* *string

---

##### `BorderRadius`<sup>Required</sup> <a name="BorderRadius" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.borderRadius"></a>

```go
func BorderRadius() *f64
```

- *Type:* *f64

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.buttonAction"></a>

```go
func ButtonAction() *string
```

- *Type:* *string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.link"></a>

```go
func Link() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `TextColor`<sup>Required</sup> <a name="TextColor" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textColor"></a>

```go
func TextColor() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig">DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig</a>

---


### DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

dataawsccpinpointinapptemplate.NewDataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.buttonAction">ButtonAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.link">Link</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIos">DataAwsccPinpointInAppTemplateContentPrimaryBtnIos</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.buttonAction"></a>

```go
func ButtonAction() *string
```

- *Type:* *string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.link"></a>

```go
func Link() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPinpointInAppTemplateContentPrimaryBtnIos
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIos">DataAwsccPinpointInAppTemplateContentPrimaryBtnIos</a>

---


### DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

dataawsccpinpointinapptemplate.NewDataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.android">Android</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.defaultConfig">DefaultConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.ios">Ios</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.web">Web</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtn">DataAwsccPinpointInAppTemplateContentPrimaryBtn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Android`<sup>Required</sup> <a name="Android" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.android"></a>

```go
func Android() DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference</a>

---

##### `DefaultConfig`<sup>Required</sup> <a name="DefaultConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.defaultConfig"></a>

```go
func DefaultConfig() DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference</a>

---

##### `Ios`<sup>Required</sup> <a name="Ios" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.ios"></a>

```go
func Ios() DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference</a>

---

##### `Web`<sup>Required</sup> <a name="Web" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.web"></a>

```go
func Web() DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPinpointInAppTemplateContentPrimaryBtn
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtn">DataAwsccPinpointInAppTemplateContentPrimaryBtn</a>

---


### DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

dataawsccpinpointinapptemplate.NewDataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.buttonAction">ButtonAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.link">Link</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb">DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.buttonAction"></a>

```go
func ButtonAction() *string
```

- *Type:* *string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.link"></a>

```go
func Link() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb">DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb</a>

---


### DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

dataawsccpinpointinapptemplate.NewDataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.buttonAction">ButtonAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.link">Link</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid">DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.buttonAction"></a>

```go
func ButtonAction() *string
```

- *Type:* *string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.link"></a>

```go
func Link() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid">DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid</a>

---


### DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

dataawsccpinpointinapptemplate.NewDataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.backgroundColor">BackgroundColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.borderRadius">BorderRadius</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.buttonAction">ButtonAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.link">Link</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textColor">TextColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig">DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackgroundColor`<sup>Required</sup> <a name="BackgroundColor" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.backgroundColor"></a>

```go
func BackgroundColor() *string
```

- *Type:* *string

---

##### `BorderRadius`<sup>Required</sup> <a name="BorderRadius" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.borderRadius"></a>

```go
func BorderRadius() *f64
```

- *Type:* *f64

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.buttonAction"></a>

```go
func ButtonAction() *string
```

- *Type:* *string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.link"></a>

```go
func Link() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `TextColor`<sup>Required</sup> <a name="TextColor" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textColor"></a>

```go
func TextColor() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig">DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig</a>

---


### DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

dataawsccpinpointinapptemplate.NewDataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.buttonAction">ButtonAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.link">Link</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIos">DataAwsccPinpointInAppTemplateContentSecondaryBtnIos</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.buttonAction"></a>

```go
func ButtonAction() *string
```

- *Type:* *string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.link"></a>

```go
func Link() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPinpointInAppTemplateContentSecondaryBtnIos
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIos">DataAwsccPinpointInAppTemplateContentSecondaryBtnIos</a>

---


### DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

dataawsccpinpointinapptemplate.NewDataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.android">Android</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.defaultConfig">DefaultConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.ios">Ios</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.web">Web</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtn">DataAwsccPinpointInAppTemplateContentSecondaryBtn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Android`<sup>Required</sup> <a name="Android" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.android"></a>

```go
func Android() DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference</a>

---

##### `DefaultConfig`<sup>Required</sup> <a name="DefaultConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.defaultConfig"></a>

```go
func DefaultConfig() DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference</a>

---

##### `Ios`<sup>Required</sup> <a name="Ios" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.ios"></a>

```go
func Ios() DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference</a>

---

##### `Web`<sup>Required</sup> <a name="Web" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.web"></a>

```go
func Web() DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPinpointInAppTemplateContentSecondaryBtn
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtn">DataAwsccPinpointInAppTemplateContentSecondaryBtn</a>

---


### DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpinpointinapptemplate"

dataawsccpinpointinapptemplate.NewDataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.buttonAction">ButtonAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.link">Link</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb">DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.buttonAction"></a>

```go
func ButtonAction() *string
```

- *Type:* *string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.link"></a>

```go
func Link() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb">DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb</a>

---



