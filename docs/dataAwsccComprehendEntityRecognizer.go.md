# `dataAwsccComprehendEntityRecognizer` Submodule <a name="`dataAwsccComprehendEntityRecognizer` Submodule" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccComprehendEntityRecognizer <a name="DataAwsccComprehendEntityRecognizer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/comprehend_entity_recognizer awscc_comprehend_entity_recognizer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizer"

dataawscccomprehendentityrecognizer.NewDataAwsccComprehendEntityRecognizer(scope Construct, id *string, config DataAwsccComprehendEntityRecognizerConfig) DataAwsccComprehendEntityRecognizer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig">DataAwsccComprehendEntityRecognizerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig">DataAwsccComprehendEntityRecognizerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccComprehendEntityRecognizer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizer"

dataawscccomprehendentityrecognizer.DataAwsccComprehendEntityRecognizer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizer"

dataawscccomprehendentityrecognizer.DataAwsccComprehendEntityRecognizer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizer"

dataawscccomprehendentityrecognizer.DataAwsccComprehendEntityRecognizer_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizer"

dataawscccomprehendentityrecognizer.DataAwsccComprehendEntityRecognizer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccComprehendEntityRecognizer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccComprehendEntityRecognizer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccComprehendEntityRecognizer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/comprehend_entity_recognizer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccComprehendEntityRecognizer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.dataAccessRoleArn">DataAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.inputDataConfig">InputDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference">DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.modelKmsKeyId">ModelKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.modelPolicy">ModelPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.recognizerName">RecognizerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList">DataAwsccComprehendEntityRecognizerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.versionName">VersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference">DataAwsccComprehendEntityRecognizerVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DataAccessRoleArn`<sup>Required</sup> <a name="DataAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.dataAccessRoleArn"></a>

```go
func DataAccessRoleArn() *string
```

- *Type:* *string

---

##### `InputDataConfig`<sup>Required</sup> <a name="InputDataConfig" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.inputDataConfig"></a>

```go
func InputDataConfig() DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference">DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference</a>

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `ModelKmsKeyId`<sup>Required</sup> <a name="ModelKmsKeyId" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.modelKmsKeyId"></a>

```go
func ModelKmsKeyId() *string
```

- *Type:* *string

---

##### `ModelPolicy`<sup>Required</sup> <a name="ModelPolicy" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.modelPolicy"></a>

```go
func ModelPolicy() *string
```

- *Type:* *string

---

##### `RecognizerName`<sup>Required</sup> <a name="RecognizerName" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.recognizerName"></a>

```go
func RecognizerName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.tags"></a>

```go
func Tags() DataAwsccComprehendEntityRecognizerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList">DataAwsccComprehendEntityRecognizerTagsList</a>

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.versionName"></a>

```go
func VersionName() *string
```

- *Type:* *string

---

##### `VolumeKmsKeyId`<sup>Required</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.volumeKmsKeyId"></a>

```go
func VolumeKmsKeyId() *string
```

- *Type:* *string

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.vpcConfig"></a>

```go
func VpcConfig() DataAwsccComprehendEntityRecognizerVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference">DataAwsccComprehendEntityRecognizerVpcConfigOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccComprehendEntityRecognizerConfig <a name="DataAwsccComprehendEntityRecognizerConfig" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizer"

&dataawscccomprehendentityrecognizer.DataAwsccComprehendEntityRecognizerConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/comprehend_entity_recognizer#id DataAwsccComprehendEntityRecognizer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccComprehendEntityRecognizerInputDataConfig <a name="DataAwsccComprehendEntityRecognizerInputDataConfig" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizer"

&dataawscccomprehendentityrecognizer.DataAwsccComprehendEntityRecognizerInputDataConfig {

}
```


### DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations <a name="DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizer"

&dataawscccomprehendentityrecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations {

}
```


### DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests <a name="DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizer"

&dataawscccomprehendentityrecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests {

}
```


### DataAwsccComprehendEntityRecognizerInputDataConfigDocuments <a name="DataAwsccComprehendEntityRecognizerInputDataConfigDocuments" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocuments.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizer"

&dataawscccomprehendentityrecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocuments {

}
```


### DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct <a name="DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizer"

&dataawscccomprehendentityrecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct {

}
```


### DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes <a name="DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizer"

&dataawscccomprehendentityrecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes {

}
```


### DataAwsccComprehendEntityRecognizerTags <a name="DataAwsccComprehendEntityRecognizerTags" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizer"

&dataawscccomprehendentityrecognizer.DataAwsccComprehendEntityRecognizerTags {

}
```


### DataAwsccComprehendEntityRecognizerVpcConfig <a name="DataAwsccComprehendEntityRecognizerVpcConfig" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizer"

&dataawscccomprehendentityrecognizer.DataAwsccComprehendEntityRecognizerVpcConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference <a name="DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizer"

dataawscccomprehendentityrecognizer.NewDataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.testS3Uri">TestS3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations">DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `TestS3Uri`<sup>Required</sup> <a name="TestS3Uri" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.testS3Uri"></a>

```go
func TestS3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations">DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations</a>

