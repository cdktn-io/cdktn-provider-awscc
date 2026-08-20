# `dataAwsccCustomerprofilesCalculatedAttributeDefinition` Submodule <a name="`dataAwsccCustomerprofilesCalculatedAttributeDefinition` Submodule" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCustomerprofilesCalculatedAttributeDefinition <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinition" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/customerprofiles_calculated_attribute_definition awscc_customerprofiles_calculated_attribute_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesCalculatedAttributeDefinition } from '@cdktn/provider-awscc'

new dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition(scope: Construct, id: string, config: DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCustomerprofilesCalculatedAttributeDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.isConstruct"></a>

```typescript
import { dataAwsccCustomerprofilesCalculatedAttributeDefinition } from '@cdktn/provider-awscc'

dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.isTerraformElement"></a>

```typescript
import { dataAwsccCustomerprofilesCalculatedAttributeDefinition } from '@cdktn/provider-awscc'

dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.isTerraformDataSource"></a>

```typescript
import { dataAwsccCustomerprofilesCalculatedAttributeDefinition } from '@cdktn/provider-awscc'

dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.generateConfigForImport"></a>

```typescript
import { dataAwsccCustomerprofilesCalculatedAttributeDefinition } from '@cdktn/provider-awscc'

dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCustomerprofilesCalculatedAttributeDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCustomerprofilesCalculatedAttributeDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCustomerprofilesCalculatedAttributeDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/customerprofiles_calculated_attribute_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCustomerprofilesCalculatedAttributeDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.attributeDetails">attributeDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference">DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.calculatedAttributeName">calculatedAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.readiness">readiness</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference">DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList">DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.useHistoricalData">useHistoricalData</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `attributeDetails`<sup>Required</sup> <a name="attributeDetails" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.attributeDetails"></a>

```typescript
public readonly attributeDetails: DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference">DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference</a>

---

##### `calculatedAttributeName`<sup>Required</sup> <a name="calculatedAttributeName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.calculatedAttributeName"></a>

```typescript
public readonly calculatedAttributeName: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.conditions"></a>

```typescript
public readonly conditions: DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `readiness`<sup>Required</sup> <a name="readiness" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.readiness"></a>

```typescript
public readonly readiness: DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference">DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference</a>

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.tags"></a>

```typescript
public readonly tags: DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList">DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList</a>

---

##### `useHistoricalData`<sup>Required</sup> <a name="useHistoricalData" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.useHistoricalData"></a>

```typescript
public readonly useHistoricalData: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetails <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetails" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetails.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesCalculatedAttributeDefinition } from '@cdktn/provider-awscc'

const dataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetails: dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetails = { ... }
```


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesCalculatedAttributeDefinition } from '@cdktn/provider-awscc'

const dataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes: dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes = { ... }
```


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditions <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditions" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditions.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesCalculatedAttributeDefinition } from '@cdktn/provider-awscc'

const dataAwsccCustomerprofilesCalculatedAttributeDefinitionConditions: dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditions = { ... }
```


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRange <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRange" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRange.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesCalculatedAttributeDefinition } from '@cdktn/provider-awscc'

const dataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRange: dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRange = { ... }
```


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesCalculatedAttributeDefinition } from '@cdktn/provider-awscc'

const dataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange: dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange = { ... }
```


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThreshold <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThreshold" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThreshold.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesCalculatedAttributeDefinition } from '@cdktn/provider-awscc'

const dataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThreshold: dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThreshold = { ... }
```


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesCalculatedAttributeDefinition } from '@cdktn/provider-awscc'

const dataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig: dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/customerprofiles_calculated_attribute_definition#id DataAwsccCustomerprofilesCalculatedAttributeDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadiness <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadiness" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadiness"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadiness.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesCalculatedAttributeDefinition } from '@cdktn/provider-awscc'

const dataAwsccCustomerprofilesCalculatedAttributeDefinitionReadiness: dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadiness = { ... }
```


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionTags <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionTags" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTags.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesCalculatedAttributeDefinition } from '@cdktn/provider-awscc'

const dataAwsccCustomerprofilesCalculatedAttributeDefinitionTags: dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesCalculatedAttributeDefinition } from '@cdktn/provider-awscc'

new dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.get"></a>

```typescript
public get(index: number): DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesCalculatedAttributeDefinition } from '@cdktn/provider-awscc'

new dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a>

---


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesCalculatedAttributeDefinition } from '@cdktn/provider-awscc'

new dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList">DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetails">DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.attributes"></a>

```typescript
public readonly attributes: DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList">DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList</a>

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetails">DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a>

---


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesCalculatedAttributeDefinition } from '@cdktn/provider-awscc'

new dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.objectCount">objectCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.range">range</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.threshold">threshold</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditions">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectCount`<sup>Required</sup> <a name="objectCount" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.objectCount"></a>

```typescript
public readonly objectCount: number;
```

- *Type:* number

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.range"></a>

```typescript
public readonly range: DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference</a>

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.threshold"></a>

```typescript
public readonly threshold: DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditions">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditions</a>

---


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesCalculatedAttributeDefinition } from '@cdktn/provider-awscc'

new dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampSource">timestampSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.valueRange">valueRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRange">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

---

##### `timestampSource`<sup>Required</sup> <a name="timestampSource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampSource"></a>

```typescript
public readonly timestampSource: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `valueRange`<sup>Required</sup> <a name="valueRange" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.valueRange"></a>

```typescript
public readonly valueRange: DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRange">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRange</a>

---


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesCalculatedAttributeDefinition } from '@cdktn/provider-awscc'

new dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.end">end</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.start">start</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.end"></a>

```typescript
public readonly end: number;
```

- *Type:* number

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.start"></a>

```typescript
public readonly start: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange</a>

---


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesCalculatedAttributeDefinition } from '@cdktn/provider-awscc'

new dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThreshold">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThreshold;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThreshold">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThreshold</a>

---


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesCalculatedAttributeDefinition } from '@cdktn/provider-awscc'

new dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.progressPercentage">progressPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadiness">DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadiness</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `progressPercentage`<sup>Required</sup> <a name="progressPercentage" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.progressPercentage"></a>

```typescript
public readonly progressPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadiness;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadiness">DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadiness</a>

---


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesCalculatedAttributeDefinition } from '@cdktn/provider-awscc'

new dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.get"></a>

```typescript
public get(index: number): DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesCalculatedAttributeDefinition } from '@cdktn/provider-awscc'

new dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTags">DataAwsccCustomerprofilesCalculatedAttributeDefinitionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCustomerprofilesCalculatedAttributeDefinitionTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTags">DataAwsccCustomerprofilesCalculatedAttributeDefinitionTags</a>

---



