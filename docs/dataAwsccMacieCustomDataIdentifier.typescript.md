# `dataAwsccMacieCustomDataIdentifier` Submodule <a name="`dataAwsccMacieCustomDataIdentifier` Submodule" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMacieCustomDataIdentifier <a name="DataAwsccMacieCustomDataIdentifier" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/macie_custom_data_identifier awscc_macie_custom_data_identifier}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.Initializer"></a>

```typescript
import { dataAwsccMacieCustomDataIdentifier } from '@cdktn/provider-awscc'

new dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier(scope: Construct, id: string, config: DataAwsccMacieCustomDataIdentifierConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierConfig">DataAwsccMacieCustomDataIdentifierConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierConfig">DataAwsccMacieCustomDataIdentifierConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMacieCustomDataIdentifier resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.isConstruct"></a>

```typescript
import { dataAwsccMacieCustomDataIdentifier } from '@cdktn/provider-awscc'

dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.isTerraformElement"></a>

```typescript
import { dataAwsccMacieCustomDataIdentifier } from '@cdktn/provider-awscc'

dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.isTerraformDataSource"></a>

```typescript
import { dataAwsccMacieCustomDataIdentifier } from '@cdktn/provider-awscc'

dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.generateConfigForImport"></a>

```typescript
import { dataAwsccMacieCustomDataIdentifier } from '@cdktn/provider-awscc'

dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccMacieCustomDataIdentifier resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMacieCustomDataIdentifier to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMacieCustomDataIdentifier that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/macie_custom_data_identifier#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMacieCustomDataIdentifier to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.customDataIdentifierId">customDataIdentifierId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.ignoreWords">ignoreWords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.keywords">keywords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.maximumMatchDistance">maximumMatchDistance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsList">DataAwsccMacieCustomDataIdentifierTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `customDataIdentifierId`<sup>Required</sup> <a name="customDataIdentifierId" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.customDataIdentifierId"></a>

```typescript
public readonly customDataIdentifierId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ignoreWords`<sup>Required</sup> <a name="ignoreWords" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.ignoreWords"></a>

```typescript
public readonly ignoreWords: string[];
```

- *Type:* string[]

---

##### `keywords`<sup>Required</sup> <a name="keywords" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

---

##### `maximumMatchDistance`<sup>Required</sup> <a name="maximumMatchDistance" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.maximumMatchDistance"></a>

```typescript
public readonly maximumMatchDistance: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.tags"></a>

```typescript
public readonly tags: DataAwsccMacieCustomDataIdentifierTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsList">DataAwsccMacieCustomDataIdentifierTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifier.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMacieCustomDataIdentifierConfig <a name="DataAwsccMacieCustomDataIdentifierConfig" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierConfig.Initializer"></a>

```typescript
import { dataAwsccMacieCustomDataIdentifier } from '@cdktn/provider-awscc'

const dataAwsccMacieCustomDataIdentifierConfig: dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/macie_custom_data_identifier#id DataAwsccMacieCustomDataIdentifier#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMacieCustomDataIdentifierTags <a name="DataAwsccMacieCustomDataIdentifierTags" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTags.Initializer"></a>

```typescript
import { dataAwsccMacieCustomDataIdentifier } from '@cdktn/provider-awscc'

const dataAwsccMacieCustomDataIdentifierTags: dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMacieCustomDataIdentifierTagsList <a name="DataAwsccMacieCustomDataIdentifierTagsList" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsList.Initializer"></a>

```typescript
import { dataAwsccMacieCustomDataIdentifier } from '@cdktn/provider-awscc'

new dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsList.get"></a>

```typescript
public get(index: number): DataAwsccMacieCustomDataIdentifierTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMacieCustomDataIdentifierTagsOutputReference <a name="DataAwsccMacieCustomDataIdentifierTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMacieCustomDataIdentifier } from '@cdktn/provider-awscc'

new dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTags">DataAwsccMacieCustomDataIdentifierTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMacieCustomDataIdentifierTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifier.DataAwsccMacieCustomDataIdentifierTags">DataAwsccMacieCustomDataIdentifierTags</a>

---