---


### DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList <a name="DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizer"

dataawscccomprehendentityrecognizer.NewDataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.get"></a>

```go
func Get(index *f64) DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference <a name="DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizer"

dataawscccomprehendentityrecognizer.NewDataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3Uri">AnnotationDataS3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.attributeNames">AttributeNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.documentType">DocumentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3Uri">SourceDocumentsS3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.split">Split</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests">DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnnotationDataS3Uri`<sup>Required</sup> <a name="AnnotationDataS3Uri" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3Uri"></a>

```go
func AnnotationDataS3Uri() *string
```

- *Type:* *string

---

##### `AttributeNames`<sup>Required</sup> <a name="AttributeNames" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.attributeNames"></a>

```go
func AttributeNames() *[]*string
```

- *Type:* *[]*string

---

##### `DocumentType`<sup>Required</sup> <a name="DocumentType" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.documentType"></a>

```go
func DocumentType() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `SourceDocumentsS3Uri`<sup>Required</sup> <a name="SourceDocumentsS3Uri" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3Uri"></a>

```go
func SourceDocumentsS3Uri() *string
```

- *Type:* *string

---

##### `Split`<sup>Required</sup> <a name="Split" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.split"></a>

```go
func Split() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests">DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>

---


### DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference <a name="DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizer"

dataawscccomprehendentityrecognizer.NewDataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.inputFormat">InputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.testS3Uri">TestS3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocuments">DataAwsccComprehendEntityRecognizerInputDataConfigDocuments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputFormat`<sup>Required</sup> <a name="InputFormat" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.inputFormat"></a>

```go
func InputFormat() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `TestS3Uri`<sup>Required</sup> <a name="TestS3Uri" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.testS3Uri"></a>

```go
func TestS3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccComprehendEntityRecognizerInputDataConfigDocuments
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocuments">DataAwsccComprehendEntityRecognizerInputDataConfigDocuments</a>

---


### DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference <a name="DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizer"

dataawscccomprehendentityrecognizer.NewDataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct">DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct">DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct</a>

---


### DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList <a name="DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizer"

dataawscccomprehendentityrecognizer.NewDataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.get"></a>

```go
func Get(index *f64) DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference <a name="DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizer"

dataawscccomprehendentityrecognizer.NewDataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes">DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes">DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes</a>

---


### DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference <a name="DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizer"

dataawscccomprehendentityrecognizer.NewDataAwsccComprehendEntityRecognizerInputDataConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.annotations">Annotations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference">DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.augmentedManifests">AugmentedManifests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList">DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.dataFormat">DataFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.documents">Documents</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference">DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.entityList">EntityList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference">DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.entityTypes">EntityTypes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList">DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfig">DataAwsccComprehendEntityRecognizerInputDataConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.annotations"></a>

```go
func Annotations() DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference">DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference</a>

---

##### `AugmentedManifests`<sup>Required</sup> <a name="AugmentedManifests" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.augmentedManifests"></a>

```go
func AugmentedManifests() DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList">DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList</a>

---

##### `DataFormat`<sup>Required</sup> <a name="DataFormat" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.dataFormat"></a>

```go
func DataFormat() *string
```

- *Type:* *string

---

##### `Documents`<sup>Required</sup> <a name="Documents" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.documents"></a>

```go
func Documents() DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference">DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference</a>

---

##### `EntityList`<sup>Required</sup> <a name="EntityList" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.entityList"></a>

```go
func EntityList() DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference">DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference</a>

---

##### `EntityTypes`<sup>Required</sup> <a name="EntityTypes" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.entityTypes"></a>

```go
func EntityTypes() DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList">DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccComprehendEntityRecognizerInputDataConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfig">DataAwsccComprehendEntityRecognizerInputDataConfig</a>

---


### DataAwsccComprehendEntityRecognizerTagsList <a name="DataAwsccComprehendEntityRecognizerTagsList" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizer"

dataawscccomprehendentityrecognizer.NewDataAwsccComprehendEntityRecognizerTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccComprehendEntityRecognizerTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.get"></a>

```go
func Get(index *f64) DataAwsccComprehendEntityRecognizerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccComprehendEntityRecognizerTagsOutputReference <a name="DataAwsccComprehendEntityRecognizerTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizer"

dataawscccomprehendentityrecognizer.NewDataAwsccComprehendEntityRecognizerTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccComprehendEntityRecognizerTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTags">DataAwsccComprehendEntityRecognizerTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccComprehendEntityRecognizerTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTags">DataAwsccComprehendEntityRecognizerTags</a>

---


### DataAwsccComprehendEntityRecognizerVpcConfigOutputReference <a name="DataAwsccComprehendEntityRecognizerVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizer"

dataawscccomprehendentityrecognizer.NewDataAwsccComprehendEntityRecognizerVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccComprehendEntityRecognizerVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfig">DataAwsccComprehendEntityRecognizerVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccComprehendEntityRecognizerVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfig">DataAwsccComprehendEntityRecognizerVpcConfig</a>

---



