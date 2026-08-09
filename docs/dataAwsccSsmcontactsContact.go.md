# `dataAwsccSsmcontactsContact` Submodule <a name="`dataAwsccSsmcontactsContact` Submodule" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSsmcontactsContact <a name="DataAwsccSsmcontactsContact" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ssmcontacts_contact awscc_ssmcontacts_contact}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmcontactscontact"

dataawsccssmcontactscontact.NewDataAwsccSsmcontactsContact(scope Construct, id *string, config DataAwsccSsmcontactsContactConfig) DataAwsccSsmcontactsContact
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactConfig">DataAwsccSsmcontactsContactConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactConfig">DataAwsccSsmcontactsContactConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSsmcontactsContact resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmcontactscontact"

dataawsccssmcontactscontact.DataAwsccSsmcontactsContact_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmcontactscontact"

dataawsccssmcontactscontact.DataAwsccSsmcontactsContact_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmcontactscontact"

dataawsccssmcontactscontact.DataAwsccSsmcontactsContact_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmcontactscontact"

dataawsccssmcontactscontact.DataAwsccSsmcontactsContact_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccSsmcontactsContact resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccSsmcontactsContact to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccSsmcontactsContact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ssmcontacts_contact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSsmcontactsContact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.plan">Plan</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanList">DataAwsccSsmcontactsContactPlanList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsList">DataAwsccSsmcontactsContactTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.plan"></a>

```go
func Plan() DataAwsccSsmcontactsContactPlanList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanList">DataAwsccSsmcontactsContactPlanList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.tags"></a>

```go
func Tags() DataAwsccSsmcontactsContactTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsList">DataAwsccSsmcontactsContactTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContact.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSsmcontactsContactConfig <a name="DataAwsccSsmcontactsContactConfig" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmcontactscontact"

&dataawsccssmcontactscontact.DataAwsccSsmcontactsContactConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ssmcontacts_contact#id DataAwsccSsmcontactsContact#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSsmcontactsContactPlan <a name="DataAwsccSsmcontactsContactPlan" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlan.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmcontactscontact"

&dataawsccssmcontactscontact.DataAwsccSsmcontactsContactPlan {

}
```


### DataAwsccSsmcontactsContactPlanTargets <a name="DataAwsccSsmcontactsContactPlanTargets" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmcontactscontact"

&dataawsccssmcontactscontact.DataAwsccSsmcontactsContactPlanTargets {

}
```


### DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfo <a name="DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfo" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmcontactscontact"

&dataawsccssmcontactscontact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfo {

}
```


### DataAwsccSsmcontactsContactPlanTargetsContactTargetInfo <a name="DataAwsccSsmcontactsContactPlanTargetsContactTargetInfo" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmcontactscontact"

&dataawsccssmcontactscontact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfo {

}
```


### DataAwsccSsmcontactsContactTags <a name="DataAwsccSsmcontactsContactTags" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmcontactscontact"

&dataawsccssmcontactscontact.DataAwsccSsmcontactsContactTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSsmcontactsContactPlanList <a name="DataAwsccSsmcontactsContactPlanList" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmcontactscontact"

dataawsccssmcontactscontact.NewDataAwsccSsmcontactsContactPlanList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSsmcontactsContactPlanList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanList.get"></a>

```go
func Get(index *f64) DataAwsccSsmcontactsContactPlanOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSsmcontactsContactPlanOutputReference <a name="DataAwsccSsmcontactsContactPlanOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmcontactscontact"

dataawsccssmcontactscontact.NewDataAwsccSsmcontactsContactPlanOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSsmcontactsContactPlanOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.property.durationInMinutes">DurationInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.property.rotationIds">RotationIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsList">DataAwsccSsmcontactsContactPlanTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlan">DataAwsccSsmcontactsContactPlan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInMinutes`<sup>Required</sup> <a name="DurationInMinutes" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.property.durationInMinutes"></a>

```go
func DurationInMinutes() *f64
```

- *Type:* *f64

---

##### `RotationIds`<sup>Required</sup> <a name="RotationIds" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.property.rotationIds"></a>

```go
func RotationIds() *[]*string
```

- *Type:* *[]*string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.property.targets"></a>

```go
func Targets() DataAwsccSsmcontactsContactPlanTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsList">DataAwsccSsmcontactsContactPlanTargetsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSsmcontactsContactPlan
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlan">DataAwsccSsmcontactsContactPlan</a>

---


### DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference <a name="DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmcontactscontact"

dataawsccssmcontactscontact.NewDataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.channelId">ChannelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutes">RetryIntervalInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfo">DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.channelId"></a>

```go
func ChannelId() *string
```

- *Type:* *string

---

##### `RetryIntervalInMinutes`<sup>Required</sup> <a name="RetryIntervalInMinutes" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutes"></a>

```go
func RetryIntervalInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfo">DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfo</a>

---


### DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference <a name="DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmcontactscontact"

dataawsccssmcontactscontact.NewDataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.contactId">ContactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.isEssential">IsEssential</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfo">DataAwsccSsmcontactsContactPlanTargetsContactTargetInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContactId`<sup>Required</sup> <a name="ContactId" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.contactId"></a>

```go
func ContactId() *string
```

- *Type:* *string

---

##### `IsEssential`<sup>Required</sup> <a name="IsEssential" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.isEssential"></a>

```go
func IsEssential() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSsmcontactsContactPlanTargetsContactTargetInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfo">DataAwsccSsmcontactsContactPlanTargetsContactTargetInfo</a>

---


### DataAwsccSsmcontactsContactPlanTargetsList <a name="DataAwsccSsmcontactsContactPlanTargetsList" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmcontactscontact"

dataawsccssmcontactscontact.NewDataAwsccSsmcontactsContactPlanTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSsmcontactsContactPlanTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsList.get"></a>

```go
func Get(index *f64) DataAwsccSsmcontactsContactPlanTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSsmcontactsContactPlanTargetsOutputReference <a name="DataAwsccSsmcontactsContactPlanTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmcontactscontact"

dataawsccssmcontactscontact.NewDataAwsccSsmcontactsContactPlanTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSsmcontactsContactPlanTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.property.channelTargetInfo">ChannelTargetInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference">DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.property.contactTargetInfo">ContactTargetInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference">DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargets">DataAwsccSsmcontactsContactPlanTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChannelTargetInfo`<sup>Required</sup> <a name="ChannelTargetInfo" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.property.channelTargetInfo"></a>

```go
func ChannelTargetInfo() DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference">DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoOutputReference</a>

---

##### `ContactTargetInfo`<sup>Required</sup> <a name="ContactTargetInfo" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.property.contactTargetInfo"></a>

```go
func ContactTargetInfo() DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference">DataAwsccSsmcontactsContactPlanTargetsContactTargetInfoOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSsmcontactsContactPlanTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactPlanTargets">DataAwsccSsmcontactsContactPlanTargets</a>

---


### DataAwsccSsmcontactsContactTagsList <a name="DataAwsccSsmcontactsContactTagsList" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmcontactscontact"

dataawsccssmcontactscontact.NewDataAwsccSsmcontactsContactTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSsmcontactsContactTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsList.get"></a>

```go
func Get(index *f64) DataAwsccSsmcontactsContactTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSsmcontactsContactTagsOutputReference <a name="DataAwsccSsmcontactsContactTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmcontactscontact"

dataawsccssmcontactscontact.NewDataAwsccSsmcontactsContactTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSsmcontactsContactTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTags">DataAwsccSsmcontactsContactTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSsmcontactsContactTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmcontactsContact.DataAwsccSsmcontactsContactTags">DataAwsccSsmcontactsContactTags</a>

---



