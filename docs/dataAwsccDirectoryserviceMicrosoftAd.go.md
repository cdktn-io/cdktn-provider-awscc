# `dataAwsccDirectoryserviceMicrosoftAd` Submodule <a name="`dataAwsccDirectoryserviceMicrosoftAd` Submodule" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDirectoryserviceMicrosoftAd <a name="DataAwsccDirectoryserviceMicrosoftAd" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/directoryservice_microsoft_ad awscc_directoryservice_microsoft_ad}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdirectoryservicemicrosoftad"

dataawsccdirectoryservicemicrosoftad.NewDataAwsccDirectoryserviceMicrosoftAd(scope Construct, id *string, config DataAwsccDirectoryserviceMicrosoftAdConfig) DataAwsccDirectoryserviceMicrosoftAd
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig">DataAwsccDirectoryserviceMicrosoftAdConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig">DataAwsccDirectoryserviceMicrosoftAdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDirectoryserviceMicrosoftAd resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdirectoryservicemicrosoftad"

dataawsccdirectoryservicemicrosoftad.DataAwsccDirectoryserviceMicrosoftAd_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdirectoryservicemicrosoftad"

dataawsccdirectoryservicemicrosoftad.DataAwsccDirectoryserviceMicrosoftAd_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdirectoryservicemicrosoftad"

dataawsccdirectoryservicemicrosoftad.DataAwsccDirectoryserviceMicrosoftAd_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdirectoryservicemicrosoftad"

dataawsccdirectoryservicemicrosoftad.DataAwsccDirectoryserviceMicrosoftAd_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccDirectoryserviceMicrosoftAd resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccDirectoryserviceMicrosoftAd to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccDirectoryserviceMicrosoftAd that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/directoryservice_microsoft_ad#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDirectoryserviceMicrosoftAd to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.createAlias">CreateAlias</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.directoryId">DirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.dnsIpAddresses">DnsIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.edition">Edition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.enableSso">EnableSso</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.shortName">ShortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.vpcSettings">VpcSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference">DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `CreateAlias`<sup>Required</sup> <a name="CreateAlias" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.createAlias"></a>

```go
func CreateAlias() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.directoryId"></a>

```go
func DirectoryId() *string
```

- *Type:* *string

---

##### `DnsIpAddresses`<sup>Required</sup> <a name="DnsIpAddresses" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.dnsIpAddresses"></a>

```go
func DnsIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.edition"></a>

```go
func Edition() *string
```

- *Type:* *string

---

##### `EnableSso`<sup>Required</sup> <a name="EnableSso" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.enableSso"></a>

```go
func EnableSso() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `ShortName`<sup>Required</sup> <a name="ShortName" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.shortName"></a>

```go
func ShortName() *string
```

- *Type:* *string

---

##### `VpcSettings`<sup>Required</sup> <a name="VpcSettings" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.vpcSettings"></a>

```go
func VpcSettings() DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference">DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDirectoryserviceMicrosoftAdConfig <a name="DataAwsccDirectoryserviceMicrosoftAdConfig" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdirectoryservicemicrosoftad"

&dataawsccdirectoryservicemicrosoftad.DataAwsccDirectoryserviceMicrosoftAdConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/directoryservice_microsoft_ad#id DataAwsccDirectoryserviceMicrosoftAd#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDirectoryserviceMicrosoftAdVpcSettings <a name="DataAwsccDirectoryserviceMicrosoftAdVpcSettings" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdirectoryservicemicrosoftad"

&dataawsccdirectoryservicemicrosoftad.DataAwsccDirectoryserviceMicrosoftAdVpcSettings {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference <a name="DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdirectoryservicemicrosoftad"

dataawsccdirectoryservicemicrosoftad.NewDataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettings">DataAwsccDirectoryserviceMicrosoftAdVpcSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDirectoryserviceMicrosoftAdVpcSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettings">DataAwsccDirectoryserviceMicrosoftAdVpcSettings</a>

---



