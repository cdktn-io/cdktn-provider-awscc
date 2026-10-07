# `dataAwsccWisdomContentAssociation` Submodule <a name="`dataAwsccWisdomContentAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWisdomContentAssociation <a name="DataAwsccWisdomContentAssociation" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/wisdom_content_association awscc_wisdom_content_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.Initializer"></a>

```typescript
import { dataAwsccWisdomContentAssociation } from '@cdktn/provider-awscc'

new dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation(scope: Construct, id: string, config: DataAwsccWisdomContentAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationConfig">DataAwsccWisdomContentAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationConfig">DataAwsccWisdomContentAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccWisdomContentAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.isConstruct"></a>

```typescript
import { dataAwsccWisdomContentAssociation } from '@cdktn/provider-awscc'

dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.isTerraformElement"></a>

```typescript
import { dataAwsccWisdomContentAssociation } from '@cdktn/provider-awscc'

dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.isTerraformDataSource"></a>

```typescript
import { dataAwsccWisdomContentAssociation } from '@cdktn/provider-awscc'

dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.generateConfigForImport"></a>

```typescript
import { dataAwsccWisdomContentAssociation } from '@cdktn/provider-awscc'

dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccWisdomContentAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccWisdomContentAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccWisdomContentAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/wisdom_content_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWisdomContentAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.association">association</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference">DataAwsccWisdomContentAssociationAssociationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.associationType">associationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.contentArn">contentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.contentAssociationArn">contentAssociationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.contentAssociationId">contentAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.contentId">contentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.knowledgeBaseArn">knowledgeBaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsList">DataAwsccWisdomContentAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `association`<sup>Required</sup> <a name="association" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.association"></a>

```typescript
public readonly association: DataAwsccWisdomContentAssociationAssociationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference">DataAwsccWisdomContentAssociationAssociationOutputReference</a>

---

##### `associationType`<sup>Required</sup> <a name="associationType" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.associationType"></a>

```typescript
public readonly associationType: string;
```

- *Type:* string

---

##### `contentArn`<sup>Required</sup> <a name="contentArn" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.contentArn"></a>

```typescript
public readonly contentArn: string;
```

- *Type:* string

---

##### `contentAssociationArn`<sup>Required</sup> <a name="contentAssociationArn" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.contentAssociationArn"></a>

```typescript
public readonly contentAssociationArn: string;
```

- *Type:* string

---

##### `contentAssociationId`<sup>Required</sup> <a name="contentAssociationId" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.contentAssociationId"></a>

```typescript
public readonly contentAssociationId: string;
```

- *Type:* string

---

##### `contentId`<sup>Required</sup> <a name="contentId" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.contentId"></a>

```typescript
public readonly contentId: string;
```

- *Type:* string

---

##### `knowledgeBaseArn`<sup>Required</sup> <a name="knowledgeBaseArn" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.knowledgeBaseArn"></a>

```typescript
public readonly knowledgeBaseArn: string;
```

- *Type:* string

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.knowledgeBaseId"></a>

```typescript
public readonly knowledgeBaseId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.tags"></a>

```typescript
public readonly tags: DataAwsccWisdomContentAssociationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsList">DataAwsccWisdomContentAssociationTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWisdomContentAssociationAssociation <a name="DataAwsccWisdomContentAssociationAssociation" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociation.Initializer"></a>

```typescript
import { dataAwsccWisdomContentAssociation } from '@cdktn/provider-awscc'

const dataAwsccWisdomContentAssociationAssociation: dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociation = { ... }
```


### DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociation <a name="DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociation" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociation.Initializer"></a>

```typescript
import { dataAwsccWisdomContentAssociation } from '@cdktn/provider-awscc'

const dataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociation: dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociation = { ... }
```


### DataAwsccWisdomContentAssociationConfig <a name="DataAwsccWisdomContentAssociationConfig" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationConfig.Initializer"></a>

```typescript
import { dataAwsccWisdomContentAssociation } from '@cdktn/provider-awscc'

const dataAwsccWisdomContentAssociationConfig: dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/wisdom_content_association#id DataAwsccWisdomContentAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWisdomContentAssociationTags <a name="DataAwsccWisdomContentAssociationTags" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTags.Initializer"></a>

```typescript
import { dataAwsccWisdomContentAssociation } from '@cdktn/provider-awscc'

const dataAwsccWisdomContentAssociationTags: dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference <a name="DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.Initializer"></a>

```typescript
import { dataAwsccWisdomContentAssociation } from '@cdktn/provider-awscc'

new dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.property.flowId">flowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociation">DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.property.flowId"></a>

```typescript
public readonly flowId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociation">DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociation</a>

---


### DataAwsccWisdomContentAssociationAssociationOutputReference <a name="DataAwsccWisdomContentAssociationAssociationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.Initializer"></a>

```typescript
import { dataAwsccWisdomContentAssociation } from '@cdktn/provider-awscc'

new dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.property.amazonConnectGuideAssociation">amazonConnectGuideAssociation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference">DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociation">DataAwsccWisdomContentAssociationAssociation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amazonConnectGuideAssociation`<sup>Required</sup> <a name="amazonConnectGuideAssociation" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.property.amazonConnectGuideAssociation"></a>

```typescript
public readonly amazonConnectGuideAssociation: DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference">DataAwsccWisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWisdomContentAssociationAssociation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationAssociation">DataAwsccWisdomContentAssociationAssociation</a>

---


### DataAwsccWisdomContentAssociationTagsList <a name="DataAwsccWisdomContentAssociationTagsList" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsList.Initializer"></a>

```typescript
import { dataAwsccWisdomContentAssociation } from '@cdktn/provider-awscc'

new dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccWisdomContentAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccWisdomContentAssociationTagsOutputReference <a name="DataAwsccWisdomContentAssociationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccWisdomContentAssociation } from '@cdktn/provider-awscc'

new dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTags">DataAwsccWisdomContentAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWisdomContentAssociationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomContentAssociation.DataAwsccWisdomContentAssociationTags">DataAwsccWisdomContentAssociationTags</a>

---



